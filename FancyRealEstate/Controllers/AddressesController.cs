namespace FancyRealEstate.Controllers
{
    using System.Threading.Tasks;
    using FancyRealEstate.DTOs;
    using FancyRealEstate.Services.Contracts;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [ApiController]
    [Route("[controller]")]
    public class AddressesController : ControllerBase
    {
        private readonly ILogger<AddressesController> logger;
        private readonly IAddressesService addressesService;

        public AddressesController(ILogger<AddressesController> logger, IAddressesService addressesService)
        {
            this.logger = logger;
            this.addressesService = addressesService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currentAddress = this.addressesService.GetAddressesById(id);

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
            var currentAddress = this.addressesService.GetAddressesById(input.Id);

            if (currentAddress == null)
            {
                return this.NotFound();
            }

            await this.addressesService.UpdateAddressAsync(input);

            return this.Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await this.addressesService.DeleteAddressAsync(id);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }
    }
}
