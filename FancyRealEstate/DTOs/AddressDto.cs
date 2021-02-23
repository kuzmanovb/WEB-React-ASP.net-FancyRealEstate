using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FancyRealEstate.DTOs
{
    public class AddressDto
    {
        public int Id { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public string District { get; set; }

        public string City { get; set; }

    }
}
