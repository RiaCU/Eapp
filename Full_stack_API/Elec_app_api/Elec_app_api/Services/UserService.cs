using Elec_app_api.Models;
using MongoDB.Driver;

namespace Elec_app_api.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> UserDetails;
        public UserService(IHCO_DetailsDB settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            UserDetails = database.GetCollection<User>(settings.UserCollection);
        }
        public async Task<User> Create(User user)
        {
            var temp = await UserDetails.Find<User>(c => c.Email == user.Email && c.Password== user.Password).FirstOrDefaultAsync();
            if(temp == null) { 
            await UserDetails.InsertOneAsync(user);
            return user;
            }
            return temp;
        }

        public async Task<User> GetByEmail(User user)
        {
            return await UserDetails.Find<User>(c => c.Email == user.Email & c.Password == user.Password).FirstOrDefaultAsync(); 
        }
    }
}
