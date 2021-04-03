namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IImagesService
    {
        Task<int> CreateImageAsync(string cloudId, int propertyId);

        ICollection<string> GetImagesCloudIdByPropertyIdAsync(int propertyId);

        ICollection<string> GetPromotionImagesUrAsync();

        Task<bool> DeleteImageByIdAsync(int imageId);

    }
}
