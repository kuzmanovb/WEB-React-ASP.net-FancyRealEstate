namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class CountriesService : ICountriesService
    {
        private ApplicationDbContext db;

        public CountriesService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateCountryAsync(string name)
        {
            var newCountry = new Country { Name = name };

            await this.db.AddAsync(newCountry);
            await this.db.SaveChangesAsync();

            return newCountry.Id;
        }

        public ICollection<string> GetAllCountriesName()
        {
            var allCountries = this.db.Countries.OrderBy(x => x.Name).Select(x => x.Name).ToArray();

            return allCountries;
        }

        public Country GetCountryByName(string name)
        {
           var country = this.db.Countries.FirstOrDefault(x => x.Name == name);

           return country;
        }

        public async Task<bool> DeleteCountryAsync(string name)
        {
            var country = this.db.Countries.FirstOrDefault(x => x.Name == name);

            if (country != null)
            {
                this.db.Countries.Remove(country);
                await this.db.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
