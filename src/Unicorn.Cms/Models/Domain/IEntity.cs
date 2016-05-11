using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Unicorn.Cms.Models.Domain
{
	public interface IEntity<TKey> where TKey : IEquatable<TKey>
	{
		TKey Id { get; set; }
	}

}
