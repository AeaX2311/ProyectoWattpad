using Microsoft.AspNetCore.Mvc;
using Wattpad.Models;

namespace Wattpad.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class WUsuarioController : ControllerBase {
        private readonly WattpadContext _context;

        public WUsuarioController(WattpadContext context) {
            _context = context;
        }

        // GET: api/WUsuario        
        [HttpGet]
        [Route("Get")]
        public IActionResult Get() {
            List<WUsuario> usuarios = _context.WUsuarios.ToList();
            return StatusCode(StatusCodes.Status200OK, usuarios);
        }

        // POST: api/WUsuario/
        [HttpPost]
        [Route("Post")]
        public IActionResult Post([FromBody] WUsuario usuario) {
            _context.WUsuarios.Add(usuario);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, usuario);
        }

        // DELETE: api/WUsuario
        [HttpDelete]
        [Route("Delete")]
        public IActionResult Delete([FromBody] WUsuario usuario) {
            _context.WUsuarios.Remove(usuario);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status200OK, usuario);
        }

        // PUT: api/WUsuario
        [HttpPut]
        [Route("Put")]
        public IActionResult Put([FromBody] WUsuario usuario) {
            _context.WUsuarios.Update(usuario);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status200OK, usuario);
        }
    }
}
