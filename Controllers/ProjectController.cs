using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lite.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lite.Controllers
{
  //   [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private readonly DataContext _context;

        public ProjectController(DataContext context)
        {
            _context = context;
        }

        // GET: api/values
       // [HttpGet("[action]")]
        //[Authorize]
              
        public IEnumerable<Project> Get()
        {
            return _context.Projects;
        }

        // POST: api/StudentMastersAPI  
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Project project)  
        {  
            if (!ModelState.IsValid)  
            {  
                return BadRequest(ModelState);  
            }  
  
            _context.Projects.Add(project);  
            try  
            {  
                await _context.SaveChangesAsync();  
            }  
            catch (DbUpdateException)  
            {  
                if (ProjectExists(project.ID))  
                {  
                    return new StatusCodeResult(StatusCodes.Status409Conflict);  
                }  
                else  
                {  
                    throw;  
                }  
            }  
            return CreatedAtAction("Get", new { id = project.ID }, project);  
        }

        private bool ProjectExists(int id)  
        {  
            return _context.Projects.Any(e => e.ID == id);  
        }

        // PUT: api/ExternalGridController/5  
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] int id, [FromBody] Project project)  
        {  
            if (!ModelState.IsValid)  
            {  
                return BadRequest(ModelState);  
            }  
  
            if (id != project.ID)  
            {  
                return BadRequest();  
            }  
  
            _context.Entry(project).State = EntityState.Modified;  
  
            try  
            {  
                await _context.SaveChangesAsync();  
            }  
            catch (DbUpdateConcurrencyException)  
            {  
                if (!ProjectExists(id))  
                {  
                    return NotFound();  
                }  
                else  
                {  
                    throw;  
                }  
            }  
  
            return NoContent();  
        }

        // DELETE: api/ExternalGridController/5  
        [HttpDelete("{id}")]  
        public async Task<IActionResult> Delete([FromRoute] int id)  
        {  
            if (!ModelState.IsValid)  
            {  
                return BadRequest(ModelState);  
            }  
  
            Project project = await _context.Projects.SingleOrDefaultAsync(m => m.ID == id);  
            if (project == null)  
            {  
                return NotFound();  
            }  
  
            _context.Projects.Remove(project);  
            await _context.SaveChangesAsync();
              
            return Ok(project);  
        }



      

        [HttpPost]
        public async Task<IActionResult> CreateProject([FromBody] Project project)  
        {  
            
            if (!ModelState.IsValid)  
            {  
                return BadRequest(ModelState);  
            }  
  
            
           
            _context.Projects.Add(project);  
            try  
            {  
                await _context.SaveChangesAsync();  
            }  
            catch (DbUpdateException)  
            {  
                if (ProjectExists(project.ID))  
                {  
                    return new StatusCodeResult(StatusCodes.Status409Conflict);  
                }  
                else  
                {  
                    throw;  
                }  
            }  
            return CreatedAtAction("Get", new { id = project.ID }, project); 
            
        }

       

    }
}