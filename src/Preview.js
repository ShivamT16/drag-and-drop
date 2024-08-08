import { useContext } from "react"
import { MainContext } from "./Components/MainContext"
import { Link } from "react-router-dom"

export const Preview = () => {

  const {record} = useContext(MainContext)

    return(
        <div>
            <Link to="/"> <button>Back to Home</button> </Link>
     {record.map(({text,textArea,date,number,email,_index}) => 
        <div key={_index} > 
        <p>Name: {text} </p>
        <p>Description: {textArea} </p>
        <p>Number: {number} </p>
        <p>Date: {date} </p>
        <p>Email: {email} </p>
        </div>
    )}
        </div>
    )
}