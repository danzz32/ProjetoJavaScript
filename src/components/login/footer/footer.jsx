import React from "react";
import { BiLogoCreativeCommons } from 'react-icons/bi';
import { BiLogoPython } from 'react-icons/bi';
import { AiFillDatabase } from 'react-icons/ai';
import { BsFillPersonBadgeFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="bg-zinc-800 text-neutral-400">
      <ul className="flex justify-center p-4 text-sm font-mono">
        <li className="mx-4 flex"> <BiLogoCreativeCommons className="h-[100%]" /><span className="pl-2">2023 SUAP</span></li>
        <li className="mx-4 flex"> <BiLogoPython className="h-[100%]" /><span className="pl-2"> Desenvolvido por IFMA/IFRN</span></li>
        <li className="mx-4 flex"> <AiFillDatabase className="h-[100%]" /><span className="pl-2">suap - svml99suap071</span></li>
        <li className="mx-4 flex"> <BsFillPersonBadgeFill className="h-[100%]" /> <span className="pl-2">Licenciado para IFMA</span></li>
      </ul>
    </div >

  )
}