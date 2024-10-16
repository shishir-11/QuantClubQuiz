import React, { useState, useEffect } from 'react';
import { RotateCcw, X, Play } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const MathGame = () => {
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isGameStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsTimeUp(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isGameStarted, timeLeft]);

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const num3 = Math.floor(Math.random() * 9) + 1;
    const num4 = Math.floor(Math.random() * 9) + 1;
    setQuestion(`(${num1} + ${num2}) * (${num3} + ${num4})`);
    setAnswer(((num1 + num2) * (num3 + num4)).toString());
    setUserAnswer('');
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserAnswer(input);
    
    if (input.length > 0 && !isNaN(input)) {
      if (parseInt(input) === parseInt(answer)) {
        setPoints(points + 1);
        generateQuestion();
      }
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && userAnswer !== '') {
      if (parseInt(userAnswer) !== parseInt(answer)) {
        generateQuestion();
      }
    }
  };

  const resetGame = () => {
    setPoints(0);
    setTimeLeft(120);
    setIsTimeUp(false);
    setIsGameStarted(false);
    setQuestion('');
    setUserAnswer('');
  };

  const startGame = () => {
    setIsGameStarted(true);
    generateQuestion();
  };

  return (
    <div className="game-container">
      <h1>QUANTOBER</h1>
      <p className="calc-pro">Calc Pro</p>
      <p className="quant-club">A game by Quant club</p>
      <div className="reset-button-container">
        {!isGameStarted ? (
          <button className="start-button" onClick={startGame}>
            <Play size={24} />
            Start Game
          </button>
        ) : (
          <button className="reset-button" onClick={resetGame}>
            <RotateCcw size={24} />
          </button>
        )}
      </div>
      <div className="game-board">
        <div className="game-info">
          <span>{points} points</span>
          <span>{timeLeft} seconds</span>
        </div>
        {isGameStarted && (
          <div className="question-container">
            <div className="question">{question} =</div>
            <input
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="answer-input"
            />
          </div>
        )}
      </div>

      <Modal isOpen={isTimeUp} onClose={resetGame}>
        <h2>Time's Up!</h2>
        <p>Your final score: {points} points</p>
        <button onClick={resetGame} className="play-again-button">
          Play Again
        </button>
      </Modal>
    </div>
  );
};

export default MathGame;