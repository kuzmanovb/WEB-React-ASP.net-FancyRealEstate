namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class DistrictsService : IDistrictsService
    {
        private readonly ApplicationDbContext db;

        public DistrictsService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateDistrictAsync(string name)
        {
            var newDistrict = new District { Name = name };

            await this.db.Districts.AddAsync(newDistrict);
            await this.db.SaveChangesAsync();

            return newDistrict.Id;
        }

        public ICollection<string> GetAllDistrict()
        {
            var allDistrictName = this.db.Districts.OrderBy(x => x.Name).Select(d => d.Name).ToArray();

            return allDistrictName;
        }

        public District GetDistrictByName(string name)
        {
            var district = this.db.Districts.Where(d => d.Name == name).FirstOrDefault();

            return district;
        }

        public async Task DeleteDistrictAsync(string name)
        {
            var district = this.db.Districts.Where(d => d.Name == name).FirstOrDefault();

            if (district != null)
            {
                this.db.Districts.Remove(district);
                await this.db.SaveChangesAsync();
            }
        }
    }
}
