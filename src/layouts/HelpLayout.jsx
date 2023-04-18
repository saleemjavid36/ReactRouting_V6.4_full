import { Outlet,NavLink } from "react-router-dom";

export default function HelpLayout(){
    return(
        <div className="help-layout">
            <h2>Websit Help</h2>
            <p>Parant Help component</p>
            
            <nav>
                <NavLink to="faq">View the Faq</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            
            <Outlet/>
        </div>
    )
}