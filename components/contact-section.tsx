import Image from "next/image";

const links = [
  {
    label: "Discord",
    href: "https://discord.com/users/henryline",
    description: "henryline",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/212691538721",
    description: "+212 691-538721 (WhatsApp only)",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase">04.</span>
        <h2 className="text-3xl font-black text-zinc-100 tracking-tight">Contact</h2>
        <div className="flex-1 h-px bg-zinc-800 ml-4" />
      </div>

      {/* Hire Me banner */}
      <div className="w-full mb-16 border border-zinc-800 overflow-hidden">
        <Image
          src="/hire-me-banner.png"
          alt="Hire Me — Raphael König"
          width={1920}
          height={480}
          className="w-full object-cover"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-zinc-100 mb-4">
            Got something in mind?
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            I&apos;m always open to new projects, collaborations, or just a good
            conversation about tech. Whether you have a project idea or want to
            work together — reach out.
          </p>
          <p className="text-zinc-500 text-sm font-mono">
            Response time: Usually within 24h
          </p>
        </div>

        <div className="space-y-0 border border-zinc-800">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center justify-between px-6 py-5 hover:bg-zinc-900 transition-colors ${
                i < links.length - 1 ? "border-b border-zinc-800" : ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-1">
                  {link.label}
                </p>
                <p className="text-zinc-300 text-sm">{link.description}</p>
              </div>
              <span className="text-zinc-600">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
