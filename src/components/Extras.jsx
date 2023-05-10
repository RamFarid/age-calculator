import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { MdExpandCircleDown } from 'react-icons/md'
import NextBirthDaySingleItem from './NextBirthDaySingleItem'
import { allMonths } from '../utils/ageCalculator'
import Divider from '@mui/material/Divider'
import { useAge } from '../Contexts/AgeContext'
import { useBirthDate } from '../Contexts/BirthsDateContext'
import Fade from '@mui/material/Fade'

function Extras() {
  const { birthday } = useBirthDate()
  const { finalDate } = useAge()
  return (
    <Fade in>
      <Accordion
        sx={{
          borderRadius: '0 0 55px 55px !important',
        }}
      >
        <AccordionSummary
          id='extras'
          aria-controls='extras-content'
          expandIcon={<MdExpandCircleDown />}
          sx={{
            paddingX: 4,
          }}
        >
          <Typography fontWeight={700} fontSize={26}>
            Extras
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Box>
            <Typography component={'h5'} color={'text.secondary'}>
              Next birthday
            </Typography>
            <Stack flexDirection={'row'}>
              <NextBirthDaySingleItem
                txt={'Months'}
                value={finalDate.upcoming[0].month}
              />
              <NextBirthDaySingleItem
                txt={'Days'}
                value={finalDate.upcoming[0].day}
              />
            </Stack>
            <Typography component={'h5'} color='text.secondary'>
              Up coming birthdays
            </Typography>
            <ul>
              {finalDate.upcoming.map((day, i) => (
                <li key={i}>
                  <Typography
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    component={'div'}
                  >
                    <Typography
                      component={'span'}
                      color={'text.secondary'}
                      fontSize={(theme) => {
                        return {
                          [theme.breakpoints.down('md')]: {
                            fontSize: '15px',
                          },
                        }
                      }}
                    >{`${birthday.day} ${allMonths[birthday.month - 1]} ${
                      day.actualYear
                    }`}</Typography>
                    <Typography
                      component={'span'}
                      fontWeight={400}
                      fontSize={(theme) => {
                        return {
                          [theme.breakpoints.down('md')]: {
                            fontSize: '15px',
                          },
                        }
                      }}
                    >
                      {day.dayName}
                    </Typography>
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Fade>
  )
}

export default Extras
