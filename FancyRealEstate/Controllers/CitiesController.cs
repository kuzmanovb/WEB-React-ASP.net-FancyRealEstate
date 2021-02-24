namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class CitiesController : ControllerBase
    {
        private readonly ILogger<CitiesController> logger;
        private readonly ICitiesService citiesService;

        public CitiesController(ILogger<CitiesController> logger, ICitiesService citiesService)
        {
            this.logger = logger;
            this.citiesService = citiesService;
        }

        [HttpGet]
        public IActionResult GetAllCities()
        {
            var allCities = this.citiesService.GetAllCityName();

            return this.Ok(allCities);
        }

        [HttpGet("{name}")]
        public IActionResult GetByName(string name)
        {
            var currentCity = this.citiesService.GetCityByName(name);

            if (currentCity == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentCity);
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> Create(string name)
        {
            var currentCity = this.citiesService.GetCityByName(name);

            if (currentCity != null)
            {
                return this.Conflict(new { message = $"City with name '{name}' was already found." });
            }

            var cityId = await this.citiesService.CreateSityAsync(name);

            if (cityId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> Delete(string name)
        {
            var currentCity = this.citiesService.GetCityByName(name);

            if (currentCity == null)
            {
                return this.NotFound();
            }

            await this.citiesService.DeleteCityAsync(name);

            return this.Ok();
        }
    }
}
