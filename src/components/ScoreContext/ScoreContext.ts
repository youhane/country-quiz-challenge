import { createContext, useContext } from "react"

export type ScoreContexxtContent = {
    score: number
    setScore: (score: number) => void
}

export const ScoreContext = createContext<ScoreContexxtContent>({
    score: 0,
    setScore: () => {},
})

export const useScoreContext = () => useContext(ScoreContext)