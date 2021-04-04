namespace FancyRealEstate.Controllers
{
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class SortedRealEstateProperiesController : ControllerBase
    {
        private const int NumberPropertyToPage = 9;

        private readonly ILogger<SortedRealEstateProperiesController> logger;
        private readonly IRealEstatePropertiesService realEstatePropertiesService;

        public SortedRealEstateProperiesController(ILogger<SortedRealEstateProperiesController> logger, IRealEstatePropertiesService realEstatePropertiesService)
        {
            this.logger = logger;
            this.realEstatePropertiesService = realEstatePropertiesService;
        }

        [HttpPost]
        public IActionResult GetSorted([FromBody] SortedRealestatePropertiesDto input)
        {

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var properties = this.realEstatePropertiesService.GetSortedProperties(input);

            return this.Ok(properties);
        }
    }
}
