namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]/[action]")]

    // path: api/cities/{action name}?parameters
    public class CitiesController : ControllerBase
    {
        private readonly ILogger<CitiesController> logger;
        private readonly ICitiesService citiesService;
        private readonly IDistrictsService districtsService;

        public CitiesController(ILogger<CitiesController> logger, ICitiesService citiesService, IDistrictsService districtsService)
        {
            this.logger = logger;
            this.citiesService = citiesService;
            this.districtsService = districtsService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allCities = this.citiesService.GetAllCityName(null);

            return this.Ok(allCities);
        }

        [HttpGet]
        public IActionResult GetByCountry(string countryName)
        {
            var allCities = this.citiesService.GetCitiesNameByCountry(countryName);

            return this.Ok(allCities);
        }

        [HttpGet]
        public IActionResult GetByName(string name, int? countryId)
        {
            var currentCity = this.citiesService.GetCityByName(name, countryId);

            if (currentCity == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentCity.Name);
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name, int countryId)
        {
            var currentCity = this.citiesService.GetCityByName(name, countryId);

            if (currentCity != null)
            {
                return this.Conflict(new { message = $"City with name '{name}' was already found." });
            }

            var cityId = await this.citiesService.CreateSityAsync(name, countryId);

            if (cityId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string name, int countryId)
        {
            var currentCity = this.citiesService.GetCityByName(name, countryId);

            var disrtrictsInCity = this.districtsService.GetAllDistrict(currentCity.Id);

            if (disrtrictsInCity != null)
            {
                return this.Conflict(new { message = $"Can't delete city {name}, because used in city districts. First delete districts." });
            }

            var result = await this.citiesService.DeleteCityAsync(name, countryId);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }
    }
}
