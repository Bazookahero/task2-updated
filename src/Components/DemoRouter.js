import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {CrudDemo} from "./CrudDemo"
import PersonDetails from "./PersonDetails";
import UpdatePerson from "./UpdatePerson";

const Welcome=()=>{
    return <h1>Welcome Page</h1>
}
const Home=()=>{
    return <h1>Home Page</h1>
}
const Person=()=>{
    return <h1>Person Page</h1>
}
const About=()=>{
    return <h1>About Page</h1>
}
const NotFound=()=>{
    return(
    <div>
        <h1>404 Not found</h1>
        <Link to="/">Go Home</Link>
    </div>
    )
}
function Header(){
    return( 
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="navbar-brand">Welcome</Link>
            </li>
            <li>
                <Link to="/home" className="navbar-brand">Home</Link>
            </li>
            <li>
                <Link to="/person" className="navbar-brand">Person</Link>
            </li>
            <li>    
                <Link to="/about" className="navbar-brand">About</Link>
            </li>    
            <li>    
                <Link to="/crud" className="navbar-brand">Crud</Link>
            </li> 
        </ul>
    </nav>
    </>
    )
}
export const DemoRouter = (args) => {
    return(   
        <div>
        <Header></Header>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person} />
                    <Route path="/about" component={About} />
                    <Route path="/crud" component={CrudDemo} />
                    <Route path="/persondetails/:id" component={PersonDetails} />
                    <Route path="/update/:id" component={UpdatePerson} />
                    <Route path="*" component={NotFound} />
                </Switch>
        </div>
    )
}

export default withRouter(DemoRouter)



