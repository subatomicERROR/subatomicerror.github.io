import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Brain, Cpu } from 'lucide-react';

const submodules = [
  {
    title: 'Quantum-Compute',
    description: 'A quantum computing system built to handle quantum computation tasks via an API, integrating quantum machine learning models and processing data to generate results.',
    link: 'https://github.com/subatomicERROR/Quantum-Compute',
    icon: Cpu,
  },
  {
    title: 'Quantum-API',
    description: 'A web API exposing quantum computation and machine learning capabilities, allowing external applications and services to access advanced quantum AI models.',
    link: 'https://github.com/subatomicERROR/Quantum-API',
    icon: Database,
  },
  {
    title: 'Quantum-ML',
    description: 'A submodule focused on quantum machine learning, utilizing quantum-enhanced algorithms to process and analyze data efficiently.',
    link: 'https://github.com/subatomicERROR/Quantum-ML',
    icon: Brain,
  },
];

const Submodules = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            Core Submodules
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {submodules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
            >
              <module.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
              <p className="text-gray-300 mb-6">{module.description}</p>
              <a
                href={module.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 flex items-center gap-2"
              >
                <Code size={20} />
                View Repository
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Submodules;