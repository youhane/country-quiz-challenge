import React, { useContext, useState } from 'react'
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
  const [correctOrNot, setCorrectOrNot] = useState('')

  const handleClick = (e: any) => {
    let newScore = score
    if(e.target.value === answer){
      newScore++
      setCorrectOrNot('correct')
      setScore(newScore)
    } else setCorrectOrNot('incorrect')
    setNextButton(true)
  }
  
  return (
    <Wrapper onClick={(e: Event) => handleClick(e)} className={correctOrNot} value={choice}>
        <p>{letter}.</p>
        <p>{choice}</p> 
    </Wrapper>
  )
}

export default QuizChoice;