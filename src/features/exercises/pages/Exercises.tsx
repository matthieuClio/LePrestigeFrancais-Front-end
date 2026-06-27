// Shared
import Menu from "../../../shared/components/navigation/menu/Menu";

// Componants
import LeftMenu from "../components/LeftMenu";

export default function Exercises () {
    return (
        <>
            {/* Menu */}
            <Menu />

            <main style={{display: 'flex', flexWrap: 'wrap', height: '100vh', backgroundColor: 'skyblue',  position: 'relative', flexDirection: 'column'}}>
                
                {/* Left menu */}
                <LeftMenu />

                <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '220px', color: 'white', border: '4px solid yellow'}} className="background-color-primary">
                    {/* Exercise */}
                    <h1 style={{paddingTop: 20, paddingBottom: 20, backgroundColor: 'orange', color: 'white', textAlign: 'center'}}>
                        Leçon : les doubles consonnes
                    </h1>

                    <p style={{paddingTop: 20}} className="color-secondary">
                        (Source : chatgpt)
                        <br/>
                        <br/>
                        Dans la plupart des cas, la double consonne ne correspond pas à une prononciation plus forte.
                        <br/>
                        Il faut simplement mémoriser l'orthographe.
                        <br/>
                        <br/>
                        Les doubles consonnes en français servent principalement à :
                        <br/>
                        <br/>

                        <li className="margin-left">
                            Respecter l'orthographe traditionnelle des mots ;
                        </li>
                        <li style={{marginTop: 10}} className="margin-left">
                            Distinguer certains sons (notamment s / ss) ;
                        </li>
                        <li style={{marginTop: 10}} className="margin-left">
                            Marquer l'appartenance à une famille de mots ;
                        </li>
                        <li style={{marginTop: 10}} className="margin-left">
                            Apparaître après certains préfixes (illégal, irrégulier, immobile) ;
                        </li>
                        <li style={{marginTop: 10}} className="margin-left">
                            Intervenir dans la conjugaison de certains verbes (j'appelle, je jette).
                        </li>
                        
                        <br/>
                        Combien de mots à double consonne faut-il apprendre ?
                        <br/>
                        Il n'existe pas de chiffre officiel, mais on peut faire une estimation :
                        <br/>
                        <br/>
                        Environ 2 000 à 3 000 mots très fréquents couvrent 90 à 95 % de l'écrit professionnel ;
                        <br/>
                        parmi eux, on trouve probablement 300 à 500 mots avec une double consonne.
                        <br/>
                        <br/>Les 100 à 150 plus fréquents couvriraient déjà une très grande partie des erreurs d'orthographe rencontrées en entreprise.
                    </p>
                </section>

                {/* <div style={{width: 400, height: 400, backgroundColor: 'green', margin: 'auto', textAlign: 'center', borderRadius: '100%'}}>
                    Com_encer
                </div>

                <button style={{width: 200, margin: 'auto'}}>Double</button>
                <button style={{width: 200, margin: 'auto'}}>Simple</button> */}
            </main>
        </>
    );
}