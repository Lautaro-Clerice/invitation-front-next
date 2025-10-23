import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Features } from "@/components/sections/Features";

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
