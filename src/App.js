import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useMemo, useState } from 'react'
import Inputs from './components/Inputs'
import Separator from './components/Separator'
import DisplayCalc from './components/DisplayCalc'
import {
  ageCalculator,
  getUpComingBirthDay,
  parseNumbersToTenths,
} from './utils/ageCalculator'

const INITIAL_AGE = {
  age: {
    day: null,
    year: null,
    month: null,
  },
  upcoming: [],
}

function App() {
  const [birthday, setBirthday] = useState({
    day: null,
    month: null,
    year: null,
  })
  const [finalDate, setFinalDate] = useState(INITIAL_AGE)
  const [error, setError] = useState({ year: false, day: false, month: false })
  const styles = useMemo(
    () => ({
      paper: {
        borderRadius: '55px',
        borderBottomRightRadius: '37%',
        padding: 4,
        width: '95%',
        maxWidth: '670px',
        minHeight: '500px',
      },
    }),
    []
  )
  const claculateDate = () => {
    setFinalDate(INITIAL_AGE)
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
      setFinalDate({ upcoming: upcomingBirthDays, age: finallyDate })
    }
  }
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
      component={'main'}
      py={5}
    >
      <Paper sx={styles.paper} component={'section'}>
        <Inputs birthday={birthday} setBirthday={setBirthday} error={error} />
        <Separator onClick={claculateDate} />
        <DisplayCalc finalDate={finalDate} birthday={birthday} />
      </Paper>
    </Stack>
  )
}

export default App
