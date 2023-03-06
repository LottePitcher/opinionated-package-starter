# Using the Template

> **Warning**
> This is a beta version of the template. I would love someone to give it a go and let me know how they get on!

## Installing the template

`dotnet new install Umbraco.Community.Templates.PackageStarter`

## Using the template

TODO

## Pushing to GitHub

TODO - create git repo locally, create completely empty GitHub repo (public/private), push to GH

## Publishing to nuget / Umbraco Marketplace

Please note that the project has already been configured with the `umbraco-marketplace` tag. This means that the Marketplace will automatically find and index the package once it has been uploaded to nuget.

You can test how things should work/look before publishing as follows:

- Test nuget package works by adding via local nuget command
- Check how nuget will 'see' your package by using nuget package tool
- https://marketplace.umbraco.com/validate and the JSON option

Happy? If so, let's get this published!

> **Warning**
> Please make sure you are happy with the nuget package id before you continue. Titles, descriptions can all be changed, but you can't change the id of a nuget package once created, you can only deprecate it.

1. Update the version number by TODO
2. Add corresponding tag in Git
3. Push to GitHub - a GitHub action should then release the new version to GitHub
4. Add GitHub release notes

## Improve your package on the Marketplace

There is more information that you can add to the `umbraco-marketplace.json` file in the root of your repository to improve how the package appears on the marketplace.

Check the [instructions on the Marketplace](https://marketplace.umbraco.com/listing) for more information.

Once you've updated the .json file and pushed to GitHub, the Marketplace should reindex and update the package details soon. If things don't look as you expect, use the validation tool.

## Publishing updates

Is exactly the same 4 step process as you followed when you first released.
