import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const technologies = [
  {
    name: 'PyTorch',
    description: 'An open source machine learning framework that accelerates the path from research prototyping to production deployment.',
    link: 'https://pytorch.org/',
    logo: 'https://pytorch.org/assets/images/pytorch-logo.png',
  },
  {
    name: 'PennyLane',
    description: 'A cross-platform Python library for differentiable programming of quantum computers. It integrates with PyTorch and TensorFlow.',
    link: 'https://pennylane.ai/',
    logo: 'https://pennylane.ai/img/logo.png',
  },
  {
    name: 'Qiskit',
    description: 'An open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.',
    link: 'https://qiskit.org/',
    logo: 'https://qiskit.org/images/qiskit-logo.png',
  },
  {
    name: 'FastAPI',
    description: 'A modern, fast (high-performance) web framework for building APIs with Python based on standard Python type hints.',
    link: 'https://fastapi.tiangolo.com/',
    logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            Made With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="tech-card rounded-xl p-6 group"
            >
              <div className="h-16 flex items-center justify-center mb-4 relative">
                <img src={tech.logo} alt={tech.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
              <motion.a
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-futuristic inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;