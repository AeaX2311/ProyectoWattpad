import { createContext, useState, useEffect } from "react";

export const WUsuarioContext = createContext();

export function WUsuarioContextProvider(props) {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        //setUsuario(getUsuarios());
        fetch('api/WUsuario')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
            });
    }, []);

    //function getUsuarios() {
    //    fetch('api/WUsuario')
    //        .then(response => response.json())
    //        .then(data => {
    //            setUsuario(data);
    //        });
    //}

    function addUsuario(usuario) {
        fetch('api/WUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios([...usuario, data]);
            });
    }

    function updateUsuario(usuario) {
        fetch('api/WUsuario/' + usuario.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios([...usuario, data]);
            });
    }

    function deleteUsuario(id) {
        fetch('api/WUsuario/' + id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                setUsuarios(usuarios.filter(usuario => usuario.id !== id));
            });
    }

    return (
        <WUsuarioContext.Provider value={{
            usuarios, addUsuario, updateUsuario, deleteUsuario
        }}>
            {props.children}
        </WUsuarioContext.Provider>
    );
}