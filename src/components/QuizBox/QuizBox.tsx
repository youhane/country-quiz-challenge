import React from 'react'
import QuizChoice from '../QuizChoice/QuizChoice'
import { Wrapper } from './QuizBox.styles'

export default function QuizBox() {
  return (
    <Wrapper>
        <h2>Kuala Lumpur is the capital of</h2>
        <QuizChoice/>
    </Wrapper>
  )
}
