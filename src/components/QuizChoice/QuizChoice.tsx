import React, { useContext } from 'react'
import { ScoreContext } from '../ScoreContext/ScoreContext'
import { Wrapper } from './QuizChoice.styles'

interface QuizChoiceProps{
  choice : string,
  letter: string,
  answer: string,
  setNextButton: (values: any) => any,
}

const QuizChoice: React.FC<QuizChoiceProps> = ({choice, letter, answer, setNextButton}) => {
  const {score, setScore} = useContext(ScoreContext)

  const handleClick = (e: any) => {
    let newScore = score
    e.target.value === answer && newScore++
    setScore(newScore)
  }
  
  return (
    <Wrapper onClick={() => setNextButton(true)}>
        <p>{letter}.</p>
        <p>{choice}</p> 
    </Wrapper>
  )
}

export default QuizChoice;