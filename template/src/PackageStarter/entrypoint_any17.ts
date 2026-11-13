import type {
  UmbEntryPointOnInit,
  UmbEntryPointOnUnload,
} from "@umbraco-cms/backoffice/extension-api";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";
import { client } from "../api/client.gen.js";

// load up the manifests here
export const onInit: UmbEntryPointOnInit = async (host, _extensionRegistry) => {
  // Wire the generated API client into the backoffice auth context.
  // The framework awaits onInit, so resolving the context here ensures the
  // client is fully configured before any element in this extension can use it.
  const authContext = await host.getContext(UMB_AUTH_CONTEXT);
  if (!authContext) {
    console.warn("UMB_AUTH_CONTEXT not available — extension API client will not be authenticated");
    return;
  }

  // configureClient() sets baseUrl + credentials, attaches the auth callback
  // (cookie-based, with automatic token refresh) and binds the default
  // response interceptors (401 retry, error notifications, etc.).
  // It was added in Umbraco 17.3. This package targets 17.0.0, so on a site
  // that does not have it yet the client is configured by hand instead
  // (without the default response interceptors).
  const auth = authContext as unknown as {
    configureClient?: (c: typeof client) => void;
    getOpenApiConfiguration: () => {
      base: string;
      credentials: RequestCredentials;
      token: () => Promise<string | undefined>;
    };
  };
  if (typeof auth.configureClient === "function") {
    auth.configureClient(client);
  } else {
    const config = auth.getOpenApiConfiguration();
    client.setConfig({
      auth: config.token,
      baseUrl: config.base,
      credentials: config.credentials,
    });
  }

  console.log("Hello from my extension 🎉");
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
  console.log("Goodbye from my extension 👋");
};
