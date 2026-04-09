import Image from 'next/image';

const stepsLeft = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Programa una consulta para discutir tus metas de negocio y necesidades clave de marketing con nuestro equipo.'
  },
  {
    number: '02',
    title: 'Desarrollo de Estrategia',
    description: 'Nuestro equipo desarrollará una estrategia digital personalizada y adaptada específicamente a tu negocio.'
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Pondremos la estrategia en acción y lanzaremos tus campañas digitales exitosamente.'
  }
];

const stepsRight = [
  {
    number: '04',
    title: 'Monitoreo y Optimización',
    description: 'Monitoreamos y optimizamos continuamente tus campañas para maximizar los resultados y tu ROI.'
  },
  {
    number: '05',
    title: 'Reportes y Análisis',
    description: 'Proporcionamos reportes regulares semanales y análisis detallados sobre el rendimiento general.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="w-[800px] bg-white relative font-sans overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="mb-16 lg:mb-20">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#e4a0cb] mb-3 block">Cómo funciona</span>
              <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-[#3a3575] leading-[1.1] tracking-tight">
                Nuestro Proceso<br/>de Trabajo
              </h2>
            </div>
            
            <div className="relative">
              {stepsLeft.map((step, index) => (
                <div key={index} className="relative pl-14 pb-14 lg:pb-20 last:pb-0">
                  {/* Dashed Line */}
                  {index !== stepsLeft.length - 1 && (
                    <div className="absolute left-[15px] top-[42px] bottom-[-8px] w-px border-l-[1px] border-dashed border-[#aee7df]"></div>
                  )}
                  {/* Circle */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-[1.5px] border-[#eec1e0] bg-white flex items-center justify-center text-[#d19ac2] font-semibold text-xs">
                    {step.number}
                  </div>
                  {/* Content */}
                  <h3 className="text-[1.15rem] font-bold text-[#3a3575] mb-3 mt-1 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-[0.95rem] pr-8 max-w-sm font-light">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col mt-16 lg:mt-0 relative">
            {/* Illustration */}
            <div className="relative w-full h-[22rem] lg:h-[30rem] lg:-mt-12 flex items-center justify-center pointer-events-none mb-10 overflow-visible">
               <Image 
                 alt="Ilustración del proceso de trabajo" 
                 className="object-contain object-right lg:scale-[1.15] lg:translate-x-8" 
                 src="/workflow_illustration.png" 
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
            </div>
            
            {/* Steps Right */}
            <div className="relative lg:pl-10">
              {stepsRight.map((step, index) => (
                 <div key={index} className="relative pl-14 pb-14 last:pb-0">
                   {index !== stepsRight.length - 1 && (
                     <div className="absolute left-[15px] top-[42px] bottom-[-8px] w-px border-l-[1px] border-dashed border-[#eec1e0]"></div>
                   )}
                   <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-[1.5px] border-[#eec1e0] bg-white flex items-center justify-center text-[#d19ac2] font-semibold text-xs">
                     {step.number}
                   </div>
                   <h3 className="text-[1.15rem] font-bold text-[#3a3575] mb-3 mt-1 tracking-tight">{step.title}</h3>
                   <p className="text-gray-400 leading-relaxed text-[0.95rem] pr-8 max-w-sm font-light">
                     {step.description}
                   </p>
                 </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
