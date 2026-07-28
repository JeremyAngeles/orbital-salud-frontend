import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const EspecialidadesPage = () => {
  const especialidadesDetalle = [
    {
      id: 1,
      titulo: "Endocrinología Integral",
      queEs: "Es la rama médica enfocada en el sistema endocrino: las glándulas y las hormonas que regulan tu metabolismo, crecimiento y desarrollo.",
      comoAyuda: "Te ayudamos a encontrar la causa raíz de problemas como resistencia a la insulina, alteraciones de la tiroides, ovarios poliquísticos (SOP) y fatiga crónica, brindándote un plan de balance hormonal.",
      doctor: "Dra. Angélica Caycho",
      fotoDoctor: "/doctor_caycho.jpg", 
      fotoEspecialidad: "/esp_endocrinologia.jpg" 
    },
    {
      id: 2,
      titulo: "Dermatología Clínica y Estética",
      queEs: "Especialidad dedicada al diagnóstico, tratamiento y prevención de las enfermedades de la piel, cabello y uñas.",
      comoAyuda: "Tratamos el acné hormonal, caída de cabello, rosácea y manchas desde adentro hacia afuera, trabajando en conjunto con endocrinología para asegurar que tu piel refleje tu salud interna.",
      doctor: "Dra. Karen Angeles",
      fotoDoctor: "/doctor_angeles.jpg",
      fotoEspecialidad: "/esp_dermatologia.jpg"
    },
    {
      id: 3,
      titulo: "Nutrición Metabólica",
      queEs: "Una visión de la alimentación basada en ciencia que no se centra en contar calorías, sino en nutrir tus células y sanar tu metabolismo.",
      comoAyuda: "Creamos planes de alimentación sostenibles adaptados a tus requerimientos hormonales. Ideal para revertir pre-diabetes, ganar masa muscular y mejorar tu relación con la comida.",
      doctor: "Lic. Carolina Moreno",
      fotoDoctor: "/doctor_moreno.jpg",
      fotoEspecialidad: "/esp_nutricion.jpg"
    },
    {
      id: 4,
      titulo: "Endocrinología Pediátrica",
      queEs: "El cuidado especializado de los desórdenes hormonales y de crecimiento desde el nacimiento hasta la adolescencia.",
      comoAyuda: "Monitoreamos el desarrollo adecuado de tus hijos, tratando problemas de pubertad precoz o retrasada, talla baja y prevención de obesidad infantil en una etapa crucial de su vida.",
      doctor: "Dr. César Jara",
      fotoDoctor: "/doctor_jara.jpg",
      fotoEspecialidad: "/esp_pediatria.jpg"
    },
    {
      id: 5,
      titulo: "Cardiología Preventiva",
      queEs: "El cuidado del sistema cardiovascular enfocado en prevenir eventos cardíacos antes de que los síntomas graves aparezcan.",
      comoAyuda: "Evaluamos y controlamos factores de riesgo metabólico como la hipertensión y el colesterol alto (dislipidemia) para proteger tu corazón a largo plazo.",
      doctor: "Dr. Luis Nizama",
      fotoDoctor: "/doctor_nizama.jpg",
      fotoEspecialidad: "/esp_cardiologia.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* === HEADER DE LA PÁGINA === */}
      <section className="bg-os-beige pt-20 pb-24 md:pt-28 md:pb-32 px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#a68a61] font-bold text-[11px] md:text-[13px] tracking-[0.25em] uppercase mb-4 block font-sans">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-os-dark mb-6 leading-tight">
            Nuestras <br className="md:hidden"/> Especialidades
          </h1>
          <p className="text-os-ink text-[16px] md:text-[18px] font-sans font-medium leading-relaxed">
            Conoce en detalle cómo cada una de nuestras áreas médicas se integra para tratar la causa raíz de tu malestar y devolverte el balance.
          </p>
        </div>
        
        {/* === ONDA INFERIOR CORREGIDA === */}
        {/* Usamos el SVG que dibuja la base plana abajo para que el blanco conecte perfecto */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 120" className="block w-full h-[50px] md:h-[90px]" preserveAspectRatio="none">
            <path 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* === CONTENIDO ZIG-ZAG === */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-[1200px] mx-auto space-y-24 md:space-y-40">
        {especialidadesDetalle.map((esp, index) => {
          // Si el índice es impar, invertimos la fila en pantallas medianas o grandes
          const isReverse = index % 2 !== 0;

          return (
            <div key={esp.id} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
              
              {/* BLOQUE DE IMAGEN */}
              <div className="w-full md:w-1/2 relative group">
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg h-[300px] md:h-[450px] bg-os-beige">
                  <img 
                    src={esp.fotoEspecialidad} 
                    alt={esp.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/0"></div>
                </div>

                {/* Tarjeta del Doctor */}
                <div className={`absolute -bottom-6 ${isReverse ? '-right-4 md:-left-8' : '-left-4 md:-right-8'} bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-black/5 max-w-[260px] z-10`}>
                  <img src={esp.fotoDoctor} alt={esp.doctor} className="w-14 h-14 rounded-full object-cover bg-os-beige shrink-0" />
                  <div>
                    <p className="text-[#a68a61] text-[10px] font-bold tracking-wider uppercase">A cargo de</p>
                    <p className="text-os-dark font-serif font-bold leading-tight">{esp.doctor}</p>
                  </div>
                </div>
              </div>

              {/* BLOQUE DE TEXTO */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-serif text-os-dark mb-6 leading-tight">
                  {esp.titulo}
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-os-dark font-bold font-sans text-[15px] md:text-[17px] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a68a61]"></span> ¿Qué es?
                  </h3>
                  <p className="text-os-ink text-[15px] md:text-[16px] leading-relaxed font-sans">
                    {esp.queEs}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-os-dark font-bold font-sans text-[15px] md:text-[17px] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a68a61]"></span> ¿Cómo puede ayudarte?
                  </h3>
                  <p className="text-os-ink text-[15px] md:text-[16px] leading-relaxed font-sans">
                    {esp.comoAyuda}
                  </p>
                </div>

                <div className="mt-10">
                   <Link to="/#agenda" className="inline-block bg-os-dark text-white px-8 py-3.5 rounded-full font-sans font-semibold text-[14px] hover:bg-os-medium transition-colors shadow-md">
                     Agendar en {esp.titulo.split(' ')[0]}
                   </Link>
                </div>
              </div>

            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default EspecialidadesPage;