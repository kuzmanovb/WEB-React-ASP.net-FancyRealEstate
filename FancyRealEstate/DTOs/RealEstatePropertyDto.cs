using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FancyRealEstate.DTOs
{
    public class RealEstatePropertyInfo
    {
        public int Id { get; set; }

        public int Size { get; set; }

        public int? Floor { get; set; }

        public int? TotalNumberOfFloor { get; set; }

        public int Year { get; set; }

        public double Price { get; set; }

        public string Description { get; set; }

        public bool IsPromotion { get; set; }

        public string TypeOfDeal { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public int SellerId { get; set; }

        public int AddressId { get; set; }

        public int FeatureId { get; set; }

        public string PropertyType { get; set; }

        public string BuildingType { get; set; }

        public  ICollection<string> ImagesUrl { get; set; }
    }
}
