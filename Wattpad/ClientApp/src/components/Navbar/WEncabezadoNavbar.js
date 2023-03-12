import './NavBar.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Leer', 'Comunidad'];
const settings = ['Mi perfil', 'Mensajes', 'Notificaciones', 'Libreria', 'Ayuda', 'Configuraciones', 'Cerrar sesion'];

function WEncabezadoNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = ( event ) => { setAnchorElNav( event.currentTarget ); };
    const handleOpenUserMenu = ( event ) => { setAnchorElUser( event.currentTarget ); };
    const handleCloseNavMenu = () => { setAnchorElNav( null ); };
    const handleCloseUserMenu = () => { setAnchorElUser( null ); };

    return (
        <AppBar position="sticky">


            <Container maxWidth="false">
                <Toolbar disableGutters>

                    {/*Logo en pantalla grande*/}
                    <Box sx={ { display: { xs: 'none', md: 'flex' } } }>
                        <Link to='/'>
                            <Button variant="text" size="small" style={ { display: "flex", flexDirection: "column" } }>
                                <img src="/resources/FullLogo.png" width="150" alt="folder" />
                            </Button>
                        </Link>
                    </Box>

                    {/*Menu desplazable en pantalla chica*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*Logo en pantalla chica*/ }
                    <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
                        <Link to='/'>
                            <Button variant="text" size="small" style={ { display: "flex", flexDirection: "column" } }>
                                <img src="/resources/FullLogo.png" width="150" alt="folder" />
                            </Button>
                        </Link>
                    </Box>


                    {/*Botones en pantalla grande*/}
                    <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                        <Button key='btnLeer' sx={ { my: 2, color: 'black', display: 'block' } } onClick={ handleOpenUserMenu }>Leer</Button>
                        <Link to='/Comunidad'><Button key='btnComunidad' sx={ { my: 2, color: 'black', display: 'block' } }>Comunidad</Button></Link>
                    </Box>

                    {/*Boton de usuario*/}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                                    <Link to='/Libros'>
                                        <Typography textAlign="center">{setting}</Typography>

                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default WEncabezadoNavbar;