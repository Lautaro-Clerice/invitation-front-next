"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  Heart,
  Users,
  Calendar,
  Camera,
  Music,
  Gift,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { fadeInUp, slideInFromRight } from "@/utils/animations";

const features = [
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description:
      "Cada invitación es única y diseñada especialmente para tu evento",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description:
      "Invitaciones interactivas que se ven perfectas en cualquier dispositivo",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Gestión de RSVP",
    description:
      "Controla confirmaciones y gestiona tu lista de invitados automáticamente",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Calendar,
    title: "Recordatorios",
    description:
      "Envío automático de recordatorios para que nadie se olvide de tu evento",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Camera,
    title: "Galería Interactiva",
    description:
      "Incluye fotos y videos que cobran vida con animaciones elegantes",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Music,
    title: "Música de Fondo",
    description: "Añade la banda sonora perfecta para crear el ambiente ideal",
    gradient: "from-teal-500 to-blue-600",
  },
];

const benefits = [
  "Entrega inmediata por WhatsApp o email",
  "Sin límite de invitados",
  "Actualizaciones en tiempo real",
  "Compatible con todos los dispositivos",
  "Estadísticas detalladas de apertura",
  "Soporte técnico incluido",
];

export const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-24 bg-gradient-to-b from-secondary to-background overflow-hidden"
      >
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Gift className="h-4 w-4" />
              <span>Todo incluido</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              ¿Qué incluye tu <span className="text-primary">invitación</span>?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Cada invitación viene con todas las herramientas que necesitas
              para crear una experiencia memorable para tus invitados
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card rounded-2xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h3
                  variants={fadeInUp}
                  className="font-display text-2xl md:text-3xl font-bold mb-6"
                >
                  Y mucho más <span className="text-primary">incluido</span>
                </motion.h3>

                <motion.p
                  variants={fadeInUp}
                  className="text-muted-foreground mb-8 leading-relaxed"
                >
                  Nuestro servicio integral asegura que tengas todo lo necesario
                  para crear la invitación perfecta sin preocupaciones
                  adicionales.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.5,
                            delay: index * 0.1,
                          },
                        },
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={slideInFromRight} className="relative">
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/30 rounded-2xl p-8 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 mx-auto"
                    >
                      <Heart className="h-10 w-10 text-white" />
                    </motion.div>

                    <h4 className="font-display text-xl font-bold text-foreground mb-2">
                      Experiencia Completa
                    </h4>
                    <p className="text-muted-foreground">
                      Todo lo que necesitas para crear momentos inolvidables
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
