import Box from '@mui/material/Box'
import React, { memo } from 'react'
import SingleCalc from './SingleCalc'
import { useAge } from '../Contexts/AgeContext'

function DisplayCalc() {
  const { finalDate } = useAge()
  return (
    <Box>
      {finalDate?.age ? (
        <>
          <SingleCalc
            txt='Years'
            num={finalDate.age.year}
            _key={Math.random()}
          />
          <SingleCalc
            txt='Months'
            num={finalDate.age.month}
            countDelay={0.6}
            _key={Math.random()}
          />
          <SingleCalc
            txt='Days'
            num={finalDate.age.day}
            countDelay={1.2}
            _key={Math.random()}
          />
        </>
      ) : null}
    </Box>
  )
}

export default memo(DisplayCalc)
