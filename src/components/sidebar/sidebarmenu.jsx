import React, { useState } from "react";
const logo = require('../../images/suap1.png');
const logo2 = require('../../images/logo2.png')

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
        <div className="flex h-full w-[27%] bg-stone-700 opacity-75 button-4 text-neutral-400">
            <div className="flex w-full h-screen justify-start flex-col">
                <div className="pl-5 flex flex-col mt-7 mb-5">
                    <div className="flex justify-items-center">
                        <a href="" className="w-[40%] h-10 px-2 py-1 mt-1"><img src={logo} /></a>
                        <a href="" className="w-[50%] h-12"><img src={logo2} /></a>
                    </div>
                </div>
                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 w-full justify-start w- px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowAcessos(!showAcessos)}>
                        ACESSOS
                    </button>
                    {showAcessos && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Login</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Alterar Senha</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Acesso do Responsável</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowAutenticacao(!showAutenticacao)}>
                        AUTENTICAÇÃO DE DOCUMENTOS
                    </button>
                    {showAutenticacao && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Documentos Eletrônicos</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Documentos Gerais</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Assinaturas Digitais</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Certificados de Mincursos</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowAvaliacoes(!showAvaliacoes)}>
                        AVALIAÇÕES
                    </button>
                    {showAvaliacoes && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Avaliação de Estágio</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Avaliação Integrada</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowBalcaoDigital(!showBalcaoDigital)}>
                        BALCÃO DIGITAL
                    </button>
                    {showBalcaoDigital && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Protocolar Documentos</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Demais serviços via GOV.BR</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowConsultas(!showConsultas)}>
                        CONSULTAS
                    </button>
                    {showConsultas && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Processos Físicos</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Registro de Diplomas</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Processos Eletrônicos</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Contratos</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Atualizações do Sistema</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Rol de Responsáveis</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowEditora(!showEditora)}>
                        EDITORA
                    </button>
                    {showEditora && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Seja um Parecerista</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowEventos(!showEventos)}>
                        EVENTOS
                    </button>
                    {showEventos && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Realizar inscrição em Evento</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowProgramaGestao(!showProgramaGestao)}>
                        PROGRAMA DE GESTÃO E DESEMPENHO
                    </button>
                    {showProgramaGestao && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Painel</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Planos de Trabalho</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowRelatorios(!showRelatorios)}>
                        RELATÓRIOS
                    </button>
                    {showRelatorios && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Indicadores RH</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Certificação ENCCEJA / ENEM</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Realtórios individuais de Trabalho</li>
                        </ul>
                    )}
                </div>

                <div className="w-[90%] pl-5">
                    <button className="flex text-2x1 justify-start w-full px-1 py-2 hover:text-lime-700 hover:border rounded-md hover:bg-neutral-400 hover:font-semibold" onClick={() => setShowSolicitacoes(!showSolicitacoes)}>
                        SOLICITAÇÕES
                    </button>
                    {showSolicitacoes && (
                        <ul>
                            <li className="border-b border-black py-1 my-1 ml-4">Certificação ENEM</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Demandas da Comunidade</li>
                            <li className="border-b border-black py-1 my-1 ml-4">Fale com a Ouvidoria</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
