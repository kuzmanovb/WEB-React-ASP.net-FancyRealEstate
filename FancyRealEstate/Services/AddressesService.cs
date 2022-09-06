namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using FancyRealEstate.Data;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class AddressesService : IAddressesService
    {
        private readonly ApplicationDbContext db;
        private readonly ICitiesService citiesService;
        private readonly IDistrictsService districtsService;
        private readonly ICountriesService countriesService;

        public AddressesService(ApplicationDbContext db, ICitiesService citiesService, IDistrictsService districtsService, ICountriesService countriesService)
        {
            this.db = db;
            this.citiesService = citiesService;
            this.districtsService = districtsService;
            this.countriesService = countriesService;
        }

        public async Task<int> CreateAddressAsync(AddressInputDto input)
        {
            var country = this.countriesService.GetCountryByName(input.Country);
            var city = this.citiesService.GetCityByName(input.City);
            var district = this.districtsService.GetDistrictByName(input.District);

            if (city == null || district == null || country == null)
            {
                return 0;
            }

            var newAddress = new Address
            {
                Street = input.Street,
                BuildingNumber = input.BuildingNumber,
                DistrictId = district.Id,
                CityId = city.Id,
                CountryId = country.Id,
            };

            await this.db.Addresses.AddAsync(newAddress);
            await this.db.SaveChangesAsync();

            return newAddress.Id;
        }

        public AddressInfoDto GetAddressById(int id)
        {
            var address = this.db.Addresses
                .Where(a => a.Id == id)
                .Select(x => new AddressInfoDto
                {
                    Id = x.Id,
                    Country = x.Country.Name,
                    City = x.City.Name,
                    District = x.District.Name,
                    Street = x.Street,
                    BuildingNumber = x.BuildingNumber,
                    RealEstatePropertyId = x.RealEstateProperties.Id,
                })
                .FirstOrDefault();

            return address;
        }

        public async Task UpdateAddressAsync(AddressInfoDto input)
        {
            var currentAddreass = this.db.Addresses.FirstOrDefault(a => a.Id == input.Id);
            var disrtictId = this.districtsService.GetDistrictByName(input.District).Id;
            var cityId = this.citiesService.GetCityByName(input.City).Id;
            var countryId = this.countriesService.GetCountryByName(input.Country).Id;

            if (currentAddreass.Street != input.Street)
            {
                currentAddreass.Street = input.Street;
            }

            if (currentAddreass.BuildingNumber != input.BuildingNumber)
            {
                currentAddreass.BuildingNumber = input.BuildingNumber;
            }

            if (currentAddreass.DistrictId != disrtictId)
            {
                currentAddreass.DistrictId = disrtictId;
            }

            if (currentAddreass.CityId != cityId)
            {
                currentAddreass.CityId = cityId;
            }

            if (currentAddreass.CountryId != countryId)
            {
                currentAddreass.CountryId = countryId;
            }

            this.db.Update(currentAddreass);
            await this.db.SaveChangesAsync();
        }

        public async Task<bool> DeleteAddressAsync(int id)
        {
            var currentAddreass = this.db.Addresses.FirstOrDefault(a => a.Id == id);

            if (currentAddreass != null)
            {
                this.db.Remove(currentAddreass);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public List<Address> GetAddressesByDistrictId(int districtId)
        {
            var addresses = this.db.Addresses.Where(x => x.DistrictId == districtId).ToList();

            return addresses;
        }
    }
}
