// import Beautiful from "@/components/sectionComponents/Beautiful";
// import Carasol from "@/components/sectionComponents/Carasol";
// import Design from "@/components/sectionComponents/Design";
// import Details from "@/components/sectionComponents/Details";
// import Footer from "@/components/sectionComponents/Footer";
// import Hero from "@/components/sectionComponents/Hero";
import dynamic from "next/dynamic";

const Beautiful = dynamic(() =>
  import("@/components/sectionComponents/Beautiful")
);
const Carasol = dynamic(() => import("@/components/sectionComponents/Carasol"));
const Design = dynamic(() => import("@/components/sectionComponents/Design"));
const Details = dynamic(() => import("@/components/sectionComponents/Details"));
const Footer = dynamic(() => import("@/components/sectionComponents/Footer"));
const Hero = dynamic(() => import("@/components/sectionComponents/Hero"));

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
