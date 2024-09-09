"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, BuildingLibraryIcon, ClipboardDocumentCheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const SideNav = ({show}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleDrawer = () => {
  //   setIsOpen(!isOpen);
  //   console.log('worked')
  // };

  useEffect(() => {
    // const handleEscKeyPress = (e) => {
    //   if (e.keyCode === 27 && isOpen) {
    //     setIsOpen(false);
    //   }
    // };

    if (show) {
      document.querySelector('.main-sub_left').classList.add('main-sub_left_col')
      document.querySelector('.form-flow').classList.remove('form-flow_change')
    } else {
      document.querySelector('.main-sub_left').classList.remove('main-sub_left_col')
      document.querySelector('.form-flow').classList.add('form-flow_change')
    }

    return () => {
      document.querySelector('.main-sub_left').classList.remove('main-sub_left_col')
      document.querySelector('.form-flow').classList.remove('form-flow_change')
    };
  }, [show]);

  return (
    <div className="main-sub_left">
        <p><ArrowLeftIcon className="icon"/> back to previous</p>

        <div className="main-sub_left_sub">
            <ul className="side-nav">
            <li className="active"><BuildingLibraryIcon className="icon"/> Governance</li>
            <li><ExclamationTriangleIcon className="icon"/> Risk</li>
            <li><ClipboardDocumentCheckIcon className="icon"/> Compliance</li>
            </ul>
        </div> 
    </div>
  );
};

export default SideNav;