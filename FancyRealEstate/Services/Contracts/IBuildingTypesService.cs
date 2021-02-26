namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using FancyRealEstate.Models;

    public interface IBuildingTypesService
    {
        Task<int> CreateBuildingTypeAsync(string name);

        BuildingType GetBuildingTypeByName(string name);

        ICollection<string> GetAllBuildingTypeName();

        Task DeleteBuildingTypeAsync(string name);
    }
}
