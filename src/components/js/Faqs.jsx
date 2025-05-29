import { useState } from "react";
import mas from "../../assets/img/iconos/home/mas.svg";
import menos from "../../assets/img/iconos/home/menos.svg";

const PreguntasYRespuestas = ({ t }) => {
  const [activa, setActiva] = useState(null);

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
    <div className="preguntasyrespuestas-container w-screen absolute top-52 lg:top-72 xl:top-60 px-20 grid grid-cols-2">
      <div className="preguntas-container col-span-1 flex flex-col gap-10 text-center">
        {faqs.map(({ id, pregunta }) => (
          <div
            key={id}
            onClick={() => toggle(id)}
            className={`pregunta flex flex-row rounded-full mr-8 items-center justify-left cursor-pointer transition-all duration-300 ease-in-out ${
              activa === id ? "bg-[var(--secondary-color)]" : "bg-transparent"
            }`}
          >
            <img
              className={`mas-icon w-10 ${activa === id ? "hidden" : ""}`}
              src={mas.src}
              alt="mas"
            />
            <img
              className={`menos-icon w-10 ${activa === id ? "" : "hidden"}`}
              src={menos.src}
              alt="menos"
            />
            <p className="pregunta-texto pl-6 text-lg md:text-xl text-[var(--primary-color)]">
              {pregunta}
            </p>
          </div>
        ))}
      </div>

      <div className="respuestas-container col-span-1 flex flex-col gap-10 text-center">
        {faqs.map(({ id, respuesta }) => (
          <div
            key={id}
            className={`respuesta bg-white flex ml-12 px-4 flex-row rounded-lg items-center justify-left transition-all duration-300 ease-in-out ${
              activa === id ? "" : "hidden"
            }`}
          >
            <p className="respuesta-texto  text-lg md:text-xl text-[var(--primary-color)] text-left">
              {respuesta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasYRespuestas;
