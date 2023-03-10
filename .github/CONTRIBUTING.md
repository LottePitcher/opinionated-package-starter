# Contributing Guidelines

Contributions to this template are most welcome! 

If you have an idea for a feature to add to this template then please raise a feature request first.

## Working locally 

To develop this template you should install it individually, by pointing the install command at a folder. For example: 

```
dotnet new install c:\source\opinionated-package-starter\template
```

Locally installed templates must be uninstalled using the full path:

```
dotnet new uninstall c:\source\opinionated-package-starter\template
```

If you are changing the template you do not need to uninstall and reinstall each time UNLESS you are changing the parameters (symbols) in `\template.template.config/template.json`.