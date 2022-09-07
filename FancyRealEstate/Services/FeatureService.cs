namespace FancyRealEstate.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class FeatureService : IFeatureService
    {
        private readonly ApplicationDbContext db;

        public FeatureService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateFeatureAsync(string name)
        {
            var currentFeature = this.db.Features.FirstOrDefault(x => x.Name == name);
            if (currentFeature == null)
            {
                return 0;
            }

            var newFeature = new Feature { Name = name };

            await this.db.Features.AddAsync(newFeature);
            await this.db.SaveChangesAsync();

            return newFeature.Id;
        }

        public ICollection<string> GetAllFeaturesName()
        {
            var features = this.db.Features.Select(x => x.Name).ToList();

            return features;
        }

        public Feature GetFeatureByName(string name)
        {
            var currentFeature = this.db.Features.FirstOrDefault(x => x.Name == name);

            return currentFeature;
        }

        public async Task<bool> DeleteFeatureAsync(string name)
        {
            var currentFeature = this.db.Features.FirstOrDefault(x => x.Name == name);

            if (currentFeature != null)
            {
                this.db.Features.Remove(currentFeature);
                await this.db.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public ICollection<Feature> GetAllFeatures()
        {
            var features = this.db.Features.ToList();

            return features;
        }
    }
}
