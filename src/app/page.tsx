import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoShowcase from "@/components/VideoShowcase";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VideoShowcase />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}
