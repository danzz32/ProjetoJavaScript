import React, { useState } from "react";
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as PiIcons from 'react-icons/pi';
import * as ImIcons from 'react-icons/im';
import * as IoMd from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';

const logo = require('../../../images/suap1.png');
const logo2 = require('../../../images/logo2.png');

export default function SidebarMenu() {
    const [showAcessos, setShowAcessos] = useState(false);
    const [showAutenticacao, setShowAutenticacao] = useState(false);
    const [showAvaliacoes, setShowAvaliacoes] = useState(false);
    const [showBalcaoDigital, setShowBalcaoDigital] = useState(false);
    const [showConsultas, setShowConsultas] = useState(false);
    const [showEditora, setShowEditora] = useState(false);
    const [showEventos, setShowEventos] = useState(false);
    const [showProgramaGestao, setShowProgramaGestao] = useState(false);
    const [showRelatorios, setShowRelatorios] = useState(false);
    const [showSolicitacoes, setShowSolicitacoes] = useState(false);

    

    return (
        <div className="mr-4">
            <div className="w-80">
                <div className="flex">
                    <div
                        className={`flex min-h-min w-full bg-stone-800 opacity-80 text-neutral-400 `}
                    >
                        <div className="flex w-full min-h-screen justify-start flex-col">
                            <div className="pl-5 flex flex-col mt-7 mb-5">
                                <div className="flex justify-items-center">
                                    <a href="" className="w-[40%] h-10 px-2 py-1 mt-1"><img src={logo} /></a>
                                    <a href="" className="w-[50%] h-12"><img src={logo2} /></a>
                                </div>
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-base w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowAcessos(!showAcessos)}>
                                    ACESSOS
                                </button>
                                {showAcessos && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BiIcons.BiSolidLockAlt className="mr-2" /> Login</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><FaIcons.FaKey className="mr-2" /> Alterar Senha</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><PiIcons.PiIdentificationBadgeFill className="mr-2"/> Acesso do Responsável</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-left w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowAutenticacao(!showAutenticacao)}>
                                    AUTENTICAÇÃO DE DOCUMENTOS
                                </button>
                                {showAutenticacao && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BiIcons.BiSolidLockAlt className="mr-2" /> Documentos Eletrônicos</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BiIcons.BiSolidLockAlt className="mr-2" /> Documentos Gerais</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BiIcons.BiSolidLockAlt className="mr-2" /> Assinaturas Digitais</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BiIcons.BiSolidLockAlt className="mr-2" /> Certificados de Mincursos</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowAvaliacoes(!showAvaliacoes)}>
                                    AVALIAÇÕES
                                </button>
                                {showAvaliacoes && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><ImIcons.ImStatsDots className="mr-2"/> Avaliação de Estágio</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><IoMd.IoMdDocument className="mr-2"/> Avaliação Integrada</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowBalcaoDigital(!showBalcaoDigital)}>
                                    BALCÃO DIGITAL
                                </button>
                                {showBalcaoDigital && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><HiIcons.HiDocumentText className="mr-2"/> Protocolar Documentos</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><TiIcons.TiStarburst className="mr-2"/> Demais serviços via GOV.BR</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowConsultas(!showConsultas)}>
                                    CONSULTAS
                                </button>
                                {showConsultas && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><HiIcons.HiDocumentText className="mr-2"/> Processos Físicos</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><TiIcons.TiStarburst className="mr-2"/> Registro de Diplomas</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><IoMd.IoMdDocument className="mr-2"/> Processos Eletrônicos</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><FaIcons.FaFileContract className="mr-2"/> Contratos</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><FaIcons.FaFileContract className="mr-2"/> Atualizações do Sistema</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><HiIcons.HiDocumentText className="mr-2"/> Rol de Responsáveis</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowEditora(!showEditora)}>
                                    EDITORA
                                </button>
                                {showEditora && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><HiIcons.HiDocumentText className="mr-2"/> Seja um Parecerista</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowEventos(!showEventos)}>
                                    EVENTOS
                                </button>
                                {showEventos && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><TiIcons.TiStarburst className="mr-2"/> Realizar inscrição em Evento</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-left w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowProgramaGestao(!showProgramaGestao)}>
                                    PROGRAMA DE GESTÃO E DESEMPENHO
                                </button>
                                {showProgramaGestao && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><ImIcons.ImStatsDots className="mr-2"/> Painel</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><FaIcons.FaSearch className="mr-2"/> Planos de Trabalho</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowRelatorios(!showRelatorios)}>
                                    RELATÓRIOS
                                </button>
                                {showRelatorios && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><IoMd.IoMdDocument className="mr-2"/> Indicadores RH</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><TiIcons.TiStarburst className="mr-2"/> Certificação ENCCEJA / ENEM</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><IoMd.IoMdDocument className="mr-2"/> Realtórios individuais de Trabalho</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="w-[90%] pl-5">
                                <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowSolicitacoes(!showSolicitacoes)}>
                                    SOLICITAÇÕES
                                </button>
                                {showSolicitacoes && (
                                    <ul>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><TiIcons.TiStarburst className="mr-2"/> Certificação ENEM</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><HiIcons.HiDocumentText className="mr-2"/> Demandas da Comunidade</a>
                                        </li>
                                        <li className="border-b border-black py-1 my-1 ml-4">
                                            <a href="" className="hover:text-lime-500 flex items-center"><BsIcons.BsMegaphoneFill className="mr-2"/> Fale com a Ouvidoria</a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
