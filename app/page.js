import Beautiful from "@/components/sectionComponents/Beautiful";
import Carasol from "@/components/sectionComponents/Carasol";
import Design from "@/components/sectionComponents/Design";
import Details from "@/components/sectionComponents/Details";
import Footer from "@/components/sectionComponents/Footer";
import Hero from "@/components/sectionComponents/Hero";

export default function page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Beautiful />
      <Design />
      <Carasol />
      <Details />
      <Footer />
    </div>
  );
}
