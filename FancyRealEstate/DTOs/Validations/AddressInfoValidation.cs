namespace FancyRealEstate.DTOs.Validations
{
    using FluentValidation;

    public class AddressInfoDtoValidation : AbstractValidator<AddressInfoDto>
    {
        public AddressInfoDtoValidation()
        {
            this.RuleFor(x => x.City).NotNull();
        }
    }
}
