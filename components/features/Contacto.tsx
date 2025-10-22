import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Contact } from "@/components/sections/Contact";

const Contacto = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
