import Image from 'next/image';
import TextType from './TextType';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full  min-h-screen flex items-center overflow-hidden bg-white">
      {/* 
          ESTRUCTURA DE CAPAS:
          1. Fondo (Image): z-0
          2. Overlay (Gradient): z-10
          3. Contenido (Text/Grid): z-20
      */}

      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tecnologia2.png"
          alt="Fondo de tecnología"
          fill
          priority
          quality={100}
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Overlay: Degradado de Blanco a Transparente (Izquierda a Derecha) mejorado para legibilidad */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/80 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-transparent pointer-events-none"></div>

      {/* Añadimos un sutil efecto de profundidad al contenido para que resalte */}

      {/* Contenido Frontal */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4]">
          <div className="space-y-8 pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              Estrategia Digital de Vanguardia
            </div>

            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Diseñamos <TextType text="Productos Digitales" as="span" className="text-primary font-extrabold" loop={true} /> Excepcionales
            </h1>

            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Transformamos ideas audaces en experiencias digitales memorables mediante diseño centrado en el usuario y desarrollo de alta precisión.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(107,70,193,0.3)] transition-all flex items-center gap-2">
                Comenzar
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-white/50 backdrop-blur-sm border border-surface-container-high text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-white transition-all shadow-sm">
                Ver Portafolio
              </button>
            </div>
          </div>

          <div className="hidden lg:block w-full">
            {/* Espacio reservado para balancear el grid, el fondo ya decora esta área */}
          </div>
        </div>
      </div>
    </section>
  );
}
