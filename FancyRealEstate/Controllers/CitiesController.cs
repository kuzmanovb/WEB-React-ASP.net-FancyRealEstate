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
        private readonly ICountriesService countriesService;

        public CitiesController(ILogger<CitiesController> logger, ICitiesService citiesService, IDistrictsService districtsService, ICountriesService countriesService)
        {
            this.logger = logger;
            this.citiesService = citiesService;
            this.districtsService = districtsService;
            this.countriesService = countriesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allCities = this.citiesService.GetAllCityName();

            return this.Ok(allCities);
        }

        [HttpGet]
        public IActionResult GetByCountry(string countryName)
        {
            var allCities = this.citiesService.GetCitiesNameByCountry(countryName);

            return this.Ok(allCities);
        }

        [HttpGet]
        public IActionResult GetByName(string name)
        {
            var currentCity = this.citiesService.GetCityByName(name);

            if (currentCity == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentCity.Name);
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name, string countryName)
        {
            var curentCountry = this.countriesService.GetCountryByName(name);
            if (curentCountry == null)
            {
                return this.Conflict(new { message = $"Country with name '{countryName}' not exist." });
            }

            var isHasCity = this.citiesService.IsHasSameCityInCountry(name, countryName);

            if (isHasCity)
            {
                return this.Conflict(new { message = $"City with name '{name}' in {countryName} already exist." });
            }

            var cityId = await this.citiesService.CreateSityAsync(name, countryName);

            if (cityId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string name, string countryName)
        {
            var disrtrictsInCity = this.districtsService.GetDistrictsNameByCity(name);

            if (disrtrictsInCity.Count > 0)
            {
                return this.Conflict(new { message = $"Can't delete city {name}, because used in city districts. First delete districts." });
            }

            var result = await this.citiesService.DeleteCityAsync(name, countryName);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }
    }
}
