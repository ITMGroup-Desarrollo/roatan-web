import { useState } from "react";
import mas from "../../assets/img/iconos/home/mas.svg";
import menos from "../../assets/img/iconos/home/menos.svg";
import "aos/dist/aos.css";

const PreguntasYRespuestas = ({ t }) => {
  const [activa, setActiva] = useState(1);

  const toggle = (id) => {
    setActiva(activa === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      pregunta: t.homeFaqs.pregunta1,
      respuesta: t.homeFaqs.respuesta1,
    },
    {
      id: 2,
      pregunta: t.homeFaqs.pregunta2,
      respuesta: t.homeFaqs.respuesta2,
    },
    {
      id: 3,
      pregunta: t.homeFaqs.pregunta3,
      respuesta: t.homeFaqs.respuesta3,
    },
  ];

  return (
    <div className="preguntasyrespuestas-container w-screen xl:w-3/4 md:absolute top-60 lg:top-80 xl:top-80 md:px-20 flex flex-col md:grid md:grid-cols-2">
      
      {/* PREGUNTAS (siempre visibles) */}
      <div className="preguntas-container mb-4 md:mb0 md:col-span-1 px-8 md:px-0 flex flex-col gap-5 md:gap-10 text-center">
        {faqs.map(({ id, pregunta, respuesta }) => (
          <div key={id} className="flex flex-col gap-2">
            <div
              onClick={() => toggle(id)}
              className={`pregunta flex flex-row rounded-full md:mr-8 items-center justify-left cursor-pointer transition-all duration-300 ease-in-out ${
                activa === id ? "bg-[var(--secondary-color)]" : "bg-transparent"
              }`}
            >
              <img
                className={`mas-icon w-8 md:w-10 ${activa === id ? "hidden" : ""}`}
                src={mas.src}
                alt="mas"
              />
              <img
                className={`menos-icon w-8 md:w-10 ${activa === id ? "" : "hidden"}`}
                src={menos.src}
                alt="menos"
              />
              <p
                className={`pregunta-texto pl-6 text-base md:text-xl text-left ${
                  activa === id
                    ? "text-[var(--darkblue-color)]"
                    : "text-[var(--primary-color)]"
                }`}
              >
                {pregunta}
              </p>
            </div>

            {/* RESPUESTA SOLO EN MOBILE */}
            <div
              className={`respuesta md:hidden bg-white flex px-4 py-2 rounded-lg items-center justify-left transition-all duration-300 ease-in-out ${
                activa === id ? "" : "hidden"
              }`}
            >
              <p className="respuesta-texto text-base text-[var(--primary-color)] text-justify">
                {respuesta}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RESPUESTAS SOLO EN DESKTOP */}
      <div className="respuestas-container  hidden md:flex md:col-span-1 flex-col md:gap-10 text-center mb-8 md:mb-0">
        {faqs.map(({ id, respuesta }) => (
          <div
            key={id}
            className={`respuesta bg-white flex md:ml-6 px-4 flex-row rounded-lg items-center justify-left transition-all duration-300 ease-in-out ${
              activa === id ? "" : "hidden"
            }`}
          >
            <p className="respuesta-texto my-4 md:my-0 text-xl text-[var(--primary-color)] text-left">
              {respuesta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasYRespuestas;
