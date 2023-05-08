import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const CalcBtn = styled(IconButton)(({ theme }) => {
  return {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.primary.main,
    height: 60,
    width: 60,
    [theme.breakpoints.down('sm')]: {
      right: 'unset',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '& svg': {
      width: '100%',
      height: '100%',
      color: '#fff',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }
})

export { CalcBtn }
