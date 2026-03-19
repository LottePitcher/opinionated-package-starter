# An Opinionated Umbraco Package Starter Template

[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.Templates.PackageStarter?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter)
[![GitHub license](https://img.shields.io/github/license/LottePitcher/opinionated-package-starter?color=8AB803)](../LICENSE)

## Background

Use this `dotnet new` template to get a head start on creating, releasing and maintaining *packages* for Umbraco 17. If you just want to extend the backoffice of your Umbraco site, you should use the [`umbraco-extension` template](https://docs.umbraco.com/umbraco-cms/customizing/development-flow/umbraco-extension-template) directly. 

I've called it an 'opinionated' package starter template because lots of decisions have been made for you. This means that all you *really* have to worry about is adding your package code. A lot of the other stuff involved in developing, releasing and maintaining an open source Umbraco package has been done already.

Of course none of these decisions are irreversible. Once you've used the template you can change whatever you need to. Please make sure you read this readme so you understand what choices you are starting with so that you can change them where necessary before you push to GitHub, and definitely before you publish to nuget!

## Using the template

Run the following command to install the template:

`dotnet new install Umbraco.Community.Templates.PackageStarter`

Open a command prompt in the location you want your new package repository folder to be created:

`dotnet new umbracopackagestarter -n YourPackageName -an "Your Name" -gu "YourGitHubUsername" -gr "YourGitHubRepoName"`

More information on the parameters to use, and what build commands to use after the template has run, can be found in the [instructions](UsingTheTemplate.md).

## Template details

### What's wrong with the core Umbraco Extension template?

Nothing! You can learn more about it from [this section](
https://www.youtube.com/watch?v=6NzPtZokjG4&t=2213s) of the Umbraco 15 unboxing video or from [the official documentation](https://docs.umbraco.com/umbraco-cms/customizing/development-flow/umbraco-extension-template).

It's just that all it gives you is the actual extension project. Which is fine if you're just wanting to build custom extensions for your Umbraco instance. But if you're going to want to release this functionality as an actual package then you'll need to set up a test site, configure it for nuget, work out how you're going to release to nuget, add certain files for a well maintained repo ...

Whereas this template will create a folder with:

- A new solution (.slnx)
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
- Umbraco version: 17.0.0
- nuget package Id: `Umbraco.Community.YourPackageName` (although this is configurable, see the parameters in [instructions](UsingTheTemplate.md))

#### Why MIT license?

Because Umbraco CMS is released with an MIT license, and I've assumed you're releasing this as an open source package too.

#### Why target version 17.0.0?

Umbraco 17 is the current Long Term Support (LTS) release.
By targeting 17.0.0, your package can be installed on any Umbraco 17 site.

If there is a need to restrict your package to a later version of 17 then you should raise the dependency in the .csproj file of both projects in your solution. Refer to [issue 10](https://github.com/LottePitcher/opinionated-package-starter/issues/10) for an earlier discussion about what versions to support.

#### Why a 'Umbraco.Community.* nuget package id?

If you don't have a company or personal brand to use as a prefix, then this is a well used convention for Umbraco community projects.

#### What about older versions of Umbraco?
If you want to create a package for an older version of Umbraco, [install the appropriate version](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter#versions-body-tab) of the template. Instructions for version 13 are in the [v13/dev](https://github.com/LottePitcher/opinionated-package-starter/tree/v13/dev) branch.

### Contributing

Yes feedback, thoughts, issues, pull requests... are of course most welcome! 

Please read the [Contributing Guidelines](CONTRIBUTING.md).

### Acknowledgements

A lot of the decisions were made whilst collaborating with [Lee Kelleher](https://github.com/LeeKelleher) (the creator of [Contentment](https://github.com/leekelleher/umbraco-contentment) and many other Umbraco packages) whilst developing my [Admin Only Property](https://github.com/LottePitcher/umbraco-admin-only-property) package. So big #H5YR for all your help Lee 🙏!

#### Template icon

"out of the box" by Yoyon Pujiyono from <a href="https://thenounproject.com/browse/icons/term/out-of-the-box/" target="_blank" title="out of the box Icons">Noun Project</a>
