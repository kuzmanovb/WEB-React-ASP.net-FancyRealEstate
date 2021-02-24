namespace FancyRealEstate.Services.Contracts
{
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;

    public interface IAddressesService
    {
        Task<int> CreateAddress(AddressInputDto input);

        Task<AddressInfoDto> GetAddressesByIdAsync(int id);

        Task UpdateAddressAsync(AddressInputDto input);

        Task DeleteAddressAsync(int id);

    }
}
