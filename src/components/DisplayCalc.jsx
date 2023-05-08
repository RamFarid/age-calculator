import Box from '@mui/material/Box'
import React from 'react'
import SingleCalc from './SingleCalc'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { MdExpandMore } from 'react-icons/md'
import Typography from '@mui/material/Typography'
import { allMonths } from '../utils/ageCalculator'
import { Stack } from '@mui/material'
import NextBirthDaySingleItem from './NextBirthDaySingleItem'

function DisplayCalc({ finalDate, birthday }) {
  return (
    <Box>
      <SingleCalc txt='Years' num={finalDate.age.year} />
      <SingleCalc txt='Months' num={finalDate.age.month} />
      <SingleCalc txt='Days' num={finalDate.age.day} />
      {finalDate.upcoming.length ? (
        <Accordion
          sx={{
            maxWidth: '80%',
          }}
        >
          <AccordionSummary
            id='extras'
            aria-controls='extras-content'
            expandIcon={<MdExpandMore />}
          >
            <Typography fontWeight={700} fontSize={26}>
              Extras
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography component={'h5'}>Next birthday</Typography>
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
              {/*  */}
              <Typography component={'h5'}>Up coming birthdays</Typography>
              <ul>
                {finalDate.upcoming.map((day, i) => (
                  <li key={i}>
                    <Typography
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Typography
                        component={'span'}
                        color={'text.secondary'}
                      >{`${birthday.day} ${allMonths[birthday.month - 1]} ${
                        day.actualYear
                      }`}</Typography>
                      <Typography component={'span'} fontWeight={400}>
                        {day.dayName}
                      </Typography>
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
      ) : null}
    </Box>
  )
}

export default DisplayCalc
