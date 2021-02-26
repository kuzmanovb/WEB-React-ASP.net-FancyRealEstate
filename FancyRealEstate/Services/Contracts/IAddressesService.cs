namespace FancyRealEstate.Services.Contracts
{
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;

    public interface IAddressesService
    {
        Task<int> CreateAddressAsync(AddressInputDto input);

        AddressInfoDto GetAddressesById(int id);

        Task UpdateAddressAsync(AddressInfoDto input);

        Task<bool> DeleteAddressAsync(int id);

    }
}
