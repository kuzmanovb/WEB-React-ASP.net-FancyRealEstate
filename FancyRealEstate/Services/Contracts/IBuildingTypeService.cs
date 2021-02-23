using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FancyRealEstate.Services.Contracts
{
    interface IBuildingTypeService
    {
        Task<int> CreateBuildingTypeAsync(string name);

        Task<string> GetBuildingTypeByIdAsync(int id);

        Task DeleteBuildingTypeAsync(string name);

    }
}
