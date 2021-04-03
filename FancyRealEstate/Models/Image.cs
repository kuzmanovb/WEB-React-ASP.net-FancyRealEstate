namespace FancyRealEstate.Models
{

    public class Image
    {
        public int Id { get; set; }

        public string CloudId { get; set; }

        public int RealEstatePropertyId { get; set; }

        public virtual RealEstateProperty RealEstateProperty { get; set; }
    }
}
