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
        private readonly IFeatureService featureService;
        private readonly IImagesService imagesService;

        public RealEstatePropertiesService(ApplicationDbContext db, IAddressesService addressesService, IProperyTypesService properyTypesService, IBuildingTypesService buildingTypesService, IFeatureService featureService, IImagesService imagesService)
        {
            this.db = db;
            this.addressesService = addressesService;
            this.properyTypesService = properyTypesService;
            this.buildingTypesService = buildingTypesService;
            this.featureService = featureService;
            this.imagesService = imagesService;
        }

        public async Task<int> CreateRealEstateProperyAsync(RealEstatePropertyInputDto input)
        {
            var newAddress = new AddressInputDto
            {
                Street = input.Street,
                BuildingNumber = input.BuildingNumber,
                District = input.District,
                City = input.City,
                Country = input.Country,
            };

            var addressId = await this.addressesService.CreateAddressAsync(newAddress);
            var buildingTypeId = this.buildingTypesService.GetBuildingTypeByName(input.BuildingType).Id;
            var propertyTypeId = this.properyTypesService.GetPropertyTypeByName(input.PropertyType).Id;
            var features = this.featureService.GetAllFeatures().Where(x => input.Features.Contains(x.Name)).ToList();

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
                Features = features,
                Internet = input.Features.Contains("internet"),
                Heating = input.Features.Contains("heating"),
                SecuritySystem = input.Features.Contains("securitySystem"),
                AirCondition = input.Features.Contains("airCondition"),
                Garage = input.Features.Contains("garage"),
                Elevator = input.Features.Contains("elevator"),
                Renovated = input.Features.Contains("renovated"),
                CreatedOn = DateTime.UtcNow,
            };

            await this.db.RealEstateProperties.AddAsync(newRealEstateProperty);
            await this.db.SaveChangesAsync();

            foreach (var item in input.ImageIds)
            {
                await this.imagesService.CreateImageAsync(item, newRealEstateProperty.Id);
            }

            return newRealEstateProperty.Id;
        }

        public ICollection<RealEstatePropertyInfoDto> GetSortedProperties(SortedRealestatePropertiesDto input)
        {
            var minPrice = input.MinPrice;
            var maxPrice = input.MaxPrice != 0 ? input.MaxPrice : int.MaxValue;

            var realEstateProperties = this.db.RealEstateProperties.Where(x => x.IsDeleted == input.IsDeleted && x.Price >= minPrice && x.Price <= maxPrice).OrderByDescending(i => i.Id).ToList();


            if (!string.IsNullOrEmpty(input.UserId))
            {
                realEstateProperties = realEstateProperties.Where(x => x.UserId == input.UserId).ToList();
            }


            if (!string.IsNullOrEmpty(input.District))
            {
                realEstateProperties = realEstateProperties.Where(x => x.Address.District.Name == input.District).ToList();
            }

            if (!string.IsNullOrEmpty(input.PropertyType))
            {
                realEstateProperties = realEstateProperties.Where(x => x.PropertyType.Name == input.PropertyType).ToList();
            }

            if (!string.IsNullOrEmpty(input.BuildingType))
            {
                realEstateProperties = realEstateProperties.Where(x => x.BuildingType.Name == input.BuildingType).ToList();
            }

            if (!string.IsNullOrEmpty(input.Deal))
            {
                realEstateProperties = realEstateProperties.Where(x => x.TypeOfDeal == (TypeOfDeal)Enum.Parse(typeof(TypeOfDeal), input.Deal)).ToList();
            }

            if (input.IsPromotion)
            {
                realEstateProperties = realEstateProperties.Where(x => x.IsPromotion == input.IsPromotion).ToList();
            }


            if (!string.IsNullOrEmpty(input.SortByPrice))
            {
                if (input.SortByPrice == "ascending")
                {
                    realEstateProperties = realEstateProperties.OrderBy(x => x.Price).ThenByDescending(i => i.Id).ToList();
                }
                else if (input.SortByPrice == "descending")
                {
                    realEstateProperties = realEstateProperties.OrderByDescending(x => x.Price).ThenByDescending(i => i.Id).ToList();
                }
            }

            if (!string.IsNullOrEmpty(input.SortByDate))
            {
                if (input.SortByDate == "ascending")
                {
                    realEstateProperties = realEstateProperties.OrderBy(x => x.CreatedOn).ThenByDescending(i => i.Id).ToList();
                }
                else if (input.SortByDate == "descending")
                {
                    realEstateProperties = realEstateProperties.OrderByDescending(x => x.CreatedOn).ThenByDescending(i => i.Id).ToList();
                }
            }

            var propertyCount = realEstateProperties.Count();

            int skipProperty = 0;
            int takeProperty = int.MaxValue;

            if (input.Page > 0)
            {
                takeProperty = NumberPropertyToPage;
                skipProperty = NumberPropertyToPage * (input.Page - 1);
            }

            var sortedRealEstateProperties = realEstateProperties
                .Skip(skipProperty)
                .Take(takeProperty)
                .Select(p => new RealEstatePropertyInfoDto
                {
                    Id = p.Id,
                    Size = p.Size,
                    Floor = p.Floor,
                    TotalNumberOfFloor = p.TotalNumberOfFloor,
                    Year = p.Year,
                    Price = p.Price,
                    Street = p.Address.Street,
                    City = p.Address.City.Name,
                    Country = p.Address.Country.Name,
                    District = p.Address.District.Name,
                    BuildingNumber = p.Address.BuildingNumber,
                    PropertyType = p.PropertyType.Name,
                    BuildingType = p.BuildingType.Name,
                    Description = p.Description,
                    TypeOfDeal = p.TypeOfDeal.ToString(),
                    Features = p.Features.Select(x => x.Name).ToArray(),
                    IsPromotion = p.IsPromotion,
                    SellerFullName = p.User.FirstName + " " + p.User.LastName,
                    SellerPhoneNumber = p.User.PhoneNumber,
                    SellerEmail = p.User.Email,
                    Internet = p.Internet,
                    Heating = p.Heating,
                    SecuritySystem = p.SecuritySystem,
                    AirCondition = p.AirCondition,
                    Garage = p.Garage,
                    Elevator = p.Elevator,
                    Renovated = p.Renovated,
                    CreatedOn = p.CreatedOn.ToString("dd-MM-yyyy"),
                    DaysAgo = Math.Round((DateTime.UtcNow - p.CreatedOn).TotalDays),
                    ImageIds = p.Images.Where(i => i.RealEstatePropertyId == p.Id).Select(x => x.CloudId).ToArray(),
                    PropertiesCount = propertyCount,
                })
                .ToList();

            return sortedRealEstateProperties;
        }

        public ICollection<RealEstatePropertyInfoDto> GetPropertiesWithPredicate(Func<RealEstateProperty, bool> where)
        {
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
                    District = p.Address.District.Name,
                    BuildingNumber = p.Address.BuildingNumber,
                    PropertyType = p.PropertyType.Name,
                    BuildingType = p.BuildingType.Name,
                    Description = p.Description,
                    TypeOfDeal = p.TypeOfDeal.ToString(),
                    IsPromotion = p.IsPromotion,
                    SellerFullName = p.User.FirstName + " " + p.User.LastName,
                    SellerPhoneNumber = p.User.PhoneNumber,
                    SellerEmail = p.User.Email,
                    Internet = p.Internet,
                    Heating = p.Heating,
                    SecuritySystem = p.SecuritySystem,
                    AirCondition = p.AirCondition,
                    Garage = p.Garage,
                    Elevator = p.Elevator,
                    Renovated = p.Renovated,
                    CreatedOn = p.CreatedOn.ToString("dd-MM-yyyy"),
                    DaysAgo = Math.Round((DateTime.UtcNow - p.CreatedOn).TotalDays),
                    ImageIds = p.Images.Where(i => i.RealEstatePropertyId == p.Id).Select(x => x.CloudId).ToArray(),
                })
                .ToList();

            return allProperty;
        }

        public async Task UpdatePropertyAsync(RealEstatePropertyInputDto input)
        {
            var currentProperty = this.db.RealEstateProperties.Where(p => p.Id == input.Id).First();

            currentProperty.Size = input.Size;
            currentProperty.Floor = input.Floor;
            currentProperty.TotalNumberOfFloor = input.TotalNumberOfFloor;
            currentProperty.Year = input.Year;
            currentProperty.Price = input.Price;
            currentProperty.Address.Street = input.Street;
            currentProperty.Address.District.Name = input.District;
            currentProperty.Address.BuildingNumber = input.BuildingNumber;
            currentProperty.Description = input.Description;
            currentProperty.TypeOfDeal = (TypeOfDeal)Enum.Parse(typeof(TypeOfDeal), input.TypeOfDeal, true);
            foreach (var item in currentProperty.Features)
            {
                currentProperty.Features.Remove(item);
            }

            var currentFeatures = this.featureService.GetAllFeatures().Where(x => input.Features.Contains(x.Name)).ToList();

            foreach (var item in currentFeatures)
            {
                currentProperty.Features.Add(item);
            }

            foreach (var cloudId in input.ImageIds)
            {
                if (!currentProperty.Images.Any(x => x.CloudId == cloudId))
                {
                    await this.imagesService.CreateImageAsync(cloudId, currentProperty.Id);
                }
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
                foreach (var image in currentProperty.Images)
                {
                    await this.imagesService.DeleteImageByIdAsync(image.CloudId);
                }

                await this.addressesService.DeleteAddressAsync(currentProperty.AddressId);
                this.db.RealEstateProperties.Remove(currentProperty);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}
