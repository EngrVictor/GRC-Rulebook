import React from 'react'
import SideNav from './components/side-nav'
import { Outlet, useOutletContext } from 'react-router-dom'
import Test from './Test'

export const Wrapper = () => {

  const [show] = useOutletContext()
console.log(show);

  return (
    <div className="main-sub">
    <SideNav show={false}/>

    <Outlet /> 
  </div>
  )
}
