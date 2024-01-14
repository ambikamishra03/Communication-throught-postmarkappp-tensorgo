import { Box,Button , Typography} from '@mui/material';
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();

    useEffect(()=>{
      const user = localStorage.getItem('user');

      if(user) {
        console.log("user", user)
        navigate('/');
      }
    },[])

    console.log("---------signup-------")
    const googleAuth = async ()=>{
        window.open(
            `http://localhost:8080/auth/google/callback`,
            "_self"
        );
    }

  return (
    <Box style={{display:'flex',marginLeft:'10%'}}>
    <Box>
      <img src="./images/signup.jpg" alt="login" srcset="" style={{height:'550px',width:'480px'}}/>
    </Box>
    <Box style={{height:'50vh',width:'70vh',marginTop:'120px',borderRadius:'30px',boxShadow: '3px 4px 36px -6px rgba(0,0,0,0.4)'
    }}>
    <Typography style={{margin:'25px',fontSize:'22px'}}>Welcome to our email services</Typography>
    <Box style={{display:'flex',margin:'15px'}}>
    <Typography style={{marginTop:'15px',fontSize:'18px',marginRight:'10px'}}>New here?</Typography>
     <img src='./images/google.png' alt='google' style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
        <Button variant='contained' onClick={googleAuth}>Sign up with Google</Button>
        </Box>
        <Box style={{display:'flex',marginTop:'35px',marginLeft:'15%'}}>
          <Typography style={{fontSize:'18px',marginRight:'10px'}}>Already have a account?</Typography>
          <Link to="/login">Log in</Link>        </Box>
    </Box>
    </Box>
  )
}
