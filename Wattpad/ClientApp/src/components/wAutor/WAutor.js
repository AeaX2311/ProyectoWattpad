import { useEffect, useState } from "react";

function WAutor() {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        fetch("api/WAutor/Get")
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                setAutores(responseJson)
            })
    }, [])

    return <div id="autores" className="container">
        {autores.map((autor) => (
            <div key ={autor.id}>
                <h1>    {autor.nombre}</h1>
                <h2>hoal</h2>
            </div>
        ))}
    </div>
}

export default WAutor;