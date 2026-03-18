#!/usr/bin/env node
// setup.mjs — cross-platform alternative to setup.cmd
// Works on Linux, macOS, and Windows (anywhere Node.js is available).
// Run from the repo root: node setup.mjs
//
// This file can now be deleted!
// It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

import { execSync } from 'child_process';
import { rmSync, renameSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname);
const src = resolve(root, 'src');

function run(cmd, cwd = root) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

// Set up git
console.log('\nSetting up git...');
run('git init');
run('git branch -M main');
run('git remote add origin https://github.com/GITHUB_USERNAME/GITHUB_REPOSITORY.git');

// Ensure latest Umbraco templates
console.log('\nInstalling latest Umbraco templates...');
run('dotnet new install Umbraco.Templates --force');

// Use the umbraco-extension dotnet template to add the package project
console.log('\nScaffolding package project...');
run('dotnet new umbraco-extension -n "PackageStarter" --site-domain "https://localhost:44300" --include-example --allow-scripts Yes', src);

// Replace package .csproj with the one from the template (has extra NuGet publish config)
console.log('\nConfiguring package project for NuGet...');
rmSync(resolve(src, 'PackageStarter', 'PackageStarter.csproj'));
renameSync(
  resolve(src, 'PackageStarter', 'PackageStarter_nuget.csproj'),
  resolve(src, 'PackageStarter', 'PackageStarter.csproj')
);

// Add project to solution and wire up reference from test site
console.log('\nWiring up solution...');
run('dotnet sln add "PackageStarter"', src);
run('dotnet add "PackageStarter.TestSite/PackageStarter.TestSite.csproj" reference "PackageStarter/PackageStarter.csproj"', src);

console.log('\nAll done!');
