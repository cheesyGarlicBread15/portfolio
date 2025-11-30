import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code2, Database, Palette, GitBranch, Server, Smartphone } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      name: "EcoTrack",
      description: "A comprehensive sustainability tracking platform that helps businesses monitor their carbon footprint and environmental impact in real-time with advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      tech: ["Laravel", "React.js", "PostgreSQL", "Hostinger"]
    },
    {
      name: "MediConnect",
      description: "Healthcare appointment management system with telemedicine capabilities, patient records, and automated scheduling for clinics and hospitals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      tech: ["PHP", "Vue.js", "MySQL", "Firebase"]
    },
    {
      name: "FinanceFlow",
      description: "Personal finance management mobile app with budget tracking, expense categorization, and AI-powered spending insights to help users achieve financial goals.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      tech: ["Flutter", "Dart", "Supabase", "Python"]
    },
    {
      name: "TaskMaster Pro",
      description: "Enterprise project management solution with real-time collaboration, resource allocation, and intelligent task prioritization for remote teams.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tech: ["Laravel", "React.js", "PostgreSQL", "Firebase"]
    },
    {
      name: "ShopSphere",
      description: "Multi-vendor e-commerce platform with inventory management, payment gateway integration, and customer analytics dashboard for online retailers.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tech: ["PHP", "Vue.js", "MySQL", "Hostinger"]
    },
    {
      name: "LearnHub",
      description: "Interactive e-learning platform with video courses, progress tracking, quizzes, and certification system for students and professionals.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      tech: ["Laravel", "React.js", "Firebase", "Android Studio"]
    }
  ];

  const techStack = [
    { name: "Laravel", icon: Server },
    { name: "React.js", icon: Code2 },
    { name: "Vue.js", icon: Code2 },
    { name: "Flutter", icon: Smartphone },
    { name: "Python", icon: Code2 },
    { name: "PHP", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Firebase", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Canva", icon: Palette }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-8 right-8 z-50 p-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
            ? 'bg-purple-500/20 border border-purple-400/30 hover:bg-purple-500/30'
            : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30'
          }`}
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-300" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className={`backdrop-blur-xl rounded-3xl p-12 transition-all duration-500 ${darkMode
              ? 'bg-white/10 border border-purple-400/20 shadow-2xl shadow-purple-500/10'
              : 'bg-white/60 border border-blue-200/50 shadow-2xl shadow-blue-500/10'
            }`}>
            <div className="text-center mb-12 animate-fade-in">
              <h1 className={`text-6xl md:text-7xl font-bold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                We Build <span className={darkMode ? 'text-purple-400' : 'text-blue-600'}>Together</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                A Developer Duo Crafting Digital Excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Backend Developer */}
              <div className={`backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${darkMode
                  ? 'bg-purple-500/10 border border-purple-400/20'
                  : 'bg-blue-500/10 border border-blue-300/30'
                }`}>
                <Server className={`w-12 h-12 mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Backend Developer
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Architecting robust server-side solutions with Laravel, Python, and PHP. Specializing in database design, API development, and scalable system architecture that powers seamless user experiences.
                </p>
              </div>

              {/* Frontend Developer */}
              <div className={`backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${darkMode
                  ? 'bg-purple-500/10 border border-purple-400/20'
                  : 'bg-blue-500/10 border border-blue-300/30'
                }`}>
                <Code2 className={`w-12 h-12 mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Frontend Developer
                </h3>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Creating intuitive and responsive interfaces with React.js, Vue.js, and Flutter. Bringing designs to life with pixel-perfect precision and smooth animations that users love.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                We're a collaborative development team that combines backend expertise with frontend finesse.
                Every project we tackle is a symphony of clean code, thoughtful architecture, and beautiful design.
                From concept to deployment, we work in perfect sync to deliver full-stack solutions that exceed expectations.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h3 className={`text-2xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Tech Arsenal
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`backdrop-blur-md rounded-xl px-5 py-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                        ? 'bg-purple-500/10 border border-purple-400/20 hover:bg-purple-500/20'
                        : 'bg-blue-500/10 border border-blue-300/30 hover:bg-blue-500/20'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <tech.icon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                      <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Our Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${darkMode
                    ? 'bg-white/10 border border-purple-400/20 shadow-xl shadow-purple-500/10'
                    : 'bg-white/70 border border-blue-200/50 shadow-xl shadow-blue-500/10'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${darkMode
                      ? 'bg-gradient-to-t from-purple-900/80 to-transparent'
                      : 'bg-gradient-to-t from-blue-900/50 to-transparent'
                    }`} />
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {project.name}
                  </h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-sm px-3 py-1 rounded-full transition-colors duration-500 ${darkMode
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                            : 'bg-blue-500/20 text-blue-700 border border-blue-300/40'
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className={`max-w-4xl mx-auto text-center backdrop-blur-md rounded-2xl p-8 transition-all duration-500 ${darkMode
            ? 'bg-purple-500/10 border border-purple-400/20'
            : 'bg-blue-500/10 border border-blue-300/30'
          }`}>
          <p className={`text-lg transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Building the future, one commit at a time.
          </p>
          <p className={`mt-2 transition-colors duration-500 ${darkMode ? 'text-purple-400' : 'text-blue-600'
            }`}>
            © 2024 Developer Duo
          </p>
        </div>
      </footer>
    </div>
  );
}