import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "Bash"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "DevOps & Infra",
    skills: ["Linux", "Docker", "Nginx", "SSH", "Server Management"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-blue-400 text-sm tracking-[0.3em] uppercase">02.</span>
        <h2 className="text-3xl font-black text-zinc-100 tracking-tight">Skills</h2>
        <div className="flex-1 h-px bg-zinc-800 ml-4" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="border border-zinc-800 p-6">
            <h3 className="font-mono text-xs text-blue-400 tracking-[0.3em] uppercase mb-5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 rounded-none text-xs font-mono px-3 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-zinc-800 p-8">
        <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase mb-3">
          Currently learning
        </p>
        <div className="flex flex-wrap gap-3">
          {["Rust", "Go", "PostgreSQL", "Kubernetes"].map((s) => (
            <Badge
              key={s}
              className="bg-blue-500/10 text-blue-400 border-blue-500/30 rounded-none text-xs font-mono px-3 py-1"
            >
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
