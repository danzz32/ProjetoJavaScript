import React from "react";
import Main from "./main/main";
import SidebarMenu from "./sidebar/sidebarmenu";
import Footer from "./footer/footer";
import './login.css';
import { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export default function Login() {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(<FiArrowLeftCircle />);

  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar);
    setButtonIcon(hideSidebar ? <FiArrowLeftCircle /> : <FiArrowRightCircle />);
  };

  return (
    <div className="log w-full min-h-screen selection:bg-green-800 selection:text-white">
      <div className="flex">
        {!hideSidebar && (
          <div className="flex">
            <div className="flex">
              <SidebarMenu />
            </div>
            <button className="text-zinc-400" onClick={toggleSidebar}>
              {buttonIcon}
            </button>
          </div>
        )}
        {hideSidebar && (
          <div className="flex">
            <button className="text-zinc-400" onClick={toggleSidebar}>
              {buttonIcon}
            </button>
          </div>
        )}
        <div className={`flex-grow ${hideSidebar ? 'ml-auto mr-auto' : ''}`}>
          <div className="flex">
            <Main />
          </div>
        </div>
      </div>
      <div className="fixed-bottom-0 h-min w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
