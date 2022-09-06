namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]/[action]")]

    // path: api/features/{action name}?parameters
    public class FeaturesController : ControllerBase
    {
        private readonly ILogger<CitiesController> logger;
        private readonly IFeatureService featureService;

        public FeaturesController(ILogger<CitiesController> logger, IFeatureService featureService)
        {
            this.logger = logger;
            this.featureService = featureService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allFeatures = this.featureService.GetAllFeaturesName();

            return this.Ok(allFeatures);
        }

        [HttpPost]
        public IActionResult Create(string name)
        {
            var currentFeature = this.featureService.GetFeatureByName(name);
            if (currentFeature == null)
            {
                return this.Conflict(new { message = $"Feature with name '{name}' already exist." });
            }

            var featureId = this.featureService.CreateFeatureAsync(name);

            if (featureId != null)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }

        public async Task<IActionResult> Delete(string name)
        {
            var result = await this.featureService.DeleteFeatureAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }
    }
}
