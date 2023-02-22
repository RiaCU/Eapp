namespace Elec_app_api.Models
{
    public class HCO_DetailsDB : IHCO_DetailsDB
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
        public string HCOCollection { get; set; } = string.Empty;
        public string UserCollection { get; set; } = string.Empty;
    }
}
