import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const tags = ["Node.js", "Linux", "Nginx", "Docker", "Minecraft"];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase">03.</span>
        <h2 className="text-3xl font-black text-zinc-100 tracking-tight">Projects</h2>
        <div className="flex-1 h-px bg-zinc-800 ml-4" />
      </div>

      {/* Single featured project */}
      <div className="border border-blue-500/40 bg-blue-500/5 p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase mb-3 block">
              Featured Project
            </span>
            <h3 className="text-3xl font-black text-zinc-100">NyxHosting</h3>
          </div>
          <span className="font-mono text-xs tracking-widest uppercase px-3 py-1.5 text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 self-start">
            In Progress
          </span>
        </div>

        <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl text-base">
          Free Minecraft server hosting for everyone. I&apos;m building the entire platform from
          scratch — infrastructure, control panel, website, and billing system. The goal is to
          give every player access to a quality Minecraft server, completely for free, no matter
          their budget.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-zinc-800 text-zinc-400 border-zinc-700 rounded-none text-xs font-mono px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-6 grid sm:grid-cols-3 gap-6">
          <div>
            <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">Type</p>
            <p className="text-zinc-300 text-sm">Hosting Platform</p>
          </div>
          <div>
            <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">Role</p>
            <p className="text-zinc-300 text-sm">Founder & Solo Developer</p>
          </div>
          <div>
            <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-1">Price</p>
            <p className="text-zinc-300 text-sm">100% Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
