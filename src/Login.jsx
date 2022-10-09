import { Button, Grid, Link, TextField } from '@mui/material';
import {Link as LinkRoute} from "react-router-dom"

export default function Login(){
function submiting(e){
  e.preventDefault()
    


   }
    return (
      <form onSubmit={submiting} >
          <Grid container 
                justifyContent="center"
                alignItems="center"
                direction={"column"}
                gap={3}
  >
                <Grid item >
                  <TextField variant="filled" required label="email"></TextField> 
                </Grid>
                <Grid item >
                  <TextField variant="filled" required label="password"></TextField> 
                </Grid>
                <Grid item >
                    <Button type="submit" variant="outlined">Sign in</Button>
                    <LinkRoute to={'/register'}> go to register page</LinkRoute>
                </Grid>
          </Grid>
        </form>
    )
  
  }