namespace FancyRealEstate.Services
{
    using System;
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

        public AddressesService(ApplicationDbContext db, ICitiesService citiesService, IDistrictsService districtsService)
        {
            this.db = db;
            this.citiesService = citiesService;
            this.districtsService = districtsService;
        }

        public async Task<int> CreateAddressAsync(AddressInputDto input)
        {
            var city = this.citiesService.GetCityByName(input.City);
            var district = this.districtsService.GetDistrictByName(input.District);

            if (city == null || district == null)
            {
                return 0;
            }

            var newAddress = new Address
            {
                Street = input.Street,
                BuildingNumber = input.BuildingNumber,
                DistrictId = district.Id,
                CityId = city.Id,
            };

            await this.db.Addresses.AddAsync(newAddress);
            await this.db.SaveChangesAsync();

            return newAddress.Id;
        }

        public AddressInfoDto GetAddressesById(int id)
        {
            var address = this.db.Addresses
                .Where(a => a.Id == id)
                .Select(x => new AddressInfoDto
                {
                    Street = x.Street,
                    BuildingNumber = x.BuildingNumber,
                    District = x.District.Name,
                    City = x.City.Name,
                })
                .FirstOrDefault();

            return address;
        }

        public async Task UpdateAddressAsync(AddressInfoDto input)
        {
            var currentAddreass = this.db.Addresses.Where(a => a.Id == input.Id).FirstOrDefault();
            var disrtictId = this.districtsService.GetDistrictByName(input.District).Id;
            var cityId = this.citiesService.GetCityByName(input.City).Id;

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

            this.db.Update(currentAddreass);
            await this.db.SaveChangesAsync();
        }

        public async Task DeleteAddressAsync(int id)
        {
            var currentAddreass = this.db.Addresses.Where(a => a.Id == id).FirstOrDefault();

            this.db.Remove(currentAddreass);
            await this.db.SaveChangesAsync();
        }
    }
}
