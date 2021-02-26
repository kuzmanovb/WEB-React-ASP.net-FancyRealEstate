namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class PropertyTypesController : ControllerBase
    {
        private readonly ILogger<PropertyTypesController> logger;
        private readonly IProperyTypesService properyTypesService;

        public PropertyTypesController(ILogger<PropertyTypesController> logger, IProperyTypesService properyTypesService)
        {
            this.logger = logger;
            this.properyTypesService = properyTypesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allPropertytype = this.properyTypesService.GetAllPropertyTypeName();

            return this.Ok(allPropertytype);

        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var currentPropertyType = this.properyTypesService.GetPropertyTypeByName(name);

            if (currentPropertyType == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentPropertyType);
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> Create(string name)
        {
            var currentPropertyType = this.properyTypesService.GetPropertyTypeByName(name);

            if (currentPropertyType != null)
            {
                return this.Conflict(new { message = $"Building type with name '{name}' was already found." });
            }

            var propertyTypeId = await this.properyTypesService.CreatePropertyTypeAsync(name);

            if (propertyTypeId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> Delete(string name)
        {

            var result = await this.properyTypesService.DeletePropertyTypeAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
