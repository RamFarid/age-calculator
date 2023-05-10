import React, { createContext, useContext, useState } from 'react'

const AgeContext = createContext()

export const INITIAL_AGE_STATE = {
  age: {
    day: null,
    year: null,
    month: null,
  },
  upcoming: [],
}

export const useAge = () => useContext(AgeContext)

function AgeProvider({ children }) {
  const [finalDate, setFinalDate] = useState(INITIAL_AGE_STATE)
  return (
    <AgeContext.Provider value={{ setFinalDate, finalDate }}>
      {children}
    </AgeContext.Provider>
  )
}

export default AgeProvider
