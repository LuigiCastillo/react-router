import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({})
    useEffect (() => {
        setUsuario({
            name: "Luis Castillo",
            registered: "21/03/2024"
        })
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }