# An Opinionated Umbraco Package Starter Template

[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.Templates.PackageStarter?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter)
[![GitHub license](https://img.shields.io/github/license/LottePitcher/opinionated-package-starter?color=8AB803)](../LICENSE)

Use this `dotnet new` template to get a head start for creating, releasing and maintaining Umbraco Packages for v10+.

I've called it an 'opinionated' package starter template because lots of decisions have been made for you. This means that all you *really* have to worry about is adding your package code. A lot of the other stuff involved in releasing a package and having a well-maintained open source GitHub repository has been done already.

Of course none of these decisions are irreversible. Once you've used the template you can change whatever you need to. Please make sure you read this readme so you understand what choices you are starting with so that you can change them where necessary before you push to GitHub, and definitely before you publish to nuget!

## Template details

### What's wrong with the Umbraco Package template?

Nothing! You can [find a link to it here](https://docs.umbraco.com/umbraco-cms/extending/packages/creating-a-package#generate-an-empty-package-using-a-template). It's just that all it gives you is the actual package project. You'll need to work out how you're going to test your package, how to configure it for nuget, how you're going to release to nuget, add certain files for a well maintained repo ...

Whereas this template will create a folder with:

- A new solution (.sln)
- A package project ready for you to add your code. There's a lang .xml file in the right place to remind you to use those where feasible (instead of hard-coding text in your views)
- A test site referencing the package project
- A GitHub action for publishing to nuget
- A good start on:
   - The readme for your GitHub repository
   - The readme for your nuget package
   - The `umbraco-marketplace.json` file which improves how your package appears on the Umbraco Marketplace
- GitHub templates to help people create good issues and feature requests
- And more!

### What key decisions have been made?

- License: MIT
- Umbraco version: v13.0.0
- nuget package Id: `Umbraco.Community.YourPackageName`
- 'App_Plugins' or Razor Class Library: RCL
- Initial version number: 0.1.0

#### Why MIT license?

Because Umbraco CMS is released with an MIT license, and I've assumed you're releasing this as an open source package too.

#### Why are you targeting v13?

Because it's the current Long Term Support release. I believe plenty of sites will be staying on v13 for a while ... If there is a need to restrict your package to a version of 13 higher than 13.0.0 then you should raise the dependency in your package. Refer to [issue 10](https://github.com/LottePitcher/opinionated-package-starter/issues/10) for an early discussion about this.

#### Why a 'Umbraco.Community.* nuget package id?

If you don't have a company or personal brand to use as a prefix, then this is a well used convention for Umbraco community projects.

#### Why are you using a Razor Class Library?

Because RCLs mean that your package assets are added virtually to your project: you don't need a targets file in your test site to physically copy the App_Plugins contents over. It also makes it easier for people who install your package as they don't have to commit your App_Plugins folder to their project repository.

If you want to understand more about RCLs, and what is involved in converting a package to be a Razor Class Library, please refer to [PR 8](https://github.com/LottePitcher/opinionated-package-starter/pull/8).

#### Why 0.1.0 as the initial version number?

The project is created with version 0.1.0 as this fits the [SemVer](https://semver.org/) scheme. The version number is set in the .csproj of the package project.

## Using the template

Please read the [instructions](UsingTheTemplate.md) for how to install the template and use it.

### Contributing

Yes feedback, thoughts, issues, pull requests... are of course most welcome! 

Please read the [Contributing Guidelines](CONTRIBUTING.md).

### Acknowledgements

A lot of the decisions were made whilst collaborating with [Lee Kelleher](https://github.com/LeeKelleher) (the creator of [Contentment](https://github.com/leekelleher/umbraco-contentment) and many other Umbraco packages) whilst developing my [Admin Only Property](https://github.com/LottePitcher/umbraco-admin-only-property) package. So big #H5YR for all your help Lee 🙏!

#### Template icon

"out of the box" by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/out-of-the-box/" target="_blank" title="out of the box Icons">Noun Project</a>