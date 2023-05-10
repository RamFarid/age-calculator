import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Inputs from './components/Inputs'
import Separator from './components/Separator'
import DisplayCalc from './components/DisplayCalc'

function App() {
  const styles = {
    paper: {
      borderRadius: '55px',
      padding: 4,
      width: '95%',
      maxWidth: '670px',
      minHeight: '500px',
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
        <Inputs />
        <Separator />
        <DisplayCalc />
      </Paper>
    </Stack>
  )
}

export default App
