import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={0.1}>
          <About />
        </Reveal>
        <Reveal delay={0.1}>
          <Services />
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </main>
    </>
  );
}
