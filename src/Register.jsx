import {useState} from 'react'
import { Button, Grid, TextField } from '@mui/material';
import {Link as LinkRoute} from "react-router-dom"
import axios from 'axios'

export default function Register(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm,setPasswordConfirm] = useState("")
    const [number,setNumber] = useState("")
    function nm({target:{value}}){
        setName(value)
    }
    function em({target:{value}}){
        setEmail(value)

    }
    function ps({target:{value}}){
        setPassword(value)

    }
    function psC({target:{value}}){
        setPasswordConfirm(value)

    }
    function nn({target:{value}}){
        setNumber(value)

    }
    
    function submiting(){
        axios.post("https://api.nver.am/api/v1/user/register",{
            name,
            email,
            password,
            passwordConfirm,
            number
        })
        .then(req=>{
            console.log(req)
            return req
        });
}
    return (
          <Grid container 
                justifyContent="center"
                alignItems="center"
                direction={"column"}
                gap={3}
  >
                <Grid item >
                  <TextField variant="filled" required label="name" value={name} onChange={nm}> </TextField> 
                </Grid>
                <Grid item >
                  <TextField variant="filled" required label="email" value={email}  onChange={em} ></TextField> 
                </Grid>
                <Grid item >
                  <TextField variant="filled" required label="password" value={password}  onChange={ps} ></TextField> 
                </Grid>
                <Grid item >
                  <TextField variant="filled" required label="confirm password" value={passwordConfirm}   onChange={psC}></TextField> 
                </Grid>
                <Grid item >
                  <TextField variant="filled" required label="phone number" value={number}  onChange={nn}> </TextField> 
                </Grid>
                <Grid item >
                    <Button type="button" onClick={submiting}  variant="contained">Register</Button>
                    <LinkRoute to={'/'}> go to login page</LinkRoute>
                
                </Grid>
          </Grid>
    )
  
  }