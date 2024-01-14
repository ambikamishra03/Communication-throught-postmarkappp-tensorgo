import React from 'react'
import {  Box} from '@mui/material'
import Navbar from '../components/Navbar/Navbar'
import SideBox from '../components/side-box/SideBox'
import FrontBox from '../components/front-box/FrontBox'

export default function Home() {

  return (
    <Box>
    <Navbar/>
    <Box style={{display:'flex',marginTop:'25px',marginLeft:'15px'}}>
      <SideBox/>
      <FrontBox/>
    </Box>
    </Box>
  )
}
