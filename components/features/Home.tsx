import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Features } from "@/components/sections/Features";
import { Invitations } from "@/components/sections/Invitations";
import { Contact } from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="categorias">
          <Categories />
        </section>
        <section id="que-incluye">
          <Features />
        </section>
        <section id="invitaciones">
          <Invitations />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
