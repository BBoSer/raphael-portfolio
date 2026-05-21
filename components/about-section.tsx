import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  const facts = [
    { label: "Born", value: "12 August 2012" },
    { label: "Location", value: "Germany" },
    { label: "Role", value: "Developer & Founder" },
    { label: "Company", value: "NyxHosting" },
    { label: "Status", value: "Open to Collaborations" },
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase">01.</span>
        <h2 className="text-3xl font-black text-zinc-100 tracking-tight">About Me</h2>
        <div className="flex-1 h-px bg-zinc-800 ml-4" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <p className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m <strong className="text-zinc-100 font-semibold">Raphael König</strong>, a self-taught developer
            from Germany. I started coding because I wanted to build things — real things that
            people could use.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            At 13, I founded{" "}
            <strong className="text-blue-400 font-semibold">NyxHosting</strong>, a completely free
            Minecraft server hosting company. I built everything from scratch — the infrastructure,
            the website, the panel — all by myself.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I love solving problems with code. Whether it&apos;s building web apps, managing servers,
            or learning a new framework at 2am — I&apos;m always building something.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Programming isn&apos;t just a hobby for me. It&apos;s how I think. It&apos;s how I create.
          </p>
        </div>

        <div className="space-y-0 border border-zinc-800">
          {facts.map((fact, i) => (
            <div key={fact.label}>
              <div className="flex items-center justify-between px-6 py-4">
                <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
                  {fact.label}
                </span>
                <span className="text-zinc-200 font-medium text-sm">{fact.value}</span>
              </div>
              {i < facts.length - 1 && <Separator className="bg-zinc-800" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
