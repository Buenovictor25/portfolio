"use client";

const projects = [
  {
    title: "BizManager SaaS",
    description:
      "Full stack business management platform with authentication, protected dashboard, PostgreSQL, Prisma ORM, and production deployment using Render and Vercel.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
    ],
    live: "https://bizmanager-frontend.vercel.app",
    github: "https://github.com/Buenovictor25/bizmanager-frontend",
  },
  {
    title: "SupportFlow",
    description:
      "Corporate help desk and ticket management system with roles and internal workflow.",
    stack: ["React", "Express", "Prisma"],
    live: "#",
    github: "#",
  },
  {
    title: "AgencyPro",
    description:
      "Premium business website template with modern UI and service-based conversion focus.",
    stack: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-700 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:opacity-80"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:border-gray-400"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}