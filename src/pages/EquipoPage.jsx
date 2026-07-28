import React, { useState, useEffect } from 'react';
import Testimonios from '../components/Testimonios';
import Footer from '../components/Footer';

const EquipoPage = ({ equipoData, loading, error }) => {
  // === ESTADO PARA EL MODAL ===
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  // Bloquear el scroll de la página de fondo cuando el modal está abierto
  useEffect(() => {
    if (doctorSeleccionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [doctorSeleccionado]);

  // === DATOS POR DEFECTO (Mockup con estructura completa para el Modal) ===
  const defaultEquipo = [
    { 
      id: 1, 
      nombre: "Dra. Angélica Caycho", 
      especialidad: "Endocrinología", 
      imagen: "/doctor_caycho.jpg",
      detalle: {
        tituloCompleto: "Médica Endocrinóloga · Especialista en Obesidad, Diabetes y Salud Metabólica",
        formacion: [
          { institucion: "Universidad Nacional Mayor de San Marcos", grado: "Médico-cirujana, Medicina", periodo: "2011 – 2017", logoBg: "bg-blue-100" },
          { institucion: "Universidad Nacional Mayor de San Marcos", grado: "Médica Endocrinóloga, Endocrinología", periodo: "2020 – 2023", logoBg: "bg-blue-100" },
          { institucion: "Universidad Peruana Cayetano Heredia", grado: "Maestría en desórdenes de metabolismo, obesidad y nutrición", periodo: "2024 – 2025", logoBg: "bg-red-600" },
          { institucion: "Universidad Austral, Argentina", grado: "Diplomatura en Cirugía Metabólica", periodo: "2022", logoBg: "bg-blue-900" }
        ],
        cursos: ["Certificación SCOPE — World Obesity Federation"],
        experiencia: [
          "Speaker, Novo Nordisk (2025 – actualidad)",
          "Médica Endocrinóloga, Clínica Tezza (2023 – actualidad)",
          "Médica Endocrinóloga, Clínica Internacional",
          "Endocrinóloga, Clínica Good Hope",
          "Residencia en Endocrinología, Hospital Sabogal — EsSalud"
        ]
      }
    },
    { 
      id: 2, 
      nombre: "Dra. Antonella Zúñiga", 
      especialidad: "Endocrinología", 
      imagen: "/doctor_zuniga.jpg",
      detalle: {
        tituloCompleto: "Médica Endocrinóloga · Especialista en control hormonal",
        formacion: [{ institucion: "Universidad de Ejemplo", grado: "Médica Cirujana", periodo: "2012 - 2018", logoBg: "bg-gray-200" }],
        cursos: ["Curso Avanzado de Tiroides"],
        experiencia: ["Médica Endocrinóloga, Hospital Nacional"]
      }
    },
    { 
      id: 3, 
      nombre: "Dr. César Jara", 
      especialidad: "Endocrinología Pediátrica", 
      imagen: "/doctor_jara.jpg",
      detalle: {
        tituloCompleto: "Médico Endocrinólogo Pediatra · Crecimiento y desarrollo infantil",
        formacion: [{ institucion: "Universidad de Ejemplo", grado: "Especialidad Pediátrica", periodo: "2015 - 2019", logoBg: "bg-gray-200" }],
        cursos: [],
        experiencia: []
      }
    },
    { 
      id: 4, 
      nombre: "Dra. Karen Angeles", 
      especialidad: "Dermatología", 
      imagen: "/doctor_angeles.jpg",
      detalle: {
        tituloCompleto: "Médica Dermatóloga · Especialista en cuidado integral de la piel",
        formacion: [
          { institucion: "Universidad Peruana", grado: "Médica Cirujana", periodo: "2010 - 2016", logoBg: "bg-gray-200" },
          { institucion: "Universidad Nacional Mayor de San Marcos", grado: "Especialidad en Dermatología", periodo: "2018 - 2021", logoBg: "bg-blue-100" }
        ],
        cursos: ["Diplomado en Dermatología Estética y Láser"],
        experiencia: ["Médica Dermatóloga en consulta privada"]
      }
    },
    { 
      id: 5, 
      nombre: "Dr. Luis Nizama", 
      especialidad: "Cardiología", 
      imagen: "/doctor_nizama.jpg",
      detalle: {
        tituloCompleto: "Médico Cardiólogo · Prevención cardiovascular y riesgo metabólico",
        formacion: [{ institucion: "Universidad de Ejemplo", grado: "Especialidad en Cardiología", periodo: "2014 - 2018", logoBg: "bg-gray-200" }],
        cursos: [],
        experiencia: []
      }
    },
    { 
      id: 6, 
      nombre: "Lic. Carolina Moreno", 
      especialidad: "Nutrición", 
      imagen: "/doctor_moreno.jpg",
      detalle: {
        tituloCompleto: "Licenciada en Nutrición · Enfoque integral y planes personalizados",
        formacion: [{ institucion: "Universidad de Ejemplo", grado: "Licenciatura en Nutrición", periodo: "2016 - 2021", logoBg: "bg-gray-200" }],
        cursos: [],
        experiencia: []
      }
    },
  ];

  const dataToRender = equipoData && equipoData.length > 0 ? equipoData : defaultEquipo;

  return (
    <div className="min-h-screen flex flex-col bg-os-beige">
      <main className="flex-grow">
        <section className="relative bg-white pt-20 md:pt-24 pb-20 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* === ENCABEZADO === */}
            <div className="text-center mb-10 md:mb-16">
              <span className="text-[#a68a61] font-bold text-[10px] md:text-[11px] tracking-[0.25em] uppercase mb-3 md:mb-4 block font-sans">
                Nuestro Equipo
              </span>
              <h2 className="text-[28px] sm:text-4xl md:text-5xl font-serif text-os-dark mb-3 md:mb-4 leading-tight font-bold">
                Un equipo, un mismo enfoque
              </h2>
              <p className="text-os-ink text-[14px] md:text-[16px] font-sans font-medium px-2">
                Tratar la causa, no solo el síntoma — en cada especialidad.
              </p>
            </div>

            {loading && <p className="text-center text-os-light mb-8 font-sans">Cargando equipo médico...</p>}
            {error && <p className="text-center text-red-500 mb-8 font-sans">{error}</p>}

            {/* === GRILLA DE DOCTORES === */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
              {dataToRender.map((doc) => (
                <div 
                  key={doc.id} 
                  onClick={() => setDoctorSeleccionado(doc)}
                  className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-black/5 group flex flex-col cursor-pointer"
                >
                  
                  {/* Foto del Doctor */}
                  <div className="relative w-full h-[180px] sm:h-[220px] md:h-[320px] lg:h-[360px] overflow-hidden bg-os-beige">
                     <img 
                       src={doc.imagen || "/placeholder-doctor.jpg"} 
                       alt={doc.nombre} 
                       className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                       onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Foto' }} 
                     />
                  </div>
                  
                  {/* Información de la Tarjeta */}
                  <div className="p-4 md:p-8 text-center flex-grow flex flex-col justify-center items-center">
                    <h3 className="font-serif text-[15px] sm:text-[17px] md:text-[22px] font-bold text-os-dark mb-1 md:mb-2 leading-tight">
                      {doc.nombre}
                    </h3>
                    <p className="text-[#a68a61] text-[9px] sm:text-[10px] md:text-[12px] font-bold tracking-widest uppercase mb-3 md:mb-5">
                      {doc.especialidad}
                    </p>
                    <span className="text-os-dark font-sans text-[11px] md:text-[13px] font-bold border-b border-os-dark md:border-b-2 pb-0.5 group-hover:text-[#a68a61] group-hover:border-[#a68a61] transition-colors mt-auto">
                      Ver formación
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* === TEXTO INFERIOR === */}
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-[11px] md:text-[12px] text-os-ink mb-4 md:mb-6 font-sans italic px-4">
                Haz click en la foto de cada especialista para ver su formación profesional.
              </p>
            </div>

          </div>
        </section>

        {/* AQUÍ ESTÁN LOS TESTIMONIOS, INTEGRADOS PERFECTAMENTE */}
        <Testimonios />

      </main>

      {/* ========================================== */}
      {/* MODAL (Pop-up) DE INFORMACIÓN DEL DOCTOR */}
      {/* ========================================== */}
      {doctorSeleccionado && doctorSeleccionado.detalle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Fondo oscuro con desenfoque (Backdrop) */}
          <div 
            className="absolute inset-0 bg-[#2a3d36]/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setDoctorSeleccionado(null)}
          ></div>
          
          {/* Contenedor principal del Modal */}
          <div className="relative bg-[#fdfbf7] w-full max-w-3xl rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden transform transition-all">
            
            {/* Botón Cerrar Flotante */}
            <button 
              onClick={() => setDoctorSeleccionado(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 bg-[#e5e0d8] hover:bg-[#d8cbbb] rounded-full flex items-center justify-center text-[#2a3d36] transition-colors z-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Contenido scrolleable interno */}
            <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
              
              {/* Cabecera del Modal (Foto miniatura + Título) */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-10 border-b border-[#e5e0d8] pb-8 pr-8">
                <img 
                  src={doctorSeleccionado.imagen} 
                  alt={doctorSeleccionado.nombre} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top shadow-md shrink-0 bg-os-beige"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Foto' }}
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2a3d36] mb-2">
                    {doctorSeleccionado.nombre}
                  </h2>
                  <p className="text-[#a68a61] text-[13px] sm:text-[14px] font-bold leading-relaxed">
                    {doctorSeleccionado.detalle.tituloCompleto}
                  </p>
                </div>
              </div>

              {/* Sección: Formación académica */}
              {doctorSeleccionado.detalle.formacion && doctorSeleccionado.detalle.formacion.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-[#2a3d36] text-[16px] font-serif font-bold mb-6">
                    Formación académica
                  </h3>
                  <div className="space-y-6">
                    {doctorSeleccionado.detalle.formacion.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        {/* Cuadrito de Logo */}
                        <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center shadow-sm ${item.logoBg || 'bg-gray-200'}`}>
                          <span className="text-white text-xs font-bold opacity-70">Uni</span>
                        </div>
                        <div>
                          <h4 className="text-[#2a3d36] font-bold text-[14px] leading-tight mb-1">
                            {item.institucion}
                          </h4>
                          <p className="text-[#2a3d36]/80 text-[14px] leading-snug mb-1">
                            {item.grado}
                          </p>
                          <p className="text-[#cbbca9] text-[12px] font-semibold">
                            {item.periodo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sección: Cursos y certificaciones */}
              {doctorSeleccionado.detalle.cursos && doctorSeleccionado.detalle.cursos.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-[#2a3d36] text-[16px] font-serif font-bold mb-4">
                    Cursos y certificaciones
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {doctorSeleccionado.detalle.cursos.map((curso, index) => (
                      <li key={index} className="text-[#2a3d36]/80 text-[14px]">
                        {curso}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sección: Experiencia */}
              {doctorSeleccionado.detalle.experiencia && doctorSeleccionado.detalle.experiencia.length > 0 && (
                <div>
                  <h3 className="text-[#2a3d36] text-[16px] font-serif font-bold mb-4">
                    Experiencia
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#2a3d36]/80 text-[14px]">
                    {doctorSeleccionado.detalle.experiencia.map((exp, index) => (
                      <li key={index}>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Estilos para el scrollbar personalizado del modal */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fdfbf7; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d8cbbb; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a68a61; 
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default EquipoPage;