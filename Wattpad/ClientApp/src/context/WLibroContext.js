import { createContext, useState, useEffect } from "react";

export const WLibroContext = createContext();

export function WLibroContextProvider(props) {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch("api/WLibro/GetAll")
            .then( response => {
                return response.json()
            })
            .then( responseJson => {
                setLibros(responseJson)
            })     
    }, []);

    return (
        <WLibroContext.Provider value={{ libros }}>
            {props.children}
        </WLibroContext.Provider>
    );        
}