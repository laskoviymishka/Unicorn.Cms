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
    [Route("api/media")]
    public class MediaController : Controller
    {
        private ApplicationDbContext _context;

        public MediaController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Media
        [HttpGet]
        public IEnumerable<Media> GetMedias()
        {
            return _context.Medias;
        }

        // GET: api/Media/5
        [HttpGet("{id}", Name = "GetMedia")]
        public IActionResult GetMedia([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Media media = _context.Medias.Single(m => m.Id == id);

            if (media == null)
            {
                return HttpNotFound();
            }

            return Ok(media);
        }

        // PUT: api/Media/5
        [HttpPut("{id}")]
        public IActionResult PutMedia(int id, [FromBody] Media media)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            if (id != media.Id)
            {
                return HttpBadRequest();
            }

            _context.Entry(media).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MediaExists(id))
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

        // POST: api/Media
        [HttpPost]
        public IActionResult PostMedia([FromBody] Media media)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            _context.Medias.Add(media);
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (MediaExists(media.Id))
                {
                    return new HttpStatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("GetMedia", new { id = media.Id }, media);
        }

        // DELETE: api/Media/5
        [HttpDelete("{id}")]
        public IActionResult DeleteMedia(int id)
        {
            if (!ModelState.IsValid)
            {
                return HttpBadRequest(ModelState);
            }

            Media media = _context.Medias.Single(m => m.Id == id);
            if (media == null)
            {
                return HttpNotFound();
            }

            _context.Medias.Remove(media);
            _context.SaveChanges();

            return Ok(media);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MediaExists(int id)
        {
            return _context.Medias.Count(e => e.Id == id) > 0;
        }
    }
}