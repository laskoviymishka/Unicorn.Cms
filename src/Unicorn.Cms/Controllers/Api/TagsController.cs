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
	[Route("api/tags")]
	public class TagsController : Controller
	{
		private ApplicationDbContext _context;

		public TagsController(ApplicationDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public IEnumerable<Tag> GetTag()
		{
			return _context.Tag;
		}

		[HttpGet("{id}", Name = "GetTag")]
		public IActionResult GetTag([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			Tag tag = _context.Tag.Single(m => m.Id == id);

			if (tag == null)
			{
				return HttpNotFound();
			}

			return Ok(tag);
		}

		[HttpPut("{id}")]
		public IActionResult PutTag(int id, [FromBody] Tag tag)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			if (id != tag.Id)
			{
				return HttpBadRequest();
			}

			_context.Entry(tag).State = EntityState.Modified;

			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!TagExists(id))
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
		public IActionResult PostTag([FromBody] Tag tag)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			_context.Tag.Add(tag);
			try
			{
				_context.SaveChanges();
			}
			catch (DbUpdateException)
			{
				if (TagExists(tag.Id))
				{
					return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
				}
				else
				{
					throw;
				}
			}

			return CreatedAtRoute("GetTag", new { id = tag.Id }, tag);
		}

		[HttpDelete("{id}")]
		public IActionResult DeleteTag(int id)
		{
			if (!ModelState.IsValid)
			{
				return HttpBadRequest(ModelState);
			}

			Tag tag = _context.Tag.Single(m => m.Id == id);
			if (tag == null)
			{
				return HttpNotFound();
			}

			_context.Tag.Remove(tag);
			_context.SaveChanges();

			return Ok(tag);
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_context.Dispose();
			}
			base.Dispose(disposing);
		}

		private bool TagExists(int id)
		{
			return _context.Tag.Count(e => e.Id == id) > 0;
		}
	}
}