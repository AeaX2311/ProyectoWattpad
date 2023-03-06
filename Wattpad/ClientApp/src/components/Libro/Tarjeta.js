
function Tarjeta({ libro }) {

    return (
        <div>
            <img src={'/resources/' + libro.portadaNombreImagen} alt={libro.nombre} />   
            <h1>{libro.nombre}</h1>
            <p>{libro.descripcion}</p>
        </div>
    );
}

export default Tarjeta; 