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
        private readonly ICitiesService citiesService;
        private readonly IAddressesService addressesService;

        public DistrictsController(ILogger<DistrictsController> logger, IDistrictsService districtsService, ICitiesService citiesService, IAddressesService addressesService)
        {
            this.logger = logger;
            this.districtsService = districtsService;
            this.citiesService = citiesService;
            this.addressesService = addressesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allDistrict = this.districtsService.GetAllDistrict();

            return this.Ok(allDistrict);

        }

        [HttpGet]
        public IActionResult GetByCity(string cityName)
        {
            var allDistrict = this.districtsService.GetDistrictsNameByCity(cityName);

            return this.Ok(allDistrict);

        }

        [HttpGet]
        public IActionResult GetByName(string name)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name);

            if (currentDistrict == null)
            {
                return this.NoContent();
            }

            return this.Ok(currentDistrict);
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name, string cityName)
        {
            var curentCity = this.citiesService.GetCityByName(cityName);
            if (curentCity == null)
            {
                return this.Conflict(new { message = $"City with name '{cityName}' not existe." });
            }

            var isHasDistrict = this.districtsService.IsHasSameDistrictInCity(name, cityName);

            if (isHasDistrict)
            {
                return this.Conflict(new { message = $"District with name '{name}' in {cityName} already existe." });
            }

            var districtId = await this.districtsService.CreateDistrictAsync(name, cityName);

            if (districtId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string name, string cityName)
        {
            var currentDistrict = this.districtsService.GetDistrictByName(name);

            var addresses = this.addressesService.GetAddressesByDistrictId(currentDistrict.Id);

            if (addresses.Count > 0)
            {
                return this.Conflict(new { message = $"Can't delete district {name}, because used in addresses. First delete addresses." });
            }

            var result = await this.districtsService.DeleteDistrictAsync(name, cityName);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
