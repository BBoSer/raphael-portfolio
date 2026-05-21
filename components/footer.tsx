export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
          Raphael König © {new Date().getFullYear()}
        </span>
        <span className="font-mono text-xs text-zinc-700 tracking-wider">
          Built with Next.js · shadcn/ui · Vercel
        </span>
      </div>
    </footer>
  );
}
