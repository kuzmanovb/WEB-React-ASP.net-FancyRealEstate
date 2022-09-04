namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]/[action]")]

    // path: api/districts/{action name}?parameters
    public class DistrictsController : ControllerBase
    {
        private readonly ILogger<DistrictsController> logger;
        private readonly IDistrictsService districtsService;
        private readonly IAddressesService addressesService;

        public DistrictsController(ILogger<DistrictsController> logger, IDistrictsService districtsService, IAddressesService addressesService)
        {
            this.logger = logger;
            this.districtsService = districtsService;
            this.addressesService = addressesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allDistrict = this.districtsService.GetAllDistrict(null);

            return this.Ok(allDistrict);

        }

        [HttpGet]
        public IActionResult GetByCity(string cityName)
        {
            var allDistrict = this.districtsService.GetDistrictsNameByCity(cityName);

            return this.Ok(allDistrict);

        }

        [HttpGet]
        public IActionResult GetByName(string name, int? cityId)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name, cityId);

            if (currentDistrict == null)
            {
                return this.NoContent();
            }

            return this.Ok(currentDistrict);
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name, int cityId)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name, cityId);

            if (currentDistrict != null)
            {
                return this.Conflict(new { message = $"District with name '{name}' was already found." });
            }

            var districtId = await this.districtsService.CreateDistrictAsync(name, cityId);

            if (districtId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string name, int cityId)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name, cityId);

            var addresses = this.addressesService.GetAddressesByDistrictId(currentDistrict.Id);

            if (addresses != null)
            {
                return this.Conflict(new { message = $"Can't delete district {name}, because used in addresses. First delete addresses." });
            }

            var result = await this.districtsService.DeleteDistrictAsync(name, cityId);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
