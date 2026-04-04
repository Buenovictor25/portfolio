export function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 pt-32">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
        Full Stack Developer
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        I build modern web applications, business systems, and scalable digital
        solutions.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        Focused on React, Next.js, Node.js, TypeScript, PostgreSQL, APIs, and
        real-world full stack projects built with clean structure and business
        logic.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-500"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-3 text-sm text-zinc-400">
        <span className="rounded-full border border-zinc-800 px-4 py-2">React</span>
        <span className="rounded-full border border-zinc-800 px-4 py-2">Next.js</span>
        <span className="rounded-full border border-zinc-800 px-4 py-2">TypeScript</span>
        <span className="rounded-full border border-zinc-800 px-4 py-2">Node.js</span>
        <span className="rounded-full border border-zinc-800 px-4 py-2">PostgreSQL</span>
        <span className="rounded-full border border-zinc-800 px-4 py-2">APIs</span>
      </div>
    </section>
  );
}