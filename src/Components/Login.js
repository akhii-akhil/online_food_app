import React, { useEffect } from 'react'
import './Login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function Login() {
    const navigate = useNavigate();
    const [log, setLog] = useState([])
    const [error,setError]=useState(false)
    useEffect(() => {
        axios.get("https://backendd-o0vc.onrender.com/log_Data").then((res) => {
            setLog(res.data)
     })   
    },[])
    const initialValues = {
        name: '',
        password:''
    }
    const onSubmit = (values) => {
        log.map((i) => {
            if (i.userName == values.name && i.password == values.password)
            {
                localStorage.setItem("username", i.userName)
                navigate('/home')
                window.location.reload();
            }
            
        })
        setError(true)
       
    }
    const formik = useFormik({
        initialValues,
        onSubmit
    })
  return (
      <>
          
          <form onSubmit={formik.handleSubmit}>
              <h1>Login Form</h1>
              <label htmlFor='Name' className='lab'>userName</label>
              <input type='text' name='name' className='text_n' value={formik.values.name} onChange={formik.handleChange} />
              <br/>
              <label htmlFor='email' className='lab'>password</label>
              <input type='text' className='text_n' name='password' value={formik.values.password} onChange={formik.handleChange} />
              <br/>
              <button type='submit' className='button_style'>Submit</button>
              <br />
              <br />
              {
                  error
                  &&
                  <label style={{color:"red"}}>The userName or password is incorrect</label>
              }
              
          </form>
          
             
        </>
  )
}

export default Login