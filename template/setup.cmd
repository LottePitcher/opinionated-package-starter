@ECHO OFF
:: This file can now be deleted!
:: It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

:: set up git
git init
git branch -M main
git remote add origin https://github.com/GITHUB_USERNAME/GITHUB_REPOSITORY.git

:: ensure latest Umbraco templates used
dotnet new install Umbraco.Templates --force

:: use the umbraco-extension dotnet template to add the package project
cd src
dotnet new umbraco-extension -n "PackageStarter" --site-domain "https://localhost:44300" --include-example

:: replace package .csproj with the one from the template so has nuget info
cd PackageStarter
del PackageStarter.csproj
ren PackageStarter_nuget.csproj PackageStarter.csproj

:: add project to solution
cd..
dotnet sln add "PackageStarter"

:: add reference to project from test site
dotnet add "PackageStarter.TestSite/PackageStarter.TestSite.csproj" reference "PackageStarter/PackageStarter.csproj"
