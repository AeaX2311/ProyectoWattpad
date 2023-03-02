using System;
using System.Collections.Generic;

namespace Wattpad.Models;

public partial class WCategoria
{
    public int IdCategoria { get; set; }

    public string Nombre { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public virtual ICollection<WLibro> IdLibros { get; } = new List<WLibro>();
}
