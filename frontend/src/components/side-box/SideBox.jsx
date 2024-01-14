import { Box, Button, Typography } from '@mui/material'
import React ,{useState} from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import CreateIcon from '@mui/icons-material/Create';
import Compose from './Compose';

export default function SideBox() {
  const [open,setOpen] = useState(false);

  const openDialog = () =>{
    setOpen(true);
  }
  
  return (
    <Box
    style={{height:'70vh',width:'18%',marginLeft:'15px',borderRadius:'30px',boxShadow: '3px 4px 36px -6px rgba(0,0,0,0.4)'}}
    >
    <Button variant='contained' style={{marginLeft:'10%',marginTop:'10%',padding:'10px',borderRadius:'15px'}}
     onClick={()=> openDialog()}   >
       <CreateIcon style={{margin:'5px'}}/>Compose</Button>
        <Box>
            <Typography style={{margin:'10px'}}><InboxIcon style={{marginRight:'10px'}}/> Inbox</Typography>
            <hr />
            <Typography style={{margin:'10px'}}><LabelIcon style={{marginRight:'10px'}}/>Label</Typography><hr />
            <Typography style={{margin:'10px'}}><SendIcon style={{marginRight:'10px'}}/>Sent</Typography><hr />
            <Typography style={{margin:'10px'}}><DraftsIcon style={{marginRight:'10px'}}/>Draft</Typography><hr />

        </Box>
        <Compose open={open} setOpen={setOpen}/>
    </Box>
  )
}
