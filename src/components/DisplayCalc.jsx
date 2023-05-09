import Box from '@mui/material/Box'
import React from 'react'
import SingleCalc from './SingleCalc'
import Extras from './Extras'

function DisplayCalc({ finalDate, birthday }) {
  return (
    <Box>
      <SingleCalc txt='Years' num={finalDate.age.year} />
      <SingleCalc txt='Months' num={finalDate.age.month} />
      <SingleCalc txt='Days' num={finalDate.age.day} />
      {finalDate.upcoming.length ? (
        <Extras finalDate={finalDate} birthday={birthday} />
      ) : null}
    </Box>
  )
}

export default DisplayCalc
