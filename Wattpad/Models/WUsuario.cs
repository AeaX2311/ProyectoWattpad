using System;
using System.Collections.Generic;

namespace Wattpad.Models;

public partial class WUsuario
{
    public int IdUsuario { get; set; }

    public string Nombre { get; set; } = null!;

    public string CorreoElectronico { get; set; } = null!;

    public DateTime FechaNacimiento { get; set; }

    public string Contrasenia { get; set; } = null!;
}
