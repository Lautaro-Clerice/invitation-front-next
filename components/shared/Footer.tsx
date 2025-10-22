import { Instagram, Mail, Phone, Sparkles } from "lucide-react";
import { Container } from "./Container";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30 mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-semibold">
                Invita<span className="text-primary">Digital</span>
              </span>
            </button>
            <p className="text-sm text-muted-foreground max-w-md">
              Creamos invitaciones digitales únicas y elegantes para tus
              momentos más especiales. Diseño personalizado con tecnología de
              última generación.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("categorias")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Categorías
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("invitaciones")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Invitaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hola@Invitly.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @Invitly
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Invitly. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
