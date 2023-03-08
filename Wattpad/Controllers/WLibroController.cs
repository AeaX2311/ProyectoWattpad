﻿using Microsoft.AspNetCore.Mvc;
using Wattpad.Models;

namespace Wattpad.Controllers {

    /// <summary>
    /// api/WLibro
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class WLibroController : ControllerBase {
        private readonly WattpadContext _context;

        public WLibroController(WattpadContext context) {
            _context = context;
        }

        /// <summary>
        /// Obtener todos los libros -> api/WLibro/GetAll
        /// </summary>
        /// <returns>Listado completo. Todos los libros</returns>
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<WLibro> GetAll() {
            var libros = from l in _context.WLibros
                         select new WLibro() {
                             IdLibro = l.IdLibro,
                             Nombre = l.Nombre,
                             PortadaNombreImagen = l.PortadaNombreImagen,
                             Descripcion = l.Descripcion,
                             Contenido = l.Contenido,
                             Vistas = l.Vistas,
                             Estrellas = l.Estrellas,
                             HorasLecturaEstimadas = l.HorasLecturaEstimadas,
                             IdAutor = l.IdAutor,
                             Autor = new WAutor() {
                                 IdAutor = l.Autor.IdAutor,
                                 Nombre = l.Autor.Nombre
                             },
                             Categorias = _context.WCategorias
                                                .Where(c => l.Categorias.Contains(c))
                                                .Select(o => new WCategoria(
                                                    o.IdCategoria,
                                                    o.Nombre
                                                ))
                                                .ToList()
                         };

            return libros;
        }
    }
}
