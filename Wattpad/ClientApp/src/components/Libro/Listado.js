import { useContext } from 'react';
import Tarjeta from './Tarjeta';
import { WLibroContext } from '../../context/WLibroContext';

function Listado() {
    const { libros } = useContext(WLibroContext);

    return <div>
        {libros.map((libro) => (
            <Tarjeta key={libro.idLibro} libro={libro} />
        ))}
    </div>
}

export default Listado;