namespace FancyRealEstate.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class City
    {
        public City()
        {
            this.Districts = new HashSet<District>();
        }

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<District> Districts { get; set; }
    }
}
