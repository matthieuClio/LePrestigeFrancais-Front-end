// React router
import { Link } from "react-router";

// Style
import './menu.css';

export default function Menu () {
    return (
        <menu style={{border: '3px solid purple'}}>
            <nav style={{border: '3px solid blue'}}>
                
                <ul className="menu-tabs-container background-color-primary list-style-none text-align-center">
                    <li className="menu-tabs  margin-left">
                        <Link to='/' className="color-secondary">
                            Logo
                        </Link> 
                    </li>
                    <li className="menu-tabs  margin-left">
                        <Link to='/' className="color-secondary">
                            Accueil
                        </Link>
                    </li>
                    <li className="menu-tabs  margin-left">
                        <Link to='/exercices' className="color-secondary">
                            Exercices
                        </Link>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}
