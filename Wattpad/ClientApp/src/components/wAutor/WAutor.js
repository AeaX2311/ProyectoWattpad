import { useEffect, useState } from "react";

function WAutor() {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        fetch("api/WAutor/Get")
            .then(response => { return response.json() })
            .then(responseJson => {
                console.log(responseJson)
                setAutores(responseJson)
            })
    }, [])

    return (<div id="autores" className="container">
        <h1>Autores prueba</h1>
        <div className="row">
            <div className="col-sm-12">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autores.map((autor) => {
                            {   console.log(autor.nombre)
                        }
                            <tr>
                                <td>{autor.idAutor}</td>
                                <td>{autor.nombre}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}

export default WAutor;