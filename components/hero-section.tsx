import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto w-full">
      {/* Top banner */}
      <div className="w-full mb-12 border border-zinc-800 overflow-hidden">
        <Image
          src="/raphael-banner.png"
          alt="Raphael König — Developer & Founder"
          width={1920}
          height={480}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Hero content */}
      <div className="max-w-3xl">
        <p className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase mb-6">
          Hey, I&apos;m
        </p>

        <h1 className="text-5xl sm:text-7xl font-black text-zinc-100 leading-none tracking-tight mb-4">
          Raphael
          <br />
          <span className="text-blue-400">König</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 font-light mb-8 max-w-md leading-relaxed">
          Developer. Founder. Builder.{" "}
          <span className="text-zinc-300 font-medium">
            Turning ideas into software since I was a kid.
          </span>
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 rounded-none px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
            13 years old
          </Badge>
          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 rounded-none px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
            Founder @ NyxHosting
          </Badge>
          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 rounded-none px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
            Self-Taught
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className={cn(
              buttonVariants(),
              "bg-blue-500 hover:bg-blue-600 text-white rounded-none font-mono text-sm tracking-widest uppercase px-8 py-6 border-0"
            )}
          >
            View My Work
          </a>
          <a
            href="#about"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 rounded-none font-mono text-sm tracking-widest uppercase px-8 py-6 bg-transparent"
            )}
          >
            About Me
          </a>
        </div>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <div className="w-12 h-px bg-zinc-700" />
        <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
