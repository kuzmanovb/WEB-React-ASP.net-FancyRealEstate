namespace FancyRealEstate.DTOs
{
    using System;
    using System.Collections.Generic;

    public class RealEstatePropertyInfoDto
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

        public string Country { get; set; }

        public string BuildingNumber { get; set; }

        public string PropertyType { get; set; }

        public string BuildingType { get; set; }

        public string Description { get; set; }

        public bool IsPromotion { get; set; }

        public string TypeOfDeal { get; set; }

        public string CreatedOn { get; set; }

        public double DaysAgo { get; set; }

        public string SellerFullName { get; set; }

        public string SellerPhoneNumber { get; set; }

        public string SellerEmail { get; set; }

        public bool Renovated { get; set; }

        public ICollection<string> ImageIds { get; set; }

        public ICollection<string> Features { get; set; }

        public int PropertiesCount { get; set; }
    }
}
