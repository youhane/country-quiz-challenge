import React, { useContext } from 'react'
import { QuizContext } from '../ScoreContext/QuizContext'
import { Wrapper } from './FinishComponent.styles'

export const FinishComponent = () => {
  const {score} = useContext(QuizContext)

  return (
    <Wrapper>
        Yay! You got {score} right!
        <button onClick={() => window.location.reload()}>Play Again?</button>
    </Wrapper>
  )
}
