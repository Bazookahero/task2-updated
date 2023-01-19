import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PersonDetails = () => {
    const {id} = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        
        axios.get(`https://localhost:7128/People/${id}`)
        .then((response) => {
        setPerson(response.data)})
        .catch(error => console.log(error))
    }, [])
    return(
        <div>
            <h3>{person.title}</h3>
            <p>Id: {person.id}</p>
            <p>Name: {person.firstName} {person.lastName}</p>
            <p>Email: {person.email}</p>
        </div>
    )
}


export default PersonDetails