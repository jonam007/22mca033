import React from 'react'
import {Paper,Typography,Container,TextField,Button,Box} from '@mui/material';




function Forms() {
  return (
    <>
    <Container sx={{width:'50vh',height:"90"}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'5vh',
        gap:'2rem'
       
      }}>
       
        
          
          <TextField name="Company name" label="Company Name"/>  
          <TextField name="Owername" label="Owername"/>  
          <TextField name="Rollno" label="Rollno"/>  
          <TextField name="OwnerEmail" label="OwnerEmail"/>  
          <TextField name="AccessCode" disabled value={"Pilfsf"}/>  
          
     

        <Button>Submit</Button>
        </Box>
      
        </Container>
    </>
  )
}

export default Forms
