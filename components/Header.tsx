export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-[0.2em] text-white">
          VICTOR BUENO
        </a>

        <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}