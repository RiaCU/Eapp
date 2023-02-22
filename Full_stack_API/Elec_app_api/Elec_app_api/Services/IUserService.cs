using Elec_app_api.Models;

namespace Elec_app_api.Services
{
    public interface IUserService
    {
        Task<User> Create(User user);
        Task<User> GetByEmail(User user);
    }
}
