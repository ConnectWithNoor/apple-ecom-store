import BasketSticky from "@/components/basketSticky/BasketSticky";
import { Header, Hero, Promos } from "@/sections";

export default function Home() {
  return (
    <>
      <Header />
      <BasketSticky />
      <main>
        <Hero />
        {/* @ts-expect-error Server Component */}
        <Promos />
      </main>
    </>
  );
}
