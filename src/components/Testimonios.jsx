import React from 'react';

const Testimonios = () => {
  const reseñas = [
    {
      id: 1,
      texto: "Muy contenta con el resultado y con el seguimiento que dan. Es importante aclarar que cada cuerpo es diferente y es necesario ir de la mano de los especialistas.",
      paciente: "Malena Torres",
      foto: "https://ui-avatars.com/api/?name=Malena+Torres&background=2E4B34&color=F2EFE6"
    },
    {
      id: 2,
      texto: "Es un excelente complemento en el proceso de pérdida de peso y control de la diabetes. Todos son muy profesionales y proporcionan una sensación de seguridad.",
      paciente: "Gabino Martinez",
      foto: "https://ui-avatars.com/api/?name=Gabino+Martinez&background=2E4B34&color=F2EFE6"
    },
    {
      id: 3,
      texto: "Atención inmediata desde que me ofrecieron el tratamiento, todo ha sido muy rápido el domingo fue mi consulta y para el viernes ya tenía mi plan.",
      paciente: "Celeste Martinez",
      foto: "https://ui-avatars.com/api/?name=Celeste+Martinez&background=2E4B34&color=F2EFE6"
    },
    {
      id: 4,
      texto: "Muy buena experiencia, la explicación se adapta a mis tiempos por trabajo. Me gusta que me ayuden con la educación en los alimentos para entender qué comer.",
      paciente: "Neyda Rodríguez",
      foto: "https://ui-avatars.com/api/?name=Neyda+Rodriguez&background=2E4B34&color=F2EFE6"
    }
  ];

  const estadisticas = [
    { valor: "+15,000", texto: "pacientes atendidos" },
    { valor: "4.9★", texto: "satisfacción promedio" },
    { valor: "92%", texto: "de satisfacción del paciente" },
    { valor: "24/7", texto: "Soporte médico continuo" }
  ];

  return (
    <section id="testimonios" className="relative z-20 bg-[#F2EFE6] pt-12 pb-32 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2E4B34] mb-4 leading-tight font-bold">
            Historias que <span className="text-[#D9C8B1] italic">inspiran</span>
          </h2>
          <p className="text-[#6B7C5A] text-[16px] font-sans font-medium">
            Cientos de pacientes ya confían en Orbital Salud para su tratamiento.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reseñas.map((res, index) => (
            <div key={index} className="bg-white rounded-[24px] p-6 shadow-sm border border-[#A3B18A]/20 flex flex-col justify-between">
              <div>
                <div className="flex text-[#D9C8B1] mb-3 text-lg">★★★★★</div>
                <p className="text-[#2E4B34] text-[14px] font-sans leading-relaxed mb-6">"{res.texto}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#F2EFE6]">
                <img src={res.foto} alt={res.paciente} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-bold font-sans text-[#2E4B34] text-[13px]">{res.paciente}</h4>
                  <p className="text-[10px] text-[#6B7C5A] font-sans flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#D9C8B1]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Reseña verificada
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {estadisticas.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl py-8 px-4 text-center shadow-sm border border-[#A3B18A]/20">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2E4B34] mb-2">{stat.valor}</h3>
              <p className="text-[12px] md:text-[13px] text-[#6B7C5A] font-sans font-medium">{stat.texto}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ONDA BEIGE: Se posiciona exactamente debajo de la sección (top-full) para tapar la onda blanca del Footer */}
      

    </section>
  );
};

export default Testimonios;