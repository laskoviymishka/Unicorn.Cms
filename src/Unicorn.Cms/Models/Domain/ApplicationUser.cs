using Microsoft.AspNet.Identity.EntityFramework;

namespace Unicorn.Cms.Models.Domain
{
	public class ApplicationUser : IdentityUser, IEntity<string>
	{
	}
}
