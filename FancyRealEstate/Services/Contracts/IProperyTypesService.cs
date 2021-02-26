namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using FancyRealEstate.Models;

    public interface IProperyTypesService
    {
        Task<int> CreatePropertyTypeAsync(string name);

        PropertyType GetPropertyTypeByName(string name);

        ICollection<string> GetAllPropertyTypeName();

        Task DeletePropertyTypeAsync(string name);
    }
}
