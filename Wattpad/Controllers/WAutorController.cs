using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Wattpad.Models;

namespace Wattpad.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class WAutorController : ControllerBase {
        private readonly WattpadContext _context;

        public WAutorController(WattpadContext context) {
            _context = context;
        }

        // GET: api/WAutor        
        [HttpGet]
        [Route("Get")]
        public IActionResult Get() {
            List<WAutor> autores = _context.WAutores.ToList();
            return StatusCode(StatusCodes.Status200OK, autores);
        }
    }
}
