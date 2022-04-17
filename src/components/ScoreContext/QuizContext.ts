import { createContext, useContext } from "react"

export type QuizContextType = {
    score: number
    setScore: (score: number) => void
    currentQuestion: number
    setCurrentQuestion: (currentQuestion: number) => void
    isFinished: boolean
    setisFinished: (isFinished: boolean) => void
}

export const QuizContext = createContext<QuizContextType>({
    score: 0,
    setScore: () => {},
    currentQuestion: 0,
    setCurrentQuestion: () => {},
    isFinished: false,
    setisFinished: () => {},
})

export const useScoreContext = () => useContext(QuizContext)