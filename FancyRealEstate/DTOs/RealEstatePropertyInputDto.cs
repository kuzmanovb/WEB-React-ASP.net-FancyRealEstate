namespace FancyRealEstate.DTOs
{
    using System.Collections.Generic;

    public class RealEstatePropertyInputDto
    {
        public int Size { get; set; }

        public int? Floor { get; set; }

        public int? TotalNumberOfFloor { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Street { get; set; }

        public string DistrictName { get; set; }

        public string CityName { get; set; }

        public string BuildingNumber { get; set; }

        public string CurrentPropertyType { get; set; }

        public string CurrentBuildingType { get; set; }

        public string Description { get; set; }

        public string TypeOfDeal { get; set; }

        public bool IsPromotion { get; set; }

        public string UserId { get; set; }

        public ICollection<string> Features { get; set; }

        public ICollection<string> ImageIds { get; set; }

        public ICollection<string> ImageUrls { get; set; }

    }
}
