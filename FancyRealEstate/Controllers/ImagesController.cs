namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]/[action]")]

    //path: api/images/{action name}?parameters
    public class ImagesController : ControllerBase
    {
        private readonly ILogger<DistrictsController> logger;
        private readonly IImagesService imagesService;

        public ImagesController(ILogger<DistrictsController> logger, IImagesService imagesService)
        {
            this.logger = logger;
            this.imagesService = imagesService;
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string cloudId)
        {
            var result = await this.imagesService.DeleteImageByIdAsync(cloudId);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }

    }
}
