import { Box } from '@mui/material'
import React from 'react'
import Message from './Message'
export default function FrontBox() {
  return (
    <Box
    style={{height:'76vh',width:'75%',borderRadius:'15px',boxShadow: '3px 4px 36px -6px rgba(0,0,0,0.6)',marginLeft:'20px'}}
    >
    <Box style={{marginTop:'12px'}}>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    <Message/>
    </Box>
    </Box>
  )
}
