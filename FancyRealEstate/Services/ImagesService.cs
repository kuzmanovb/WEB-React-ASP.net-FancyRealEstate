namespace FancyRealEstate.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class ImagesService : IImagesService
    {
        private readonly ApplicationDbContext db;

        public ImagesService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public async Task<int> CreateImageAsync(string cloudId, int propertyId)
        {
            var newImage = new Image {CloudId = cloudId, RealEstatePropertyId = propertyId };

            await this.db.Images.AddAsync(newImage);
            await this.db.SaveChangesAsync();

            return newImage.Id;
        }

        public ICollection<string> GetImagesCloudIdByPropertyIdAsync(int propertyId)
        {
            var images = this.db.Images.Where(i => i.RealEstatePropertyId == propertyId).Select(x => x.CloudId).ToArray();

            return images;
        }

        public ICollection<string> GetPromotionImagesUrAsync()
        {
            var images = this.db.Images.Where(i => i.RealEstateProperty.IsPromotion).Select(x => x.CloudId).ToArray();

            return images;
        }

        public async Task<bool> DeleteImageByIdAsync(int imageId)
        {
            var currentImage = this.db.Images.FirstOrDefault(i => i.Id == imageId);

            if (currentImage != null)
            {
                this.db.Images.Remove(currentImage);
                await this.db.SaveChangesAsync();
                return true;
            }

            return false;
        }

    }
}
