import React, { useState } from "react";
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as PiIcons from 'react-icons/pi';
import * as ImIcons from 'react-icons/im';
import * as IoMd from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as TiIcons from 'react-icons/ti';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as FiIcons from 'react-icons/fi';

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

  const SidebarItem = ({ titleIcon, title, onClick, showSubMenu, subMenu }) => (
    <div className="w-[90%] pl-5">
      <button className="flex text-left text-lg w-full justify-start px-1 py-2 hover:text-lime-500 hover:font-semibold" onClick={onClick}>
        <div className="flex items-center">
          {titleIcon}
          <span>{title}</span>
        </div>
      </button>
      {showSubMenu && (
        <ul>
          {subMenu.map((item, index) => (
            <li key={index} className="border-b text-sm border-black py-1 my-1 ml-4">
              <a href="" className="hover:text-lime-500 flex items-center">
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const subMenuAcessos = [
    {
      label: "Login",
      icon: <BiIcons.BiSolidLockAlt className="mr-2" />
    },
    {
      label: "Alterar Senha",
      icon: <FaIcons.FaKey className="mr-2" />
    },
    {
      label: "Acesso do Responsável",
      icon: <PiIcons.PiIdentificationBadgeFill className="mr-2" />
    }
  ];

  const subMenuAutenticacao = [
    {
      label: "Documentos Eletrônicos",
      icon: <BiIcons.BiSolidLockAlt className="mr-2" />
    },
    {
      label: "Documentos Gerais",
      icon: <BiIcons.BiSolidLockAlt className="mr-2" />
    },
    {
      label: "Assinaturas Digitais",
      icon: <BiIcons.BiSolidLockAlt className="mr-2" />
    },
    {
      label: "Certificados de Mincursos",
      icon: <BiIcons.BiSolidLockAlt className="mr-2" />
    }
  ];

  const subMenuAvaliacoes = [
    {
      label: "Avaliação de Estágio",
      icon: <ImIcons.ImStatsDots className="mr-2" />
    },
    {
      label: "Avaliação Integrada",
      icon: <IoMd.IoMdDocument className="mr-2" />
    }
  ];

  const subMenuBalcaoDigital = [
    {
      label: "Protocolar Documentos",
      icon: <HiIcons.HiDocumentText className="mr-2" />
    },
    {
      label: "Demais serviços via GOV.BR",
      icon: <TiIcons.TiStarburst className="mr-2" />
    }
  ];

  const subMenuConsultas = [
    {
      label: "Processos Físicos",
      icon: <HiIcons.HiDocumentText className="mr-2" />
    },
    {
      label: "Registro de Diplomas",
      icon: <TiIcons.TiStarburst className="mr-2" />
    },
    {
      label: "Processos Eletrônicos",
      icon: <IoMd.IoMdDocument className="mr-2" />
    },
    {
      label: "Contratos",
      icon: <FaIcons.FaFileContract className="mr-2" />
    },
    {
      label: "Atualizações do Sistema",
      icon: <FaIcons.FaFileContract className="mr-2" />
    },
    {
      label: "Rol de Responsáveis",
      icon: <HiIcons.HiDocumentText className="mr-2" />
    }
  ];

  const subMenuEditora = [
    {
      label: "Seja um Parceirista",
      icon: <HiIcons.HiDocumentText className="mr-2" />
    }
  ];

  const subMenuEventos = [
    {
      label: "Realizar inscrição em Evento",
      icon: <TiIcons.TiStarburst className="mr-2" />
    }
  ];

  const subMenuGestaoDesempenho = [
    {
      label: "Painel",
      icon: <ImIcons.ImStatsDots className="mr-2" />
    },
    {
      label: "Planos de Trabalho",
      icon: <FaIcons.FaSearch className="mr-2" />
    }
  ];

  const subMenuRelatorios = [
    {
      label: "Indicadores de RH",
      icon: <IoMd.IoMdDocument className="mr-2" />
    },
    {
      label: "Certificado do ENCCEJA/ENEM",
      icon: <TiIcons.TiStarburst className="mr-2" />
    },
    {
      label: "Relatórios individuais de Trabalho",
      icon: <IoMd.IoMdDocument className="mr-2" />
    }
  ];

  const subMenuSolicitacoes = [
    {
      label: "Certificação ENEM",
      icon: <TiIcons.TiStarburst className="mr-2" />
    },
    {
      label: "Demandas da Comunidade",
      icon: <HiIcons.HiDocumentText className="mr-2" />
    },
    {
      label: "Fale com a Ouvidoria",
      icon: <BsIcons.BsMegaphoneFill className="mr-2" />
    }
  ];

  return (
    <div className="flex">
      <div className="sidebar w-72 bg-zinc-800 opacity-80 text-zinc-400 min-h-min pl-5">
        <div className="sidebar-logo flex px-2 pt-7 pb-4">
          <img src={logo} alt="Logo" className="logo w-[40%] pr-2" />
          <img src={logo2} alt="Logo 2" className="logo2 w-[50%]" />
        </div>
        <div className="sidebar-menu">
          <div className="menu">
            <ul className="nav-menu">
              <SidebarItem
                titleIcon={<BiIcons.BiLogInCircle className="mr-2" />}
                title="Acessos"
                onClick={() => setShowAcessos(!showAcessos)}
                showSubMenu={showAcessos}
                subMenu={subMenuAcessos}
              />
              <SidebarItem
                titleIcon={<MdIcons.MdVerifiedUser className="mr-2" />}
                title="Autenticação"
                onClick={() => setShowAutenticacao(!showAutenticacao)}
                showSubMenu={showAutenticacao}
                subMenu={subMenuAutenticacao}
              />
              <SidebarItem
                titleIcon={<MdIcons.MdAssessment className="mr-2" />}
                title="Avaliações"
                onClick={() => setShowAvaliacoes(!showAvaliacoes)}
                showSubMenu={showAvaliacoes}
                subMenu={subMenuAvaliacoes}
              />
              <SidebarItem
                titleIcon={<FiIcons.FiAirplay className="mr-2" />}
                title="Balcão Digital"
                onClick={() => setShowBalcaoDigital(!showBalcaoDigital)}
                showSubMenu={showBalcaoDigital}
                subMenu={subMenuBalcaoDigital}
              />
              <SidebarItem
                titleIcon={<FaIcons.FaSearch className="mr-2" />}
                title="Consultas"
                onClick={() => setShowConsultas(!showConsultas)}
                showSubMenu={showConsultas}
                subMenu={subMenuConsultas}
              />
              <SidebarItem
                titleIcon={<BsIcons.BsBookmarksFill className="mr-2" />}
                title="Editora"
                onClick={() => setShowEditora(!showEditora)}
                showSubMenu={showEditora}
                subMenu={subMenuEditora}
              />
              <SidebarItem
                titleIcon={<BsIcons.BsCalendar2EventFill className="mr-2" />}
                title="Eventos"
                onClick={() => setShowEventos(!showEventos)}
                showSubMenu={showEventos}
                subMenu={subMenuEventos}
              />
              <SidebarItem
                titleIcon={<MdIcons.MdManageAccounts className="mr-2" />}
                title="Programa de Gestão"
                onClick={() => setShowProgramaGestao(!showProgramaGestao)}
                showSubMenu={showProgramaGestao}
                subMenu={subMenuGestaoDesempenho}
              />
              <SidebarItem
                titleIcon={<BiIcons.BiSolidReport className="mr-2" />}
                title="Relatórios"
                onClick={() => setShowRelatorios(!showRelatorios)}
                showSubMenu={showRelatorios}
                subMenu={subMenuRelatorios}
              />
              <SidebarItem
                titleIcon={<BiIcons.BiGitPullRequest className="mr-2" />}
                title="Solicitações"
                onClick={() => setShowSolicitacoes(!showSolicitacoes)}
                showSubMenu={showSolicitacoes}
                subMenu={subMenuSolicitacoes}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}