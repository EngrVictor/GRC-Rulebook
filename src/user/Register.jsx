import React, {useState} from 'react'
import './login.css'
import { AuthNav } from '../components/auth-nav'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from "sweetalert2"

export const Register = () => {

  const navigate = useNavigate()

  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const  [error, setError] = useState(null)

  async function handleRegister(e){
      e.preventDefault()
      setIsSubmitting(true)
      try {
        const url = 'https://grc-rulebook-backend.onrender.com'
        if (confirmPass !== password) {
          setError('password doesn\'t match')
          throw  new Error('password doesn\'t match')
        }
          const requestBody = {username, email, password}
          console.log(requestBody);
          
          const response = await axios.post(`${url}/api/auth/register`, requestBody)
          // localStorage.setItem('access_token', response.data.token)
          Swal.fire({
            icon: "success",
            title: "success",
            text: response.msg
        });
          navigate('/')
      } catch (error) {
          console.log(error);
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.msg || error.response.data.error
          });
      }
      setIsSubmitting(false)
  }

  return (
    <div className='login-wrapper'>
      <AuthNav />
       <div className='login_cont'>
            <div>
                <h1>Get Started Now</h1>
                <p className='para'>Enter your details below to create your account.</p>
                <br></br>

                <form action="/register" onSubmit={handleRegister}>
                <div className="sm:col-span-2">
               <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                 Full Name
               </label>
               <div className="mt-2">
                 <input
                   id="full-name"
                   name="full-name"
                   type="text"
                   placeholder='Enter Full Name'
                   autoComplete="full-name"
                   onChange={e => {
                    setUserName(e.target.value)
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             <div className="sm:col-span-5">
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Email address
               </label>
               <div className="mt-2">
                 <input
                   id="email"
                   name="email"
                   type="email"
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
               <div className="mt-2">
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
              <div className="sm:col-span-5">
               <label htmlFor="confrim-pass" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
               </label>
               <div className="mt-2 mb-6">
                 <input
                   id="confrim-pass"
                   name="confrim-pass"
                   type="password"
                   placeholder='Confirm Password'
                   onChange={e => {
                    if (e.target.value !== password) {
                      setError('password doesn\'t match')
                    } else {
                      setError('')
                    }
                    setConfirmPass(e.target.value)
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
                 {error &&  <h6 className="text-red-500">{error}</h6>}
               </div>
              </div>
             <input type="submit" value={isSubmitting ? "Signing Up..." : "Sign Up"} disabled={isSubmitting} />
             <p className='para'>Already have an account? <Link to='/login'>Sign In</Link></p>
                </form>
            </div>
        </div> 
    </div>
  )
}
