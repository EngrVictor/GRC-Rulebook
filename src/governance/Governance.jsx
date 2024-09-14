import { Link, Routes, Route, Outlet, NavLink } from 'react-router-dom'

const controlFlow = [
    'rule entry',
    'evaluate rule',
    'standards and procedures',
    'access risk',
    'implementation',
    'report'
  ]

export const Governance = () => {
  return (
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
          <NavLink to="form" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li className="">{controlFlow[0]}</li></NavLink>
          <NavLink to="evaluate-rule" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li>{controlFlow[1]}</li></NavLink>
          <NavLink to="standards-and-procedures" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li>{controlFlow[2]}</li></NavLink>
          <NavLink to="access-risk" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li>{controlFlow[3]}</li></NavLink>
          <NavLink to="implementation" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li>{controlFlow[4]}</li></NavLink>
          <NavLink to="reports" className={({ isActive, isPending }) =>
              isActive
                ? "active-form"
                : isPending
                ? "pending"
                : ""
            }><li>{controlFlow[5]}</li>
          </NavLink>
        </ul>
      </div>
    </div>
    <div className="sub_right-bottom">
      <Outlet />
    </div>
  </div>
  )
}
