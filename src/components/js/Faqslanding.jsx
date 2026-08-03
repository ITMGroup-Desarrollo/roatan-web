import { useState } from "react";
import mas from "../../assets/img/iconos/home/mas.svg";
import menos from "../../assets/img/iconos/home/menos.svg";
import "aos/dist/aos.css";

const PreguntasYRespuestas = ({ t, full }) => {
  const [activa, setActiva] = useState(1);
  const [layoutMode, setLayoutMode] = useState("list"); // 'list', 'two-columns', 'mosaic'

  const toggle = (id) => {
    setActiva(activa === id ? null : id);
  };
  let faqs;

  faqs = [];
  const limit = full ? 20 : 3;
  for (let i = 1; i <= limit; i++) {
    const pregunta = t.homeFaqs[`pregunta${i}`];
    const respuesta = t.homeFaqs[`respuesta${i}`];
    if (pregunta && respuesta) {
      faqs.push({
        id: i,
        pregunta,
        respuesta,
      });
    }
  }

  // Distribuir las FAQs en columnas estáticas de acuerdo con layoutMode
  let columns = [];
  if (layoutMode === "list") {
    columns = [faqs];
  } else if (layoutMode === "two-columns") {
    const col1 = faqs.filter((_, idx) => idx % 2 === 0);
    const col2 = faqs.filter((_, idx) => idx % 2 === 1);
    columns = [col1, col2];
  } else if (layoutMode === "mosaic") {
    const col1 = faqs.filter((_, idx) => idx % 3 === 0);
    const col2 = faqs.filter((_, idx) => idx % 3 === 1);
    const col3 = faqs.filter((_, idx) => idx % 3 === 2);
    columns = [col1, col2, col3];
  }

  const renderFaqCard = ({ id, pregunta, respuesta }) => (
    <div key={id} className="w-full text-left">
      <div className="flex flex-col gap-4">
        <div
          onClick={() => toggle(id)}
          className={`pregunta flex flex-row w-full rounded-full pr-4 items-center justify-left cursor-pointer transition-all duration-300 ease-in-out ${
            activa === id ? "bg-[var(--secondary-color)]" : "bg-transparent"
          }`}
        >
          <img
            className={`mas-icon w-8 md:w-12 ${activa === id ? "hidden" : ""}`}
            src={mas.src}
            alt="mas"
          />
          <img
            className={`menos-icon w-8 md:w-12 ${activa === id ? "" : "hidden"}`}
            src={menos.src}
            alt="menos"
          />
          <p
            className={`pregunta-texto px-6 py-2 text-xl md:text-2xl text-left ${
              activa === id
                ? "text-[var(--darkblue-color)]"
                : "text-[var(--primary-color)]"
            }`}
          >
            {pregunta}
          </p>
        </div>

        {/* RESPUESTA */}
        <div
          className={`respuesta bg-white w-full flex px-4 py-2 rounded-lg items-center justify-left transition-all duration-300 ease-in-out ${
            activa === id ? "" : "hidden"
          }`}
        >
          <p className="respuesta-texto text-xl text-[var(--primary-color)] text-justify">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`preguntasyrespuestas-container w-full flex flex-col items-center ${
      layoutMode === 'list' ? '' : 'md:w-[90%]'
    }`}>
      {/* Selector de Diseño (sólo visible en Desktop) */}
      <div className={`hidden md:flex justify-end items-center gap-3 mb-8 w-full ${
        layoutMode === 'list' 
          ? 'lg:max-w-4xl xl:max-w-6xl mx-auto px-4' 
          : 'px-5'
      }`}>
        <span className="text-[var(--darkblue-color)] font-bebas text-2xl tracking-wider mr-2">VER COMO:</span>
        <button 
          onClick={() => setLayoutMode('list')} 
          className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
            layoutMode === 'list' 
              ? 'bg-[var(--secondary-color)] border-[var(--secondary-color)] text-[var(--darkblue-color)] shadow-sm' 
              : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[var(--primary-color)]'
          }`}
          title="Lista"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
        <button 
          onClick={() => setLayoutMode('two-columns')} 
          className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
            layoutMode === 'two-columns' 
              ? 'bg-[var(--secondary-color)] border-[var(--secondary-color)] text-[var(--darkblue-color)] shadow-sm' 
              : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[var(--primary-color)]'
          }`}
          title="Dos Columnas"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="18" rx="1"></rect>
            <rect x="14" y="3" width="7" height="18" rx="1"></rect>
          </svg>
        </button>
        <button 
          onClick={() => setLayoutMode('mosaic')} 
          className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
            layoutMode === 'mosaic' 
              ? 'bg-[var(--secondary-color)] border-[var(--secondary-color)] text-[var(--darkblue-color)] shadow-sm' 
              : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[var(--primary-color)]'
          }`}
          title="Mosaico"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="11" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <rect x="14" y="18" width="7" height="3" rx="1"></rect>
          </svg>
        </button>
      </div>

      {/* PREGUNTAS (Mobile: siempre 1 sola columna en orden numérico) */}
      <div className="flex flex-col gap-5 w-full md:hidden px-4">
        {faqs.map((faq) => renderFaqCard(faq))}
      </div>

      {/* PREGUNTAS (Desktop: columnas estructuradas en grid estático) */}
      <div className={`hidden md:grid w-full gap-6 ${
        layoutMode === 'list' 
          ? 'grid-cols-1 lg:max-w-4xl xl:max-w-6xl mx-auto px-4' 
          : 'px-5 ' + (layoutMode === 'two-columns' ? 'grid-cols-2' : 'grid-cols-3')
      }`}>
        {columns.map((columnFaqs, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {columnFaqs.map((faq) => renderFaqCard(faq))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasYRespuestas;
