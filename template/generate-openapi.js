import chalk from "chalk";
import { createClient, defaultPlugins } from "@hey-api/openapi-ts";
import https from "https";
import { getPort } from "worktree-dev-port";

// Start notifying user we are generating the TypeScript client
console.log(chalk.green("Generating OpenAPI client..."));

const documentName = process.argv[2];
if (documentName === undefined) {
    console.error(chalk.red(`ERROR: Missing OpenAPI document name`));
    console.error(`Please provide the document name as the first argument -- this is Constants.ApiName in your *ApiComposer.cs`);
    console.error(`Example: node generate-openapi.js yourpackage`);
    process.exit(1);
}

// Get the dev port already assigned to this worktree by Umbraco.Community.WorktreeDevPort
// (https://github.com/mattbrailsford/Umbraco.Community.WorktreeDevPort). The site must already be running.
let port;
try {
    port = getPort();
} catch (error) {
    console.error(chalk.red(`ERROR: ${error.message}`));
    console.error(`Make sure your Umbraco instance is running first`);
    process.exit(1);
}

const openApiPath = `umbraco/openapi/${documentName}.json`;

console.log(`Fetching ${chalk.yellow(`https://127.0.0.1:${port}/${openApiPath}`)}`);

// Fetch the OpenAPI spec over HTTPS using the ASP.NET Core dev cert (self-signed, so skip verification).
// The Host header is pinned to "localhost" (rather than the real 127.0.0.1:<port>) so the server's
// generated OpenAPI doc -- and the client baseUrl hey-api derives from it -- doesn't bake in this
// worktree's own ephemeral port.
const specData = await new Promise((resolve, reject) => {
    https
        .get(
            {
                hostname: "127.0.0.1",
                port,
                path: `/${openApiPath}`,
                rejectUnauthorized: false,
                headers: { Host: "localhost" },
            },
            (res) => {
                if (res.statusCode !== 200) {
                    reject(new Error(`OpenAPI spec returned with a non OK (200) response: ${res.statusCode} ${res.statusMessage}`));
                    res.resume();
                    return;
                }
                let data = "";
                res.setEncoding("utf8");
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => resolve(data));
            }
        )
        .on("error", reject);
});

console.log(`OpenAPI spec fetched successfully`);
console.log(`Calling ${chalk.yellow("hey-api")} to generate TypeScript client`);

await createClient({
    input: JSON.parse(specData),
    output: "src/api",
    plugins: [
        // Spread defaults so future @hey-api/openapi-ts additions come along automatically,
        // but filter out @hey-api/sdk because we override its responseStyle below.
        ...defaultPlugins.filter((plugin) => (typeof plugin === "string" ? plugin : plugin.name) !== "@hey-api/sdk"),
        {
            name: "@hey-api/sdk",
            responseStyle: "fields",
        },
    ],
});

console.log(chalk.green("✓ TypeScript client generated successfully"));
