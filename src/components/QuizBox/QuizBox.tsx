import React, { useState } from 'react'
import { easings, useSpring } from 'react-spring'
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
  const props = useSpring({
    to: {x: 0},
    from: {x: -1000},
    config: {duration: 500, ease: easings.easeInOutQuart},
  })

  return (
    <Wrapper style={props}>
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