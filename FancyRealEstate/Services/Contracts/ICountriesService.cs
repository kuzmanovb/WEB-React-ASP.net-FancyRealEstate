namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using FancyRealEstate.Models;

    public interface ICountriesService
    {

        Task<int> CreateCountryAsync(string name);

        Country GetCountryByName(string name);

        ICollection<string> GetAllCountriesName();

        Task<bool> DeleteCountryAsync(string name);
    }
}
