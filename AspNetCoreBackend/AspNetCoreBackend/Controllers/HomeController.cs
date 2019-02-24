﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreBackend.Models;

namespace AspNetCoreBackend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            string tiedosto = @"C:\Bootcamp\WebDemo\AspNetCoreBackend\AspNetCoreBackend\wwwroot\otsikot.txt";
            List<string> otsikot = System.IO.File.ReadAllLines(tiedosto).ToList();

            return View(otsikot);

        }

        public IActionResult About()
        {
            ViewData["Message"] = "Oman sovelluksen tiedot.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Info()
        {         
            return View();
        }

        public IActionResult Autot()
        {
            List<Auto> autot = new List<Auto>()
            {
                new Auto()
                {
                    Merkki = "Ford",
                    Malli = "Focus",
                    Huippunopeus = 190
                },
                new Auto()
                {
                    Merkki = "Toyota",
                    Malli = "Avensis",
                    Huippunopeus = 220
                },
                new Auto()
                {
                    Merkki = "Porsche",
                    Malli = "911",
                    Huippunopeus = 300
                }
            };

            return View(autot);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
