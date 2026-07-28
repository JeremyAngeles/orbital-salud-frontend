import React, { useState, useRef } from 'react';
import TablaComparativa from '../components/TablaComparativa';
import Footer from '../components/Footer';

// --- Datos ---
const ESPECIALIDADES = [
  "Endocrinología",
  "Endocrinología - Dra. Zúñiga",
  "Dermatología",
  "Cardiología",
  "Nutrición",
  "Endocrinología Pediátrica",
  "Bioimpedancia InBody"
];

const MEDICO = {
  nombre: "Dra. Karen Ángeles",
  especialidad: "Dermatología",
  duracion: "20 min",
  yapeNumero: "912 581 441",
  titular: "Caycho Jara Angelica Maria Eirl",
  clinica: "Orbital Salud",
  precio: 150
};

const DIAS_JULIO_2026 = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31
];

const DIAS_DISPONIBLES = [14, 16, 18, 21, 23, 25, 28, 30];
const HORARIOS = ["09:00 AM", "10:30 AM", "03:00 PM", "04:30 PM"];

const ReservarCitaPage = () => {
  const [especialidad, setEspecialidad] = useState("Dermatología");
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [comprobante, setComprobante] = useState(null);
  const fileInputRef = useRef(null);

  const handleDayClick = (dia) => {
    if (DIAS_DISPONIBLES.includes(dia)) {
      setDiaSeleccionado(dia);
      setHoraSeleccionada(null);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setComprobante(e.target.files[0].name);
    }
  };

  return (
    <div style={{ backgroundColor: '#F2EFE6', color: '#2E4B34', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      {/* SE AJUSTÓ EL PADDING BOTTOM AQUÍ PARA QUE SE JUNTE CON TESTIMONIOS */}
      <main style={{ flexGrow: 1, paddingBottom: '2rem', paddingTop: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        
        {/* ========================================= */}
        {/* === ENCABEZADO Y FILTROS === */}
        {/* ========================================= */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: '#D9C8B1', fontWeight: 'bold', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            AGENDA TU CITA
          </span>
          <h1 style={{ fontSize: '42px', fontFamily: 'serif', fontWeight: 'bold', color: '#2E4B34', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Elige médico, día y hora
          </h1>
          <p style={{ color: '#6B7C5A', fontSize: '15px', maxWidth: '42rem', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '500' }}>
            Selecciona la especialidad, escoge un horario disponible y confirma tu cita pagando con Yape.
          </p>
          <p style={{ fontSize: '13px', color: '#A3B18A', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Vista previa del sistema de agendamiento — horarios y precios de ejemplo para mostrar cómo funcionaría. 
            Al conectar tu calendario real (SaludTools / Google Calendar), aquí se mostrará la disponibilidad exacta de cada médico.
          </p>
        </div>

        {/* --- Botones de Especialidad --- */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '950px', margin: '0 auto 3rem auto' }}>
          {ESPECIALIDADES.map((esp, idx) => {
            const isActive = especialidad === esp;
            return (
              <button
                key={idx}
                onClick={() => setEspecialidad(esp)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: isActive ? '#2E4B34' : '#FFFFFF',
                  color: isActive ? '#F2EFE6' : '#2E4B34',
                  border: isActive ? '1px solid #2E4B34' : '1px solid #A3B18A',
                  boxShadow: isActive ? '0 4px 6px -1px rgba(46, 75, 52, 0.2)' : 'none'
                }}
              >
                {esp}
              </button>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* === TARJETA PRINCIPAL DIVIDIDA === */}
        {/* ==================================================== */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          maxWidth: '1050px', 
          margin: '0 auto', 
          backgroundColor: '#FFFFFF', 
          borderRadius: '32px', 
          boxShadow: '0 20px 25px -5px rgba(46, 75, 52, 0.1)', 
          border: '1px solid rgba(163, 177, 138, 0.3)' 
        }}>
          
          {/* ---- LADO IZQUIERDO: CALENDARIO (BLANCO) ---- */}
          <div style={{ flex: '1 1 500px', padding: '3rem', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: '24px', fontFamily: 'serif', fontWeight: 'bold', color: '#2E4B34', marginBottom: '4px' }}>
              {MEDICO.nombre}
            </h2>
            <p style={{ color: '#D9C8B1', fontSize: '14px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              {especialidad}
            </p>

            {/* Caja de Información */}
            <div style={{ backgroundColor: '#F2EFE6', borderRadius: '14px', padding: '20px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#2E4B34', fontWeight: 'bold', fontSize: '13px' }}>
                <svg style={{ width: '16px', height: '16px', color: '#6B7C5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Duración: <span style={{ fontWeight: 'normal', color: '#6B7C5A' }}>{MEDICO.duracion}</span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#6B7C5A', fontSize: '13px', lineHeight: '1.6' }}>
                <div style={{ width: '16px', height: '16px', marginTop: '2px', borderRadius: '50%', border: '1px solid #A3B18A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#6C227C', borderRadius: '50%' }}></div>
                </div>
                <p style={{ margin: 0 }}>Al elegir tu horario y fecha, realiza el <strong>Yape al número {MEDICO.yapeNumero}</strong> y sube tu comprobante para confirmar la cita.</p>
              </div>
            </div>

            {/* Controles del Mes */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 8px' }}>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #A3B18A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7C5A', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <h3 style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: '16px', color: '#2E4B34', margin: 0 }}>Julio 2026</h3>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #A3B18A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B7C5A', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            {/* GRILLA DEL CALENDARIO */}
            <div style={{ width: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '12px' }}>
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dia) => (
                  <div key={dia} style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B7C5A' }}>{dia}</div>
                ))}
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', rowGap: '12px' }}>
                {DIAS_JULIO_2026.map((dia, idx) => {
                  if (!dia) return <div key={`empty-${idx}`} style={{ height: '56px' }}></div>;
                  
                  const isAvailable = DIAS_DISPONIBLES.includes(dia);
                  const isSelected = diaSeleccionado === dia;

                  return (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '56px' }}>
                      <button
                        disabled={!isAvailable}
                        onClick={() => handleDayClick(dia)}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontFamily: 'sans-serif',
                          transition: 'all 0.2s',
                          border: 'none',
                          cursor: isAvailable ? 'pointer' : 'default',
                          backgroundColor: isSelected ? '#D9C8B1' : isAvailable ? '#F2EFE6' : 'transparent',
                          color: isSelected ? '#2E4B34' : isAvailable ? '#2E4B34' : 'rgba(107, 124, 90, 0.4)',
                          fontWeight: isSelected || isAvailable ? 'bold' : '500',
                          transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                        }}
                      >
                        {dia}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selector de Horarios */}
            {diaSeleccionado && (
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #F2EFE6' }}>
                <h4 style={{ fontFamily: 'serif', fontWeight: 'bold', color: '#2E4B34', marginBottom: '1rem', fontSize: '15px' }}>
                  Horarios para el {diaSeleccionado} de Julio:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '12px' }}>
                  {HORARIOS.map((hora, idx) => {
                    const isSelected = horaSeleccionada === hora;
                    return (
                      <button
                        key={idx}
                        onClick={() => setHoraSeleccionada(hora)}
                        style={{
                          padding: '10px',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          backgroundColor: isSelected ? '#D9C8B1' : '#FFFFFF',
                          color: '#2E4B34',
                          border: isSelected ? '1px solid #D9C8B1' : '1px solid #A3B18A',
                        }}
                      >
                        {hora}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ---- LADO DERECHO: PAGO YAPE (FONDO VERDE OSCURO) ---- */}
          <div style={{ flex: '1 1 400px', backgroundColor: '#2E4B34', padding: '3rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTopRightRadius: '32px', borderBottomRightRadius: '32px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '22px', fontFamily: 'serif', fontWeight: 'bold', color: '#F2EFE6', margin: '0 0 4px 0' }}>Paga con Yape</h3>
              <p style={{ fontSize: '13px', color: '#A3B18A', margin: 0 }}>{MEDICO.nombre}</p>
            </div>

            {/* Tarjeta Yape Morada */}
            <div style={{ backgroundColor: '#6C227C', width: '100%', maxWidth: '280px', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                <span style={{ color: '#FF7BAC', fontSize: '18px', lineHeight: 1 }}>♥</span>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', letterSpacing: '0.5px' }}>yape</span>
              </div>
              
              <div style={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '20px', width: '100%', aspectRatio: '1 / 1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '16px' }}>
                <div style={{ width: '88%', height: '88%', backgroundColor: 'rgba(108, 34, 124, 0.05)', border: '1px solid rgba(108, 34, 124, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', position: 'relative' }}>
                   <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2px', opacity: 0.7 }}>
                      {[...Array(36)].map((_, i) => <div key={i} style={{ backgroundColor: '#6C227C', borderRadius: '2px' }}></div>)}
                   </div>
                   <div style={{ position: 'absolute', bottom: '-12px', backgroundColor: '#00E0A1', color: '#FFFFFF', fontWeight: 'bold', fontSize: '10px', padding: '6px 14px', borderRadius: '9999px', whiteSpace: 'nowrap' }}>
                     Paga aquí con Yape
                   </div>
                </div>
              </div>
              
              <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#FFFFFF', marginTop: '16px', letterSpacing: '0.025em', margin: '16px 0 4px 0', textAlign: 'center' }}>{MEDICO.titular.toUpperCase()}</p>
              <p style={{ fontSize: '11px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>{MEDICO.clinica}</p>
            </div>

            {/* Lista de Pasos */}
            <div style={{ width: '100%', marginBottom: '2rem', padding: '0 4px' }}>
              {[
                "Abre tu app de Yape y escanea el QR de arriba.",
                "Paga el monto de la consulta seleccionada.",
                "Toma captura de pantalla del voucher de pago.",
                "Súbelo aquí para validar y confirmar tu cita."
              ].map((paso, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#6B7C5A', color: '#F2EFE6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px' }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#F2EFE6', fontWeight: '500', lineHeight: '1.4', margin: 0 }}>{paso}</p>
                </div>
              ))}
            </div>

            {/* Zona Dropzone */}
            <div 
              onClick={() => fileInputRef.current.click()}
              style={{ width: '100%', border: '1px dashed #A3B18A', borderRadius: '14px', padding: '20px', textAlign: 'center', fontSize: '11.5px', marginBottom: '2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(242, 239, 230, 0.05)' }}
            >
              <svg style={{ width: '16px', height: '16px', color: '#A3B18A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
              <span style={{ color: comprobante ? '#D9C8B1' : '#F2EFE6', fontWeight: comprobante ? 'bold' : 'normal' }}>
                {comprobante ? `📎 ${comprobante}` : "Subir comprobante de pago (opcional en esta vista previa)"}
              </span>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept="image/*" />

            {/* Caja Monto y Botón Final */}
            <div style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: '16px', padding: '24px', textAlign: 'center', marginTop: 'auto' }}>
              <p style={{ fontSize: '10px', color: '#D9C8B1', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 'bold', margin: '0 0 8px 0' }}>MONTO DE LA CONSULTA</p>
              <p style={{ fontSize: '34px', fontFamily: 'serif', fontWeight: 'bold', color: '#F2EFE6', margin: '0 0 4px 0' }}>S/ {MEDICO.precio}</p>
              <p style={{ fontSize: '11px', color: '#A3B18A', marginBottom: '24px', fontWeight: '500' }}>Consulta presencial</p>

              <button 
                disabled={!diaSeleccionado || !horaSeleccionada}
                style={{
                  width: '100%',
                  fontWeight: 'bold',
                  padding: '14px 0',
                  borderRadius: '12px',
                  fontSize: '13px',
                  border: 'none',
                  cursor: (diaSeleccionado && horaSeleccionada) ? 'pointer' : 'not-allowed',
                  backgroundColor: (diaSeleccionado && horaSeleccionada) ? '#D9C8B1' : '#6B7C5A',
                  color: (diaSeleccionado && horaSeleccionada) ? '#2E4B34' : 'rgba(242, 239, 230, 0.5)',
                }}
              >
                {(diaSeleccionado && horaSeleccionada) ? 'Confirmar Cita' : 'Selecciona fecha y hora'}
              </button>
            </div>

          </div>
        </div>
      </main>
      <TablaComparativa />
      <Footer />
    </div>
  );
};

export default ReservarCitaPage;