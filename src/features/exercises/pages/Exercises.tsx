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

// Style
import './exercises.css';

export default function Exercises () {
    const maxData = data.length;
    const [currenteQuestion, setCurrenteQuestion] = useState(0);
    const [notification, setNotification] = useState({
        answer: false,
        text: ''
    });

    function checkAnswer (event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        // Form data
        const form = new FormData(event.currentTarget);
        const formRadio = form.get("answer-radio");

        // Good answer
        if (data[currenteQuestion].correctAnswer === formRadio) {
            setNotification({
                answer: true,
                text: 'Bonne réponse'
            });

        // Bad answer
        } else if (data[currenteQuestion].correctAnswer !== formRadio) {
            setNotification({
                answer: false,
                text: 'Erreur, la bonne réponse était : ' + data[currenteQuestion].correctAnswer
            });
        }

        // Define the next question
        if (currenteQuestion < maxData-1) {
            setCurrenteQuestion(currenteQuestion+1);
        }
    }

    return (
        <>
            {/* Menu */}
            <Menu />

            <main className="exercises-main background-color-quaternary">
                {/* Left menu - Exercices navigation */}
                <ExercisesMenu />

                {/* Container */}
                <div style={{border: '4px solid white'}} className="width-100">
                    {/* Header layout */}
                    <Header />

                    {/* Lesson */}
                    <section className="exercises-lesson background-color-primary">
                        <h2 className="exercises-lesson-title background-color-secondary color-quinternary text-align-center">
                            Leçon : les doubles consonnes
                        </h2>

                        <p className="margin-top color-secondary font-size-default">
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
                            <li className="margin-left margin-top-10">
                                Distinguer certains sons (notamment s / ss) ;
                            </li>
                            <li className="margin-left margin-top-10">
                                Marquer l'appartenance à une famille de mots ;
                            </li>
                            <li className="margin-left margin-top-10">
                                Apparaître après certains préfixes (illégal, irrégulier, immobile) ;
                            </li>
                            <li className="margin-left margin-top-10">
                                Intervenir dans la conjugaison de certains verbes (j'appelle, je jette).
                            </li>
                            
                            <br/>
                            Combien de mots à double consonne faut-il apprendre ?
                            <br/>
                            Il n'existe pas de chiffre officiel, mais nous pouvons faire une estimation :
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
                    <section className="exercises-pratice">
                        <h2 className="background-color-secondary padding-top padding-bottom color-quinternary text-align-center">
                            Exercice
                        </h2>

                        <div className="exercises-pratice-statement margin-top color-quinternary text-align-center">
                            Enoncé : indiquer si le mot suivant à une double consonne ou simple à l'endroit indiqué.
                        </div>

                        <span className="exercises-pratice-nbquestion margin-top padding color-secondary background-color-primary text-align-center">
                            {data[currenteQuestion].id} / {maxData}
                        </span>

                        <div className="exercises-pratice-round background-color-primary">
                            <span className="exercises-pratice-question color-secondary">
                                {data[currenteQuestion].question}
                            </span>
                        </div>

                        { // The notification is not display if it has no content
                            notification.text && 
                            <div className={notification.answer ? 'exercises-pratice-notification background-color-secondary text-align-center' : 'exercises-pratice-notification background-color-error'}>
                                {notification.text}
                            </div>
                        }

                        <form onSubmit={checkAnswer} className="margin-top exercises-pratice-form">
                            <label htmlFor="radio-double" className="exercises-pratice-label margin-right background-color-primary color-secondary">
                                Double
                            </label>
                            <input type="radio" id="radio-double" name="answer-radio" value="double" />

                            <label htmlFor="radio-simple" className="exercises-pratice-label margin-left margin-right background-color-primary color-secondary">
                                Simple
                            </label>
                            <input type="radio" id="radio-simple" name="answer-radio" value="simple" />
                            
                            <div style={{border: '2px solid black'}} className="width-100 text-align-center">
                                <button type="submit" className="exercises-pratice-button margin-top color-quinternary background-color-secondary">
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