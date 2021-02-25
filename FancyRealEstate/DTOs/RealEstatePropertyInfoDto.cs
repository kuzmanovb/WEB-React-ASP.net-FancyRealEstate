namespace FancyRealEstate.DTOs
{
    using System;
    using System.Collections.Generic;

    public class RealEstatePropertyInfo
    {
        public int Id { get; set; }

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

        public bool IsPromotion { get; set; }

        public string TypeOfDeal { get; set; }

        public DateTime CreatedOn { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public ICollection<string> ImagesUrl { get; set; }

        public bool Internet { get; set; }

        public bool Heating { get; set; }

        public bool SecuritySistem { get; set; }

        public bool AirCondition { get; set; }

        public bool Garage { get; set; }

        public bool Elevator { get; set; }

        public bool Renovated { get; set; }
    }
}
