import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="home">
      <Sidebar/>

      <main className="main">
        <Topbar setShow={setShow} show={show}/>

        <Outlet context={[show]}/>
      </main>
      
      
    </div>
  )
}

export default App
