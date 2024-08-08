import { useContext } from "react"
import { MainContext } from "./Components/MainContext"
import { Link } from "react-router-dom"

export const Preview = () => {

  const {record} = useContext(MainContext)

    return(
        <div>
            <h2>Preview</h2>
            <Link to="/"> <button>Back to Home</button> </Link>
     {record.map(({text,textArea,date,number,email,_index}) => 
        <div key={_index} > 
        <p> {text} </p>
        <p> {textArea} </p>
        <p> {number} </p>
        <p> {date} </p>
        <p> {email} </p>
        </div>
    )}
        </div>
    )
}