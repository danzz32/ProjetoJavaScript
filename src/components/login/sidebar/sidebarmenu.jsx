import React, { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

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

    const [hideElements, setHideElements] = useState(false);

    const handleCloseClick = () => {
        setHideElements(true);
    };

    const handleShowClick = () => {
        setHideElements(false);
    };

    return (
        <div className="absolute min-h-screen">
            <div className="flex">
                <div
                    className={`flex h-full w-[27%] bg-stone-800 opacity-75 text-neutral-400 transition-all duration-500 ${hideElements ? 'hidden' : 'block'
                        }`}
                >
                    <div className="flex w-full min-h-screen justify-start flex-col">
                        <div className="pl-5 flex flex-col mt-7 mb-5">
                            <div className="flex justify-items-center">
                                <a href="" className="w-[40%] h-10 px-2 py-1 mt-1"><img src={logo} /></a>
                                <a href="" className="w-[50%] h-12"><img src={logo2} /></a>
                            </div>
                        </div>
                        <div className="w-[90%] pl-5">
                            <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowAcessos(!showAcessos)}>
                                ACESSOS
                            </button>
                            {showAcessos && (
                                <ul>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Login</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Alterar Senha</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Acesso do Responsável</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="w-[90%] pl-5">
                            <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowAutenticacao(!showAutenticacao)}>
                                AUTENTICAÇÃO DE DOCUMENTOS
                            </button>
                            {showAutenticacao && (
                                <ul>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Documentos Eletrônicos</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Documentos Gerais</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Assinaturas Digitais</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Certificados de Mincursos</a>
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
                                        <a href="" className="hover:text-lime-500">Avaliação de Estágio</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Avaliação Integrada</a>
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
                                        <a href="" className="hover:text-lime-500">Protocolar Documentos</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Demais serviços via GOV.BR</a>
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
                                        <a href="" className="hover:text-lime-500">Processos Físicos</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Registro de Diplomas</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Processos Eletrônicos</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Contratos</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Atualizações do Sistema</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Rol de Responsáveis</a>
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
                                        <a href="" className="hover:text-lime-500">Seja um Parecerista</a>
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
                                        <a href="" className="hover:text-lime-500">Realizar inscrição em Evento</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="w-[90%] pl-5">
                            <button className="flex text-2x1 w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={() => setShowProgramaGestao(!showProgramaGestao)}>
                                PROGRAMA DE GESTÃO E DESEMPENHO
                            </button>
                            {showProgramaGestao && (
                                <ul>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Painel</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Planos de Trabalho</a>
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
                                        <a href="" className="hover:text-lime-500">Indicadores RH</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Certificação ENCCEJA / ENEM</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Realtórios individuais de Trabalho</a>
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
                                        <a href="" className="hover:text-lime-500">Certificação ENEM</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Demandas da Comunidade</a>
                                    </li>
                                    <li className="border-b border-black py-1 my-1 ml-4">
                                        <a href="" className="hover:text-lime-500">Fale com a Ouvidoria</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {hideElements ? (
                    <div className="flex items-center justify-between">
                        <button onClick={handleShowClick}>
                            <FiArrowLeftCircle className="text-zinc-400" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <button onClick={handleCloseClick}>
                            <FiArrowRightCircle className="text-zinc-400" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
