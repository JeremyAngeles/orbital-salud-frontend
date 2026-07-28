import React from 'react';
import Footer from '../components/Footer';
import InbodyTech from '../components/InbodyTech';
import ResultadosReales from '../components/ResultadosReales';
import CalculadoraIMC from '../components/CalculadoraIMC';

const InBodyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7F6]">
      <main className="flex-grow pt-20 pb-20">
        
        {/* PARTE 1 */}
        <InbodyTech />

        {/* PARTE 2 */}
        <ResultadosReales />

        {/* PARTE 3 */}
        <CalculadoraIMC />
 
      </main>
      <Footer />
    </div>
  );
};

export default InBodyPage;