namespace Wattpad.Models;

public partial class WLibro {
    public int IdLibro { get; set; }

    public string Nombre { get; set; } = null!;

    public string? PortadaNombreImagen { get; set; }

    public string Descripcion { get; set; } = null!;

    public string Contenido { get; set; } = null!;

    public int Vistas { get; set; }

    public decimal Estrellas { get; set; }

    public decimal HorasLecturaEstimadas { get; set; }

    public int IdAutor { get; set; }

    public virtual WAutor Autor { get; set; } = null!;

    public virtual List<WCategoria> Categorias { get; set; } = new List<WCategoria>();
}