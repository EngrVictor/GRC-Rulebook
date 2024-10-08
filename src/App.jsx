import { useState, useEffect } from 'react'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'
import { Outlet, redirect, useNavigate } from 'react-router-dom'

function App() {
  const [show, setShow] = useState(true)
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  function checkTokenAndRemove() { 
    const token = localStorage.getItem('access_token'); 
    if (isTokenExpired(token)) { 
        localStorage.removeItem('access-token'); 
        console.log('Token expired and removed from local storage.'); 
    } else { 
        console.log('Token is valid.'); 
    } 
} 

  useEffect(() => {
    try {
      const url = 'https://grc-rulebook-backend.onrender.com'
      const token = `Bearer ${localStorage.getItem('access_token')}`

      fetch(`${url}/api/rules`, {headers: {
        Authorization: token
      }})
      .then(response => response.json())
      .then(data => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="home">
      <Sidebar/>

      <main className="main">
        {console.log(data)}
      
        <Topbar setShow={setShow} show={show}/>

        <Outlet context={[show]}/>
      </main>
      
      
    </div>
  )
}

export default App
