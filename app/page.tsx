import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Companies from '@/components/companies';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Companies />
      <Contact />
    </div>
  );
}