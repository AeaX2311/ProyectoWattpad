using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Wattpad.Models;

public partial class WattpadContext : DbContext
{
    public WattpadContext()
    {
    }

    public WattpadContext(DbContextOptions<WattpadContext> options)
        : base(options)
    {
    }

    public virtual DbSet<WAutor> WAutores { get; set; }

    public virtual DbSet<WCategoria> WCategorias { get; set; }

    public virtual DbSet<WLibro> WLibros { get; set; }

    public virtual DbSet<WUsuario> WUsuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=AEAXPC;Database=Wattpad;TrustServerCertificate=True;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<WAutor>(entity =>
        {
            entity.HasKey(e => e.IdAutor).HasName("PK__w_autore__5FC3872DADD3D3AD");

            entity.ToTable("w_autores");

            entity.Property(e => e.IdAutor).HasColumnName("id_autor");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<WCategoria>(entity =>
        {
            entity.HasKey(e => e.IdCategoria).HasName("PK__w_catego__CD54BC5A12AA0734");

            entity.ToTable("w_categorias");

            entity.Property(e => e.IdCategoria).HasColumnName("id_categoria");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        modelBuilder.Entity<WLibro>(entity =>
        {
            entity.HasKey(e => e.IdLibro).HasName("PK__w_libros__EC09C24ED9014538");

            entity.ToTable("w_libros");

            entity.Property(e => e.IdLibro).HasColumnName("id_libro");
            entity.Property(e => e.Contenido)
                .IsUnicode(false)
                .HasColumnName("contenido");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Estrellas)
                .HasColumnType("decimal(2, 1)")
                .HasColumnName("estrellas");
            entity.Property(e => e.HorasLecturaEstimadas)
                .HasDefaultValueSql("((1))")
                .HasColumnType("decimal(6, 1)")
                .HasColumnName("horas_lectura_estimadas");
            entity.Property(e => e.IdAutor).HasColumnName("id_autor");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.PortadaNombreImagen)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("portada_nombre_imagen");
            entity.Property(e => e.Vistas).HasColumnName("vistas");

            entity.HasOne(d => d.IdAutorNavigation).WithMany(p => p.WLibros)
                .HasForeignKey(d => d.IdAutor)
                .HasConstraintName("FK__w_libros__id_aut__2D27B809");

            entity.HasMany(d => d.IdCategoria).WithMany(p => p.IdLibros)
                .UsingEntity<Dictionary<string, object>>(
                    "WLibroCategoriaR",
                    r => r.HasOne<WCategoria>().WithMany()
                        .HasForeignKey("IdCategoria")
                        .HasConstraintName("FK__w_libro_c__id_ca__30F848ED"),
                    l => l.HasOne<WLibro>().WithMany()
                        .HasForeignKey("IdLibro")
                        .HasConstraintName("FK__w_libro_c__id_li__300424B4"),
                    j =>
                    {
                        j.HasKey("IdLibro", "IdCategoria").HasName("PK__w_libro___50DC898BF06E6BED");
                        j.ToTable("w_libro_categoria_r");
                        j.IndexerProperty<int>("IdLibro").HasColumnName("id_libro");
                        j.IndexerProperty<int>("IdCategoria").HasColumnName("id_categoria");
                    });
        });

        modelBuilder.Entity<WUsuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__w_usuari__4E3E04ADA39C4B83");

            entity.ToTable("w_usuarios");

            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.Contrasenia)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("contrasenia");
            entity.Property(e => e.CorreoElectronico)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("correo_electronico");
            entity.Property(e => e.FechaNacimiento)
                .HasColumnType("date")
                .HasColumnName("fecha_nacimiento");
            entity.Property(e => e.Nombre)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("nombre");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
