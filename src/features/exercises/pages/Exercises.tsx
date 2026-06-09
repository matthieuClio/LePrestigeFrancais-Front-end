// Shared
import Menu from "../../../shared/menu/Menu";

// Componants
import LeftMenu from "../components/LeftMenu";

export default function Exercises () {
    return (
        <>
            {/* Menu */}
            <Menu />

            <main style={{display: 'flex', flexWrap: 'wrap', height: '100vh', backgroundColor: 'blue',  position: 'relative', flexDirection: 'column'}}>
                
                <LeftMenu />

                {/* Exercise */}
                <h1 style={{height: 70, backgroundColor: 'orange', color: 'white', textAlign: 'center'}}>
                    Exercices
                </h1>

                <div style={{width: 400, height: 400, backgroundColor: 'green', margin: 'auto', textAlign: 'center', borderRadius: '100%'}}>
                    Com_encer
                </div>

                <button style={{width: 200, margin: 'auto'}}>Double</button>
                <button style={{width: 200, margin: 'auto'}}>Simple</button>
            </main>
        </>
    );
}