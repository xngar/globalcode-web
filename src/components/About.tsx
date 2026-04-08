import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative aspect-square w-full max-w-md mx-auto">
          <Image 
            alt="Nuestra Esencia" 
            className="w-full max-w-md mx-auto clay-shadow rounded-xl inset-0 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCypWzLsSFELXtX_n4EEpbgpxLP_FZIJRSwppX-OJ080VLJBt50TayjoHsix_h-mGXM4eOjGyQX40NeRxc_M8nx6Eod24mVy8K7EO0LZ4gDC3hKfw9v-fqnfaUXfg9u53BGtEmu9JJqHrT1kyl3uCnYnzzqQlVBCpNF9_XGzbQEdZLYl4hEOr7_iTpXvhxADroZ1MR5VpMuBUORtEAymkDTC0KEo8UbCyy4TI4avt89B8xG1A1dgecNmZ0uKNGmxJ9VH4ul0Oog6Rs" 
            fill
          />
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">Nuestra misión es <span className="text-tertiary">esculpir</span> el futuro digital</h2>
          <div className="space-y-6">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              En SculptedAgency, no solo construimos sitios web; moldeamos experiencias que conectan emocionalmente con los usuarios. Nuestra filosofía se basa en la atención al detalle y la innovación constante.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-extrabold text-primary mb-2">150+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-outline">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-tertiary mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-outline">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
