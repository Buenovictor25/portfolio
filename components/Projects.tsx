export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
      <p className="mt-4 max-w-2xl text-zinc-400">
        A curated selection of full stack projects focused on business value,
        scalability, and modern web development.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-2xl font-semibold">BizManager SaaS</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Business management platform for clients, orders, revenue, and
            dashboard metrics.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Next.js
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Node.js
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              PostgreSQL
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-2xl font-semibold">SupportFlow</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Corporate help desk and ticket management system with roles and
            internal workflow.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              React
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Express
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Prisma
            </span>
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-2xl font-semibold">AgencyPro</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Premium business website template with modern UI and service-based
            conversion focus.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-400">
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Next.js
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              Tailwind
            </span>
            <span className="rounded-full border border-zinc-800 px-3 py-1">
              SEO
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}