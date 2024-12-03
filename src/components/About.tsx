import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            About the Quantum-AI System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A sophisticated integration of quantum computing and artificial intelligence, designed to create 
            a new era of intelligent systems leveraging quantum mechanics principles for problem-solving 
            and AI-driven insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors"
          >
            <Cpu className="w-12 h-12 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Computation</h3>
            <p className="text-gray-300">
              Facilitates real-time quantum computation tasks through a seamless web interface, 
              enabling complex calculations and simulations previously impossible with classical computing.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors"
          >
            <Brain className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
            <p className="text-gray-300">
              Combines quantum computing with advanced AI models for enhanced decision-making 
              and problem-solving capabilities, pushing the boundaries of computational intelligence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;