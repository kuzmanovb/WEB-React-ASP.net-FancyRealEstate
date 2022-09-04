namespace FancyRealEstate.Controllers
{
    using FancyRealEstate.Data;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [ApiController]
    [Route("api/[controller]/[action]")]

    // path: api/countries/{action name}?parameters
    public class CountriesController : ControllerBase
    {
        private readonly ICountriesService countriesService;
        private readonly ICitiesService citiesService;

        public CountriesController(ICountriesService countriesService, ICitiesService citiesService)
        {
            this.countriesService = countriesService;
            this.citiesService = citiesService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var contries = this.countriesService.GetAllCountriesName();

            return this.Ok(contries);
        }

        [HttpGet]
        public IActionResult GetByName(string name)
        {
            var currentCountry = this.countriesService.GetCountryByName(name);

            if (currentCountry == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentCountry);
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name)
        {

            var countryId = await this.countriesService.CreateCountryAsync(name);

            if (countryId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete (string name)
        {
            var citiesInCountry = this.citiesService.GetCitiesNameByCountry(name);

            if (citiesInCountry.Count > 0)
            {
                return this.Conflict(new { message = $"Can't delete country {name}, because used in cities. First delete cities." });
            }

            var result = await this.countriesService.DeleteCountryAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }

    }
}
