using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(FancyRealEstate.Areas.Identity.IdentityHostingStartup))]
namespace FancyRealEstate.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            });
        }
    }
}