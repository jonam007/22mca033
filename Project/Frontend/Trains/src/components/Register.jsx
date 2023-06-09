import React from 'react'
import Forms from './Form'
import {Paper,Typography,Container,TextField,Button,Box} from '@mui/material';

function Register() {
  return (
    <Container sx={{heigh:'80vh',display:"flex" ,backgroundColor:'maroon',width:'80vh',marginTop:'10%',padding:'5%',borderRadius:'10px'}}>
          <Typography sx={{alignItems:'center',width:'100%',color:'yellow',fontWeight:'bold'}}>User Register</Typography> 
          <Paper>
          <Forms/>

          </Paper>
   
    </Container>
  )
}

export default Register
