export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Let&apos;s build digital products that create real impact.
      </p>

      <div className="mt-8 flex flex-col gap-4 text-zinc-300">
        <a href="mailto:bueno.dev77@gmail.com" className="hover:text-white">
          Email: bueno.dev77@gmail.com
        </a>

        <a
          href="https://github.com/Buenovictor25"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/buenovictor25/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}