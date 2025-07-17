// React + Vite + TypeScript + TailwindCSS + Framer Motion Portfolio
// Folder: shudhanshu-portfolio
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaMobile, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiBlender } from "react-icons/si";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const skills = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "React Native", icon: FaMobile, color: "text-green-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Blender", icon: SiBlender, color: "text-orange-400" },
  ];

  const projects = [
    {
      title: "Travelmatic",
      description: "A comprehensive B2B travel booking solution with advanced dossier management, user authentication, and full-stack integrations. Built with modern React architecture and scalable backend services.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      link: "#",
      category: "Web Application"
    },
    {
      title: "DevDarshan Shorts",
      description: "An innovative YouTube 3D animated cartoon series exploring Indian mythology through cutting-edge animation. Created using Blender and AI-powered generative tools for immersive storytelling.",
      tech: ["Blender", "After Effects", "AI Tools"],
      link: "#",
      category: "3D Animation"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <section className="relative py-20 px-6">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              <img src="/assets/profile.jpg" alt="S" className="w-32 h-32 object-cover rounded-full" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent"
          >
            Shudhanshu
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Frontend Developer & Creative Technologist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I craft exceptional digital experiences through responsive web applications,
            mobile solutions, and innovative 3D content. Specializing in React ecosystem
            with a passion for clean code and user-centric design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 text-2xl mb-16"
          >
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:hello@shudhanshu.dev"
              className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-3 hover:bg-opacity-10 transition-all duration-300"
              >
                <skill.icon className={`text-2xl ${skill.color}`} />
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.5 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-300 group border border-white border-opacity-10"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-blue-400 font-medium uppercase tracking-wide">
                    {project.category}
                  </span>
                  <motion.a
                    href={project.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10"
        >
          <h2 className="text-3xl font-semibold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects
            and explore new technological possibilities.
          </p>
          <motion.a
            href="mailto:hello@shudhanshu.dev"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
