import React, { useState } from 'react'
import { Questions } from '../services/questions/Question.interface'
import { BrainGameContex } from './BrainGameContex'
import { BrainGameProviderProps } from './BrainGameContex.interface'

export const BrainGameProvider: React.FC<BrainGameProviderProps> = ({ children }) => {

  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([] as Questions[])
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState([] as Questions[])
  const [incorrectAnswersSelected, setIncorrectAnswersSelected] = useState([] as Questions[])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  return (
    <BrainGameContex.Provider value={{
      score,
      correctAnswerSelected,
      incorrectAnswersSelected,
      setCorrectAnswerSelected,
      setIncorrectAnswersSelected,
      setScore,
      currentQuestion,
      setCurrentQuestion,
      questions,
      setQuestions
    }}>
      {children}
    </BrainGameContex.Provider>
  )
}
