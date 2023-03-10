import WAutor from './components/wAutor/WAutor';
import Listado from './components/Libro/Listado';
import Container from '@mui/material/Container';
import './App.css';

function App() {
    return <div id="app">
        <Container fixed maxWidth="lg">
            <h1>Hola</h1>
            <h2>Welcome home, AlanCastro380!</h2>
            <h3>Top Picks for you</h3>
            <Listado />
        </Container>
    </div>
}

export default App;