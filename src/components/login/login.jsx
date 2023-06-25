import React from "react";
import { BiSolidLockAlt } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import './login.css';
import Footer from "../footer/footer";
import SidebarMenu from "../sidebar/sidebarmenu";

const logo = require('../../images/logo.png');
const gov = require('../../images/gov.png');

export default function Login() {
    return (
        <div>
            <SidebarMenu />
            <div className="principal flex w-full h-full justify-center items-center ">
                <div className="flex flex-col w-[47%]  text-sm border bg-white rounded-md gap-3 p-10 mt-16 mb-2 overflow-auto">
                    <div className="relative mx-auto pt-2">
                        <img src={logo} alt="" className="w-[90%]" />
                    </div>
                    <div className="mt-4 text-gray-500">
                        <span className="flex items-center"><BiSolidLockAlt />Login IFMA</span>
                    </div>
                    <div className="flex flex-col mt-3">
                        <div>
                            <label htmlFor="user" className="text-gray-500">Usuário:</label><br />
                            <input type="email" name="user" id="" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="mt-3 ">
                            <label htmlFor="pass" className="text-gray-500">Senha:</label><br />
                            <div className="flex items-center">
                                <input type="password" name="pass" id="" className="w-full p-2 border rounded-s-md " />
                                <div className="h-full">
                                    <BsEyeFill className="w-10 m-0 border rounded-e-md border-s-0 h-[100%] px-2 py-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-green-700 p-2 mt-3 w-full border rounded-3xl text-white hover:bg-green-800">Acessar</button>
                    </div>
                    <div className="flex flex-col">
                        <a href="" className="text-end text-green-900 hover:underline">Esqueceu ou deseja alterar sua senha?</a>
                    </div>
                    <div className="mt-4 text-gray-500">
                        <span className="flex items-center"><BiSolidLockAlt />Usuários externos</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button className="bg-gray-100 text-base font-small p-2 mt-3 w-[30%] border rounded-3xl text-blue-700 hover:bg-gray-200">
                            Entrar com <img src={gov} alt="" className="inline-block w-[40%] h-[10%]" />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}