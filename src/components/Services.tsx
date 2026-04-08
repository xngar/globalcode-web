export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface">Nuestros Servicios</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Soluciones integrales diseñadas para elevar tu marca en el ecosistema digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">campaign</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Digital Marketing</h3>
            <p className="text-on-surface-variant leading-relaxed">Estrategias basadas en datos para maximizar tu alcance y conversión en canales digitales.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-orange-100 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-4xl">movie</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-tertiary transition-colors">Video Production</h3>
            <p className="text-on-surface-variant leading-relaxed">Contenido audiovisual de alto impacto que cuenta la historia de tu marca de forma única.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-purple-100 flex items-center justify-center text-primary-dim">
              <span className="material-symbols-outlined text-4xl">draw</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary-dim transition-colors">Branding Design</h3>
            <p className="text-on-surface-variant leading-relaxed">Identidades visuales memorables que capturan la esencia y los valores de tu negocio.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-4xl">lightbulb</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-blue-600 transition-colors">UX Design</h3>
            <p className="text-on-surface-variant leading-relaxed">Interfaces intuitivas centradas en el usuario que garantizan una experiencia fluida.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-4xl">code</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-green-600 transition-colors">Web Development</h3>
            <p className="text-on-surface-variant leading-relaxed">Desarrollo robusto y escalable utilizando las tecnologías más avanzadas del mercado.</p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 mb-8 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
              <span className="material-symbols-outlined text-4xl">shopping_cart</span>
            </div>
            <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-pink-600 transition-colors">eCommerce</h3>
            <p className="text-on-surface-variant leading-relaxed">Tiendas online optimizadas para vender más y ofrecer un proceso de compra impecable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
