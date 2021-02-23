using FancyRealEstate.DTOs;
using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    public interface IAddressesService
    {
        Task<int> CreateAddress(AddressInputDto input);

        Task<AddressInfoDto> GetAddressesByIdAsync(int id);

        Task UpdateAddressAsync(AddressInputDto input);

        Task DeleteAddressAsync(int id);

    }
}
