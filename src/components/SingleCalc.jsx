import React, { useMemo } from 'react'
import Box from '@mui/material/Box'
import CountUp from 'react-countup'

function SingleCalc({ txt, num, countDelay, _key }) {
  const styles = useMemo(
    () => ({
      container: {
        fontSize: (theme) => ({
          [theme.breakpoints.up('md')]: {
            fontSize: '62px',
          },
          [theme.breakpoints.down('md')]: {
            fontSize: '52px',
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: '42px',
          },
        }),
        fontStyle: 'italic',
        fontWeight: 800,
      },
      actualNum: {
        fontWeight: 900,
        lineHeight: 1.3,
        color: (theme) => theme.palette.primary.main,
      },
      type: {},
    }),
    []
  )
  return (
    <Box sx={styles.container}>
      <Box component={'span'} sx={styles.actualNum}>
        {num === null ? (
          '- -'
        ) : (
          <CountUp
            end={num}
            duration={0.6}
            key={_key}
            useEasing={false}
            delay={countDelay ? countDelay : false}
          />
        )}
      </Box>
      <Box component={'span'} sx={styles.type}>
        {` ${txt}`}
      </Box>
    </Box>
  )
}

export default SingleCalc
