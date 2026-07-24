function Hero() {
  return (
    <main>
      <section className="h-screen">
        <div className="relative h-full w-full">
          <div className="h-full w-full bg-neutral-400 flex items-center justify-center">
            Perfume Image
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-white">
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.45em]">
              VEGA
            </h1>
            <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase">
              Discover the Art of Fragrance
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;