"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-32 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-xl p-12 clay-shadow relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Hablemos de tu Proyecto</h2>
            <p className="text-on-surface-variant">Estamos listos para darle forma a tus ideas. Te contactaremos en menos de 24 horas.</p>
          </div>
          
          {isSuccess ? (
            <div className="text-center py-12 animate-in fade-in transition-all">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">¡Mensaje Enviado!</h3>
              <p className="text-on-surface-variant">Gracias por contactarnos. Nuestro equipo te responderá pronto.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-bold text-on-surface px-1">Nombre</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all disabled:opacity-50" placeholder="Tu nombre completo" type="text" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-bold text-on-surface px-1">Email</label>
                  <input required disabled={isSubmitting} className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all disabled:opacity-50" placeholder="hola@tuempresa.com" type="email" />
                </div>
              </div>
              
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-bold text-on-surface px-1">Mensaje</label>
                <textarea required disabled={isSubmitting} className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all disabled:opacity-50" placeholder="Cuéntanos un poco sobre tu proyecto o necesidades..." rows={5}></textarea>
              </div>
              <button disabled={isSubmitting} className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg hover:shadow-lg transition-transform active:scale-95 disabled:opacity-70 flex justify-center items-center gap-2" type="submit">
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Propuesta
                    <span className="material-symbols-outlined text-xl">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
