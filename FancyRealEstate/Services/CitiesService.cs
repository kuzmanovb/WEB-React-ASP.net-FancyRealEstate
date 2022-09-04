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

        public async Task<int> CreateSityAsync(string name, string countryName)
        {
            var currentCountry = this.db.Countries.FirstOrDefault(x => x.Name == countryName);
            if (currentCountry == null)
            {
                return 0;
            }

            var newCity = new City { Name = name, CountryId = currentCountry.Id };

            await this.db.AddAsync(newCity);
            await this.db.SaveChangesAsync();

            return newCity.Id;
        }

        public ICollection<string> GetAllCityName()
        {
            var allCities = this.db.Cities
                .OrderBy(b => b.Name).Select(x => x.Name)
                .ToArray();

            return allCities;
        }

        public City GetCityByName(string name)
        {
            var city = this.db.Cities.FirstOrDefault(x => x.Name == name);

            return city;
        }

        public ICollection<string> GetCitiesNameByCountry(string countryName)
        {
            var citiesInCountry = this.db.Cities.Where(x => x.Country.Name == countryName).Select(x => x.Name).ToArray();

            return citiesInCountry;
        }

        public async Task<bool> DeleteCityAsync(string name, string countryName)
        {
            var city = this.db.Cities.FirstOrDefault(x => x.Name == name && x.Country.Name == countryName);

            if (city != null)
            {
                this.db.Cities.Remove(city);
                await this.db.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public bool IsHasSameCityInCountry(string name, string countryName)
        {
            var currentCity = this.db.Cities.FirstOrDefault(x => x.Name == name && x.Country.Name == countryName);

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
