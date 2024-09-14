import { Page } from './governance/Page'
import { Route, Routes } from 'react-router-dom'

export const serve = () => {
  return (
    <Routes>
    <Route path='/governance' element={ <Page /> }/>
  </Routes>
  )
}
