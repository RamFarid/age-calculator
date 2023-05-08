import React, { useMemo } from 'react'
import Box from '@mui/material/Box'
function SingleCalc({ txt, num }) {
  const styles = useMemo(
    () => ({
      container: {
        fontSize: '62px',
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
        {num === null ? '- -' : num}
      </Box>
      <Box component={'span'} sx={styles.type}>
        {` ${txt}`}
      </Box>
    </Box>
  )
}

export default SingleCalc