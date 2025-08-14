import { Button } from 'bootstrap';
import React, { useState } from 'react';
import BasiccardExample from './Card';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lisbon', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of India?',
    answerOptions: [
      { answerText: 'Mumbai', isCorrect: false },
      { answerText: 'Chennai', isCorrect: false },
      { answerText: 'New Delhi', isCorrect: true },
      { answerText: 'Bangalore', isCorrect: false },
    ],
  },
  {
    questionText: 'React is a __?',
    answerOptions: [
      { answerText: 'Library', isCorrect: true },
      { answerText: 'Framework', isCorrect: false },
      { answerText: 'Language', isCorrect: false },
      { answerText: 'Tool', isCorrect: false },
    ],
  },{
    questionText: 'React is a __?',
    answerOptions: [
      { answerText: 'Library', isCorrect: true },
      { answerText: 'Framework', isCorrect: false },
      { answerText: 'Language', isCorrect: false },
      { answerText: 'Tool', isCorrect: false },
    ],
  },
];

function Abishik() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={styles.background}>
     
      <div style={styles.card}>
        {showScore ? (
          <div style={styles.scoreText}>
            🎉 You scored <strong>{score}</strong> out of {questions.length} <br></br><br></br>
       <button ></button>
          </div> 
        ) : (
          <>
            <div style={styles.questionHeader}>
              <div style={styles.counter}>
                Question {currentQuestion + 1} / {questions.length}
              </div>
              <div style={styles.question}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div style={styles.answers}>
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  style={styles.button}
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  onMouseOver={(e) => (e.target.style.background = '#45aaf2')}
                  onMouseOut={(e) => (e.target.style.background = '#1e90ff')}
                >
                  {option.answerText}
                </button>
              
              ))}
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '600px',
    animation: 'fadeIn 0.7s ease-in-out',
  },
  questionHeader: {
    marginBottom: '20px',
  },
  counter: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#666',
  },
  question: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  },
  answers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1e90ff',
    color: '#fff',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
  scoreText: {
    fontSize: '28px',
    color: '#2ecc71',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
};

export default Abishik;