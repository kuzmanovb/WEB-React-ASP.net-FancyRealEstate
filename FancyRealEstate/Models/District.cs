namespace FancyRealEstate.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class District
    {
        public District()
        {
            this.Addresses = new HashSet<Address>();
        }

        public int Id { get; set; }

        public int CityId { get; set; }

        public City City { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
    }
}
