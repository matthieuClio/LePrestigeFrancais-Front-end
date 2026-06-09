// React router
import { Link } from "react-router";

export default function Menu () {
    return (
        <menu style={{border: '3px solid purple'}}>
            <nav style={{border: '3px solid blue'}}>
                <ul style={{height: 70, textAlign: 'center', display: 'flex', alignItems: 'center'}} className="background-color-primary">
                    <li style={{border: '2px solid green'}} className="margin-left">
                        <Link to='/' className="color-secondary">
                            Logo
                        </Link> 
                    </li>
                    <li style={{border: '2px solid green'}} className="margin-left">
                        <Link to='/' className="color-secondary">
                            Accueil
                        </Link>
                    </li>
                    <li style={{border: '2px solid green'}} className="margin-left">
                        <Link to='/exercices' className="color-secondary">
                            Exercices
                        </Link>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}
