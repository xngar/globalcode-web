"use client";

import { Link } from 'react-scroll';

export default function TopNavBar() {
  return (
    <nav className="rounded-full mt-4 mx-auto w-[95%] max-w-7xl sticky top-4 z-50 bg-surface/70 backdrop-blur-xl flex justify-between items-center px-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-on-surface">
      <div className="text-2xl font-black text-purple-700 font-headline tracking-tight">SculptedAgency</div>
      <div className="hidden md:flex items-center space-x-1">
        <Link to="inicio" smooth={true} duration={500} offset={-100} className="cursor-pointer text-purple-700 border-b-2 border-purple-600 pb-1 font-headline font-bold tracking-tight px-4 py-2">Inicio</Link>
        <Link to="nosotros" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Nosotros</Link>
        <Link to="servicios" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Servicios</Link>
        <Link to="contacto" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Contacto</Link>
      </div>
      <Link to="contacto" smooth={true} duration={500} offset={-100} className="cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-transform scale-95 active:scale-90 hover:shadow-lg">
        Cotizar
      </Link>
    </nav>
  );
}
