namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface ICitiesService
    {
        Task<int> CreateSityAsync(string name, string countryName);

        City GetCityByName(string name);

        ICollection<string> GetAllCityName();

        ICollection<string> GetCitiesNameByCountry(string countryName);

        Task<bool> DeleteCityAsync(string name, string countryName);

        bool IsHasSameCityInCountry(string name, string countryName);
    }
}
