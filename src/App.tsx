import { useState } from 'react';
import { FinishComponent } from './components/FinishComponent/FinishComponent';
import Footer from './components/Footer/Footer';
import QuizBox from './components/QuizBox/QuizBox';
import { QuizContext } from './components/ScoreContext/QuizContext';
import { GlobalStyles } from './GlobalStyles';
import { QUESTIONS_DATA } from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setisFinished] = useState(false)

  return (
    <QuizContext.Provider value={{ score, setScore, currentQuestion, setCurrentQuestion, isFinished, setisFinished }}>
      <h1>COUNTRY QUIZ</h1>
      {isFinished ? 
        <FinishComponent /> 
        :
        <QuizBox
          question={QUESTIONS_DATA[currentQuestion].question}
          choices={QUESTIONS_DATA[currentQuestion].choices}
          answer={QUESTIONS_DATA[currentQuestion].answer}
          key={currentQuestion}
        /> 
      }
      <Footer/>
      <GlobalStyles/>
    </QuizContext.Provider>
  );
}

export default App;
