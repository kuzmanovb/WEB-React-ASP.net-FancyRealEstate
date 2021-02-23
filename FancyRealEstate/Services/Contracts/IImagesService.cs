using System.Collections.Generic;
using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    interface IImagesService
    {
        Task CreateImageAsync(string url, int propertyId);

        Task<ICollection<string>> GetImagesUrlByPropertyIdAsync(int id);

        Task<ICollection<string>> GetPromotionImagesUrAsync();

        Task DeleteImageByIdAsync(int imageId, int propertyId);

    }
}
