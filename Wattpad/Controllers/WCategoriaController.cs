using Microsoft.AspNetCore.Mvc;
using Wattpad.Models;

namespace Wattpad.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class WCategoriaController : ControllerBase {
        private readonly WattpadContext _context;

        public WCategoriaController(WattpadContext context) {
            _context = context;
        }

        // GET: api/WCategoria
        [HttpGet]
        [Route("Get")]
        public IActionResult Get() {
            List<WCategoria> categorias = _context.WCategorias.ToList();
            return StatusCode(StatusCodes.Status200OK, categorias);
        }
    }
}
