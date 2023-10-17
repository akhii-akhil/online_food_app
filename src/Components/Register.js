import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router';

function Register() {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        axios.post("https://backendd-o0vc.onrender.com/save_login_dat",values).then((res) => {
            navigate('/login')
        })
    }
    const initialValues= {
        userName: '',
        password: '',
        Address: '',
        Fathername: '',
        email:'',
    }
    
    const formik = useFormik({
        initialValues,
        onSubmit
    })
    
  return (
      <>
      <form onSubmit={formik.handleSubmit}>
              <h1>Registration Form</h1>
              <label htmlFor='Name' className='lab'>userName</label>
              <input type='text' name='userName' className='text_n' value={formik.values.userName} onChange={formik.handleChange} />
              <br/>
              <label htmlFor='email' className='lab'>password</label>
              <input type='text' className='text_n' name='password' value={formik.values.password} onChange={formik.handleChange} />
              <br />
              <label className='lab' >Address</label>
              <input type='text' className='text_n' name='Address' value={formik.values.Address} onChange={formik.handleChange}/>
              <br />
              <label className='lab'>Fathername</label>
              <input type='text' className='text_n' name='Fathername' value={formik.values.Fathername} onChange={formik.handleChange}/>
              <br/>
              <label className='lab'>Email</label>
              <input type='text' className='text_n' name='email' value={formik.values.email} onChange={formik.handleChange}/> 
              <br/>
              <button type='submit' className='button_style'>Register</button>
          </form>
             
      </>
  )
}

export default Register