import React, { useState } from 'react'
import img1 from '../assets/img1.png'
import './login.css'
import { AuthNav } from '../components/auth-nav'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2"

export const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [password, setPassword] = useState("")

  async function handleLogin(e){
      e.preventDefault()

      setIsSubmitting(true)
         try {
          const requestBody = {email, password}
          const url = 'https://grc-rulebook-backend.onrender.com'
          console.log(requestBody);
          
          const response = await axios.post(`${url}/api/auth/login`, requestBody)
          localStorage.setItem('access_token', response.data.token)
          Swal.fire({
            icon: "success",
            title: "login successfull",
            text: response.msg
        });
          navigate('/governance/form')
      } catch (error) {
          console.log(error);
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg
          });
      }
     
      setIsSubmitting(false)
  }
  
  return (
    <div className='login-wrapper'>
      <AuthNav />
       <div className='login_cont'>
            <div>
                <h1>Welcome Back</h1>
                <p className='para'>Enter your credentials to access your account.</p>
                <br></br>

                <form action='/login' onSubmit={handleLogin}>
             <div className="sm:col-span-5">
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Email address
               </label>
               <div className="mt-2">
                 <input
                   id="email"
                   name="email"
                   type="text"
                   placeholder='Enter Email Address'
                   autoComplete="email"
                   onChange={e => {
                    setEmail(e.target.value)
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
                 <p> </p>
               </div>
             </div>
             <div className="sm:col-span-5">
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
               </label>
               <div className="mt-2 mb-6">
                 <input
                   id="password"
                   name="password"
                   type="password"
                   placeholder='Enter Password'
                   autoComplete="password"
                   onChange={e => {
                    setPassword(e.target.value)
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
                 <p> </p>
               </div>
              </div>
             <input type="submit" value={isSubmitting ? "Logging in..." : "Login"} disabled={isSubmitting}/>
             <p className='para'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                </form>
            </div>
        </div> 
    </div>
       
  )
}
