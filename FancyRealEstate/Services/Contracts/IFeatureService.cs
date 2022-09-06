namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using FancyRealEstate.Models;

    public interface IFeatureService
    {
        Task<int> CreateFeatureAsync(string name);

        Feature GetFeatureByName(string name);

        ICollection<string> GetAllFeaturesName();

        Task<bool> DeleteFeatureAsync(string name);
    }
}
