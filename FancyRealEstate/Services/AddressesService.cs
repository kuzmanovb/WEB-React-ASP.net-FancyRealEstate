namespace FancyRealEstate.Services
{
    using System;
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Services.Contracts;

    public class AddressesService : IAddressesService
    {
        public Task<int> CreateAddress(AddressInputDto input)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAddressAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<AddressInfoDto> GetAddressesByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAddressAsync(AddressInputDto input)
        {
            throw new NotImplementedException();
        }
    }
}
