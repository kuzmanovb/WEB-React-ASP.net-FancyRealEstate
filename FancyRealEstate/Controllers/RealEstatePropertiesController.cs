namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class RealEstatePropertiesController : ControllerBase
    {
        private readonly ILogger<RealEstatePropertiesController> logger;
        private readonly IRealEstatePropertiesService realEstatePropertiesService;

        public RealEstatePropertiesController(ILogger<RealEstatePropertiesController> logger, IRealEstatePropertiesService realEstatePropertiesService)
        {
            this.logger = logger;
            this.realEstatePropertiesService = realEstatePropertiesService;
        }

        [HttpGet]
        public IActionResult GetAllActive()
        {
            var allProperty = this.realEstatePropertiesService.GetPropertiesWithPredicate(x => x.IsDeleted == false);

            return this.Ok(allProperty);

        }

        // Get soft deleted property "RealEstateProperties/id?isDeleted=true"
        [HttpGet("{id}")]
        public IActionResult GetById(int id, bool isDeleted)
        {

            var currentProperty = this.realEstatePropertiesService.GetPropertiesWithPredicate(x => x.Id == id && x.IsDeleted == isDeleted);

            if (currentProperty == null || currentProperty.Count == 0)
            {
                return this.NotFound();
            }

            return this.Ok(currentProperty);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RealEstatePropertyInputDto input)
        {
            var newRealEstatePropertyId = await this.realEstatePropertiesService.CreateRealEstateProperyAsync(input);

            if (newRealEstatePropertyId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [Authorize]
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] RealEstatePropertyInputDto input)
        {
            var currentProperty = this.realEstatePropertiesService.GetPropertiesWithPredicate(x => x.Id == input.Id);

            if (currentProperty.Count == 0)
            {
                return this.NotFound();
            }

            await this.realEstatePropertiesService.UpdatePropertyAsync(input);

            return this.Ok();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> SoftDelete(int id)
        {
            var result = await this.realEstatePropertiesService.DeletePropertyAsync(id);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
