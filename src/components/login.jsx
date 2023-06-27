import React from "react";
import Main from "./login/main/main";
import SidebarMenu from "./login/sidebar/sidebarmenu";
import Footer from "./login/footer/footer";

export default function Login() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-grow flex">
                <div className="flex-none">
                    <SidebarMenu />
                </div>
                <div className="flex-grow">
                    <Main />
                </div>
            </div>
            <div className="w-full bg-zinc-900 text-zinc-400">
                <Footer />
            </div>
        </div>
    )
}