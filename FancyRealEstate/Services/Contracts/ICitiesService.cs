namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface ICitiesService
    {
        Task<int> CreateSityAsync(string name);

        City GetCityByName(string name);

        ICollection<string> GetAllCityName();

        Task DeleteCityAsync(string name);

    }
}
