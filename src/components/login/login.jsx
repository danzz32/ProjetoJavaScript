import React from "react";
//import * as FcIcons from 'react-icons/fc';
//import * as AiIcons from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';

const logo = require('../../images/logo.png');
const gov = require('../../images/gov.png')
export default function Login() {
    return (
        <div className="flex w-full h-full justify-center bg-gradient-to-b from-gray-800 via-gray-600 to-gray-500">
            <main className="flex flex-col w-[50%] h-min mt-16 text-sm border-2 bg-white rounded-md border-gray-200 gap-3 p-10">
                <div className="relative mx-auto pt-2">
                    <img src={logo} alt="" className="w-[90%]" />
                </div>
                <div className="mt-4 text-gray-500">
                    <span className="flex items-center"><BiSolidLockAlt />Login IFMA</span>
                </div>
                <div className="flex flex-col mt-3">
                    <div>
                        <label htmlFor="user" >Usuário</label><br />
                        <input type="email" name="user" id="" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="pass" >Senha</label><br />
                        <input type="password" name="pass" id="" className="w-full p-2 border rounded-md" />
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
                    <button className="bg-gray-100 text-base font-medium p-2 mt-3 w-[30%] border rounded-3xl text-blue-700 hover:bg-gray-200">
                        Entrar com <img src={gov} alt="" className="inline-block w-[40%] h-[10%]" />
                    </button>
                </div>
            </main>
        </div>

    )
}