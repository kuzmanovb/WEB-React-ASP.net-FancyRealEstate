namespace FancyRealEstate.Models
{
    using System.Collections.Generic;

    public class Feature
    {
        public Feature()
        {
            this.RealEstateProperties = new HashSet<RealEstateProperty>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<RealEstateProperty> RealEstateProperties{ get; set; }
    }
}
