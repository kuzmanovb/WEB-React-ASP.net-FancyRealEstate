using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    interface ICityService
    {
        Task<int> CreateSityAsync(string name);

        Task<string> GetCityByIdAsync(int id);

        Task DeleteCityAsync(string name);

    }
}
