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

        public async Task<int> CreateDistrictAsync(string name, string cityName)
        {
            var currentCity = this.db.Cities.FirstOrDefault(x => x.Name == cityName);
            if (currentCity == null)
            {
                return 0;
            }

            var newDistrict = new District { Name = name, CityId = currentCity.Id };

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
            var district = this.db.Districts.FirstOrDefault(d => d.Name == name);

            return district;
        }

        public async Task<bool> DeleteDistrictAsync(string name, string cityName)
        {
            var district = this.db.Districts.FirstOrDefault(d => d.Name == name && d.City.Name == cityName);

            if (district != null)
            {
                this.db.Districts.Remove(district);
                await this.db.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public ICollection<string> GetDistrictsNameByCity(string cityName)
        {
            var districtsInCity = this.db.Districts.Where(x => x.City.Name == cityName).Select(x => x.Name).ToArray();

            return districtsInCity;
        }

        public bool IsHasSameDistrictInCity(string name, string cityName)
        {
            var currentCity = this.db.Districts.FirstOrDefault(x => x.Name == name && x.City.Name == cityName);

            if (currentCity == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
