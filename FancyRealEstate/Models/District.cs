using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FancyRealEstate.Models
{
    public class District
    {
        public District()
        {
            this.Addresses = new List<Address>();

        }
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
    }
}
