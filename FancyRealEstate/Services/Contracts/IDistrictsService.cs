namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface IDistrictsService
    {
        Task<int> CreateDistrictAsync(string name, int cityId);

        District GetDistrictByName(string name, int? cityId);

        ICollection<string> GetAllDistrict(int? cityId);

        ICollection<string> GetDistrictsNameByCity(string cityName);

        Task<bool> DeleteDistrictAsync(string name, int cityId);
    }
}
