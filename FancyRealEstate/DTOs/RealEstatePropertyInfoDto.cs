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

        public string DistrictName { get; set; }

        public string CityName { get; set; }

        public string BuildingNumber { get; set; }

        public string CurrentPropertyType { get; set; }

        public string CurrentBuildingType { get; set; }

        public string Description { get; set; }

        public bool IsPromotion { get; set; }

        public string TypeOfDeal { get; set; }

        public string CreatedOn { get; set; }

        public string SellerFullName { get; set; }

        public string SellerPhoneNumber { get; set; }

        public string SellerEmail { get; set; }

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
