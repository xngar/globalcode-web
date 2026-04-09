export default function ContactForm() {
  return (
    <section id="contacto" className="py-32 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-xl p-12 clay-shadow">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Hablemos de tu Proyecto</h2>
            <p className="text-on-surface-variant">Estamos listos para darle forma a tus ideas.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-bold text-on-surface px-1">Nombre</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all" placeholder="Tu nombre completo" type="text" />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-bold text-on-surface px-1">Email</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all" placeholder="hola@tuempresa.com" type="email" />
              </div>
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-bold text-on-surface px-1">Asunto</label>
              <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all" placeholder="¿En qué podemos ayudarte?" type="text" />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-sm font-bold text-on-surface px-1">Mensaje</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all" placeholder="Cuéntanos más sobre tu visión..." rows={5}></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg hover:shadow-lg transition-transform active:scale-95" type="submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
