using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace lite.Controllers
{
    public class HomeController : Controller
    {
        // we need hosting environment for base path
        public IHostingEnvironment HostingEnv { get; }

        public HomeController(IHostingEnvironment env)
        {
            HostingEnv = env;
        }
        [HttpGet]
        public IActionResult RedirectIndex()
        {
            return new PhysicalFileResult(
                Path.Combine(HostingEnv.WebRootPath,"index.html"),
                new MediaTypeHeaderValue("text/html") 
            );
        }
        /*

     
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
        */
    }
}
