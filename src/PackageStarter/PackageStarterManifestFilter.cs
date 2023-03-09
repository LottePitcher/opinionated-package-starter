using Umbraco.Cms.Core.Manifest;

namespace Umbraco.Community.PackageStarter
{
    internal class PackageStarterManifestFilter : IManifestFilter
    {
        public void Filter(List<PackageManifest> manifests)
        {
            var assembly = typeof(PackageStarterManifestFilter).Assembly;

            manifests.Add(new PackageManifest
            {
                PackageName = "PackageStarter",
                Version = assembly.GetName()?.Version?.ToString(3) ?? "0.1.0",
                AllowPackageTelemetry = true
            });
        }
    }
}
