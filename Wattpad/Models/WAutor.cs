using System;
using System.Collections.Generic;

namespace Wattpad.Models;

public partial class WAutor
{
    public int IdAutor { get; set; }

    public string Nombre { get; set; } = null!;

    public virtual ICollection<WLibro> WLibros { get; } = new List<WLibro>();
}
