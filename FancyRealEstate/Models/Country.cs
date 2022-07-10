namespace FancyRealEstate.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Country
    {
        public Country()
        {
            this.Cities = new HashSet<City>();
        }

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<City> Cities { get; set; }
    }
}
