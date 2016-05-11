using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unicorn.Cms.Models.Domain
{
	public class Category : IEntity<int>
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public bool IsNav { get; set; }
		public Category Parent { get; set; }
		public int? ParentId { get; set; }
		public IList<Category> Childs { get; set; }
	}
}
