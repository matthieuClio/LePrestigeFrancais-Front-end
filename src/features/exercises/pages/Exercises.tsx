// React
import { useState } from "react";
import type { SyntheticEvent } from 'react';

// Shared
import Menu from "../../../shared/components/navigation/Menu";
import Header from "../../../shared/components/layout/Header";

// Componants
import ExercisesMenu from "../components/ExercisesMenu";

// Data
import { data } from '../data/ExercisesData';

export default function Exercises () {
    const maxData = data.length;
    const [notification, setNotification] = useState({
        answer: false,
        text: ''
    });

    function checkAnswer (event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        // Form data
        const form = new FormData(event.currentTarget);
        const formRadio = form.get("answer-radio");

        if (data[0].correctAnswer === formRadio) {
            setNotification({
                answer: true,
                text: 'Bonne réponse'
            });

        } else if (data[0].correctAnswer !== formRadio) {
            setNotification({
                answer: false,
                text: 'Erreur, la bonne réponse était : ' + data[0].correctAnswer
            });
        }
    }

    return (
        <>
            {/* Menu */}
            <Menu />

            <main style={{display: 'flex', backgroundColor: 'gray'}}>
                {/* Left menu - Exercices navigation */}
                <ExercisesMenu />

                {/* Container */}
                <div style={{border: '4px solid white', width: '100%'}}>
                    {/* Header layout */}
                    <Header />

                    {/* Lesson */}
                    <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', color: 'white', border: '4px solid yellow'}} 
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
                    <section style={{paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', border: '4px solid orange'}}>
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

                        <div style={{width: 120, margin: 'auto', padding: 10, marginTop: 20, borderRadius: 5, color: 'white'}} className={notification.answer ? 'background-color-secondary text-align-center' : 'background-color-error'}>
                            {notification.text}
                        </div>

                        <form onSubmit={checkAnswer} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', border: '2px solid purple'}} className="margin-top">
                            <label htmlFor="radio-double" style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 35, paddingRight: 35, marginRight: 20, border: 'none', cursor: 'pointer', borderRadius: 5}} 
                            className="background-color-primary color-secondary">
                                Double
                            </label>
                            <input type="radio" id="radio-double" name="answer-radio" value="double" />

                            <label htmlFor="radio-simple" style={{paddingTop: 10, paddingBottom: 10, paddingLeft: 35, paddingRight: 35,   marginLeft: 10, marginRight: 20, border: 'none', cursor: 'pointer', borderRadius: 5}} 
                            className="background-color-primary color-secondary">
                                Simple
                            </label>
                            <input type="radio" id="radio-simple" name="answer-radio" value="simple" />
                            
                            <div style={{width: '100%', border: '2px solid black', textAlign: 'center'}}>
                                <button type="submit" style={{color: 'white', marginTop: 20, paddingTop: 25, paddingBottom: 25, paddingLeft: 35, paddingRight: 35, marginRight: 10, border: 'none', cursor: 'pointer', borderRadius: 5}} 
                                className="background-color-secondary">
                                    Valider
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

            </main>
        </>
    );
}