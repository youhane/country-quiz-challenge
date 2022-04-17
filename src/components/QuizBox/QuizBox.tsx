import React, { useState } from 'react'
import NextButton from '../NextButton/NextButton'
import QuizChoice from '../QuizChoice/QuizChoice'
import { Wrapper } from './QuizBox.styles'

interface QuizBoxProps {
  question : string,
  choices : Array<string>,
  answer : string,
}

const LETTERS = ['A', 'B', 'C', 'D']

const QuizBox: React.FC<QuizBoxProps> = ({question, choices, answer}) => {
  const [nextButton, setNextButton] = useState(false)

  return (
    <Wrapper>
        <h2>{question}</h2>
        {choices.map((choice:string, index:number) => {
          return <QuizChoice 
            choice={choice}
            letter={LETTERS[index]}
            answer={answer}
            setNextButton={setNextButton}
            key={index}
          />
        })}
        {nextButton && <NextButton/>}
    </Wrapper>
  )
}

export default QuizBox;