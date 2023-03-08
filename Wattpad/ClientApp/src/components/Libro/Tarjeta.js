
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Tarjeta( { libro } ) {

    return (
        <Card sx={ { display: 'flex' } }>
            <CardMedia
                component="img"
                sx={ { width: 151 } }
                image={ '/resources/' + libro.portadaNombreImagen }
                alt={ libro.nombre }
            />

            <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                <CardContent sx={ { flex: '1 0 auto' } }>
                    <Typography component="div" variant="h5">
                        { libro.nombre }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        by { libro.autor.nombre }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        { libro.categorias.map(cat => cat.nombre + " ") } 
                    </Typography>

                </CardContent>
                <Box sx={ { display: 'flex', alignItems: 'center', pl: 1, pb: 1 } }>
                   
                </Box>
            </Box>
        </Card>
    );

    //return (
    //    <div>
    //        <img src={ '/resources/' + libro.portadaNombreImagen } alt={ libro.nombre } />            
    //        <h1>{ libro.nombre }</h1>
    //        <p>{ libro.descripcion }</p>
    //        <Button->Welcome home</Button>
    //    </div>
    //);
}

export default Tarjeta; 
