import { NavLink } from "react-router-dom";

const Footer = ()=>
{
    return(
        <div className="footer">
            <p>© <NavLink to="https://playshaban.github.io/profile/" target="blank">playshaban</NavLink> </p>
        </div>
    )
}

export default Footer;