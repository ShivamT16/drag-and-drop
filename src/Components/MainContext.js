import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [cartItems, setcartItems] = useState([])
    const [input, setInput] = useState({
        text: "",
        textArea: "",
        number: "",
        date: "",
        email: ""
    })
    const [record, setRecord] = useState([])

    const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
    //  console.log({[name]:value})
     setInput({ ...input, [name]: value });
    }
    const handlePreview = () => {
        const newRecord = {...input}
        setRecord([...record, newRecord])
    }

    return(
        <MainContext.Provider value={{cartItems, setcartItems, input, handleInput, handlePreview,record}} >
            {children}
        </MainContext.Provider>
    )
}