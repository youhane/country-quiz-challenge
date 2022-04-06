import React from 'react'
import QuizChoice from '../QuizChoice/QuizChoice'
import { Wrapper } from './QuizBox.styles'

interface QuizBoxProps {
  question : string,
  choices : Array<string>,
  answer : string,
  setCurrentQuestion: object,
}

const LETTERS = ['A', 'B', 'C', 'D']

const QuizBox: React.FC<QuizBoxProps> = ({question, choices, answer, setCurrentQuestion}) => {
  return (
    <Wrapper>
        <h2>{question}</h2>
        {choices.map((choice:string, index:number) => {
          return <QuizChoice 
            choice={choice}
            letter={LETTERS[index]}
            answer={answer}
            key={index}
          />
        })}
    </Wrapper>
  )
}

export default QuizBox;