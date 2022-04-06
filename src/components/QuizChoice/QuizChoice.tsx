import React, { useContext } from 'react'
import { ScoreContext } from '../ScoreContext/ScoreContext'
import { Wrapper } from './QuizChoice.styles'

interface QuizChoiceProps{
  choice : string,
  letter: string,
  answer: string,
}

const QuizChoice: React.FC<QuizChoiceProps> = ({choice, letter, answer}) => {
  const {score, setScore} = useContext(ScoreContext)

  const handleClick = (e: any) => {
    let newScore = score
    e.target.value === answer && newScore++
    setScore(newScore)
  }
  
  return (
    <Wrapper>
        <p>{letter}.</p>
        <p>{choice}</p> 
    </Wrapper>
  )
}

export default QuizChoice;