# Using the Template

## Installing the template

`dotnet new install Umbraco.Community.Templates.PackageStarter`

## Running the template

Open a command prompt in a location where you want your new package repository folder to be created. For example, if you are in `c:\source\` and use this template to create a package called 'MyNewPackage' then the template will create the folder `c:\source\MyNewPackage\`.

Before you use the template you need to know two things:
1. The name of your package, e.g. Contentment (although that name is already taken 😉)
2. The name of the GitHub organisation you're using to host the repo (usually your own username, perhaps your company's)
3. The name you're going to use for the GitHub repository, e.g. umbraco-contentment

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
- `-pt` or `--package-title` : the title of the package to be used in readme headings and on the Umbraco Marketplace (if omitted, defaults to a 'friendlier' version of the `-n` parameter)

The template needs to run a setup script. For security reasons, dotnet templates will prompt for confirmation first.
You can add `allow-scripts yes` to the dotnet command to avoid seeing that prompt.

### What do I do now?

When the opinionated package starter template created your package solution, it used the `umbraco-extension` core dotnet template to create the package project with tooling for Vite, TypeScript etc. It also setup an example dashboard and a Swagger document.

Log in to the test site in your solution and confirm that things are working:
- In the Content section, there should be an "Example Dashboard" with some demo functionality
- Navigate to /umbraco/swagger and change the document dropdown (top right) - there should be a document already created for your package

You can learn more about how the `umbraco-extension` template works by watching [this section of the Umbraco 15 unboxing video](
https://www.youtube.com/watch?v=6NzPtZokjG4&t=2213s)

## Pushing to GitHub

- Create a completely empty Github repository (no readme or git ignore file) with the name you used when running the template. Up to you whether it's public or private
- The template has already intialised the git repo and added the GitHub remote so when you're ready, do your first git commit and push 

### Logo

Both nuget, and the Umbraco marketplace displays the logo for your package. If you need some inspiration, check out [The Noun Project](https://thenounproject.com/icons/).

If you save your logo as `\docs\logo.png` in your repository, then you would need to update the package project .csproj as follows:

Change `<PackageIcon></PackageIcon>` to `<PackageIcon>logo.png</PackageIcon>`

And add this section:

```
  <ItemGroup>
    <None Include="..\..\docs\logo.png">
      <Pack>True</Pack>
      <PackagePath>\</PackagePath>
    </None>
  </ItemGroup>
```

## Publishing to nuget / Umbraco Marketplace

Please note that the project has already been configured with the `umbraco-marketplace` tag. This means that the Marketplace will automatically find and index the package once you have published it to nuget.

You can test how things should work/look before publishing as follows:

- Create the nuget package locally:
   - Create a local directory, e.g. c:\nuget.local
   - Add this as a nuget source: `dotnet nuget add source c:\nuget.local`
   - Pack your package project to this location (note the use of a version number): `dotnet pack --configuration Release /p:Version=0.0.1 --output c:\nuget.local`
   - Spin up a new Umbraco site and install this nuget package
   - Test that the package works as expected

- Check how your package will look on nuget using the [nuget Package Explorer](https://github.com/NuGetPackageExplorer/NuGetPackageExplorer)

- Validate Marketplace configuration from https://marketplace.umbraco.com/validate and the JSON option

All good? Happy? If so, let's get this published!

> **Warning**
> 
> Please make sure you are happy with the nuget package id before you continue. Titles, descriptions can all be changed, but you can't change the id of a nuget package once created, you can only deprecate it and start a new one.

The project is created with version 0.1.0 as this fits the [SemVer](https://semver.org/) scheme. The version number is set in the .csproj of the package project.

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
