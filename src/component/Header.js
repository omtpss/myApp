
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="siteHeader">
            <div className="container">
                <div className="siteNav">
                    <div className="siteLogo">
                        <span>OM</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Service</Link>
                        </li>
                        <li>
                            <Link to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header;