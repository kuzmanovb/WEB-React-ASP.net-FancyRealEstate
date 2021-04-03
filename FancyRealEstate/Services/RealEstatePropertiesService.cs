namespace FancyRealEstate.Services
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Threading.Tasks;

    using FancyRealEstate.Data;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Models;
    using FancyRealEstate.Models.Enum;
    using FancyRealEstate.Services.Contracts;

    public class RealEstatePropertiesService : IRealEstatePropertiesService
    {
        private const int NumberPropertyToPage = 9;

        private readonly ApplicationDbContext db;
        private readonly IAddressesService addressesService;
        private readonly IProperyTypesService properyTypesService;
        private readonly IBuildingTypesService buildingTypesService;

        public RealEstatePropertiesService(ApplicationDbContext db, IAddressesService addressesService, IProperyTypesService properyTypesService, IBuildingTypesService buildingTypesService)
        {
            this.db = db;
            this.addressesService = addressesService;
            this.properyTypesService = properyTypesService;
            this.buildingTypesService = buildingTypesService;
        }

        public async Task<int> CreateRealEstateProperyAsync(RealEstatePropertyInputDto input)
        {
            var newAddress = new AddressInputDto
            {
                Street = input.Street,
                BuildingNumber = input.BuildingNumber,
                District = input.DistrictName,
                City = input.CityName,
            };

            var addressId = await this.addressesService.CreateAddressAsync(newAddress);
            var buildingTypeId = this.buildingTypesService.GetBuildingTypeByName(input.CurrentBuildingType).Id;
            var propertyTypeId = this.properyTypesService.GetPropertyTypeByName(input.CurrentPropertyType).Id;



            // ToDo Add Image Gallery
            var newRealEstateProperty = new RealEstateProperty
            {
                Size = input.Size,
                Floor = input.Floor,
                TotalNumberOfFloor = input.TotalNumberOfFloor,
                Year = input.Year,
                Price = input.Price,
                AddressId = addressId,
                PropertyTypeId = propertyTypeId,
                BuildingTypeId = buildingTypeId,
                Description = input.Description,
                TypeOfDeal = (TypeOfDeal)Enum.Parse(typeof(TypeOfDeal), input.TypeOfDeal, true),
                IsPromotion = input.IsPromotion,
                UserId = input.UserId,
                Internet = input.Features.Contains("internet"),
                Heating = input.Features.Contains("heating"),
                SecuritySistem = input.Features.Contains("securitySistem"),
                AirCondition = input.Features.Contains("airCondition"),
                Garage = input.Features.Contains("garage"),
                Elevator = input.Features.Contains("elevator"),
                Renovated = input.Features.Contains("renovated"),
                CreatedOn = DateTime.UtcNow,
            };

            await this.db.RealEstateProperties.AddAsync(newRealEstateProperty);
            await this.db.SaveChangesAsync();

            return newRealEstateProperty.Id;
        }

        public ICollection<RealEstatePropertyInfoDto> GetSortedProperties(SortedRealestatePropertiesDto input)
        {
            // ToDo add image gallery
            var minPrice = input.MinPrice;
            var maxPrice = input.MaxPrice != 0 ? input.MaxPrice : int.MaxValue;

            var realEstateProperties = this.db.RealEstateProperties.Where(x => x.IsDeleted == input.IsDeleted && x.Price >= input.MinPrice && x.Price <= input.MaxPrice);

            if (!string.IsNullOrEmpty(input.City))
            {
                realEstateProperties = realEstateProperties.Where(x => x.Address.City.Name == input.City);
            }

            if (!string.IsNullOrEmpty(input.Destrict))
            {
                realEstateProperties = realEstateProperties.Where(x => x.Address.District.Name == input.Destrict);
            }

            if (!string.IsNullOrEmpty(input.Deal))
            {
                realEstateProperties = realEstateProperties.Where(x => x.TypeOfDeal == (TypeOfDeal)Enum.Parse(typeof(TypeOfDeal), input.Deal));
            }

            if (input.IsPromotion)
            {
                realEstateProperties = realEstateProperties.Where(x => x.IsPromotion == input.IsPromotion);
            }

            realEstateProperties = realEstateProperties.OrderBy(x => x.Address.City.Name).ThenBy(y => y.Address.District.Name);

            if (input.SortByMinPrice)
            {
                realEstateProperties = realEstateProperties.OrderBy(x => x.Price);
            }

            if (input.SortByMaxPrice)
            {
                realEstateProperties = realEstateProperties.OrderByDescending(x => x.Price);
            }

            int skipProperty = 0;

            if (input.Page > 1)
            {
                skipProperty = NumberPropertyToPage * (input.Page - 1);
            }

            var sortedRealEstateProperties = realEstateProperties
                .Skip(skipProperty)
                .Take(NumberPropertyToPage)
                .Select(p => new RealEstatePropertyInfoDto
                {
                    Id = p.Id,
                    Size = p.Size,
                    Floor = p.Floor,
                    TotalNumberOfFloor = p.TotalNumberOfFloor,
                    Year = p.Year,
                    Price = p.Price,
                    Street = p.Address.Street,
                    DistrictName = p.Address.District.Name,
                    CityName = p.Address.City.Name,
                    BuildingNumber = p.Address.BuildingNumber,
                    CurrentPropertyType = p.PropertyType.Name,
                    CurrentBuildingType = p.BuildingType.Name,
                    Description = p.Description,
                    TypeOfDeal = Enum.GetName(typeof(TypeOfDeal), p.TypeOfDeal),
                    IsPromotion = p.IsPromotion,
                    SellerFullName = p.User.FirstName + " " + p.User.LastName,
                    SellerPhoneNumber = p.User.PhoneNumber,
                    SellerEmail = p.User.Email,
                    Internet = p.Internet,
                    Heating = p.Heating,
                    SecuritySistem = p.SecuritySistem,
                    AirCondition = p.AirCondition,
                    Garage = p.Garage,
                    Elevator = p.Elevator,
                    Renovated = p.Renovated,
                    CreatedOn = p.CreatedOn.ToString("d"),
                })
                .ToList();

            return sortedRealEstateProperties;
        }

        public ICollection<RealEstatePropertyInfoDto> GetPropertiesWithPredicate(Func<RealEstateProperty, bool> where)
        {
            // ToDo add image gallery
            var allProperty = this.db.RealEstateProperties
                .Where(where)
                .Select(p => new RealEstatePropertyInfoDto
                {
                    Id = p.Id,
                    Size = p.Size,
                    Floor = p.Floor,
                    TotalNumberOfFloor = p.TotalNumberOfFloor,
                    Year = p.Year,
                    Price = p.Price,
                    Street = p.Address.Street,
                    DistrictName = p.Address.District.Name,
                    CityName = p.Address.City.Name,
                    BuildingNumber = p.Address.BuildingNumber,
                    CurrentPropertyType = p.PropertyType.Name,
                    CurrentBuildingType = p.BuildingType.Name,
                    Description = p.Description,
                    TypeOfDeal = Enum.GetName(typeof(TypeOfDeal), p.TypeOfDeal),
                    IsPromotion = p.IsPromotion,
                    SellerFullName = p.User.FirstName + " " + p.User.LastName,
                    SellerPhoneNumber = p.User.PhoneNumber,
                    SellerEmail = p.User.Email,
                    Internet = p.Internet,
                    Heating = p.Heating,
                    SecuritySistem = p.SecuritySistem,
                    AirCondition = p.AirCondition,
                    Garage = p.Garage,
                    Elevator = p.Elevator,
                    Renovated = p.Renovated,
                    CreatedOn = p.CreatedOn.ToString("d"),
                })
                .ToList();

            return allProperty;
        }

        public async Task UpdatePropertyAsync(RealEstatePropertyInfoDto input)
        {
            var currentProperty = this.db.RealEstateProperties.FirstOrDefault(p => p.Id == input.Id);

            if (currentProperty.Size != input.Size)
            {
                currentProperty.Size = input.Size;
            }

            if (currentProperty.Floor != input.Floor)
            {
                currentProperty.Floor = input.Floor;
            }

            if (currentProperty.TotalNumberOfFloor != input.TotalNumberOfFloor)
            {
                currentProperty.TotalNumberOfFloor = input.TotalNumberOfFloor;
            }

            if (currentProperty.Year != input.Year)
            {
                currentProperty.Year = input.Year;
            }

            if (currentProperty.Price != input.Price)
            {
                currentProperty.Price = input.Price;
            }

            if (currentProperty.Address.Street != input.Street)
            {
                currentProperty.Address.Street = input.Street;
            }

            if (currentProperty.Address.District.Name != input.DistrictName)
            {
                currentProperty.Address.District.Name = input.DistrictName;
            }

            if (currentProperty.Address.City.Name != input.CityName)
            {
                currentProperty.Address.City.Name = input.CityName;
            }

            if (currentProperty.Address.BuildingNumber != input.BuildingNumber)
            {
                currentProperty.Address.BuildingNumber = input.BuildingNumber;
            }

            if (currentProperty.PropertyType.Name != input.CurrentPropertyType)
            {
                currentProperty.PropertyType.Name = input.CurrentPropertyType;
            }

            if (currentProperty.BuildingType.Name != input.CurrentBuildingType)
            {
                currentProperty.BuildingType.Name = input.CurrentBuildingType;
            }

            if (currentProperty.Description != input.Description)
            {
                currentProperty.Description = input.Description;
            }

            if (Enum.GetName(typeof(TypeOfDeal), currentProperty.TypeOfDeal) != input.TypeOfDeal)
            {
                currentProperty.TypeOfDeal = (TypeOfDeal)Enum.Parse(typeof(TypeOfDeal), input.TypeOfDeal, true);
            }

            if (currentProperty.IsPromotion != input.IsPromotion)
            {
                currentProperty.IsPromotion = input.IsPromotion;
            }

            if (currentProperty.Internet != input.Internet)
            {
                currentProperty.Internet = input.Internet;
            }

            if (currentProperty.Heating != input.Heating)
            {
                currentProperty.Heating = input.Heating;
            }

            if (currentProperty.SecuritySistem != input.SecuritySistem)
            {
                currentProperty.SecuritySistem = input.SecuritySistem;
            }

            if (currentProperty.AirCondition != input.AirCondition)
            {
                currentProperty.AirCondition = input.AirCondition;
            }

            if (currentProperty.Garage != input.Garage)
            {
                currentProperty.Garage = input.Garage;
            }

            if (currentProperty.Elevator != input.Elevator)
            {
                currentProperty.Elevator = input.Elevator;
            }

            if (currentProperty.Renovated != input.Renovated)
            {
                currentProperty.Renovated = input.Renovated;
            }

            this.db.RealEstateProperties.Update(currentProperty);
            await this.db.SaveChangesAsync();
        }

        public async Task<bool> SoftDeletePropertyAsync(int id)
        {
            var currentProperty = this.db.RealEstateProperties.FirstOrDefault(p => p.Id == id);

            if (currentProperty != null)
            {

                currentProperty.IsDeleted = true;
                this.db.RealEstateProperties.Update(currentProperty);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> DeletePropertyAsync(int id)
        {
            var currentProperty = this.db.RealEstateProperties.FirstOrDefault(p => p.Id == id);

            if (currentProperty != null)
            {
                await this.addressesService.DeleteAddressAsync(currentProperty.AddressId);
                this.db.RealEstateProperties.Remove(currentProperty);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}
