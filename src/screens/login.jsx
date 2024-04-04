import React, { useState } from 'react'
import LGIMAGE from "../images/Spring.png"
import "../styles/loginpage.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

export default function Login() {
  const [credentials, setCredentials] = useState({
    lemail: "",
    lpassword: "",
    remail: "",
    rpassword: ""
  });
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  const change = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }
  console.log(credentials);

  const HandleRegister = async (e) => {
    e.preventDefault()
    const res = await fetch("https://spring-fiesta-2k24-backend.onrender.com/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: credentials.remail,
            password: credentials.rpassword
        })
    })
    const val = await res.json()
    if(val.success){
        alert("Registration Successful")
    }else{
        alert(val.error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
        const res = await fetch("https://spring-fiesta-2k24-backend.onrender.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.lemail,
                password: credentials.lpassword
            }),
        })   
        const val = await res.json()
        console.log(val.success)
        if(val.success){
            alert("Login Success")
            console.log(decodeToken(val.token))
            localStorage.setItem("token",val.token);
            navigate("/") 
        }else{ 
        alert(val.token) 
    }
  }


  return (
    <div className='main-div'>
      {login ? 
      <>
        <div className="logreg-main">
          <div className='logreg-out-left'>
            <img src={LGIMAGE} alt="login_img" className='login-image' />
          </div>
          <div className='credentials-div'>
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <p>E-mail</p>
              <input type='email' name="lemail" value={credentials.lemail} onChange={change} />
            </div>
            <div>
              <p>Password</p>
              <input type='password' name="lpassword" value={credentials.lpassword} onChange={change} />
            </div>
            <div>
              <Button variant="contained" color="success" onClick={handleLogin}>Login</Button>
            </div>
            <div style={{display:"flex",textAlign:"center",}}>
              OR
            </div>
            <div>
                <Button variant="contained" color="error" onClick={()=>{setLogin(false)}}>Register</Button>
            </div>
          </div>
        </div>
      </>
       : 
      <div className="logreg-main">
        <div className="logreg-out-left">
          <img src={LGIMAGE} alt="login_img" className='login-image' />
        </div>
        <div className='credentials-div'>
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <p>E-mail</p>
            <input type='email' name="remail" value={credentials.remail} onChange={change} />
          </div>
          <div>
            <p>Password</p>
            <input type='password' name="rpassword" value={credentials.rpassword} onChange={change} />
          </div>
          <div>
            <Button variant="contained" color="success" onClick={HandleRegister}>Register</Button>
          </div>
          <div style={{display:"flex",textAlign:"center",}}>
              OR
            </div>
          <div>
              <Button variant='contained' color="error" onClick={()=>{setLogin(true)}}> Login </Button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
