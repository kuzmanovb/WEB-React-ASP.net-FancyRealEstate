using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    interface IDistrictяService
    {
        Task<int> CreateDistrictAsync(string name);

        Task<string> GetDistrictByIdAsync(int id);

        Task DeleteDistrictAsync(string name);
    }
}
