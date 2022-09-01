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
        private readonly ApplicationDbContext db;
        private readonly ICountriesService countriesService;

        public CountriesController(ICountriesService countriesService)
        {
            this.countriesService = countriesService;
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
            var result = await this.countriesService.DeleteCountryAsync(name);

            if (result)
            {
                return this.Ok();
            }

            return this.NotFound();
        }

    }
}
