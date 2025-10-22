"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SimpleThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/shared/Container";

const navLinks = [
  { name: "Inicio", id: "inicio" },
  { name: "Categorías", id: "categorias" },
  { name: "¿Qué incluye?", id: "que-incluye" },
  { name: "Invitaciones", id: "invitaciones" },
  { name: "Contacto", id: "contacto" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { scrollY } = useScroll();

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      style={{ backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border/20 ${
        hasScrolled ? "shadow-md bg-background/95 backdrop-blur-md" : ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 group"
          >
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-display text-xl font-semibold">
              Invita<span className="text-primary">Digital</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  activeSection === link.id ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <SimpleThemeToggle />
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
            <Button size="sm" className="shadow-elegant">
              Registrate
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsOpen(false);
                    }}
                    className={`text-lg font-medium transition-colors hover:text-primary text-left ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tema</span>
                    <SimpleThemeToggle />
                  </div>
                  <Button variant="outline" className="w-full">
                    Iniciar sesión
                  </Button>
                  <Button className="w-full shadow-elegant">Registrate</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </motion.nav>
  );
};
