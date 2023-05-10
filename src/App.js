import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Inputs from './components/Inputs'
import Separator from './components/Separator'
import DisplayCalc from './components/DisplayCalc'
import Extras from './components/Extras'
import { useAge } from './Contexts/AgeContext'

function App() {
  const { finalDate } = useAge()
  const styles = {
    paper: {
      borderRadius: '55px',
      width: '95%',
      maxWidth: '670px',
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column',
    },
    iputContainer: {
      padding: 4,
      flex: 1,
    },
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
        <Box sx={styles.iputContainer}>
          <Inputs />
          <Separator />
          <DisplayCalc />
        </Box>
        {finalDate.upcoming.length ? <Extras /> : null}
      </Paper>
    </Stack>
  )
}

export default App
