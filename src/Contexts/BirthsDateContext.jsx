import { createContext, useContext, useState } from 'react'
import {
  ageCalculator,
  getUpComingBirthDay,
  parseNumbersToTenths,
} from '../utils/ageCalculator'
import Snackbar from '@mui/material/Snackbar'
import { INITIAL_AGE_STATE, useAge } from './AgeContext'

const BirthsDateContext = createContext()

export const useBirthDate = () => useContext(BirthsDateContext)

function BirthsDateProvider({ children }) {
  const [birthday, setBirthday] = useState({
    day: '',
    month: '',
    year: '',
  })
  const [underLimit, setUnderLimit] = useState(false)
  const { setFinalDate } = useAge()
  const [error, setError] = useState({ year: false, day: false, month: false })
  const claculateDate = () => {
    setFinalDate(INITIAL_AGE_STATE)
    setError({ year: false, day: false, month: false })
    if (Number(birthday.year) < 1900 && birthday.year) {
      setError((pre) => ({ ...pre, year: true }))
      setUnderLimit(true)
    }
    if (!birthday.year) {
      setError((pre) => ({ ...pre, year: true }))
    }
    if (!birthday.month) {
      setError((pre) => ({ ...pre, month: true }))
    }
    if (!birthday.day) {
      setError((pre) => ({ ...pre, day: true }))
    }
    const values = Object.values(birthday)
    window.navigator.vibrate(1000)
    if (
      !values.some((el) => el === null || el === '') &&
      birthday.year >= 1900
    ) {
      window.navigator.vibrate(300)
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
      <Snackbar
        onClose={(e, cause) => {
          if (cause === 'clickaway') return
          setUnderLimit(false)
        }}
        sx={{ maxWidth: 290 }}
        message='It seems that you are over 120 years old. Why do you want to know your exact age? You should be in the grave now. 😃'
        open={underLimit}
        autoHideDuration={18000}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      />
    </BirthsDateContext.Provider>
  )
}

export default BirthsDateProvider
