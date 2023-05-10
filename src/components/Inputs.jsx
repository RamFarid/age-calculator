import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import React, { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { useBirthDate } from '../Contexts/BirthsDateContext'

function Inputs() {
  const theme = useTheme()
  const { birthday, error, setBirthday } = useBirthDate()

  const handleChange = (e) => {
    const current = new Date()
    const { name, value } = e.target
    if (name === 'month' && value !== '' && (value > 12 || value < 1)) return
    if (name === 'day' && value !== '' && (value > 31 || value < 1)) return
    if (name === 'year' && value !== '' && value > current.getFullYear()) return
    setBirthday((pre) => ({ ...pre, [name]: value }))
  }

  const textProps = useMemo(
    () => ({
      type: 'number',
      size: 'small',
      autoComplete: 'off',
      sx: {
        [theme.breakpoints.down('sm')]: {
          flex: 1,
        },
      },
      InputProps: {
        sx: {
          width: '120px',
          height: '67px',
          borderRadius: 2,
          fontSize: '32px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
            width: 'unset',
          },
        },
      },
      InputLabelProps: {
        sx: {
          fontSize: '26px',
          fontWeight: 900,
          [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
          },
        },
      },
    }),
    [theme]
  )

  return (
    <Stack
      flexDirection={'row'}
      gap={5}
      sx={{
        [theme.breakpoints.down('sm')]: {
          gap: 2,
        },
      }}
    >
      <TextField
        error={error.day}
        name='day'
        label='Day'
        {...textProps}
        value={birthday.day || ''}
        onChange={handleChange}
      />
      <TextField
        error={error.month}
        name='month'
        label='Month'
        {...textProps}
        value={birthday.month || ''}
        onChange={handleChange}
      />
      <TextField
        error={error.year}
        name='year'
        label='Year'
        {...textProps}
        value={birthday.year || ''}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default Inputs
