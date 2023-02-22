using Elec_app_api.Models;

namespace Elec_app_api.Services
{
    public interface IorganizationService
    {
        Task<List<HCO_details>> Get();
        Task<HCO_details> Create(HCO_details newDetails);
        Task<HCO_details> GetById(string id);
        void Update(string id, HCO_details updateDetails);
    }
}
