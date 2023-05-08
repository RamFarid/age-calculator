import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import React from 'react'
import { CalcBtn } from '../utils/CustomMUIComponents'
import { MdOutlineSwapVerticalCircle } from 'react-icons/md'

function Separator({ onClick }) {
  return (
    <Stack
      position={'relative'}
      height={'70px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CalcBtn onClick={onClick}>
        <MdOutlineSwapVerticalCircle />
      </CalcBtn>
      <Divider flexItem />
    </Stack>
  )
}

export default Separator
