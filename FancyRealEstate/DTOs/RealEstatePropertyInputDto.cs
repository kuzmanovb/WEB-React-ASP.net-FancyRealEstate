namespace FancyRealEstate.DTOs
{
    using System.Collections.Generic;

    public class RealEstatePropertyInputDto
    {
        public RealEstatePropertyInputDto()
        {
            this.ImageIds = new List<string>();
            this.Features = new List<string>();
        }

        public int Id { get; set; }

        public int Size { get; set; }

        public int? Floor { get; set; }

        public int? TotalNumberOfFloor { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Street { get; set; }

        public string District { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string BuildingNumber { get; set; }

        public string PropertyType { get; set; }

        public string BuildingType { get; set; }

        public string Description { get; set; }

        public string TypeOfDeal { get; set; }

        public bool IsPromotion { get; set; }

        public string UserId { get; set; }

        public ICollection<string> Features { get; set; }

        public ICollection<string> ImageIds { get; set; }


    }
}
