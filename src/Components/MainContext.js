import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [cartItems, setcartItems] = useState([])
    return(
        <MainContext.Provider value={{cartItems, setcartItems}} >
            {children}
        </MainContext.Provider>
    )
}