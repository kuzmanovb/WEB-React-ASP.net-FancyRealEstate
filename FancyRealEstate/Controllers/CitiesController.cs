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

        [HttpGet("{name}")]
        public IActionResult GetCityByName(string name)
        {
            var currentCity = this.citiesService.GetCityByName(name);

            if (currentCity == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentCity);
        }

        [HttpPost("{name}")]
        public async Task<IActionResult> CreateCity(string name)
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
        public async Task<IActionResult> DeleteCity(string name)
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
