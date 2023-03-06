using Microsoft.AspNetCore.Mvc;
using Wattpad.Models;

namespace Wattpad.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class WLibroController : ControllerBase {
        private readonly WattpadContext _context;

        public WLibroController(WattpadContext context) {
            _context = context;
        }

        // GET: api/WLibro
        [HttpGet]
        [Route("Get")]
        public IActionResult Get() {
            List<WLibro> libros = _context.WLibros.ToList();
            return StatusCode(StatusCodes.Status200OK, libros);
        }
    }
}
