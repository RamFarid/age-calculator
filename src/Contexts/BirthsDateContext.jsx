import { createContext, useContext, useState } from 'react'
import {
  ageCalculator,
  getUpComingBirthDay,
  parseNumbersToTenths,
} from '../utils/ageCalculator'
import { INITIAL_AGE_STATE, useAge } from './AgeContext'

const BirthsDateContext = createContext()

export const useBirthDate = () => useContext(BirthsDateContext)

function BirthsDateProvider({ children }) {
  const [birthday, setBirthday] = useState({
    day: null,
    month: null,
    year: null,
  })
  const { setFinalDate } = useAge()
  const [error, setError] = useState({ year: false, day: false, month: false })
  const claculateDate = () => {
    setFinalDate(INITIAL_AGE_STATE)
    setError({ year: false, day: false, month: false })
    if (birthday.year < 1900 || !birthday.year) {
      setError((pre) => ({ ...pre, year: true }))
    }
    if (!birthday.month) {
      setError((pre) => ({ ...pre, month: true }))
    }
    if (!birthday.day) {
      setError((pre) => ({ ...pre, day: true }))
    }
    const values = Object.values(birthday)
    if (!values.some((el) => el === '') && birthday.year >= 1900) {
      const finallyDate = ageCalculator(
        `${parseNumbersToTenths(birthday.year)}-${parseNumbersToTenths(
          birthday.month
        )}-${parseNumbersToTenths(birthday.day)}`
      )
      const upcomingBirthDays = getUpComingBirthDay(birthday)
      console.log({ upcoming: upcomingBirthDays, age: finallyDate })
      // return { upcoming: upcomingBirthDays, age: finallyDate }
      setFinalDate({ upcoming: upcomingBirthDays, age: finallyDate })
    }
  }
  return (
    <BirthsDateContext.Provider
      value={{ claculateDate, error, setBirthday, birthday }}
    >
      {children}
    </BirthsDateContext.Provider>
  )
}

export default BirthsDateProvider
