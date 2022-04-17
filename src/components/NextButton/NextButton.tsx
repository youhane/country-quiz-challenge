import React, { useContext } from 'react'
import { QuizContext } from '../ScoreContext/QuizContext'
import { Wrapper } from './NextButton.styles'

const NextButton = () => {
  const {currentQuestion, setCurrentQuestion} = useContext(QuizContext)

  const handleClick = () => {
    let newQuestion = currentQuestion
    newQuestion++
    setCurrentQuestion(newQuestion)
  }

  return (
    <Wrapper onClick={() => handleClick()}>
      Next
    </Wrapper>
  )
}

export default NextButton