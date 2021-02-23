using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    interface IDistrictService
    {
        Task<int> CreateDistrictAsync(string name);

        Task<string> GetDistrictByIdAsync(int id);

        Task DeleteDistrictAsync(string name);
    }
}
