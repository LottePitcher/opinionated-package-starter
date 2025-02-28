# Using the Template

## Installing the template

`dotnet new install Umbraco.Community.Templates.PackageStarter`

## Using the template

Open a command prompt in a location where you want your new package repository folder to be created. For example, if you are in `c:\source\` and use this template to create a package called 'MyNewPackage' then the template will create the folder `c:\source\MyNewPackage\`.

Before you use the template you will need to have made two decisions:
1. The name of your package, e.g. Contentment (although that name is already taken 😉)
2. The name that you're going to use for the GitHub repository, e.g. umbraco-contentment

To run the template, open a command prompt / terminal window:

`dotnet new umbracopackagestarter -n YourPackageName -an "Your Name" -gu "YourGitHubUsername" -gr "YourGitHubRepoName"`

Parameters:
- `-n` or `--name` : the name of your project/package. This will mean that:
   - The solution file will be: `YourPackageName.sln`
   - A project for the package will be in a folder: `\YourPackageName`
   - A test site for the package will be in a folder: `\YourPackageName.TestSite`
   - The nuget package id will be set as : `Umbraco.Community.YourPackageName`
- `-an` or `--author-name` : the display name of the author, e.g. "Lotte Pitcher", used in license and readme
- `-gu` or `--github-user` : the username of the GitHub user/organisation that will be hosting the repository
- `-gr` or `--github-repo` : the GitHub repository name for the project
- `-pt` or `--package-title` : the title of the package to be used in readme headings and on the Umbraco Marketplace (if omitted defaults to a 'friendlier' version of the `-n` parameter)
- `--no-restore` : if you don't want nuget to restore any referenced nuget packages after the template has run

### Where do I put my files?

Put your files in the package project:

- C# files can go in the root of the project folder, or in sub-folders: that's completely up to you!
- Script and stylesheet files must be put somewhere under `\wwwroot\YourPackageName\`. Remember to add all your script and stylesheet files to the manifest filter (`\YourPackageNameManifestFilter.cs`)

## Pushing to GitHub

- Create a completely empty Github repository (no readme or git ignore file) with the name you used when running the template. Up to you whether it's public or private
- The template has already intialised the git repo and added the GitHub remote so when you're ready, do your first git commit and push 

### Logo

TODO - where to put, and configure .csproj for nuget

## Publishing to nuget / Umbraco Marketplace

Please note that the project has already been configured with the `umbraco-marketplace` tag. This means that the Marketplace will automatically find and index the package once you have published it to nuget.

You can test how things should work/look before publishing as follows:

- Test your nuget package works locally TODO
- Check how nuget will 'see' your package by using nuget Package Explorer, visit https://github.com/NuGetPackageExplorer/NuGetPackageExplorer for installation instructions
- Validate Marketplace configuration from https://marketplace.umbraco.com/validate and the JSON option

Happy? If so, let's get this published!

> **Warning**
> 
> Please make sure you are happy with the nuget package id before you continue. Titles, descriptions can all be changed, but you can't change the id of a nuget package once created, you can only deprecate it and start a new one.

1. Update the version number
   1. Open `src/YourPackageName/YourPackageName.csproj`
   2. Change the `<Version>...</Version>` - I use [Semantic Versioning](https://semver.org/)
2. Add corresponding tag in Git
3. Push to GitHub - a GitHub action should then release the new version to nuget
4. Create a release on GitHub:
   1. On the home page of your repo in GitHub click the 'X tags' link
   2. Your new version should be listed: click the three dots and 'Create Release'

## Improve your package on the Marketplace

There is more information that you can add to the `umbraco-marketplace.json` file in the root of your repository to improve how the package appears on the marketplace.

Check the [instructions on the Marketplace](https://marketplace.umbraco.com/listing) for more information.

Once you've updated the .json file and pushed to GitHub, the Marketplace should reindex and update the package details soon. If things don't look as you expect, use the validation tool.

If you don't want to wait... check instructions for forcing marketplace to update immediately for your package.

## Publishing updates

Is exactly the same 4 step process as you followed when you first released.
