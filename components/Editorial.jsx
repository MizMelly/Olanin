import Image from "next/image";
import heroImg from "@/public/images/editorial.jpg"; 

const EditorialSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Luxury hair model"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top small text */}
      <p className="absolute top-10 left-1/2 -translate-x-1/2 tracking-[0.3em] text-xs md:text-sm text-[#C9A96E] uppercase">
        The Olanin Experience
      </p>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
          Luxury. Confidence.
          <span className="block text-[#C9A96E]">Style.</span>
        </h1>

        {/* Button */}
        <button className="mt-10 px-8 py-3 border border-white text-white tracking-widest uppercase text-sm hover:bg-white hover:text-black transition duration-300">
          Explore the Collection
        </button>
      </div>
    </section>
  );
};

export default EditorialSection;