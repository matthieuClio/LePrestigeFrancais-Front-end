export default function ExercisesMenu () {
    return (
        <nav style={{width: 200, border: '4px solid pink'}} className="background-color-primary color-secondary">
            <ul className="list-style-none">
                <li style={{border: '2px solid blue'}} className="text-align-center padding">
                    Afficher / réduire
                </li>
                <li style={{border: '2px solid blue'}} className="padding">
                    Double consonne
                </li>
                <li style={{border: '2px solid blue'}} className="padding">
                    Nom du deuxième exercice
                </li>
            </ul>
        </nav>
    )
}