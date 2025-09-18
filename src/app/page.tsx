import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="w-full min-h-[400px] bg-white flex items-center justify-center">
        <span className="text-gray-700 text-2xl">
          Section de teste: fundo branco
        </span>
      </section>
    </main>
  );
}
