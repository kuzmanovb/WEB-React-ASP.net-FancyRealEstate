namespace FancyRealEstate.DTOs
{
    public class AddressInfoDto
    {
        public int Id { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public string District { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public int RealEstatePropertyId { get; set; }
    }
}
