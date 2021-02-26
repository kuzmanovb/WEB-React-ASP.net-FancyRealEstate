namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface IDistrictsService
    {
        Task<int> CreateDistrictAsync(string name);

        District GetDistrictByName(string name);

        ICollection<string> GetAllDistrict();

        Task<bool> DeleteDistrictAsync(string name);
    }
}
