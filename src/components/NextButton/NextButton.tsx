import React, { useContext } from 'react'
import { QuizContext } from '../ScoreContext/QuizContext'
import { Wrapper } from './NextButton.styles'

const NextButton = () => {
  const {currentQuestion, setCurrentQuestion, setisFinished} = useContext(QuizContext)

  const handleClick = () => {
    let newQuestion = currentQuestion
    newQuestion++
    currentQuestion === 9 ? setisFinished(true) : setCurrentQuestion(newQuestion)
  }

  return (
    <Wrapper onClick={() => handleClick()}>
      {currentQuestion === 9 ? "Finish" : "Next"}
    </Wrapper>
  )
}

export default NextButton