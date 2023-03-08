namespace Wattpad.Models;

public partial class WCategoria {
    public int IdCategoria { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<WLibro> Libros { get; } = new List<WLibro>();

    public WCategoria() { }

    public WCategoria(int idCategoria, string nombre) {
        IdCategoria = idCategoria;
        Nombre = nombre;
    }

    public override bool Equals(object? obj) {
        return obj != null && obj.GetType() == GetType() && IdCategoria == ((WCategoria) obj).IdCategoria;
    }

    public override int GetHashCode() { return IdCategoria.GetHashCode(); }
}
