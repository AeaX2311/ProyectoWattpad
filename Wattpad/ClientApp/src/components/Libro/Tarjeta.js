
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CategoriaVisor from '../Categoria/CategoriaVisor';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Tarjeta( { libro } ) {
    return (
        <Card sx={ { display: 'flex', height:222 } }>
            <CardMedia
                component="img"
                sx={ { width: 151 } }
                image={ '/resources/' + libro.portadaNombreImagen }
                alt={ libro.nombre }
            />

            <Box sx={ { display: 'flex', flexDirection: 'column', height:200 } }>
                <CardContent sx={ { flex: '1 0 auto' } }>
                    <Box>
                        <Link noWrap href="#" variant="subtitle1" sx={ { fontWeight: '600', overflow: 'hidden', maxHeight: 20} } underline="hover" color="#222">
                            { libro.nombre }
                        </Link>
                    </Box>
                    <Link href="#" variant="body2" color="text.secondary" underline="hover" >
                        by { libro.autor.nombre }
                    </Link>


                    <Stack direction="row" spacing={ 1 } sx={ { height: 25, alignItems: "center" } }>
                        <StarIcon fontSize="small" />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { libro.estrellas }K
                        </Typography>
                        <AccessTimeIcon fontSize="small" />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { libro.horasLecturaEstimadas }hrs
                        </Typography>
                        <RemoveRedEyeIcon fontSize="small" />
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { libro.vistas }
                        </Typography>
                    </Stack>


                    <Grid >
                        <Typography variant="body2" color="text.secondary" component="div" sx={ { height: 85, overflow: 'hidden' } }>
                           { libro.descripcion }
                        </Typography>

                    </Grid>


                    <CategoriaVisor key={ libro.idLibro } categorias={ libro.categorias }/>
                </CardContent>
                {/*<Box sx={ { display: 'flex', alignItems: 'center', pl: 1, pb: 1 } }>*/}
                   
                {/*</Box>*/}
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
