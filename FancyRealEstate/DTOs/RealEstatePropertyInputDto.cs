using System.Collections.Generic;

namespace FancyRealEstate.DTOs
{
    public class RealEstatePropertyInputDto
    {
        public int Size { get; set; }

        public int? Floor { get; set; }

        public int? TotalNumberOfFloor { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Street { get; set; }

        public string District { get; set; }

        public string City { get; set; }

        public string BuildingNumber { get; set; }

        public string PropertyType { get; set; }

        public int BuildingType { get; set; }

        public string Description { get; set; }

        public string TypeOfDeal { get; set; }

        public bool IsPromotion { get; set; }

        public string UserId { get; set; }

        public virtual ICollection<string> ImagesUrl { get; set; }

        public bool Internet { get; set; }

        public bool Heating { get; set; }

        public bool SecuritySistem { get; set; }

        public bool AirCondition { get; set; }

        public bool Garage { get; set; }

        public bool Elevator { get; set; }

        public bool Renovated { get; set; }

    }
}
