import React, { useState, useEffect } from 'react';

const Equipo = () => {
  // Estado para controlar qué doctor está seleccionado en el modal
  const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  // Efecto para bloquear el scroll de la página cuando el modal está abierto
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

  // ==========================================
  // DATOS MOCK: Esto luego vendrá de tu Backend
  // ==========================================
  const doctoresData = [
    {
      id: 1,
      nombre: "Dra. Angélica Caycho",
      especialidadCorta: "Endocrinología",
      fotoPerfil: "/images/dra-angelica.jpg", // Reemplaza con la ruta de tu imagen real
      detalle: {
        tituloCompleto: "Médica Endocrinóloga · Especialista en Obesidad, Diabetes y Salud Metabólica",
        formacion: [
          {
            institucion: "Universidad Nacional Mayor de San Marcos",
            grado: "Médico-cirujana, Medicina",
            periodo: "2011 – 2017",
            logoBg: "bg-blue-100" // Simulación de logo
          },
          {
            institucion: "Universidad Nacional Mayor de San Marcos",
            grado: "Médica Endocrinóloga, Endocrinología",
            periodo: "2020 – 2023",
            logoBg: "bg-blue-100"
          },
          {
            institucion: "Universidad Peruana Cayetano Heredia",
            grado: "Maestría en desórdenes de metabolismo, obesidad y nutrición",
            periodo: "2024 – 2025",
            logoBg: "bg-red-600"
          },
          {
            institucion: "Universidad Austral, Argentina",
            grado: "Diplomatura en Cirugía Metabólica: abordaje transdisciplinario del paciente metabólico",
            periodo: "2022",
            logoBg: "bg-blue-900"
          }
        ],
        cursos: [
          "Certificación SCOPE — World Obesity Federation"
        ],
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
      especialidadCorta: "Endocrinología",
      fotoPerfil: "/images/dra-antonella.jpg",
      detalle: {
        tituloCompleto: "Médica Endocrinóloga · Especialista en control hormonal",
        formacion: [
          { institucion: "Universidad de Ejemplo", grado: "Médica Cirujana", periodo: "2012 - 2018", logoBg: "bg-gray-200" }
        ],
        cursos: ["Curso Avanzado de Tiroides"],
        experiencia: ["Médica Endocrinóloga, Hospital Nacional"]
      }
    },
    {
      id: 3,
      nombre: "Dr. César Jara",
      especialidadCorta: "Endocrinología Pediátrica",
      fotoPerfil: "/images/dr-cesar.jpg",
      detalle: {
        tituloCompleto: "Médico Endocrinólogo Pediatra · Crecimiento y desarrollo infantil",
        formacion: [
          { institucion: "Universidad de Ejemplo", grado: "Especialidad Pediátrica", periodo: "2015 - 2019", logoBg: "bg-gray-200" }
        ],
        cursos: [],
        experiencia: []
      }
    },
    {
      id: 4,
      nombre: "Dra. Karen Ángeles",
      especialidadCorta: "Dermatología",
      fotoPerfil: "/images/dra-karen.jpg",
      detalle: {
        tituloCompleto: "Médica Dermatóloga · Especialista en cuidado integral de la piel",
        formacion: [
          { institucion: "Universidad Peruana", grado: "Médica Cirujana", periodo: "2010 - 2016", logoBg: "bg-gray-200" },
          { institucion: "Universidad Nacional Mayor de San Marcos", grado: "Especialidad en Dermatología", periodo: "2018 - 2021", logoBg: "bg-blue-100" }
        ],
        cursos: ["Diplomado en Dermatología Estética y Láser"],
        experiencia: ["Médica Dermatóloga en consulta privada", "Rotación en Dermatología Clínica"]
      }
    },
    {
      id: 5,
      nombre: "Dr. Luis Nizama",
      especialidadCorta: "Cardiología",
      fotoPerfil: "/images/dr-luis.jpg",
      detalle: {
        tituloCompleto: "Médico Cardiólogo · Prevención cardiovascular y riesgo metabólico",
        formacion: [
          { institucion: "Universidad de Ejemplo", grado: "Especialidad en Cardiología", periodo: "2014 - 2018", logoBg: "bg-gray-200" }
        ],
        cursos: [],
        experiencia: []
      }
    },
    {
      id: 6,
      nombre: "Lic. Carolina Moreno",
      especialidadCorta: "Nutrición",
      fotoPerfil: "/images/lic-carolina.jpg",
      detalle: {
        tituloCompleto: "Licenciada en Nutrición · Enfoque integral y planes personalizados",
        formacion: [
          { institucion: "Universidad de Ejemplo", grado: "Licenciatura en Nutrición", periodo: "2016 - 2021", logoBg: "bg-gray-200" }
        ],
        cursos: [],
        experiencia: []
      }
    }
  ];

  return (
    <section className="bg-[#fdfbf7] min-h-screen py-20 px-6 lg:px-8 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* === ENCABEZADO === */}
        <div className="text-center mb-16">
          <span className="text-[#a68a61] text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-4 block">
            Nuestro Equipo
          </span>
          <h1 className="text-3xl md:text-[42px] font-serif text-[#2a3d36] mb-4 font-bold">
            Un equipo, un mismo enfoque
          </h1>
          <p className="text-[#2a3d36]/80 text-[15px] md:text-[16px]">
            Tratar la causa, no solo el síntoma — en cada especialidad.
          </p>
        </div>

        {/* === GRILLA DE DOCTORES (2 Filas x 3 Columnas en Desktop) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {doctoresData.map((doc) => (
            <div 
              key={doc.id} 
              onClick={() => setDoctorSeleccionado(doc)}
              className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-black/5 cursor-pointer hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Foto (Mantenemos un aspect ratio fijo para que todas se vean igual) */}
              <div className="w-full h-[280px] md:h-[320px] bg-gray-100 overflow-hidden">
                <img 
                  src={doc.fotoPerfil} 
                  alt={doc.nombre} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Foto' }} // Placeholder si falla la imagen
                />
              </div>
              
              {/* Tarjeta Info */}
              <div className="p-6 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-serif font-bold text-[#2a3d36] mb-1">
                  {doc.nombre}
                </h3>
                <p className="text-[#cbbca9] text-[13px] font-bold mb-3">
                  {doc.especialidadCorta}
                </p>
                <button className="text-[#2a3d36] text-[12px] font-bold underline decoration-[#2a3d36]/30 underline-offset-4 hover:decoration-[#2a3d36] transition-colors">
                  Ver formación
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje inferior */}
        <p className="text-center text-[12px] text-[#2a3d36]/50 italic">
          Haz click en la foto de cada especialista para ver su formación profesional.
        </p>

      </div>

      {/* ========================================== */}
      // MODAL (Pop-up) DE INFORMACIÓN DEL DOCTOR
      {/* ========================================== */}
      {doctorSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          
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
                  src={doctorSeleccionado.fotoPerfil} 
                  alt={doctorSeleccionado.nombre} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top shadow-md shrink-0"
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
              {doctorSeleccionado.detalle.formacion.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-[#2a3d36] text-[16px] font-serif font-bold mb-6">
                    Formación académica
                  </h3>
                  <div className="space-y-6">
                    {doctorSeleccionado.detalle.formacion.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        {/* Simulación del cuadradito del logo de la universidad */}
                        <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center shadow-sm ${item.logoBg}`}>
                          {/* Aquí iría una etiqueta <img src={item.logoUrl} /> si guardas los logos en BD */}
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
              {doctorSeleccionado.detalle.cursos.length > 0 && (
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
              {doctorSeleccionado.detalle.experiencia.length > 0 && (
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
    </section>
  );
};

export default Equipo;