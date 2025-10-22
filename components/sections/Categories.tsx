"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Container } from "@/components/shared/Container";
import { WaveDivider } from "./WaveDivider";
import { FlowerEdges } from "./FlowerEdges";
import { Badge } from "@/components/ui/badge";
import flower1 from "@/assets/flores_Grupo02_A.webp";
import flower2 from "@/assets/flores_Grupo02_B.webp";
import floresSecas from "@/assets/floresSecas.webp";
import floresSecas2 from "@/assets/floresSecas2.webp";
import floresSecas3 from "@/assets/floresSecas3.webp";
import { useCategories } from "@/hooks/useCategories";
import { withErrorBoundary } from "@/components/shared/withErrorBoundary";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export const Categories = () => {
  const { data: categories, isLoading, error } = useCategories();
  const sectionRef = useRef<HTMLElement>(null);

  const categoriesFlowers = [
    {
      image: flower1,
      top: "12%",
      left: "-30px",
      size: 130,
      opacity: 0.8,
      rotate: -20,
      zIndex: 2,
      delay: 0,
    },
    {
      image: flower2,
      top: "18%",
      left: "-20px",
      size: 150,
      opacity: 0.9,
      rotate: 5,
      zIndex: 3,
      delay: 0.2,
    },
    {
      image: flower1,
      top: "26%",
      left: "-30px",
      size: 125,
      opacity: 0.75,
      rotate: 70,
      zIndex: 1,
      delay: 0.4,
    },
  ];

  const floresSecasComponent = [
    {
      image: floresSecas,
      top: "52%",
      left: "-50px",
      size: 220,
      opacity: 0.7,
      rotate: 180,
      zIndex: 2,
      delay: 0.1,
    },
    {
      image: floresSecas3,
      top: "52%",
      left: "-40px",
      size: 200,
      opacity: 0.8,
      rotate: 180,
      zIndex: 3,
      delay: 0.3,
    },
    {
      image: floresSecas2,
      top: "59%",
      left: "-45px",
      size: 120,
      opacity: 0.6,
      rotate: 200,
      zIndex: 1,
      delay: 0.5,
    },
  ];

  return (
    <>
      <WaveDivider flipY height={80} color="accent" />

      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-b from-accent to-background relative overflow-x-hidden"
      >
        <FlowerEdges
          sectionRef={sectionRef}
          side="left"
          flowers={categoriesFlowers}
        />

        <FlowerEdges
          sectionRef={sectionRef}
          side="right"
          flowers={floresSecasComponent}
        />

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
              Categorías que trabajamos
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Diseños únicos para cada tipo de celebración. Elige tu categoría y
              personaliza cada detalle para crear la invitación perfecta.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="h-auto"
          >
            {isLoading ? (
              <h2>Cargando</h2>
            ) : error ? (
              <CategoriesSwiperWithError
                categories={categories}
                error={error}
              />
            ) : (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="categories-carousel"
              >
                {categories?.map((category) => (
                  <SwiperSlide key={category.id}>
                    <motion.div variants={scaleIn}>
                      <div className="group block relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer h-[500px]">
                        <div className="relative h-full overflow-hidden">
                          <motion.img
                            src={category.cover_image_url}
                            alt={category.display_name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 glass"
                          />

                          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                            <Heart className="w-6 h-6" fill="white" />
                          </Badge>

                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="font-display text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                              {category.display_name}
                            </h3>
                            <p className="text-sm text-white/90 mb-4">
                              {category.description}
                            </p>

                            <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span>Ver diseños</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
};
const CategoriesSwiperWithError = withErrorBoundary(Categories);
