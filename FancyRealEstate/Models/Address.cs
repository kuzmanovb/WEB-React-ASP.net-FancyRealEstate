namespace FancyRealEstate.Models
{
    using System.Collections.Generic;

    public class Address
    {
        public Address()
        {
            this.RealEstateProperties = new HashSet<RealEstateProperty>();
        }

        public int Id { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public int DistrictId { get; set; }

        public District District { get; set; }

        public int CityId { get; set; }

        public City City { get; set; }

        public ICollection<RealEstateProperty> RealEstateProperties { get; set; }
    }
}
