import Chip from '@mui/material/Chip';

function CategoriaVisor( { categorias } ) {
    var size = Object.keys( categorias ).length - 3;

    return ( <div id="categoriasVisor">
        { categorias.map( ( cat, i ) => ( <Chip key={ cat.idCategoria } label={ cat.nombre } onClick={ () => { } } size="small" sx={ { mr: 1, display: ( i < 3 ? 'inline-flex' : 'none' ) } } /> ) ) }
        < Chip label={ "+" + size + " more" } onClick={ () => { } } size="small" sx={ { mr: 1, display: ( size > 0
            ? 'inline-flex' : 'none' ) } } />
    </div>)
}

export default CategoriaVisor;