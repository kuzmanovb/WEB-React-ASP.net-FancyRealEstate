namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class BuildingTypesController : ControllerBase
    {
        private readonly ILogger<BuildingTypesController> logger;
        private readonly IBuildingTypesService buildingTypesService;

        public BuildingTypesController(ILogger<BuildingTypesController> logger, IBuildingTypesService buildingTypesService)
        {
            this.logger = logger;
            this.buildingTypesService = buildingTypesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var buildingTypes = this.buildingTypesService.GetAllBuildingTypeName();

            return this.Ok(buildingTypes);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var currentBuildingType = this.buildingTypesService.GetBuildingTypeByName(name);

            if (currentBuildingType == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentBuildingType);
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> Create(string name)
        {
            var currentBuildingType = this.buildingTypesService.GetBuildingTypeByName(name);

            if (currentBuildingType != null)
            {
                return this.Conflict(new { message = $"Building type with name '{name}' was already found." });
            }

            var buildingTypeId = await this.buildingTypesService.CreateBuildingTypeAsync(name);

            if (buildingTypeId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> Delete(string name)
        {
            var result = await this.buildingTypesService.DeleteBuildingTypeAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }
    }
}
