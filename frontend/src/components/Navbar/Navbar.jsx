import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar () {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  
      useEffect(()=>{
        const userdata = localStorage.getItem('user');
        console.log("--------------",JSON.parse(userdata))
        setUser(JSON.parse(userdata))
        if(!userdata) {
          console.log("user home : ", userdata)
          navigate('/login');
        }
      },[])
      
  
      console.log(user,"H")
      const logout = ()=>{
        localStorage.removeItem('user');
          window.open(
              `http://localhost:8080/auth/logout`,
              "_self"
          );
      }; 
  
  return (
    <Box>
    <Box style={{display:'flex',alignItems:'center',width:'98%',height:'90px',marginLeft:'12px',borderRadius:'15px',boxShadow: '3px 4px 36px -6px rgba(0,0,0,0.4)'}}>
    <Box style={{display:'flex',margin:'15px'}}>
    <img src={user?.photos[0].value} alt='profile' style={{height:'65px',width:'65px',borderRadius:'50%'}}/>
    <Typography style={{fontSize:'15px',fontWeight:'400',marginTop:'15px',marginLeft:'15px'}}>{user?.displayName}</Typography>
    </Box>
        <Button variant='contained' onClick={logout} style={{marginLeft:'auto',marginRight:'15px'}}>   
          <MailIcon style={{margin:'2px'}}/> Logout</Button>
        </Box>
    </Box>
  )
}

