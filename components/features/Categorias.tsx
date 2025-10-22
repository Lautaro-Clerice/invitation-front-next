// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Navbar } from "@/components/shared/Navbar";
// import { Footer } from "@/components/shared/Footer";
// import { Container } from "@/components/shared/Container";
// import { Badge } from "@/components/ui/badge";
// import { categories } from "@/lib/data";
// import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// const Categorias = () => {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <main className="pt-24 pb-20">
//         <Container>
//           <motion.div
//             initial="initial"
//             animate="animate"
//             variants={staggerContainer}
//             className="text-center mb-16"
//           >
//             <motion.h1
//               variants={fadeInUp}
//               className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
//             >
//               Nuestras Categorías
//             </motion.h1>
//             <motion.p
//               variants={fadeInUp}
//               className="text-lg text-muted-foreground max-w-2xl mx-auto"
//             >
//               Encuentra el estilo perfecto para tu evento. Cada categoría está
//               diseñada con cuidado para capturar la esencia de tu celebración.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial="initial"
//             animate="animate"
//             variants={staggerContainer}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {categories.map((category) => (
//               <motion.div key={category.id} variants={scaleIn} id={category.id}>
//                 <Link
//                   to={`/categorias#${category.id}`}
//                   className="group block relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500"
//                 >
//                   <div className="relative aspect-square overflow-hidden">
//                     <motion.img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileHover={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className="absolute inset-0 glass"
//                     />

//                     <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
//                       {category.badge}
//                     </Badge>

//                     <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                       <h2 className="font-display text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
//                         {category.name}
//                       </h2>
//                       <p className="text-sm text-white/90 mb-4">
//                         {category.description}
//                       </p>

//                       <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <span>Ver diseños</span>
//                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </Container>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Categorias;
