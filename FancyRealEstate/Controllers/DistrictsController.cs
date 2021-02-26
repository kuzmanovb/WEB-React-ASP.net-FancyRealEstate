namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class DistrictsController : ControllerBase
    {
        private readonly ILogger<DistrictsController> logger;
        private readonly IDistrictsService districtsService;

        public DistrictsController(ILogger<DistrictsController> logger, IDistrictsService districtsService)
        {
            this.logger = logger;
            this.districtsService = districtsService;
        }

        [HttpGet]
        public IActionResult GettAll()
        {
            var allDistrict = this.districtsService.GetAllDistrict();

            return this.Ok(allDistrict);

        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name);

            if (currentDistrict == null)
            {
                return this.NoContent();
            }

            return this.Ok(currentDistrict);
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> Create(string name)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name);

            if (currentDistrict != null)
            {
                return this.Conflict(new { message = $"District with name '{name}' was already found." });
            }

            var districtId = await this.districtsService.CreateDistrictAsync(name);

            if (districtId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> Delete(string name)
        {
            var result = await this.districtsService.DeleteDistrictAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
