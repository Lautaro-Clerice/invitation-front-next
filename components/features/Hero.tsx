"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import heroImage from "@/assets/hero-event.jpg";
import Image from "next/image";
import { openWhatsApp } from "@/utils/whatsapp";
import {
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/animations";
import { scrollToSection } from "@/utils/scrolls";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  const words = [t("words.0"), t("words.1")];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16 grain overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromLeft}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <Image
                  src={heroImage}
                  alt={t("imageAlt")}
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                  width={1200}
                  height={600}
                  priority
                  role="img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromRight}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Sparkles className="h-4 w-4" />
                <span>{t("badge")}</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                {t("title")}{" "}
                <span className="relative inline-block text-primary">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWordIndex]}
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -20, rotateX: 90 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute inset-0"
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible">{words[currentWordIndex]}</span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => scrollToSection("categorias")}
                  size="lg"
                  className="shadow-elegant group"
                  aria-label={t("button.categories")}
                >
                  {t("button.categories")}
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => openWhatsApp(t("whatsappMessage"))}
                  aria-label={t("button.contact")}
                >
                  {t("button.contact")}
                  <PhoneCall
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("stats.designs")}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("stats.clients")}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("stats.satisfaction")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};
