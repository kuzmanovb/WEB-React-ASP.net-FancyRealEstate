namespace FancyRealEstate.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public int DistrictId { get; set; }

        public District District { get; set; }

        public int CityId { get; set; }

        public City City { get; set; }
    }
}
