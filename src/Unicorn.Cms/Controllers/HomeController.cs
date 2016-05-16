using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Authorization;

namespace Unicorn.Cms.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult About()
		{
			return View();
		}

		public IActionResult Contact()
		{
			return View();
		}
	}
}
