import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://localhost:7128/People'

export const CrudDemo = () => {
    const [people, setPeople] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        // let interval = setInterval(() => {
        axios.get(API_URL).then((response) => {
            setPeople(response.data)
        }).catch(error => console.log(error))
        // }, 3000);
    }, [update])
    


const DeletePerson = (args) => {
        axios.delete(`https://localhost:7128/People/${args.id}`).then((response) => {
            console.log(response.status)
            setUpdate(!update)
        })
}

const DataTable = (args) => {
    const TableHeader = () => {
        return(
                <thead >
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Title</th>
                    <th>Action</th>
                    </tr>
                </thead>
        )
    }
    
    const TableAction = (args) => {
        return(
        <div> 
            <Link to={{pathname: `/persondetails/${args.id}`,query: {id: args.id}}}><button type="button" value={args.id}>Details</button></Link>
            <button type="button" value={args.id} onClick={() => DeletePerson(args)}  >Delete</button>
            <Link to={{pathname: `/update/${args.id}`,query: {id: args.id}}}><button type="button" value={args.id}>Edit</button></Link>
        </div>)
    }
    
    const TableRow = () => {
        const personArray = args.people.map((person) =>
        <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName} {person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.title}</td>
            <td><TableAction id={person.id}/></td>
        </tr>
        )
        return(
            <tbody>
                    {personArray}
            </tbody>
        )
    }
    return(
        <div>
            <table border="10" className="table">
            <TableHeader />
            <TableRow />
            </table>
        </div>
        )
    }

    const Form = () => {
        const {register, handleSubmit} = useForm()
        const onSubmit = data => axios.post(`https://localhost:7128/People`, data).then(() => {setUpdate(!update)})

        return(
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="container mt-3 mb-3">
                <div className="mb-3">
                    <label style={{margin: 10}}>First Name: </label>
                    <input type="text" placeholder="Enter First Name" {...register("firstName")}/>
                    </div>
                    <div className="mb-3">
                    <label style={{margin: 10}}>Last Name: </label>
                    <input type="text" placeholder="Enter Last Name" {...register("lastName")}/>
                    </div>
                    <div className="mb-3">
                    <label style={{margin: 10}}>Email: </label>
                    <input type="email" placeholder="Enter Email" {...register("email")}/>
                    </div>
                    <div className="mb-3">
                    <label style={{margin: 10}}>Title: </label>
                    <input type="text" placeholder="Enter Title" {...register("title")}/>
                    </div>
                    <button type="submit" value="Submit"  className="me-4 btn btn-success btn-lg btn-block">Add</button>
                    <button type="reset" className="me-4 btn btn-danger btn-lg btn-block">Reset</button>
                </form>
            </div>
        )
    }
    
    return(
        <div>
        <Form />
        <DataTable people={people} />
        </div>
    )

}

