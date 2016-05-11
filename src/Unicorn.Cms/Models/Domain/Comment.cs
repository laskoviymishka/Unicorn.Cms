using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Unicorn.Cms.Models.Domain
{
	public class Comment : IEntity<int>
	{
		public int Id { get; set; }
		public ApplicationUser Author { get; set; }
		public string AuthorId { get; set; }
		public DateTime TimeStamp { get; set; }
		public string Text { get; set; }
	}
}
