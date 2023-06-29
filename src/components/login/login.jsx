import React from "react";
import Main from "./main/main";
import SidebarMenu from "./sidebar/sidebarmenu";
import Footer from "./footer/footer";
import './login.css';
import { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export default function Login() {
    const [hideElements, setHideElements] = useState(false);

    const handleCloseClick = () => {
        setHideElements(true);
    };

    const handleShowClick = () => {
        setHideElements(false);
    };

    return (
        <div className="log w-full min-h-screen selection:bg-green-800 selection:text-white">
            <div className="flex">
                <div className={`${hideElements ? 'hidden' : 'block'
                    }`}>
                    <SidebarMenu />
                </div>
                {hideElements ? (
                    <div className="flex ml-0 justify-items-center">
                        <button onClick={handleShowClick}>
                            <FiArrowLeftCircle className="text-zinc-400" />
                        </button>
                    </div>
                ) : (
                    <div className="flex left-0 items-center justify-center">
                        <button onClick={handleCloseClick}>
                            <FiArrowRightCircle className="text-zinc-400" />
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div className="flex-grow">
                    <div className="flex">
                        <Main />
                    </div>
                </div>
                <div className="mt-auto fixed-bottom">
                    <Footer />
                </div>
            </div>
        </div>

    )
}