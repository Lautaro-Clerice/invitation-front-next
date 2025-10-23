"use client";
import { motion } from "framer-motion";
import { Eye, Palette } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/animations";
import { useTranslations } from "next-intl";

interface Invitation {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  tags: string[];
}
const invitations: Invitation[] = [
  {
    id: "inv-1",
    title: "Elegancia Floral",
    category: "Bodas",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-bodas.jpg",
    tags: ["Interactiva", "Con música", "RSVP"],
  },
  {
    id: "inv-2",
    title: "Sueño de Princesa",
    category: "15 Años",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-quince.jpg",
    tags: ["Animada", "Con contador", "Galería"],
  },
  {
    id: "inv-3",
    title: "Dulce Espera",
    category: "Baby Shower",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-babyshower.jpg",
    tags: ["Interactiva", "Con juegos", "RSVP"],
  },
  {
    id: "inv-4",
    title: "Fiesta Sorpresa",
    category: "Cumpleaños",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-cumpleanos.jpg",
    tags: ["Con música", "Confetti", "Contador"],
  },
  {
    id: "inv-5",
    title: "Gala Empresarial",
    category: "Corporativos",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-corporativo.jpg",
    tags: ["Profesional", "RSVP", "Calendario"],
  },
  {
    id: "inv-6",
    title: "Romance Atemporal",
    category: "Bodas",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-bodas.jpg",
    tags: ["Interactiva", "Video", "RSVP"],
  },
  {
    id: "inv-7",
    title: "Vals de Ensueño",
    category: "15 Años",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-cumpleanos.jpg",

    tags: ["Con música", "Animada", "Galería"],
  },
  {
    id: "inv-8",
    title: "Bendición Celestial",
    category: "Baby Shower",
    thumbnail:
      "https://invitation-bucket-aws.s3.us-east-2.amazonaws.com/assets-categories/category-babyshower.jpg",
    tags: ["Interactiva", "RSVP", "Lista regalos"],
  },
];

const Templates = () => {
  const t = useTranslations("Templates");
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {t("featuredInvitations")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t("featuredDescription")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {invitations.map((invitation) => (
            <motion.div key={invitation.id} variants={scaleIn}>
              <div className="group relative overflow-hidden rounded-xl bg-card border shadow-soft hover:shadow-elegant transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={invitation.thumbnail}
                    alt={invitation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2"
                  >
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Eye className="h-4 w-4 mr-2" />
                      {t("viewDemo")}
                    </Button>
                    <Button size="sm" className="shadow-lg">
                      <Palette className="h-4 w-4 mr-2" />
                      {t("get")}
                    </Button>
                  </motion.div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-1 min-h-[3.5rem] leading-tight">
                    {invitation.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 truncate">
                    {invitation.category}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto min-h-[2.5rem] items-start">
                    {invitation.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {t(`tags.${tag}`)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            {t("viewAll")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Templates;
