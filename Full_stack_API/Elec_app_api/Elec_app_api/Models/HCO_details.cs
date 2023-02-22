using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Elec_app_api.Models
{
    public class HCO_details
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        //public string HCO_id { get; set; }
        [Required]
        public string OName { get; set; } = null!;
        [Required]
        public string Address { get; set; } = null!;
        [Required] 
        public string Country { get; set; } = null!;
        [Required]
        public string State { get; set; } = null!;
        [Required]
        public string City { get; set; } = null!;
        [Required]
        //[MaxLength(6), MinLength(6)]
        public int Zipcode { get; set; }
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Website { get; set; } = null!;
        [Required]
        public string PriContact { get; set; }
        [Required]
        //[MaxLength(10), MinLength(10)]
        public long PriContactmob { get; set; }
        [Required]
        public string SecContact { get; set; }
        [Required]
        //[MaxLength(10),MinLength(10)]
        public long SecContactmob { get; set; }
        [Required]
        public string ProgramtobeAccreditted { get; set; }
        public string Status { get; set; }
        




    }
}
