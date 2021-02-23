using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FancyRealEstate.DTOs
{
    public class AddressInputDto
    {
        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public int DistrictId { get; set; }

        public int CityId { get; set; }

    }
}
