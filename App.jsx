import { motion } from "framer-motion";
import { Github, Mail, Code, Award } from "lucide-react";

export default function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GitHub"];
  const projects = [
    { title: "Weather App", desc: "Realtime weather forecast app using API." },
    { title: "Portfolio Site", desc: "Personal responsive portfolio with animations." },
    { title: "Student Portal", desc: "Dashboard to manage assignments and grades." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-all">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Agnibesh’s Portfolio</h1>
        <a
          href="https://github.com/agnibesh006"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <Github /> GitHub
        </a>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <section className="text-center">
          <motion.h2
            className="text-4xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I’m Agnibesh 👋
          </motion.h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
            A passionate student developer learning, building, and innovating daily.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Code /> Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Award /> Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-800 rounded-full text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <a
            href="mailto:agnibesh006@gmail.com"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Mail /> agnibesh006@gmail.com
          </a>
        </section>
      </main>

      <footer className="p-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Agnibesh Maity — Built with ❤️ using React & Tailwind
      </footer>
    </div>
  );
}
