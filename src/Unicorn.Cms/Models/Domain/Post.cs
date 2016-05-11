namespace Unicorn.Cms.Models.Domain
{
	public class Post : IEntity<int>
	{
		public int Id { get; set; }
		public ApplicationUser Author { get; set; }
		public string AuthorId { get; set; }
		public string Title { get; set; }
		public string Url { get; set; }
		public Category Category { get; set; }
		public int CategoryId { get; set; }
		public Content Content { get; set; }
	}
}
