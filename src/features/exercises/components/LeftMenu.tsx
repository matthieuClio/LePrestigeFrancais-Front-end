export default function LeftMenu () {
    return (
        <nav style={{width: 200, height: '100%', backgroundColor: 'purple', color: 'white', border: '4px solid pink', position: 'absolute', left: 0}}>
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