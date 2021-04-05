namespace FancyRealEstate.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using CloudinaryDotNet;
    using FancyRealEstate.Data;
    using FancyRealEstate.Models;
    using FancyRealEstate.Services.Contracts;

    public class ImagesService : IImagesService
    {
        private readonly ApplicationDbContext db;
        private readonly Cloudinary cloudinary;

        public ImagesService(ApplicationDbContext db, Cloudinary cloudinary)
        {
            this.db = db;
            this.cloudinary = cloudinary;
        }

        public async Task<int> CreateImageAsync(string cloudId, int propertyId)
        {
            var newImage = new Image { CloudId = cloudId, RealEstatePropertyId = propertyId };

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

        public async Task<bool> DeleteImageByIdAsync(string imageId)
        {
            var currentImage = this.db.Images.FirstOrDefault(i => i.CloudId == imageId);

            var result = await this.cloudinary.DeleteResourcesAsync(imageId);

            if (currentImage != null)
            {

                this.db.Images.Remove(currentImage);
                await this.db.SaveChangesAsync();
                return true;
            }

            if (result.Deleted.Count != 0)
            {
                return true;
            }

            return false;
        }

    }
}
