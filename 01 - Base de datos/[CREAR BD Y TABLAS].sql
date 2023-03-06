USE master
GO
-- DROP DATABASE Wattpad

CREATE DATABASE [Wattpad]
GO

USE [Wattpad]
GO

CREATE TABLE w_usuarios(
	id_usuario INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	correo_electronico VARCHAR(200) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
	contrasenia VARCHAR(50) NOT NULL
);

CREATE TABLE w_categorias(
	id_categoria INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE w_autores(
	id_autor INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE w_libros(
	id_libro INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	portada_nombre_imagen VARCHAR(200) NULL,
	descripcion VARCHAR(500) NOT NULL,
	contenido VARCHAR(MAX) NOT NULL,
	vistas INT NOT NULL DEFAULT 0,
	estrellas DECIMAL(2, 1) NOT NULL DEFAULT 0,
	horas_lectura_estimadas DECIMAL(6, 1) NOT NULL DEFAULT 1,
	id_autor INT NOT NULL,

	FOREIGN KEY (id_autor) REFERENCES w_autores (id_autor)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE w_libro_categoria_r(
	id_libro INT NOT NULL,
	id_categoria INT NOT NULL,

	PRIMARY KEY (id_libro, id_categoria),

	FOREIGN KEY(id_libro) REFERENCES w_libros (id_libro)
		ON DELETE CASCADE
		ON UPDATE CASCADE,

	FOREIGN KEY(id_categoria) REFERENCES w_categorias (id_categoria)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);