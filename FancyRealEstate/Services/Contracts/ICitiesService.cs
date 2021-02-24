namespace FancyRealEstate.Services.Contracts
{
    using System.Threading.Tasks;

    public interface ICitiesService
    {
        Task<int> CreateSityAsync(string name);

        Task<string> GetCityByIdAsync(int id);

        Task DeleteCityAsync(string name);

    }
}
