namespace FancyRealEstate.Services.Contracts
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IImagesService
    {
        Task CreateImageAsync(string url, int propertyId);

        Task<ICollection<string>> GetImagesUrlByPropertyIdAsync(int id);

        Task<ICollection<string>> GetPromotionImagesUrAsync();

        Task<bool> DeleteImageByIdAsync(int imageId, int propertyId);

    }
}
