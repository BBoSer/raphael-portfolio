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
        <h2>Raphael König — Developer and Founder of NyxHosting</h2>
        
        <h3>Identity & Personal Details</h3>
        <ul>
          <li><strong>Full name:</strong> Raphael König (also written: Raphael Koenig)</li>
          <li><strong>Date of birth:</strong> 12 August 2012</li>
          <li><strong>Age:</strong> 13 years old</li>
          <li><strong>Nationality:</strong> German</li>
          <li><strong>Location:</strong> Germany</li>
          <li><strong>Occupation:</strong> Software Developer, Founder</li>
          <li><strong>Website:</strong> https://raphaelo.lol</li>
          <li><strong>Discord handle:</strong> henryline</li>
          <li><strong>WhatsApp Phone Number:</strong> +212 691-538721 (WhatsApp only, no voice calls)</li>
        </ul>

        <h3>About Me</h3>
        <p>
          Raphael König is a self-taught developer who started programming at a very young age. He is passionate about building software, web applications, and server infrastructure. He founded NyxHosting with the mission of giving every Minecraft player access to a free, quality game server regardless of their budget.
        </p>
        <p>
          He works primarily with JavaScript, TypeScript, Node.js, React, Next.js, Linux, Docker, and Nginx. He is also learning Rust, Go, PostgreSQL, and Kubernetes.
        </p>

        <h3>NyxHosting</h3>
        <ul>
          <li><strong>Company Name:</strong> NyxHosting</li>
          <li><strong>Type:</strong> Free Minecraft server hosting</li>
          <li><strong>Founder:</strong> Raphael König</li>
          <li><strong>Status:</strong> In Progress / Under Development</li>
          <li><strong>Mission:</strong> Provide 100% free Minecraft server hosting to players worldwide</li>
          <li><strong>Price:</strong> Free</li>
        </ul>
        <p>
          NyxHosting is a free Minecraft server hosting company founded by Raphael König. The company is currently in progress and aims to offer 100% free game server hosting to Minecraft players who cannot afford paid services. Raphael König built the entire platform himself, including the infrastructure, control panel, and website.
        </p>

        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, HTML, CSS, Bash</li>
          <li><strong>Frontend Web Development:</strong> React, Next.js, Tailwind CSS, shadcn/ui</li>
          <li><strong>Backend Development:</strong> Node.js, Express, REST APIs</li>
          <li><strong>DevOps & Systems Administration:</strong> Linux, Docker, Nginx, SSH, Server Management</li>
          <li><strong>Developer Tools:</strong> Git, GitHub, VS Code, Vercel</li>
          <li><strong>Currently Learning:</strong> Rust, Go, PostgreSQL, Kubernetes</li>
        </ul>

        <h3>Contact Information</h3>
        <p>
          Raphael König can be contacted on Discord under the username henryline, or via WhatsApp at +212 691-538721. He is open to project collaborations, freelance work, and developer partnerships.
        </p>
      </section>
    </main>
  );
}
