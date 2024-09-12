import { useState } from 'react'
import { Form } from './form'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'
import SideNav from './components/side-nav'
import { Link, Routes, Route, Outlet, NavLink } from 'react-router-dom'
import Test from './Test'

const controlFlow = [
  'rule entry',
  'evaluate rule',
  'standards and procedures',
  'access risk',
  'implementation',
  'report'
]

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="home">
      <Sidebar/>

      <main className="main">
        <Topbar setShow={setShow} show={show}/>

        <div className="main-sub">
            {/* <p><ArrowLeftIcon className="icon"/> back to previous</p>

            <div className="main-sub_left_sub">
                <ul className="side-nav">
                  <li className="active"><BuildingLibraryIcon className="icon"/> Governance</li>
                  <li><ExclamationTriangleIcon className="icon"/> Risk</li>
                  <li><ClipboardDocumentCheckIcon className="icon"/> Compliance</li>
                </ul>
            </div> */}
          <SideNav show={show}/>

          <div className="main-sub_right">
            <div className="sub_right-top">
              <div className="top">
                <h1>Rule Book / Governance</h1>
                <div className="btn-cont">
                  <button>Save as Draft</button>
                </div>
              </div>
              <div className="bottom">
                <ul className="form-flow">
                  {/* {controlFlow.map(item => <li key={item}>{item}</li>)} */}
                  <li className=""><NavLink to="/" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[0]}</NavLink></li>
                  <li><NavLink to="evaluate-rule" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[1]}</NavLink></li>
                  <li><NavLink to="standards-Procedures" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[2]}</NavLink></li>
                  <li><NavLink to="access-risk" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[3]}</NavLink></li>
                  <li><NavLink to="implementation" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[4]}</NavLink></li>
                  <li><NavLink to="reports" className={({ isActive, isPending }) =>
                      isActive
                        ? "active-form"
                        : isPending
                        ? "pending"
                        : ""
                    }>{controlFlow[5]}</NavLink></li>
                  
                </ul>
              </div>
              {/* <Routes>
                     <Route path={["/", "/main"]} element={<Test />} />
                     <Route exact path="/view" element={<Test />} />
                     <Route exact path="/add" element={<Test/>} />
                  </Routes>  */}
            </div>
            <div className="sub_right-bottom">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      
      
    </div>
  )
}

export default App
