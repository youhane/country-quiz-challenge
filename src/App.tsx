import { useMemo, useState } from 'react';
import Footer from './components/Footer/Footer';
import QuizBox from './components/QuizBox/QuizBox';
import { ScoreContext } from './components/ScoreContext/ScoreContext';
import { GlobalStyles } from './GlobalStyles';
import { QUESTIONS_DATA } from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const scoreProvider = useMemo(() => ({score: Number, setScore: Object}), [score, setScore])

  return (
    <ScoreContext.Provider value={scoreProvider}>
      <h1>COUNTRY QUIZ</h1>
      <QuizBox
          question={QUESTIONS_DATA[currentQuestion].question}
          choices={QUESTIONS_DATA[currentQuestion].choices}
          answer={QUESTIONS_DATA[currentQuestion].answer}
          setCurrentQuestion={setCurrentQuestion}
          key={currentQuestion}
        />
      <Footer/>
      <GlobalStyles/>
    </ScoreContext.Provider>
  );
}

export default App;
