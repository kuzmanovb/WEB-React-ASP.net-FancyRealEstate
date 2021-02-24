namespace FancyRealEstate.Services.Contracts
{
    using System.Threading.Tasks;

    public interface IBuildingTypesService
    {
        Task<int> CreateBuildingTypeAsync(string name);

        Task<string> GetBuildingTypeByIdAsync(int id);

        Task DeleteBuildingTypeAsync(string name);

    }
}
