# An Opinionated Umbraco Package Starter Template

[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.Templates.PackageStarter?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter)
[![GitHub license](https://img.shields.io/github/license/LottePitcher/opinionated-package-starter?color=8AB803)](../LICENSE)

> [!NOTE]
> The current version of this template is for creating packages in Umbraco 15+. If you still want to create a package for Umbraco 13, [install v13](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter/13.0.1) of the template and read the instructions in the [v13/dev](https://github.com/LottePitcher/opinionated-package-starter/tree/v13/dev) branch.

Use this `dotnet new` template to get a head start on creating, releasing and maintaining packages for Umbraco 15+.

I've called it an 'opinionated' package starter template because lots of decisions have been made for you. This means that all you *really* have to worry about is adding your package code. A lot of the other stuff involved in developing, releasing and maintaining an open source Umbraco package has been done already.

Of course none of these decisions are irreversible. Once you've used the template you can change whatever you need to. Please make sure you read this readme so you understand what choices you are starting with so that you can change them where necessary before you push to GitHub, and definitely before you publish to nuget!

## Template details

### What's wrong with the Umbraco Extension template for Umbraco 14+?

Nothing! You can learn more about it from [this section of the Umbraco 15 unboxing video](
https://www.youtube.com/watch?v=6NzPtZokjG4&t=2213s)

It's just that all it gives you is the actual package project. You'll need to set up a test site, work out how to configure it for nuget, how you're going to release to nuget, add certain files for a well maintained repo ...

Whereas this template will create a folder with:

- A new solution (.sln)
- A package project created using the core `umbraco-extension` template
- A test site referencing the package project
- A GitHub action for publishing to nuget when a tag is pushed
- A good start on:
   - The readme for your GitHub repository
   - The readme for your nuget package
   - The `umbraco-marketplace.json` file which improves how your package appears on the Umbraco Marketplace
- GitHub templates to help people create good issues and feature requests
- And more!

### What key decisions have been made?

- License: MIT
- Umbraco version: v15.2.2 (the latest at time of release)
- nuget package Id: `Umbraco.Community.YourPackageName`

#### Why MIT license?

Because Umbraco CMS is released with an MIT license, and I've assumed you're releasing this as an open source package too.

#### Why are you targeting the latest version of Umbraco 15?

If sites are on a Standard Term Support (STS) version of Umbraco, i.e. version 14+, then I believe they should be kept up to date with the latest STS version, so your package doesn't need to support earlier versions. When Umbraco 17 is released (scheduled for November 2025), this template will be updated to use that Long Term Support release. Refer to [issue 10](https://github.com/LottePitcher/opinionated-package-starter/issues/10) for discussions about what versions to support.

#### Why a 'Umbraco.Community.* nuget package id?

If you don't have a company or personal brand to use as a prefix, then this is a well used convention for Umbraco community projects.

## Using the template

Please read the [instructions](UsingTheTemplate.md) for how to install and use the template, and how to publish to nuget when you're ready.

### Contributing

Yes feedback, thoughts, issues, pull requests... are of course most welcome! 

Please read the [Contributing Guidelines](CONTRIBUTING.md).

### Acknowledgements

A lot of the decisions were made whilst collaborating with [Lee Kelleher](https://github.com/LeeKelleher) (the creator of [Contentment](https://github.com/leekelleher/umbraco-contentment) and many other Umbraco packages) whilst developing my [Admin Only Property](https://github.com/LottePitcher/umbraco-admin-only-property) package. So big #H5YR for all your help Lee 🙏!

#### Template icon

"out of the box" by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/out-of-the-box/" target="_blank" title="out of the box Icons">Noun Project</a>