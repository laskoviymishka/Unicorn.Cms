namespace Unicorn.Cms.Models.Domain
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

    public class ApplicationUser : IdentityUser, IEntity<string>
	{
	}
}
