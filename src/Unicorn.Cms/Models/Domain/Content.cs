using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unicorn.Cms.Models.Domain
{

	public class Content : IEntity<int>
	{
		public int Id { get; set; }
		public ApplicationUser Author { get; set; }
		public string AuthorId { get; set; }
	}

}
