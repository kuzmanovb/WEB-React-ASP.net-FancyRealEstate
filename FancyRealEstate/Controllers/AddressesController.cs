namespace FancyRealEstate.Controllers
{
    using System.Linq;
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("api/[controller]/[action]")]

    // path: api/addresses/{action name}?parameters
    public class AddressesController : ControllerBase
    {
        private readonly ILogger<AddressesController> logger;
        private readonly IAddressesService addressesService;
        private readonly IRealEstatePropertiesService realEstatePropertiesService;

        public AddressesController(ILogger<AddressesController> logger, IAddressesService addressesService, IRealEstatePropertiesService realEstatePropertiesService)
        {
            this.logger = logger;
            this.addressesService = addressesService;
            this.realEstatePropertiesService = realEstatePropertiesService;
        }

        [HttpGet]
        public IActionResult Get(int id)
        {
            var currentAddress = this.addressesService.GetAddressById(id);

            if (currentAddress == null)
            {
                return this.NotFound();
            }

            return this.Ok(currentAddress);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddressInputDto input)
        {

            var addressId = await this.addressesService.CreateAddressAsync(input);

            if (addressId != 0)
            {
                return this.StatusCode(201);
            }

            return this.BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] AddressInfoDto input)
        {
            var currentAddress = this.addressesService.GetAddressById(input.Id);

            if (currentAddress == null)
            {
                return this.NotFound();
            }

            await this.addressesService.UpdateAddressAsync(input);

            return this.Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var realEstateProperty = this.realEstatePropertiesService.GetPropertiesWithPredicate(x => x.AddressId == id).FirstOrDefault();

            if (realEstateProperty != null)
            {
                return this.Conflict(new { message = $"Can't delete addresse, because used in property {realEstateProperty.Id}. First delete districts." });
            }

            var result = await this.addressesService.DeleteAddressAsync(id);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
