import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'

export const AuthNav = () => {
  return (
    <div className='auth-nav'>
        <h2>Rulebook / GRC</h2>

        <div>
            <Link to='/login'><Button color='#4f46e5'>Log In</Button></Link>
            <Link to='/register'><Button>Sign Up</Button></Link>
        </div>
    </div>
  )
}
