import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from './Summary.jsx';

export default function Quiz() {
    
    const [ userAnswers, setUserAnswers ] = useState([]);
    //use less state, derive more from the state variables
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setUserAnswers( prevAnswers => ( [...prevAnswers, selectedAnswer] ));

    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if( quizIsComplete ){

        return <Summary userAnswers={userAnswers} />

    }

    //Whenever key prop changes, the component is unmounted and remounted. Very handy!!!
    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}