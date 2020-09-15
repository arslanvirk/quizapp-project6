import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './Components/QuestionCard';
import { Difficulty, getQuizData } from './Services/QuizAPI';

function App() {
  const totalQuestions: number = 5;
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  const [currentStep, SetcurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  let [loading, setLoading] = useState(false);
  let [showResult, setShowResult] = useState(false);
  // let [startQuiz, setstartQuiz] = useState(false);
  const [quizOver, setQuizOver] = useState(true);

  const onSubmitHandler = (e: React.FormEvent<EventTarget>, userAnswer: string) => {
    e.preventDefault();
    const questionData = quiz[currentStep];
    if (userAnswer === questionData.correct) {
      setScore(score + 1);
    }

    if (currentStep !== quiz.length - 1) {
      SetcurrentStep(currentStep + 1);
    }
    else {
      setShowResult(true);
      setQuizOver(true);
    }
  }

  const startQuiz = async () => {
    setQuizOver(false);
    setLoading(true);
    const questionData: Quiz[] = await getQuizData(totalQuestions, Difficulty.EASY);
    setQuiz([]);
    setQuiz(questionData);
    SetcurrentStep(0);
    setScore(0);
    setShowResult(false);
    setLoading(false);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Quiz App</h1>
      </div>
      {showResult || quizOver ? (
        <div className={showResult ? "question-container result-container" : undefined}>
          {showResult ? (
            <span>
              <h2>Result</h2>
              <p className="result-text">
                You final score is
                 <b> {score}</b> out of <b>{quiz.length}</b>
              </p> </span>) : null}

          <button className='start' onClick={
            () => {
              startQuiz();
            }}>
            Begin Quiz
            </button>
        </div>) : null}
      {loading ? (
        <p>
          Loading
        </p>) : null}
      {!loading && !quizOver ?
        <div className="Quiz">
          <QuestionCard
            question={quiz[currentStep].question}
            options={quiz[currentStep].options}
            callBackSubmitFunc={onSubmitHandler}
          /></div> : null
      }
    </div>
  )
}

export default App;
