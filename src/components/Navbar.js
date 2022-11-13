import React,{ useContext } from "react";
import { mainContext } from "../contexts";
import { Link } from "react-router-dom";


const Navbar  = () => {
   const {theme,changeTheme}  = useContext(mainContext);
   console.log(theme,changeTheme);

    return(
        <nav>
            <Link to="/">Home</Link> <br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contact</Link><br/>
            <Link to="/service">Service</Link><br/>
            <button onClick={() => { changeTheme();}}>Theme Changer {theme?"True":"False"}</button>
        </nav>
    )
}

export default Navbar;