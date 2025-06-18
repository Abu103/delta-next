import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex absolute top-0 w-[100vw] font-poppins">
      <Navbar />
      <Hero />
    </div>
  );
}
