namespace Elec_app_api.Models
{
    public interface IHCO_DetailsDB
    {
        public string ConnectionString { get; set; }

        public string DatabaseName { get; set; }

        public string HCOCollection { get; set; }

        public string UserCollection { get; set; }
    }
}
