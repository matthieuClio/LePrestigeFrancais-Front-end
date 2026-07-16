// Style
import './exercisesMenu.css';

export default function ExercisesMenu () {
    return (
        <nav className="exercises-menu-container background-color-primary color-secondary">
            <ul className="list-style-none">
                <li className="exercises-menu-tabs text-align-center padding">
                    Afficher / réduire
                </li>
                <li className="exercises-menu-tabs padding">
                    Double consonne
                </li>
                <li className="exercises-menu-tabs padding">
                    Nom du deuxième exercice
                </li>
            </ul>
        </nav>
    )
}