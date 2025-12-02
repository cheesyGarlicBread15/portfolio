import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code2, Database, Palette, GitBranch, Server, Smartphone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactLogo from "@/assets/logos/react.svg";
import VueLogo from "@/assets/logos/vue.svg";
import CanvaLogo from "@/assets/logos/canva.svg";
import FigmaLogo from "@/assets/logos/figma.svg";
import GithubLogo from "@/assets/logos/github.svg";
import PostgresqlLogo from "@/assets/logos/postgresql.svg";
import SupabaseLogo from "@/assets/logos/supabase.svg";
import FirebaseLogo from "@/assets/logos/firebase.svg";
import FlutterLogo from "@/assets/logos/flutter.svg";
import GitLogo from "@/assets/logos/git.svg";
import LaravelLogo from "@/assets/logos/laravel.svg";
import MysqlLogo from "@/assets/logos/mysql.svg";
import PhpLogo from "@/assets/logos/php.svg";
import PythonLogo from "@/assets/logos/python.svg";
import JavaLogo from "@/assets/logos/java.svg";
import DartLogo from "@/assets/logos/dart.svg";
import AndroidstudioLogo from "@/assets/logos/androidstudio.svg";
import VscodeLogo from "@/assets/logos/vscode.svg";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      tech: ["Laravel", "React.js", "PostgreSQL", "Hostinger"],
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ]
    },
    {
      name: "MediConnect",
      description: "Healthcare appointment management system with telemedicine capabilities, patient records, and automated scheduling for clinics and hospitals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      tech: ["PHP", "Vue.js", "MySQL", "Firebase"],
      screenshots: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
      ]
    },
    {
      name: "FinanceFlow",
      description: "Personal finance management mobile app with budget tracking, expense categorization, and AI-powered spending insights to help users achieve financial goals.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      tech: ["Flutter", "Dart", "Supabase", "Python"],
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
      ]
    },
    {
      name: "TaskMaster Pro",
      description: "Enterprise project management solution with real-time collaboration, resource allocation, and intelligent task prioritization for remote teams.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tech: ["Laravel", "React.js", "PostgreSQL", "Firebase"],
      screenshots: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop"
      ]
    },
    {
      name: "ShopSphere",
      description: "Multi-vendor e-commerce platform with inventory management, payment gateway integration, and customer analytics dashboard for online retailers.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tech: ["PHP", "Vue.js", "MySQL", "Hostinger"],
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
      ]
    },
    {
      name: "LearnHub",
      description: "Interactive e-learning platform with video courses, progress tracking, quizzes, and certification system for students and professionals.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      tech: ["Laravel", "React.js", "Firebase", "Android Studio"],
      screenshots: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
      ]
    }
  ];

  const techStack = [
    { name: "Laravel", icon: LaravelLogo },
    { name: "React.js", icon: ReactLogo },
    { name: "Vue.js", icon: VueLogo },
    { name: "Flutter", icon: FlutterLogo },
    { name: "Python", icon: PythonLogo },
    { name: "PHP", icon: PhpLogo },
    { name: "Java", icon: JavaLogo },
    { name: "Dart", icon: DartLogo },
    { name: "MySQL", icon: MysqlLogo },
    { name: "PostgreSQL", icon: PostgresqlLogo },
    { name: "Firebase", icon: FirebaseLogo },
    { name: "Supabase", icon: SupabaseLogo },
    { name: "Git", icon: GitLogo },
    { name: "GitHub", icon: GithubLogo },
    { name: "Canva", icon: CanvaLogo },
    { name: "Figma", icon: FigmaLogo },
    { name: "Android Studio", icon: AndroidstudioLogo },
    { name: "VS Code", icon: VscodeLogo },
  ];

  const openModal = (project, index) => {
    setSelectedProject({ ...project, index });
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextProject = () => {
    const nextIndex = (selectedProject.index + 1) % projects.length;
    setSelectedProject({ ...projects[nextIndex], index: nextIndex });
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    const prevIndex = (selectedProject.index - 1 + projects.length) % projects.length;
    setSelectedProject({ ...projects[prevIndex], index: prevIndex });
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode
      ? 'bg-gray-950/95'
      : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
      }`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 md:top-8 md:right-8 z-50 p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
          ? 'bg-gray-800/70 border border-gray-700/40 hover:bg-gray-800/80'
          : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30'
          }`}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 md:w-6 md:h-6 text-green-300" />
        ) : (
          <Moon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
        )}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl w-full">
          <div className={`backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-12 transition-all duration-500 ${darkMode
            ? 'bg-gray-800/80 border border-gray-700/40 shadow-2xl shadow-green-500/10'
            : 'bg-white/60 border border-blue-200/50 shadow-2xl shadow-blue-500/10'
            }`}>
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 transition-colors duration-500 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>
                We Build <span className={darkMode ? 'text-green-300' : 'text-blue-600'}>Together</span>
              </h1>
              <p className={`text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>
                A Developer Duo Crafting Digital Excellence
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Backend */}
              <div className={`backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 ${darkMode
                ? 'bg-gray-800/80 border border-gray-700/40'
                : 'bg-blue-500/10 border border-blue-300/30'
                }`}>
                <div className="flex flex-col items-center mb-4">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 overflow-hidden border-4 transition-colors duration-500 ${darkMode ? 'border-green-300/40' : 'border-blue-400/30'
                    }`}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Backend Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Server className={`w-10 h-10 md:w-12 md:h-12 ${darkMode ? 'text-green-300' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Backend Developer
                </h3>
                <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  Architecting robust server-side solutions with Laravel, Python, and PHP. Specializing in database design, API development, and scalable system architecture that powers seamless user experiences.
                </p>
              </div>

              {/* Frontend */}
              <div className={`backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 ${darkMode
                ? 'bg-gray-800/80 border border-gray-700/40'
                : 'bg-blue-500/10 border border-blue-300/30'
                }`}>
                <div className="flex flex-col items-center mb-4">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 overflow-hidden border-4 transition-colors duration-500 ${darkMode ? 'border-green-300/40' : 'border-blue-400/30'
                    }`}>
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                      alt="Frontend Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Code2 className={`w-10 h-10 md:w-12 md:h-12 ${darkMode ? 'text-green-300' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Frontend Developer
                </h3>
                <p className={`leading-relaxed text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  Creating intuitive and responsive interfaces with React.js, Vue.js, and Flutter. Bringing designs to life with pixel-perfect precision and smooth animations that users love.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                We're a collaborative development team that combines backend expertise with frontend finesse.
                Every project we tackle is a symphony of clean code, thoughtful architecture, and beautiful design.
                From concept to deployment, we work in perfect sync to deliver full-stack solutions that exceed expectations.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 md:mt-12">
              <h3 className={`text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Our Tech Arsenal
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`backdrop-blur-md rounded-lg md:rounded-xl px-3 py-2 md:px-5 md:py-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${darkMode
                      ? 'bg-gray-800/80 border border-gray-700/40 hover:bg-gray-800/90'
                      : 'bg-blue-500/10 border border-blue-300/30 hover:bg-blue-500/20'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <img src={tech.icon} alt="React" className="w-6 h-6" />
                      {/* <tech.icon className={`w-4 h-4 md:w-5 md:h-5 ${darkMode ? 'text-green-300' : 'text-blue-600'}`} /> */}
                      <span className={`font-medium text-sm md:text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
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
      <section className="px-4 md:px-6 py-0 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-16 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Our Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => openModal(project, index)}
                className={`backdrop-blur-xl rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${darkMode
                  ? 'bg-white/5 border border-white/10 shadow-xl shadow-green-300/5'
                  : 'bg-white/70 border border-blue-200/50 shadow-xl shadow-blue-500/10'
                  }`}
              >
                <div className="relative overflow-hidden h-40 md:h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${darkMode
                    ? 'bg-gradient-to-t from-gray-900/80 to-transparent'
                    : 'bg-gradient-to-t from-blue-900/50 to-transparent'
                    }`} />
                </div>

                <div className="p-4 md:p-6">
                  <h3 className={`text-lg md:text-2xl font-bold mb-2 md:mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {project.name}
                  </h3>
                  <p className={`mb-3 md:mb-4 leading-relaxed text-sm md:text-base line-clamp-3 transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full transition-colors duration-500 ${darkMode
                          ? 'bg-green-300/20 text-green-300 border border-green-200/40'
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

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl md:rounded-3xl transition-all duration-500 ${darkMode
              ? 'bg-gray-900/95 border border-green-200/40'
              : 'bg-white/95 border border-blue-200/50'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
                ? 'bg-green-300/10 border border-green-200/40 hover:bg-green-300/20 text-green-300'
                : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 text-gray-900'
                }`}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Project Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10">
              <button
                onClick={prevProject}
                className={`p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
                  ? 'bg-green-300/10 border border-green-200/40 hover:bg-green-300/20 text-green-300'
                  : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 text-gray-900'
                  }`}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10">
              <button
                onClick={nextProject}
                className={`p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
                  ? 'bg-green-300/10 border border-green-200/40 hover:bg-green-300/20 text-green-300'
                  : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 text-gray-900'
                  }`}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="p-6 md:p-8 lg:p-12">
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 pr-8 md:pr-12 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                {selectedProject.name}
              </h2>

              <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                {selectedProject.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`text-sm md:text-base px-3 md:px-4 py-1 md:py-2 rounded-full transition-colors duration-500 ${darkMode
                      ? 'bg-green-300/20 text-green-300 border border-green-200/40'
                      : 'bg-blue-500/20 text-blue-700 border border-blue-300/40'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-4">
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
                          ? 'bg-green-300/10 border border-green-200/40 hover:bg-green-300/20 text-green-300'
                          : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 text-gray-900'
                          }`}
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${darkMode
                          ? 'bg-green-300/10 border border-green-200/40 hover:bg-green-300/20 text-green-300'
                          : 'bg-blue-500/20 border border-blue-400/30 hover:bg-blue-500/30 text-gray-900'
                          }`}
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {selectedProject.screenshots.length > 1 && (
                  <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 ${currentImageIndex === index
                          ? darkMode
                            ? 'ring-2 ring-green-300 scale-105'
                            : 'ring-2 ring-blue-500 scale-105'
                          : 'opacity-50 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <p className={`text-center mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {currentImageIndex + 1} / {selectedProject.screenshots.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {/* <footer className="py-8 md:py-12 px-4 md:px-6">
        <div className={`max-w-4xl mx-auto text-center backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-500 ${darkMode
          ? 'bg-green-300/10 border border-green-200/40'
          : 'bg-blue-500/10 border border-blue-300/30'
          }`}>
          <p className={`text-base md:text-lg transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Building the future, one commit at a time.
          </p>
          <p className={`mt-2 text-sm md:text-base transition-colors duration-500 ${darkMode ? 'text-green-300' : 'text-blue-600'
            }`}>
            © 2024 Developer Duo
          </p>
        </div>
      </footer> */}
    </div>
  );
}