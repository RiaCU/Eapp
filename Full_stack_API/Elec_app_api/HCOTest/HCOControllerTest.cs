using Elec_app_api.Services;
using Elec_app_api.Controllers;
using Microsoft.AspNetCore.Mvc;
//using Moq;
using Elec_app_api.Models;

namespace HCOTest
{
    public class Tests
    {
        private readonly IorganizationService _organizationService;
        //private MockRepository mockRepository;
        //private Mock<IorganizationService> mockHcoRepo;


        [SetUp]
        public void Setup()
        {
            //this.mockRepository = new MockRepository(MockBehavior.Strict);
            //this.mockHcoRepo = this.mockRepository.Create<IorganizationService>();
        }

        
        [Test]
       public void Get_NotNull()
       {
            //Arrange

            HCOController hco = new HCOController(_organizationService);

            //Act
            var record = hco.Get();

            //Assert
            Assert.IsNotNull(record);
       }


       [Test]
       public void GetById_NotNull()
       {
            //Arrange
            HCOController hco = new HCOController(_organizationService);

            //Act
            var record = hco.Get("6387497c88013deb934b05cd");

            //Assert
            Assert.IsNotNull(record);
           
       }

        [Test]
        public void Create_ReturnNotNull()
        {
            //Arrange
            HCOController hco = new HCOController(_organizationService);

            HCO_details info = new HCO_details()
            {
                Id = "6387497c88013deb934b05cd",
                OName = "TestOrganization",
                Address = "ABCD,1234",
                State = "West Bengal",
                Country = "India",
                City = "Kolkata",
                Zipcode = 700090,
                Email = "test@123.com",
                Website = "www.abcd.com",
                PriContact = "Skgf",
                PriContactmob = 9876543210,
                SecContact = "Lkhjg",
                SecContactmob = 9876543210,
                ProgramtobeAccreditted = "U",
                Status = ""
            };

            String id = "6387497c88013deb934b05cd";

            //Act
            var record = hco.Update(id,info);

            //Assert
            Assert.IsNotNull(record);

        }

        [Test]
        public void Update_ReturnNotNull()
        {
            //Arrange
            HCOController hco = new HCOController(_organizationService);

            HCO_details info = new HCO_details()
            {
                Id = "",
                OName = "TestOrganization",
                Address = "ABCD,1234",
                State = "West Bengal",
                Country = "India",
                City = "Kolkata",
                Zipcode = 700090,
                Email = "test@123.com",
                Website = "www.abcd.com",
                PriContact = "Skgf",
                PriContactmob = 9876543210,
                SecContact = "Lkhjg",
                SecContactmob = 9876543210,
                ProgramtobeAccreditted = "U",
                Status = ""
            };

            //Act
            var record = hco.Create(info);

            //Assert
            Assert.IsNotNull(record);

        }

        //private HCOController Create()
        //{
        //    return new HCOController(this.mockHcoRepo.Object);
        //}



        //[Test]
        //public void GetAll_ExpectedBehaviour()
        //{
        //    var hcoController = Create();
        //    HCO_details info = new HCO_details()
        //    {
        //        Id = "",
        //        OName = "TestOrganization",
        //        Address = "ABCD,1234",
        //        State = "West Bengal",
        //        Country = "India",
        //        City = "Kolkata",
        //        Zipcode = 700090,
        //        Email = "test@123.com",
        //        Website = "www.abcd.com",
        //        PriContact = "Skgf",
        //        PriContactmob = 9876543210,
        //        SecContact = "Lkhjg",
        //        SecContactmob = 9876543210,
        //        Status = ""
        //    };
        //    mockHcoRepo.Setup(i => i.Get());
        //    var result = hcoController.Get();
        //    var final = result;
        //    Assert.True(true);
        //    this.mockHcoRepo.Verify(i => i.Get(), Times.Once());
        //    this.mockRepository.VerifyAll();

        //    //mockHcoRepo.Setup(i => i.Create(info));
        //    //var result1 = hcoController.Create(info);
        //    //var final1 = result;
        //    //Assert.True(true);
        //    //this.mockHcoRepo.Verify(i => i.Create(info), Times.Once());
        //    //this.mockRepository.VerifyAll();

        //}


    }
}