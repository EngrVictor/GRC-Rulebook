import { UserCircleIcon, FolderOpenIcon, DocumentTextIcon, ClockIcon, WrenchScrewdriverIcon, Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="Logo">
            {/* <img src="" alt=""></img> */}
            <h1>Logo</h1>
        </div>
        <div className="icon-cont">
        <NavLink to="dashboard" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <Squares2X2Icon className='icon'/> </NavLink>
            <NavLink to="audits" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <FolderOpenIcon className='icon'/> </NavLink>
            <NavLink to="/" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <DocumentTextIcon className='icon'/> </NavLink>
            <NavLink to="edit" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <PencilSquareIcon className='icon'/> </NavLink>
            <NavLink to="overview" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <ClockIcon className='icon'/> </NavLink>
            <NavLink to="settings" className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }> <WrenchScrewdriverIcon className='icon'/> </NavLink>
        </div>
        <div className="avatar-section">
            <UserCircleIcon className='user'/>
        </div>
    </div>
  )
}
