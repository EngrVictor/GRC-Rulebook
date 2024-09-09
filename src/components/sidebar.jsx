import { UserCircleIcon, FolderOpenIcon, DocumentTextIcon, ClockIcon, WrenchScrewdriverIcon, Squares2X2Icon, PencilSquareIcon } from '@heroicons/react/24/outline'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="Logo">
            {/* <img src="" alt=""></img> */}
            <h1>Logo</h1>
        </div>
        <div className="icon-cont">
            <Squares2X2Icon className='icon'/>
            <FolderOpenIcon className='icon'/>
            <DocumentTextIcon className='icon active'/>
            <PencilSquareIcon className='icon'/>
            <ClockIcon className='icon'/>
            <WrenchScrewdriverIcon className='icon'/>
        </div>
        <div className="avatar-section">
            <UserCircleIcon className='user'/>
        </div>
    </div>
  )
}
