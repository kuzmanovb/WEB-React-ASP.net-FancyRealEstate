using System.ComponentModel.DataAnnotations;

namespace FancyRealEstate.Models
{
    public class Image
    {
        public int Id { get; set; }

        [Required]
        public string Url { get; set; }

        public int RealEstatePropertyId { get; set; }

        public RealEstateProperty RealEstateProperty { get; set; }
    }
}
