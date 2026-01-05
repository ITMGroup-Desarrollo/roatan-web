import { useState } from "react";
import mas from "../../assets/img/iconos/home/mas.svg";
import menos from "../../assets/img/iconos/home/menos.svg";
import "aos/dist/aos.css";

const PreguntasYRespuestas = ({ t, full }) => {
  const [activa, setActiva] = useState(1);

  const toggle = (id) => {
    setActiva(activa === id ? null : id);
  };
  let faqs;

  if (full) {
    faqs = [
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
      {
        id: 4,
        pregunta: t.homeFaqs.pregunta4,
        respuesta: t.homeFaqs.respuesta4,
      },
      {
        id: 5,
        pregunta: t.homeFaqs.pregunta5,
        respuesta: t.homeFaqs.respuesta5,
      },
    ];
  } else {
    faqs = [
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
  }

  return (
    <div className="preguntasyrespuestas-container w-full md:w-[80%] flex flex-col">
      {/* PREGUNTAS (siempre visibles) */}
      <div className="preguntas-container w-full mb-4 md:mb0 md:col-span-1 px-5  flex flex-col gap-5 md:gap-10 text-center">
        {faqs.map(({ id, pregunta, respuesta }) => (
          <div key={id} className="flex flex-col gap-4">
            <div
              onClick={() => toggle(id)}
              className={`pregunta flex flex-row w-full rounded-full md:mr-8 items-center justify-left cursor-pointer transition-all duration-300 ease-in-out ${
                activa === id ? "bg-[var(--secondary-color)]" : "bg-transparent"
              }`}
            >
              <img
                className={`mas-icon w-8 md:w-12 ${
                  activa === id ? "hidden" : ""
                }`}
                src={mas.src}
                alt="mas"
              />
              <img
                className={`menos-icon w-8 md:w-12 ${
                  activa === id ? "" : "hidden"
                }`}
                src={menos.src}
                alt="menos"
              />
              <p
                className={`pregunta-texto pl-6 py-2 text-xl md:text-2xl text-left ${
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
              className={`respuesta bg-white w-full flex px-4 py-2 rounded-lg items-center justify-left transition-all duration-300 ease-in-out ${
                activa === id ? "" : "hidden"
              }`}
            >
              <p className="respuesta-texto text-xl text-[var(--primary-color)] text-justify">
                {respuesta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasYRespuestas;
