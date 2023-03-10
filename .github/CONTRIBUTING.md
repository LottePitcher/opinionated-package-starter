# Contributing Guidelines

Contributions to this template are most welcome! 

If you have an idea for a feature to add to this template then please raise a feature request first.

## Working locally 

To work on this template:

1. Fork and clone this repository

2. If you already have the nuget package for the template installed, please uninstall it:

`dotnet new uninstall Umbraco.Community.Templates.PackageStarter`

3. Install the template from your local directory, e.g. 

`dotnet new install c:\source\opinionated-package-starter\template`

Please note that:

- Locally installed templates must be uninstalled using the full path:

`dotnet new uninstall c:\source\opinionated-package-starter\template`

- If you are changing the template you do not need to uninstall and reinstall each time UNLESS you are changing the parameters (symbols) in `\template\template.config/template.json`.