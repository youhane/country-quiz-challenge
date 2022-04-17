import { createContext, useContext } from "react"

export type QuizContextType = {
    score: number
    setScore: (score: number) => void
    currentQuestion: number
    setCurrentQuestion: (currentQuestion: number) => void
}

export const QuizContext = createContext<QuizContextType>({
    score: 0,
    setScore: () => {},
    currentQuestion: 0,
    setCurrentQuestion: () => {},
})

export const useScoreContext = () => useContext(QuizContext)