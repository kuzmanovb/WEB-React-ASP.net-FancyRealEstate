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

        Task UpdatePropertyAsync(RealEstatePropertyInfoDto input);

        Task<bool> DeletePropertyAsync(int id);
    }
}
