using Elec_app_api.Models;
using Elec_app_api.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Elec_app_api.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("api/[controller]")]
    public class HCOController : ControllerBase
    {

        private readonly IorganizationService _organizationService;

        public HCOController(IorganizationService OrganizationService)
        {
            _organizationService = OrganizationService;
        }


        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var result =await _organizationService.Get();
            return Ok(result);

        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> Get(string id)
        {
            try
            {
                var ong = await _organizationService.GetById(id);
                if (ong == null)
                {
                    return NotFound();
                }
                return Ok(ong);
            }
            catch(Exception ex)
            {
                return StatusCode(500,ex.Message);
            }

        }


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] HCO_details details)
        {
            try
            {
                var result = await _organizationService.Create(details);

                return Ok(result);
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Update(string id, [FromBody] HCO_details details)
        {
            try
            {
                var ong = await _organizationService.GetById(id);

                if (ong is null)
                {
                    return Ok(ong);
                }
                _organizationService.Update(id, details);
                return Ok(details);
            }
            catch(Exception ex)
            {
                return StatusCode(404,ex.Message);
            }
        }


    }
}
