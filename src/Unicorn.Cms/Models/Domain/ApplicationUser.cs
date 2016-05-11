using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Unicorn.Cms.Models.Domain
{
	public class ApplicationUser : IdentityUser, IEntity<string>
	{
	}
}
