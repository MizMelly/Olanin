import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* HERO TEXT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6 sm:px-8 lg:px-12">

        <p className="uppercase tracking-[0.3em] text-xs mb-4 text-white/70 animate-fade-in-up animation-delay-300">
          New Collection — 2026
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl animate-fade-in-up animation-delay-500">
          Elevated fashion for modern women
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/80 max-w-md animate-fade-in-up animation-delay-700">
          A curated edit of luxury hair, hand-crafted with intention.
        </p>

        <Link
          href="/collection"
          className="mt-8 w-full max-w-max px-8 py-3 border border-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 sm:w-auto inline-block text-center animate-fade-in-up animation-delay-900"
        >
          SHOP NOW
        </Link>

        {/* Scroll indicator */}
        <p className="absolute bottom-10 text-xs tracking-[0.3em] text-white/70 animate-fade-in-up animation-delay-1100">
          SCROLL
        </p>
      </div>
    </section>
  );
};

export default Hero;