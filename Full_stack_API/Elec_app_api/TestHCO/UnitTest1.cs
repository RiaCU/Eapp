using Elec_app_api.Controllers;
using Elec_app_api.Models;
using Elec_app_api.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace TestHCO
{
    public class HCOControllerTest
    {
        HCOController _controller;

        organizationService _service;

        public HCOControllerTest(organizationService OrganizationService)
        {
            //_service = new organizationService();
            _service = OrganizationService;
            _controller = new HCOController(_service);
        }
        [Fact]
        public void Get_ReturnList()
        {
            var mockRepo = new Mock<organizationService>();
            mockRepo.Setup(repo => repo.GetAsync());
        //.ReturnsAsync();
            var controller = new HCOController(mockRepo.Object);
             var result = _controller.Get();

            // Assert
            var viewResult = Assert.IsType<ViewResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<HCO_details>>(
                viewResult.ViewData.Model);
            Assert.IsType<OkObjectResult>(result.Result);

        }
    }
}