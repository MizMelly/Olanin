import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import BestSellers from "@/components/BestSellers";
import Editorial from "@/components/Editorial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ShopByCategory />
      <BestSellers />
      <Editorial />
      <Footer />
    </main>
  );
}