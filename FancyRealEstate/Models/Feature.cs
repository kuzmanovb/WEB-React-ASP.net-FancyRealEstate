namespace FancyRealEstate.Models
{
    using System.Collections.Generic;

    public class Feature
    {
        public Feature()
        {
            this.RealEstateProperties = new List<RealEstateProperty>();
        }

        public int Id { get; set; }

        public bool Internet { get; set; }

        public bool Heating { get; set; }

        public bool SecuritySistem { get; set; }

        public bool AirCondition { get; set; }

        public bool Garage { get; set; }

        public bool Elevator { get; set; }

        public bool Renovated { get; set; }

        public virtual ICollection<RealEstateProperty> RealEstateProperties { get; set; }
    }
}
