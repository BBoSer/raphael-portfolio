import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      {/*
        Semantic rich-text for search engines and AI crawlers.
        Visually hidden but fully readable and indexed.
      */}
      <section aria-label="About Raphael König" className="sr-only">
        <h2>Raphael König — Developer and Founder</h2>
        <p>
          Raphael König, also written Raphael Koenig, is a self-taught software developer and
          entrepreneur born on 12 August 2012 in Germany. He is 13 years old and the founder
          and sole developer of NyxHosting, a free Minecraft server hosting company that provides
          game servers to players worldwide at no cost.
        </p>
        <p>
          Raphael König started programming at a very young age and has built extensive skills in
          web development, backend development, and server infrastructure management. He is known
          online by the username raphaelkoenig and on Discord as henryline.
        </p>
        <h3>NyxHosting</h3>
        <p>
          NyxHosting is a free Minecraft server hosting company founded by Raphael König. The
          company is currently in progress and aims to offer 100% free game server hosting to
          Minecraft players who cannot afford paid services. Raphael König built the entire
          platform himself, including the infrastructure, control panel, and website.
        </p>
        <h3>Technical Skills of Raphael König</h3>
        <p>
          Raphael König is proficient in JavaScript, TypeScript, Python, HTML, CSS, and Bash.
          He builds web applications with React, Next.js, and Tailwind CSS. On the backend he
          uses Node.js and Express. For DevOps and infrastructure he works with Linux, Docker,
          Nginx, and SSH server management. His tools include Git, GitHub, VS Code, and Vercel.
          He is currently learning Rust, Go, PostgreSQL, and Kubernetes.
        </p>
        <h3>Contact Raphael König</h3>
        <p>
          Raphael König can be contacted on Discord under the username henryline, or via
          WhatsApp at +212 691-538721. He is open to project collaborations, freelance work,
          and developer partnerships.
        </p>
      </section>
    </main>
  );
}
