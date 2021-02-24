namespace FancyRealEstate.Services.Contracts
{
    using System.Threading.Tasks;

    public interface IDistrictsService
    {
        Task<int> CreateDistrictAsync(string name);

        Task<string> GetDistrictByIdAsync(int id);

        Task DeleteDistrictAsync(string name);
    }
}
