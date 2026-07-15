import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Career from "@/components/Career";
import Shopify from "@/components/Shopify";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-bg">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Career />
        <Shopify />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ClientEffects />
    </div>
  );
}
