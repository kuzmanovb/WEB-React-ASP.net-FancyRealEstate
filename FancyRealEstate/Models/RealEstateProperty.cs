﻿namespace FancyRealEstate.Models
{
    using System;
    using System.Collections.Generic;
    using FancyRealEstate.Models.Enum;

    public class RealEstateProperty
    {
        public RealEstateProperty()
        {
            this.Images = new List<Image>();
        }

        public int Id { get; set; }

        public int Size { get; set; }

        public int? Floor { get; set; }

        public int? TotalNumberOfFloor { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Description { get; set; }

        public TypeOfDeal TypeOfDeal { get; set; }

        public bool IsPromotion { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        public int AddressId { get; set; }

        public Address Address { get; set; }

        public int FeatureId { get; set; }

        public Feature Feature { get; set; }

        public int PropertyTypeId { get; set; }

        public PropertyType PropertyType { get; set; }

        public int BuildingTypeId { get; set; }

        public BuildingType BuildingType { get; set; }

        public virtual ICollection<Image> Images { get; set; }

    }
}
