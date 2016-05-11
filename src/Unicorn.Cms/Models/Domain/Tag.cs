namespace Unicorn.Cms.Models.Domain
{
	public class Tag : IEntity<int>
	{
		public int Id { get; set; }
		public string Title { get; set; }
	}
}
