using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unicorn.Cms.Models.Domain
{
	public class BlogPost : Content
	{
		public string Content { get; set; }
		public IList<Tag> Tags { get; set; }
		public IList<Comment> Comments { get; set; }
	}
}
