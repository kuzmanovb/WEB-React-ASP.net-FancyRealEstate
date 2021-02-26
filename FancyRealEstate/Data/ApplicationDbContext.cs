namespace FancyRealEstate.Data
{
    using FancyRealEstate.Models;
    using IdentityServer4.EntityFramework.Options;
    using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Options;

    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<RealEstateProperty> RealEstateProperties { get; set; }

        public DbSet<PropertyType> PropertyTypes { get; set; }

        public DbSet<BuildingType> BuildingTypes { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<District> Districts { get; set; }

        public DbSet<City> Cities { get; set; }

        public DbSet<Address> Addresses { get; set; }

    }
}
