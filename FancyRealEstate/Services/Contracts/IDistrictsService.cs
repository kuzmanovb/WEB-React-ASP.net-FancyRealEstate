namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface IDistrictsService
    {
        Task<int> CreateDistrictAsync(string name, string cityName);

        District GetDistrictByName(string name);

        ICollection<string> GetAllDistrict();

        ICollection<string> GetDistrictsNameByCity(string cityName);

        Task<bool> DeleteDistrictAsync(string name, string cityName);

        bool IsHasSameDistrictInCity(string name, string cityName);
    }
}
