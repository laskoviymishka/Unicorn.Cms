using System;

namespace Unicorn.Cms.Models.Domain
{
    public class Content : IEntity<int>
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public ApplicationUser Author { get; set; }
        public string AuthorId { get; set; }
    }
}
