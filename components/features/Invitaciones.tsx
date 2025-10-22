import { motion } from "framer-motion";
import { Eye, Palette } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { invitations } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const Invitaciones = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Galería de Invitaciones
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explora nuestra colección completa de diseños interactivos.
              Todas incluyen animaciones, música personalizable y sistema RSVP.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {invitations.map((invitation) => (
              <motion.div key={invitation.id} variants={scaleIn}>
                <div className="group relative overflow-hidden rounded-xl bg-card border shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.img
                      src={invitation.thumbnail}
                      alt={invitation.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 p-4"
                    >
                      <Button size="sm" variant="secondary" className="shadow-lg">
                        <Eye className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" className="shadow-lg">
                        <Palette className="h-4 w-4 mr-2" />
                        Editar
                      </Button>
                    </motion.div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{invitation.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{invitation.category}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {invitation.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Invitaciones;
