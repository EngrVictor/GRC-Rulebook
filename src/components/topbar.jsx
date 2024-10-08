import { Button } from "./button";
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, BellAlertIcon } from "@heroicons/react/24/outline"

export const Topbar = ({show, setShow}) => {

  const handleDrawer = () => {
    setShow(!show);
    console.log('worked')
  };

  return (
    <div className="topbar">
        <div className="topbar-icon">
            {show ? <Bars3BottomLeftIcon className="icon" onClick={handleDrawer}/> : <Bars3BottomRightIcon className="icon" onClick={handleDrawer}/>}
        </div>
        <div className="other">
            <Button>Create New Rule</Button>
            <BellAlertIcon className="icon"/>
        </div>
    </div>
  )
}
