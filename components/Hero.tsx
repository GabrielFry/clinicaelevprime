import React from 'react';

export default function Hero() {
  return (
    <div id="main-video-hero" className="with-quick-booking w-full max-w-[100vw] overflow-x-hidden" style={{ position: 'relative' }}>

       <div
         className="video-holder max-md:min-h-[100svh] max-md:h-[100svh] md:h-[100dvh] md:min-h-[100dvh]"
         style={{ width: '100%', maxWidth: '100%', position: 'relative', overflow: 'hidden' }}
       >
          <img 
            src="/1.png" 
            alt="Ambiente da Clínica ElevPrime" 
            className="absolute inset-0 h-full w-full object-cover max-md:object-[38%_32%] md:object-center"
          />
       </div>
       <div
         className="hero-caption pointer-events-none"
         style={{
           position: 'absolute',
           inset: 0,
           zIndex: 10,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           padding: 'max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))',
         }}
       >
         <div className="max-w-[min(100%,36rem)] px-3 text-center text-white sm:px-5 md:max-w-3xl" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}>
           <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] sm:mb-3 sm:text-xs sm:tracking-[0.28em] md:text-sm">
             Clínica ElevPrime
           </p>
           <h1 className="text-xl font-medium leading-snug sm:text-2xl sm:leading-snug md:text-4xl md:leading-tight">
             Medicina com excelência, acolhimento e foco no que importa: você.
           </h1>
           <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-95 sm:mt-5 sm:text-base md:text-lg">
             Consultas, check-up, exames e programas de prevenção em um só lugar — com equipe experiente e protocolos alinhados às melhores práticas em saúde.
           </p>
         </div>
       </div>
 
    </div>
  );
}
