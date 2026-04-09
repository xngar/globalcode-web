import Image from 'next/image';
import CountUp from './CountUp';

export default function About() {
  return (
    <section id="nosotros" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative aspect-square w-full max-w-md mx-auto">
          <Image 
            alt="Detalle de equipo creativo esculpiendo branding digital" 
            className="w-full max-w-md mx-auto clay-shadow rounded-xl inset-0 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCypWzLsSFELXtX_n4EEpbgpxLP_FZIJRSwppX-OJ080VLJBt50TayjoHsix_h-mGXM4eOjGyQX40NeRxc_M8nx6Eod24mVy8K7EO0LZ4gDC3hKfw9v-fqnfaUXfg9u53BGtEmu9JJqHrT1kyl3uCnYnzzqQlVBCpNF9_XGzbQEdZLYl4hEOr7_iTpXvhxADroZ1MR5VpMuBUORtEAymkDTC0KEo8UbCyy4TI4avt89B8xG1A1dgecNmZ0uKNGmxJ9VH4ul0Oog6Rs" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">Nuestra misión es <span className="text-tertiary">esculpir</span> el futuro digital</h2>
          <div className="space-y-6">
            <p className="text-lg text-on-surface-variant leading-relaxed">
             19 años optimizando el aprendizaje corporativo
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2 text-lg text-on-surface-variant">
              <li><strong className="text-on-surface font-semibold">Estrategia Integral:</strong> Desde el concepto hasta la ejecución operativa.</li>
              <li><strong className="text-on-surface font-semibold">Eficiencia Real:</strong> Reducimos tus costos operativos con tecnología avanzada.</li>
              <li><strong className="text-on-surface font-semibold">Sustentabilidad:</strong> Soluciones digitales amigables con el medio ambiente.</li>
            </ul>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                  <CountUp to={150} direction="up" duration={2} className="inline-block" />+
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-outline">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-primary mb-2">
                  <CountUp to={10} direction="up" duration={2} delay={0.5} className="inline-block" />+
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-outline">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
