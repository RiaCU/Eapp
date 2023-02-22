using MongoDB.Driver;
using MongoDB.Bson;
using Elec_app_api.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;

namespace Elec_app_api.Services
{
    public class organizationService : IorganizationService
    {

        private readonly IMongoCollection<HCO_details> _HCO_details;
        public organizationService(IHCO_DetailsDB settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _HCO_details = database.GetCollection<HCO_details>(settings.HCOCollection);
        }
        public async Task<HCO_details> Create(HCO_details newDetails)
        {
            if (newDetails.Status.Length == 0 || newDetails.Status == "string")
                newDetails.Status = "Submited";
            await _HCO_details.InsertOneAsync(newDetails);
            return newDetails;
        }

        public async Task<List<HCO_details>> Get()
        {
            return await _HCO_details.Find(details => true).ToListAsync();
            //return await _HCO_details.Find<HCO_details>(c => c.Status =="Submited").ToListAsync();
        
    }

        public async Task<HCO_details> GetById(string id)
        {
            return await _HCO_details.Find<HCO_details>(c => c.Id == id).FirstOrDefaultAsync();
        }
        public async void Update(string id, HCO_details updateDetails)
        {
            await _HCO_details.ReplaceOneAsync(x => x.Id == id, updateDetails);
        }


        //private readonly IMongoCollection<HCO_details> _HCO_details;
        //public organizationService(IOptions<dbClass> dabaseSettings)
        //{
        //    var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionString);

        //    var mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);

        //    _HCO_details = mongoDatabase.GetCollection<HCO_details>(dabaseSettings.Value.HCOCollection);
        //}

        //public async Task<HCO_details> CreateAsync(HCO_details newDetails) {
        //    if (newDetails.Status.Length == 0 || newDetails.Status=="string")
        //        newDetails.Status = "Submited";
        //    await _HCO_details.InsertOneAsync(newDetails);
        //    return newDetails;
        //}

        //public async Task<HCO_details> GetByIdAsync(string id)
        //{
        //    return await _HCO_details.Find<HCO_details>(c => c.Id == id).FirstOrDefaultAsync();
        //}

        //public async Task<List<HCO_details>> GetAsync() { 
        //    return await _HCO_details.Find( new BsonDocument()).ToListAsync();
        //}


        //public async Task UpdateAsync(string id, HCO_details updateDetails) =>
        //    await _HCO_details.ReplaceOneAsync(x => x.Id == id, updateDetails);

        //public async Task UpdateStatusAsync(string id, string status)
        //{

        //    FilterDefinition<HCO_details> filter = Builders<HCO_details>.Filter.Eq("Id", id);
        //    UpdateDefinition<HCO_details> update = Builders<HCO_details>.Update.Set<string>("Status", status);
        //    await _HCO_details.UpdateOneAsync(filter, update);
        //    return;
        //}



    }
}
