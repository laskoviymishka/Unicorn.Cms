using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Unicorn.Cms.Models.Domain;

namespace Unicorn.Cms.Models
{
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		public DbSet<Post> Posts { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Content> Contents { get; set; }
		public DbSet<Media> Medias { get; set; }
		public DbSet<BlogPost> BlogPost { get; set; }
		public DbSet<Comment> Comment { get; set; }
		public DbSet<Tag> Tag { get; set; }
		public DbSet<ApplicationUser> ApplicationUser { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);
		}
	}
}
