import { Button } from "@/components";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[200vh] bg-[#E7ECEE]">
      <div className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
        {/* Left side */}

        <div className="space-y-8">
          <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="flex bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Powered
            </span>
            <span className="flex">By Intellect</span>
            <span className="flex">Driven By Values</span>
          </h1>

          <div className="space-x-8">
            <Button title="Buy Now" />
            <a className="link">Learn More</a>
          </div>
        </div>
        {/* Right side */}

        <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
          <Image
            src="/iphone.png"
            fill
            className="object-contain"
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
