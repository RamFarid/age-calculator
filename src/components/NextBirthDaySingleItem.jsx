import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

function NextBirthDaySingleItem({ txt, value }) {
  return (
    <Stack
      py={1}
      px={2}
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography color={'primary.main'}>{txt}</Typography>
      <Typography fontWeight={900}>{value}</Typography>
    </Stack>
  )
}

export default NextBirthDaySingleItem
