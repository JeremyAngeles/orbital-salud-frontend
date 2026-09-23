import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // El primero empieza abierto por defecto

  const faqs = [
    {
      question: "¿Cuánto cuesta la consulta?",
      answer: "Depende de la especialidad. Puedes ver el precio de cada una en la sección de Especialidades, o escribirnos por WhatsApp."
    },
    {
      question: "¿Las consultas son presenciales o virtuales?",
      answer: "Ambas modalidades están disponibles según la especialidad y tu preferencia. Indícalo al agendar."
    },
    {
      question: "¿Atienden niños?",
      answer: "Sí, contamos con endocrinología pediátrica además de la atención para adultos."
    },
    {
      question: "¿Qué debo llevar a mi consulta?",
      answer: "Tus últimos análisis de laboratorio (si los tienes) y una lista de los medicamentos que tomas actualmente."
    },
    {
      question: "¿Puedo reprogramar mi cita?",
      answer: "Sí, escríbenos por WhatsApp con anticipación y te reagendamos sin costo adicional."
    },
    {
      question: "¿Qué pasa si no puedo asistir?",
      answer: "Avísanos lo antes posible por WhatsApp para coordinar una nueva fecha."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full font-raleway py-24 bg-white overflow-hidden">
      
      {/* Animación de apertura suave */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out forwards;
          }
        `}
      </style>

      <div className="max-w-[850px] mx-auto px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-14">
          <span className="font-raleway text-[#8a9096] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-raleway text-[34px] md:text-[42px] text-[#1e3325] font-bold leading-tight">
            Resolvemos tus dudas
          </h2>
        </div>

        {/* Lista del Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-[24px] border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  {/* El texto cambia a color #256b3c cuando está abierto */}
                  <span className={`font-raleway text-[17px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#256b3c]' : 'text-[#1e3325]'}`}>
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#256b3c] font-bold text-lg shrink-0 transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <p className="font-raleway text-[#6b7280] text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;