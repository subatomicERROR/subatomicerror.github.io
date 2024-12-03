import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Quantum-IDE',
    description: 'A development environment designed to facilitate coding and debugging for quantum computing tasks and AI model development.',
    status: 'Under Construction',
    icon: Terminal,
  },
  {
    title: 'Quantum-AI Agent',
    description: 'A hyper-intelligent AI agent that integrates quantum algorithms for solving complex quantum physics equations and coding problems.',
    status: 'Under Construction',
    icon: Cpu,
  },
];

const Projects = () => {
  return (
    <section id="research" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            Projects Under Development
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
            >
              <project.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;