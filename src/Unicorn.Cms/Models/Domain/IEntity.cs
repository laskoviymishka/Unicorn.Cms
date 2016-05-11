using System;

namespace Unicorn.Cms.Models.Domain
{
	public interface IEntity<TKey> where TKey : IEquatable<TKey>
	{
		TKey Id { get; set; }
	}

}
