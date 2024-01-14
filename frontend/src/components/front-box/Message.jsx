import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Checkbox, Typography } from '@mui/material'


import React from 'react'

export default function Message() {
  return (
    <Box style={{marginTop:'5px',marginLeft:'10px'}}>
    <Box style={{height:'32px',borderRadius:'8px',border:'0.5px solid grey',width:'98%',display:'flex',alignItem:'center'}}>
    <Checkbox/>
    <StarOutlineIcon/>
    <Typography style={{marginTop:'2px'}}>Tanu Mishra</Typography>
    <Typography style={{marginTop:'2px',marginLeft:'15%'}}>This is email sent by user</Typography>
    <DeleteIcon style={{marginLeft:'auto'}}/>
    </Box>

    </Box>
  )
}
