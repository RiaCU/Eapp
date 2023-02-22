using Elec_app_api.Models;
using Elec_app_api.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Elec_app_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _UserService;

        public UserController(IUserService UserService)
        {
            _UserService = UserService;
        }

        
        [HttpPost("login")]
        public async Task<ActionResult<User>> Get([FromBody]User user)
        {
            try
            {
                return await _UserService.GetByEmail(user);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
            
            //if (temp == null)
            //{
            //    return NotFound();
            //}
            //return Ok(temp);

        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            try
            {
                var result = await _UserService.Create(user);

                return Ok(result);
            }
            catch(Exception ex)
            {
                return StatusCode(500,ex.Message);
            }
        }

    }
}
