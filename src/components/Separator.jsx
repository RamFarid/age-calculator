import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import React from 'react'
import { CalcBtn } from '../utils/CustomMUIComponents'
import { MdOutlineSwapVerticalCircle } from 'react-icons/md'
import { useBirthDate } from '../Contexts/BirthsDateContext'

function Separator() {
  const { claculateDate } = useBirthDate()
  return (
    <Stack
      position={'relative'}
      height={'70px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CalcBtn onClick={claculateDate}>
        <MdOutlineSwapVerticalCircle />
      </CalcBtn>
      <Divider flexItem />
    </Stack>
  )
}

export default Separator
