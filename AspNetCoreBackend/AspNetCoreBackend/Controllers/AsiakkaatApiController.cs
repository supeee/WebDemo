﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreBackend.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreBackend.Controllers
{
    [Route("api/asiakkaat")]
    [ApiController]
    public class AsiakkaatApiController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        // näyttää kaikki asiakkaat
        public List<Customers> Listaus()
        {

            NorthwindContext context = new NorthwindContext();
            List<Customers> allCustomers = context.Customers.ToList();

            return allCustomers;
        }
        // näyttää asiakkaan Id:n perusteella
        [HttpGet]
        [Route("{asiakasId}")]

        public Customers Yksittäinen(string asiakasId)
        {

            NorthwindContext context = new NorthwindContext();
            Customers asiakas = context.Customers.Find(asiakasId);

            return asiakas;
        }


        // lisää asiakkaan
        [HttpPost]
        [Route("")]

        public bool Luonti([FromBody] Customers uusi)
        {
            NorthwindContext context = new NorthwindContext();
            context.Customers.Add(uusi);
            context.SaveChanges();

            return true;
        }


        // muokkaa asiakasta
        [HttpPut]
        [Route("{asiakasId}")]

        public Customers Muokkaus(string asiakasId, [FromBody] Customers muutokset)
        {
            NorthwindContext context = new NorthwindContext();
            Customers asiakas = context.Customers.Find(asiakasId);

            // löytyykö asiakas annetulla Id:llä?
            if (asiakas == null)
            {
                return null;
            }

            // muokkausta haluttuihin kenttiin

            asiakas.CompanyName = muutokset.CompanyName;
            asiakas.ContactName = muutokset.ContactName;
            asiakas.ContactTitle = muutokset.ContactTitle;
            asiakas.Address = muutokset.Address;
            asiakas.City = muutokset.City;
            asiakas.PostalCode = muutokset.PostalCode;
            asiakas.Country = muutokset.Country;
            asiakas.Phone = muutokset.Phone;
            asiakas.Fax = muutokset.Fax;

            context.SaveChanges();
            return asiakas;
        }


        // poistaa asiakkkaan tietokannasta
        [HttpDelete]
        [Route("{asiakasId}")]

        public bool Poisto(string asiakasId)
        {
            NorthwindContext context = new NorthwindContext();
            Customers asiakas = context.Customers.Find(asiakasId);

            // löytyykö asiakas annetulla Id:llä?
            if (asiakas == null)
            {
                return false;
            }

            context.Customers.Remove(asiakas);
            context.SaveChanges();

            return true;


        }
    }
}