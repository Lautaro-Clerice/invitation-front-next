import { Hero } from "@/components/features/Hero";
import { Categories } from "@/components/features/Categories";
import { Features } from "@/components/features/Features";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <Features />
    </div>
  );
};
export default Home;
