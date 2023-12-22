import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [data,setData]=useState({
    email:'',
    password:'',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const{email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }

  return (
    <div className='mt-4'>
      <form onSubmit={loginUser}>
        <div className='mt-8'>
          <label className='mr-10'>Email</label>
          <input type="email" placeholder='enter email...'value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        </div>
        <div className='mt-2'>
          <label className='mr-2'>Password</label>
          <input type="password" placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        </div>
        <button type='submit' className='rounded-full mt-2'>Login</button>
      </form>
    </div>
  )
}

export default Login