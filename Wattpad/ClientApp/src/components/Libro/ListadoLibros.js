import './ListadoLibros.css'
import { useContext } from 'react';
import Tarjeta from './Tarjeta';
import { WLibroContext } from '../../context/WLibroContext';
import Grid from '@mui/material/Grid';

function ListadoLibros() {
    const { libros } = useContext(WLibroContext);

    return (
        <Grid container spacing={ { xs: 1, md: 3 } } columns={ { xs: 1, sm: 1, md: 12 } } id="listadoLibros">
            { libros.map( ( libro ) => (
                <Grid item xs={ 1 } sm={ 1 } md={ 6 } key={ libro.idLibro } sx={ { height: 250 } }>
                    <Tarjeta libro={ libro } />
                </Grid>
            ) ) }
        </Grid>
    );
}

export default ListadoLibros;