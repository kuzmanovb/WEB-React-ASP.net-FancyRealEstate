namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class ProperyTypesService : IProperyTypesService
    {
        private readonly ApplicationDbContext db;

        public ProperyTypesService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreatePropertyTypeAsync(string name)
        {
            var newPropertyType = new PropertyType { Name = name };

            await this.db.PropertyTypes.AddAsync(newPropertyType);
            await this.db.SaveChangesAsync();

            return newPropertyType.Id;
        }

        public ICollection<string> GetAllPropertyTypeName()
        {
            var allPropertyType = this.db.PropertyTypes.OrderBy(x => x.Name).Select(p => p.Name).ToArray();

            return allPropertyType;
        }

        public PropertyType GetPropertyTypeByName(string name)
        {
            var currentPropertyType = this.db.PropertyTypes.FirstOrDefault(p => p.Name == name);

            return currentPropertyType;
        }

        public async Task<bool> DeletePropertyTypeAsync(string name)
        {
            var currentPropertyType = this.db.PropertyTypes.FirstOrDefault(p => p.Name == name);

            if (currentPropertyType != null)
            {
                this.db.PropertyTypes.Remove(currentPropertyType);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}
