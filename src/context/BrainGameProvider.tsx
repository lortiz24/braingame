import React, { useState } from 'react'
import { BrainGameContex } from './BrainGameContex'
import { BrainGameProviderProps } from './BrainGameContex.interface'

export const BrainGameProvider: React.FC<BrainGameProviderProps> = ({ children }) => {

  const [score, setScore] = useState(0)
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState([] as string[])
  const [incorrectAnswersSelected, setIncorrectAnswersSelected] = useState([] as string[])
  return (
    <BrainGameContex.Provider value={{ score, correctAnswerSelected, incorrectAnswersSelected, setCorrectAnswerSelected, setIncorrectAnswersSelected, setScore }}>
      {children}
    </BrainGameContex.Provider>
  )
}
