namespace FancyRealEstate.Services
{
    using System;
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

            await db.AddAsync(newCity);
            await db.SaveChangesAsync();

            return newCity.Id;
        }

        public async Task DeleteCityAsync(string name)
        {
            var city = db.Cities.Where(c => c.Name == name).FirstOrDefault();

            if (city != null)
            {
                this.db.Cities.Remove(city);
                await this.db.SaveChangesAsync();
            }
        }

        public Task<string> GetCityByIdAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
