# An Opinionated Package Starter Template

<!--
[![Downloads](https://img.shields.io/nuget/dt/Umbraco.Community.Templates.PackageStarter?color=cc9900)](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter/)
[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.Templates.PackageStarter?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.Templates.PackageStarter)
[![GitHub license](https://img.shields.io/github/license/LottePitcher/opinionated-package-starter?color=8AB803)](LICENSE)
-->

> **Warning**
> This is a beta version of the template. I would love someone to give it a go and let me know how they get on!

Use this `dotnet new` template to get a head start when creating Umbraco Packages for v10+.

I've called it an 'opinionated' package starter template because lots of decisions have been made for you. This means that all you *really* have to worry about is adding your package code. All the other stuff involved in releasing a package and having a well-maintained open source GitHub repository has been done already.

Of course none of these decisions are irreversible. Once you've used the template you can change whatever you need to. Please make sure you read this readme so you understand what choices you are starting with so that you can change them where necessary before you push to GitHub, and definitely before you publish to nuget!

## Template details

### What's wrong with the Umbraco Package template?

Nothing, find it [here](https://docs.umbraco.com/umbraco-cms/extending/packages/creating-a-package#generate-an-empty-package-using-a-template)! It's just that all it gives you is the actual package project. You'll need to work out how you're going to test your package, configure it for nuget, work out how you're going to push to nuget, add certain files for a well maintained repo ...

Whereas this template will create a folder with:

- A new solution (.sln)
- A package project ready for you to add your code. There's a lang .xml file in the right place to remind you to use those where feasible (instead of hard-coding text in your views)
- A test site referencing the package project with a SQLite db
- A GitHub action for publishing to nuget
- A good start on:
   - The readme for your GitHub repository
   - The readme for your nuget package
   - The `umbraco-marketplace.json` file which improves how your package appears on the Umbraco Marketplace
- GitHub templates to help people create good issues and feature requests
- And more!

### What key decisions have been made?

- License: MIT
- Umbraco version: v10.4
- Allow telemetry: true
- nuget package Id: `Umbraco.Community.YourPackageName`

#### Why are you targeting v10?

Because it's the current Long Term Support release. I believe plenty of sites will be staying on v10 for a while ...

#### Why aren't you using Razor Class Libraries?

Honest answer is that I don't understand RCLs well enough yet! Get in touch if you want to enlighten me.

#### Why a 'Umbraco.Community.* nuget package id?

If you don't have a company or personal brand to use as a prefix, then this is a well used convention for Umbraco community projects.

## Using the template

Please read the [instructions](Using The Template.md) for how to install the template and use it.

### Contributing

Yes feedback, thoughts, issues are of course most welcome! When I next have a package to create I'll be using this template so I'd like it to be as complete as possible.

TODO: Add instructions on how to install and work on templates locally

### Acknowledgements

A lot of the decisions were made as a result of collaborating with [Lee Kelleher](https://github.com/LeeKelleher) - the creator of [Contentment](https://github.com/leekelleher/umbraco-contentment) and many other Umbraco packages - whilst developing my [Admin Only Property](https://github.com/LottePitcher/umbraco-admin-only-property) package. So big #H5YR for all your help Lee 🙏!