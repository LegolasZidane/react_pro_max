import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    
    const [ userAnswers, setUserAnswers ] = useState([]);
    //use less state, derive more from the state variables
    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a, b) => Math.random() - 0.5);
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers( prevAnswers => ( [...prevAnswers, selectedAnswer] ));
    }

    if( quizIsComplete ){

        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );

    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map( answer => (
                        <li 
                            key={answer}
                            className="answer"
                        >
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>))}
                </ul>
            </div>
        </div>
    );
}