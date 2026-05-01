import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
