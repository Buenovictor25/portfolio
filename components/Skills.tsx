export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ul className="mt-4 space-y-2 text-zinc-400">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Responsive UI</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">Backend</h3>
          <ul className="mt-4 space-y-2 text-zinc-400">
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>Authentication</li>
            <li>Business Logic</li>
            <li>Express</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">Database</h3>
          <ul className="mt-4 space-y-2 text-zinc-400">
            <li>PostgreSQL</li>
            <li>Prisma ORM</li>
            <li>Data Modeling</li>
            <li>Queries</li>
            <li>Relational Design</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">Tools</h3>
          <ul className="mt-4 space-y-2 text-zinc-400">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Docker</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}