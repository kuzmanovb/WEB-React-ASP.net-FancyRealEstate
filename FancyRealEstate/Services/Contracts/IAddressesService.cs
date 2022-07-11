namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Models;

    public interface IAddressesService
    {
        Task<int> CreateAddressAsync(AddressInputDto input);

        AddressInfoDto GetAddressById(int id);

        List<Address> GetAddressesByDistrictId(int districtId);

        Task UpdateAddressAsync(AddressInfoDto input);

        Task<bool> DeleteAddressAsync(int id);

    }
}
