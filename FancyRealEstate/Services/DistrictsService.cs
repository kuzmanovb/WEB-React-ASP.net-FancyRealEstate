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

        public async Task<int> CreateDistrictAsync(string name, int cityId)
        {
            var newDistrict = new District { Name = name, CityId = cityId };

            await this.db.Districts.AddAsync(newDistrict);
            await this.db.SaveChangesAsync();

            return newDistrict.Id;
        }

        public ICollection<string> GetAllDistrict(int? cityId)
        {
            var allDistrictName = this.db.Districts.Where(x => cityId.HasValue ? x.CityId == cityId : true).OrderBy(x => x.Name).Select(d => d.Name).ToArray();

            return allDistrictName;
        }

        public District GetDistrictByName(string name, int? cityId)
        {
            var district = this.db.Districts.Where(x => cityId.HasValue ? x.CityId == cityId : true).FirstOrDefault(d => d.Name == name);

            return district;
        }

        public async Task<bool> DeleteDistrictAsync(string name, int cityId)
        {
            var district = this.db.Districts.FirstOrDefault(d => d.Name == name && d.CityId == cityId);

            if (district != null)
            {
                this.db.Districts.Remove(district);
                await this.db.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
