# Using the Template

Before you start you need to decide three things:

1. The name of your package, e.g. Contentment (although that name is already taken 😉)
2. The GitHub organisation you're going to use to host the repository (usually your own username but perhaps your company's)
3. The name you're going to use for the GitHub repository, e.g. umbraco-contentment

## Installing the template

`dotnet new install Umbraco.Community.Templates.PackageStarter`

## Running the template

Open a command prompt in the location where you want your new package repository folder to be created:

`dotnet new umbracopackagestarter -n YourPackageName -an "Your Name" -gu "YourGitHubUsername" -gr "YourGitHubRepoName"`

Parameters:
- `-n` or `--name` : the name of your project/package. A root folder called `YourPackageName` will be created containing:
   - A solution file `\src\YourPackageName.sln`
   - A project for the package in the `\src\YourPackageName` folder
   - A test site for the package in the `\src\YourPackageName.TestSite` folder
   - The nuget package id will be set as : `Umbraco.Community.YourPackageName`
- `-an` or `--author-name` : the display name of the author, e.g. "Lotte Pitcher", used in license and readme
- `-gu` or `--github-user` : the username of the GitHub user/organisation that will be hosting the repository
- `-gr` or `--github-repo` : the GitHub repository name for the project
- `-pt` or `--package-title` : the title of the package to be used in readme headings and on the Umbraco Marketplace (if omitted, defaults to a 'friendlier' version of the `-n` parameter)

The template includes running a script (setup.cmd). For security reasons, dotnet templates will prompt for confirmation before executing the script. Either type Y when prompted, or add `allow-scripts yes` to the dotnet command to avoid seeing that prompt.

NB the setup script includes running a npm install command: so expect this process to take a fair while! 
When the template has completed you'll see an "All done!" message in the command window.

## What do I do now?

When the opinionated package starter template created your package solution, it used the `umbraco-extension` core dotnet template to create the package project with tooling for Vite, TypeScript etc. That template also sets up an example dashboard and a Swagger document.

To confirm that everything is working as expected, run the test site (`\src\YourPackageName.TestSite`) and log in (check `appSettings.json` for login credentials):

- In the Content section, there should be an "Example Dashboard" with some demo functionality
- Navigate to /umbraco/swagger and change the document dropdown (top right): there should be a document already created for your package

You can learn more about how the `umbraco-extension` template works, and the development workflow you should use, by watching [this section of the Umbraco 15 unboxing video](https://www.youtube.com/watch?v=6NzPtZokjG4&t=2213s)

The test site has already been configured to use [uSync](https://marketplace.umbraco.com/package/usync). This means that backoffice schema (doc types etc) are serialised to disk so it's easy to collaborate with other contributors during development.

## Pushing to GitHub

Create a completely empty Github repository (no readme, license or git ignore file) with the name you used when running the template. Up to you whether it's public or private.

The template setup script has already intialised your local git repo and added the GitHub remote url using the parameters you provided. Which means all you have to do now is your first git commit and push!

## Publishing to nuget and the Umbraco Marketplace

The package project .csproj has already been configured to have the `umbraco-marketplace` tag on the nuget package. This means that the Marketplace will automatically find and index the package once you have published it to nuget. If you don't want that to happen then remove this tag.

Before you publish your package on nuget you should update:

- The `.csproj` in the package project and set the Title property (and check the others)
- `\.github\README.md` - this is the readme of your open source repository on GitHub
- `.\docs\README_nuget.md` - this is the readme that will show on nuget.org

### Package logo

Both nuget, and the Umbraco marketplace displays the logo for your package. If you need some inspiration, check out [The Noun Project](https://thenounproject.com/icons/).

Save your logo as e.g. `\docs\logo.png`, then update the package project .csproj:

- Change `<PackageIcon></PackageIcon>` to `<PackageIcon>logo.png</PackageIcon>`
- And add this section:

```
  <ItemGroup>
    <None Include="..\..\docs\logo.png">
      <Pack>True</Pack>
      <PackagePath>\</PackagePath>
    </None>
  </ItemGroup>
```

### Testing locally

You can test how things should work before publishing as follows:

- Create the nuget package locally:
   - Create a local directory, e.g. c:\nuget.local
   - Add this as a nuget source: `dotnet nuget add source c:\nuget.local`
   - Open a command prompt in the package project folder and pack your package to this location (note the use of a version number): `dotnet pack --configuration Release /p:Version=0.0.1 --output c:\nuget.local`
   - Spin up a new Umbraco site and install this nuget package
   - Test that the package works as expected

- Check how your package will look on nuget using the [nuget Package Explorer](https://github.com/NuGetPackageExplorer/NuGetPackageExplorer)

- Validate Marketplace configuration from https://marketplace.umbraco.com/validate and the JSON option

All good? Happy? If so, let's get this published!

> **Warning**
> 
> Please make sure you are happy with the nuget package id before you continue. Titles, descriptions can all be changed, but you can't change the id of a nuget package once created, you can only deprecate it and start a new one.

### Configuring GitHub for nuget

1. Login to nuget.org with the account that you want to publish the package to
2. Use the 'API Keys' option to create a new key that is allowed to create new packages (using the 'glob' pattern of *), and copy this key
3. In your repository on GitHub.com navigate to Settings > Secret and variables > Actions
4. Create a new repository secret with the name `NUGET_API_KEY` and paste the key from step 2

### Publishing a release on nuget

The template created a GitHub action (`\.github\workflows\release.yml`) that has been configured to publish to nuget whenever a tag is pushed to GitHub. When you first publish this package you might want to use to the version number 0.1.0 as this fits the [SemVer](https://semver.org/) scheme.

The version number also needs to be set in `src\YourPackageName\Client\public\umbraco-package.json`. Then open a command prompt in the `Client` folder and `npm run build`.

So when you're ready to publish, add a new tag with the name of the version you want to use (e.g. `0.1.0`) to the latest commit in git and push that tag to GitHub. The GitHub action will then run and, hopefully!, successfuly publish the release on GitHub. Click on the Actions tab of your GitHub repository to monitor its progress.

### Creating release notes on GitHub

When the action has succesfully completed, you can create release notes on your GitHub repository so that users of your package can see what's been changed:

- On the home page of your repo in GitHub click the 'X tags' link
- Your new version should be listed: click the three dots and 'Create Release'
- Document what's changed, and list any contributors you want to thank. You can look at the releases of this template repository for some examples to follow

## Improve your package on the Marketplace

There is more information that you can add to the `umbraco-marketplace.json` file in the root of your repository to improve how the package appears on the marketplace.

Check the [instructions on the Marketplace](https://marketplace.umbraco.com/listing) for more information.

Once you've updated the .json file and pushed to GitHub, the Marketplace should reindex and update the package details soon. If things don't look as you expect, use the validation tool.

If you don't want to wait... check instructions for forcing marketplace to update immediately for your package.

## Publishing new versions of the package

- The next version number needs to be set in `src\YourPackageName\Client\public\umbraco-package.json`
- Open a command prompt in the `Client` folder and `npm run build`, commit and push to GitHub
- Add a git tag with the new version number and push to GitHub
- When the action has completed, create new release notes for the version on GitHub 