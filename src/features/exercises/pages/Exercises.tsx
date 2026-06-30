// React
// import { useState } from "react";

// Shared
import Menu from "../../../shared/components/navigation/Menu";

// Componants
import LeftMenu from "../components/LeftMenu";

// Data
import { data } from '../data/ExercisesData';

export default function Exercises () {
    const maxData = data.length;
    // const [correctAnswer, setCorrectAnswer] = useState(data[0].correctAnswer);

    return (
        <>
            {/* Menu */}
            <Menu />

            <main style={{display: 'flex', backgroundColor: 'gray',  position: 'relative', flexDirection: 'column'}}>
                
                {/* Left menu - Exercices navigation */}
                <LeftMenu />

                {/* Main title */}
                <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '220px', paddingRight: '20px', color: 'white', border: '4px solid green'}}
                className="text-align-center">
                    <h1>Le Prestige Français</h1>
                </section>

                {/* Lesson */}
                <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '220px', paddingRight: '20px', color: 'white', border: '4px solid yellow'}} 
                className="background-color-primary">
                    <h2 style={{paddingTop: 20, paddingBottom: 20, color: 'white', textAlign: 'center'}} className="background-color-secondary">
                        Leçon : les doubles consonnes
                    </h2>

                    <p className="margin-top color-secondary">
                        (Source : chatgpt)
                        <br/>
                        <br/>
                        Dans la plupart des cas, la double consonne ne correspond pas à une prononciation plus forte à l'oral.
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

                {/* Exercise */}
                <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '220px', paddingRight: '20px', border: '4px solid orange'}}>
                    <h2 style={{paddingTop: 20, paddingBottom: 20, color: 'white', textAlign: 'center'}} className="background-color-secondary">
                        Exercice
                    </h2>

                    <span style={{display: 'block', padding: 20, margin: 'auto', marginTop: 20, width: 70, borderRadius: 5}} className="color-secondary background-color-primary text-align-center">
                        {data[0].id} / {maxData}
                    </span>

                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 400, height: 400, margin: 'auto', marginTop: 20,  borderRadius: '100%', border: 'none'}} 
                    className="background-color-primary">

                        <span style={{fontSize: 30}} className="color-secondary">
                            {data[0].question}
                        </span>
                    </div>

                    <div style={{width: 120, margin: 'auto', padding: 10, marginTop: 20, borderRadius: 5, color: 'white'}} className="background-color-secondary text-align-center">
                        Notification Answer
                    </div>

                    <form action="#" style={{textAlign: "center"}} className="margin-top">
                        <button style={{paddingTop: 25, paddingBottom: 25, paddingLeft: 35, paddingRight: 35, marginRight: 10, border: 'none', cursor: 'pointer', borderRadius: 5}} 
                        className="background-color-primary color-secondary">
                            Double
                        </button>

                        <button style={{paddingTop: 25, paddingBottom: 25, paddingLeft: 35, paddingRight: 35, marginLeft: 10, border: 'none', cursor: 'pointer', borderRadius: 5}} 
                        className="background-color-primary color-secondary">
                            Simple
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}