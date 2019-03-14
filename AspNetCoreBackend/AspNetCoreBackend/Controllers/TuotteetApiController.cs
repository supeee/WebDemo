using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreBackend.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreBackend.Controllers
{
    [Route("api/tuotteet")]
    [ApiController]
    public class TuotteetApiController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        // näyttää kaikki asiakkaat
        public List<Products> TuoteListaus()
        {

            NorthwindContext context = new NorthwindContext();
            List<Products> allProducts = context.Products.ToList();

            return allProducts;
        }
    }
}