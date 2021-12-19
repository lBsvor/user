using AngularCRUDWebAPI.Infrastructure;
using AngularCRUDWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Threading.Tasks;

namespace AngularCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly Context context;

        public NotesController(Context context)
        {
            this.context = context;
        }

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var result = await context.Note.ToListAsync();
            return Ok(result);
        }


  
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        public async Task<IActionResult> Post([FromBody] Note item)
        {
            var itemToCreate = new Note
            {
                CoordinateX = item.CoordinateX,
                CoordinateY = item.CoordinateY,
                NoteText = item.NoteText
            };
            context.Note.Add(itemToCreate);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = itemToCreate.Id }, null);
        }


    
    }
}
