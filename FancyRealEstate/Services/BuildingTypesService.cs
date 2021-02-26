namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class BuildingTypesService : IBuildingTypesService
    {
        private readonly ApplicationDbContext db;

        public BuildingTypesService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateBuildingTypeAsync(string name)
        {
            var newBuildingType = new BuildingType { Name = name };

            await this.db.BuildingTypes.AddAsync(newBuildingType);
            await this.db.SaveChangesAsync();

            return newBuildingType.Id;
        }

        public ICollection<string> GetAllBuildingTypeName()
        {
            var allBuildingTypes = this.db.BuildingTypes.OrderBy(x => x.Name).Select(b => b.Name).ToArray();

            return allBuildingTypes;
        }

        public BuildingType GetBuildingTypeByName(string name)
        {
            var buildingType = this.db.BuildingTypes.Where(b => b.Name == name).FirstOrDefault();

            return buildingType;
        }

        public async Task DeleteBuildingTypeAsync(string name)
        {
            var buildingType = this.db.BuildingTypes.Where(b => b.Name == name).FirstOrDefault();

            if (buildingType != null)
            {
                this.db.BuildingTypes.Remove(buildingType);
                await this.db.SaveChangesAsync();
            }
        }
    }
}
