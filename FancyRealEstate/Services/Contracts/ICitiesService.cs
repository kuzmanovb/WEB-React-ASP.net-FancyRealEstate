namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface ICitiesService
    {
        Task<int> CreateSityAsync(string name, int countryId);

        City GetCityByName(string name, int? countryId);

        ICollection<string> GetAllCityName(int? countryId);

        ICollection<string> GetCitiesNameByCountry(string countryName);

        Task<bool> DeleteCityAsync(string name, int countryId);
    }
}
