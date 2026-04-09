import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import Process from '@/components/Process';

const About = dynamic(() => import('../components/About'));
const Services = dynamic(() => import('../components/Services'));
const ContactForm = dynamic(() => import('../components/ContactForm'));

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
