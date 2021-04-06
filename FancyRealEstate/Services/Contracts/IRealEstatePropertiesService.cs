namespace FancyRealEstate.Services.Contracts
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.DTOs;
    using FancyRealEstate.Models;

    public interface IRealEstatePropertiesService
    {
        Task<int> CreateRealEstateProperyAsync(RealEstatePropertyInputDto input);

        ICollection<RealEstatePropertyInfoDto> GetPropertiesWithPredicate(Func<RealEstateProperty, bool> where);

        ICollection<RealEstatePropertyInfoDto> GetSortedProperties(SortedRealestatePropertiesDto input);

        Task UpdatePropertyAsync(RealEstatePropertyInputDto input);

        Task<bool> SoftDeletePropertyAsync(int id);

        Task<bool> DeletePropertyAsync(int id);
    }
}
