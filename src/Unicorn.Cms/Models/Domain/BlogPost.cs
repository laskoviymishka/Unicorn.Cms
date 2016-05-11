using System.Collections.Generic;

namespace Unicorn.Cms.Models.Domain
{
	public class BlogPost : Content
	{
		public string Content { get; set; }
		public IList<Tag> Tags { get; set; }
		public IList<Comment> Comments { get; set; }
	}
}
