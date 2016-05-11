using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Unicorn.Cms.Models;
using Unicorn.Cms.Models.Domain;

namespace Unicorn.Cms.Controllers
{
	[Produces("application/json")]
	[Route("api/posts")]
	public class PostsController : Controller
	{
		private ApplicationDbContext _context;

		public PostsController(ApplicationDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public IEnumerable<Post> GetPosts()
		{
			return _context.Posts;
		}

		[HttpGet("{id}", Name = "GetPost")]
		public IActionResult GetPost([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			Post post = _context.Posts.Single(m => m.Id == id);

			if (post == null)
			{
				return HttpNotFound();
			}

			return Ok(post);
		}

		[HttpPut("{id}")]
		public IActionResult PutPost(int id, [FromBody] Post post)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			if (id != post.Id)
			{
				return HttpBadRequest();
			}

			_context.Entry(post).State = EntityState.Modified;

			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!PostExists(id))
				{
					return HttpNotFound();
				}
				else
				{
					throw;
				}
			}

			return new HttpStatusCodeResult(StatusCodes.Status204NoContent);
		}

		[HttpPost]
		public IActionResult PostPost([FromBody] Post post)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			_context.Posts.Add(post);
			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateException)
			{
				if (PostExists(post.Id))
				{
					return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
				}
				else
				{
					throw;
				}
			}

			return CreatedAtRoute("GetPost", new { id = post.Id }, post);
		}

		[HttpDelete("{id}")]
		public IActionResult DeletePost(int id)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			Post post = _context.Posts.Single(m => m.Id == id);
			if (post == null)
			{
				return HttpNotFound();
			}

			_context.Posts.Remove(post);
			_context.SaveChanges();

			return Ok(post);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_context.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool PostExists(int id)
		{
			return _context.Posts.Count(e => e.Id == id) > 0;
		}
	}
}