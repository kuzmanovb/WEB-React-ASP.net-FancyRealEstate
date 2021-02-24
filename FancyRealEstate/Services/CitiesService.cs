namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class CitiesService : ICitiesService
    {
        private readonly ApplicationDbContext db;

        public CitiesService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateSityAsync(string name)
        {
            var newCity = new City { Name = name };

            await this.db.AddAsync(newCity);
            await this.db.SaveChangesAsync();

            return newCity.Id;
        }

        public ICollection<string> GetAllCityName()
        {
            var allCities = this.db.Cities.Select(x => x.Name ).ToArray();

            return allCities;
        }

        public City GetCityByName(string name)
        {
            var city = this.db.Cities.Where(c => c.Name == name).FirstOrDefault();

            return city;
        }

        public async Task DeleteCityAsync(string name)
        {
            var city = this.db.Cities.Where(c => c.Name == name).FirstOrDefault();

            if (city != null)
            {
                this.db.Cities.Remove(city);
                await this.db.SaveChangesAsync();
            }
        }
    }
}
