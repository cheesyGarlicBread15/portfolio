import React, { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Code2,
  Database,
  Palette,
  GitBranch,
  Server,
  Smartphone,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

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
import HostingerLogo from "@/assets/logos/hostinger.svg";
import PorkbunLogo from "@/assets/logos/porkbun.svg";

import FrontendProfile from "@/assets/profiles/vianca.jpg";
import BackendProfile from "@/assets/profiles/daven.jpeg";

/**
 * Modern, gradient-leaning, mobile-responsive rewrite.
 * Design direction: C (Gradient Modern Developer Portfolio)
 * Animations: subtle only
 * Modal: not fullscreen on mobile (centered piece)
 * Team cards: stack vertically on mobile
 * Theme toggle: sticky (fixed)
 *
 * NOTE: This file preserves all of your original data/logic (projects, techStack,
 * screenshots import, modal / carousel behavior). Only classes, layout, and small
 * runtime safety checks were added to keep runtime stable (optional chaining).
 *
 * Copy/paste this file into your project (replace existing App.jsx) — no content omitted.
 */

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // apply theme class on root
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // import all screenshots (Vite import.meta.glob) - keeps your structure
  const allScreenshots = import.meta.glob(
    "@/assets/screenshots/*/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
  );

  const screenshotsByProject = {};
  Object.entries(allScreenshots).forEach(([path, url]) => {
    const match = path.match(/screenshots\/([^/]+)\//);
    if (match) {
      const projectName = match[1];
      if (!screenshotsByProject[projectName]) screenshotsByProject[projectName] = [];
      screenshotsByProject[projectName].push(url);
    }
  });

  // techStack (kept as-is)
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
    { name: "Hostinger", icon: HostingerLogo },
    { name: "Porkbun", icon: PorkbunLogo },
  ];

  // TechBadge - modern non-badge (icon + name, subtle background)
  const TechBadge = ({ techName }) => {
    const techItem = techStack.find((t) => t.name === techName);
    if (!techItem) return (
      <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/60 dark:bg-white/5 border border-transparent text-sm">
        <span>{techName}</span>
      </div>
    );

    return (
      <div
        className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200
          ${darkMode
            ? 'bg-white/5 border border-white/6'
            : 'bg-white/70 border border-white/30'
          }`}
      >
        <img src={techItem.icon} alt={techName} className="w-5 h-5" />
        <span className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{techName}</span>
      </div>
    );
  };

  // projects (preserve your data but safely access screenshot arrays with optional chaining)
  const projects = [
    {
      name: "CMUPin",
      description: "A community-powered platform for reporting and mapping hazardous events like floods, landslides, fires, and other emergencies. Users can pin incidents on an interactive map with geographical layers, share updates, and verify reports. By turning community input into actionable insights, the platform helps citizens, responders, and local authorities coordinate faster, stay aware of risks, and work together to keep everyone safe.",
      image: screenshotsByProject["project1"]?.find(img => img.includes('project1-1.png')) || (screenshotsByProject["project1"]?.[0] ?? ''),
      tech: ["Laravel", "React.js", "PostgreSQL"],
      screenshots: screenshotsByProject["project1"] || [],
      links: [
        { type: "GitHub", url: "https://github.com/cheesyGarlicBread15/cmupin.git" },
      ]
    },
    {
      name: "Cosmic Explorer",
      description: "Cosmic Explorer is a multi-platform app that lets users dive into NASA’s incredible media library. From stunning images and videos to fascinating audio clips, it brings space missions, scientific discoveries, and astronomical phenomena right to your fingertips—whether on mobile, web, or desktop.",
      image: screenshotsByProject["project2"]?.find(img => img.includes('project2-1.png')) || (screenshotsByProject["project2"]?.[0] ?? ''),
      tech: ["Flutter", "Dart", "Firebase", "Supabase"],
      screenshots: screenshotsByProject["project2"] || [],
      links: [
        { type: "Website", url: "https://cosmic-explorer-f4ca2.web.app/" },
        { type: "GitHub", url: "https://github.com/cheesyGarlicBread15/cosmic-explorer.git" }
      ]
    },
    {
      name: "SafeAssist",
      description: "SafeAssist is a safety app made for delivery drivers. It gives quick access to police, hospitals, and auto repair services, while also letting drivers send emergency alerts to authorities and their company. Designed for peace of mind on the road, SafeAssist helps drivers stay safe, respond quickly to incidents, and navigate their routes with confidence.",
      image: screenshotsByProject["project3"]?.find(img => img.includes('project3-1.png')) || (screenshotsByProject["project3"]?.[0] ?? ''),
      tech: ["Figma", "Canva"],
      screenshots: screenshotsByProject["project3"] || [],
    },
    {
      name: "CSCo",
      description: "CSCo is the official landing page for the student council of the College of Information Sciences and Computing at Central Mindanao University. Designed to showcase updates, events, and initiatives from the council, the site serves as a hub for students to stay connected and informed. Currently under construction, CSCo will soon provide a modern, user-friendly space for the college community to engage with their student leaders and access important information.",
      image: screenshotsByProject["project4"]?.find(img => img.includes('project4-1.png')) || (screenshotsByProject["project4"]?.[0] ?? ''),
      tech: ["React.js", "Hostinger"],
      screenshots: screenshotsByProject["project4"] || [],
      links: [
        { type: "Website", url: "https://csco.space" },
        { type: "GitHub", url: "https://github.com/cheesyGarlicBread15/csco_space.git" }
      ]
    },
    {
      name: "Memoir",
      description: "Memoir is a personal gallery for photos and poetry, perfect for anyone who wants to capture and cherish their moments. It organizes selfies, portraits, and written pieces in a clean, mobile-friendly layout, making it easy to browse, upload, and preserve memories. Memoir is simple, beautiful, and designed to help users express themselves creatively.",
      image: screenshotsByProject["project5"]?.find(img => img.includes('project5-1.png')) || (screenshotsByProject["project5"]?.[0] ?? ''),
      tech: ["Figma"],
      screenshots: screenshotsByProject["project5"] || [],
    },
  ];

  // modal & carousel helpers
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
    if (!selectedProject) return;
    const nextIndex = (selectedProject.index + 1) % projects.length;
    setSelectedProject({ ...projects[nextIndex], index: nextIndex });
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const prevIndex = (selectedProject.index - 1 + projects.length) % projects.length;
    setSelectedProject({ ...projects[prevIndex], index: prevIndex });
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    if ((selectedProject.screenshots || []).length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    if ((selectedProject.screenshots || []).length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
  };

  // small helper for accent gradient (modern gradient)
  const accentFrom = 'from-purple-500';
  const accentTo = 'to-cyan-400';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>

      {/* Sticky Theme Toggle (STICKY requested) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg border transition-transform duration-200 hover:scale-105 focus:outline-none
          ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
      >
        {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-600" />}
      </button>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-6xl">
          <div
            className={`relative overflow-hidden rounded-xl md:rounded-2xl p-6 md:p-12 shadow-md transition-all duration-300
              ${darkMode ? 'bg-opacity-40 bg-gradient-to-br from-black/40 to-gray-900/40' : `bg-gradient-to-br ${accentFrom} ${accentTo} bg-opacity-10`}`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                We Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Together</span>
              </h1>
              <p className={`text-base md:text-lg mb-8 opacity-90 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A Developer Duo Crafting Digital Excellence — full stack solutions with clean code, scalable architecture, and elegant interfaces.
              </p>

              {/* TEAM CARDS - stack vertically on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Backend */}
                <div className={`rounded-xl p-4 md:p-6 transition-shadow duration-200 ${darkMode ? 'bg-gray-900/60 border border-gray-800' : 'bg-white/75 border border-white/60'}`}>
                  <div className="flex flex-col items-center md:items-start gap-4 md:flex-row">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                      <img src={BackendProfile} alt="Backend Developer" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg md:text-xl font-semibold">Backend Developer</h3>
                      <p className="text-sm md:text-base opacity-90 mt-1">
                        Architecting robust server-side solutions with Laravel, Python, and PHP. Specializing in database design, API development, and scalable system architecture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Frontend */}
                <div className={`rounded-xl p-4 md:p-6 transition-shadow duration-200 ${darkMode ? 'bg-gray-900/60 border border-gray-800' : 'bg-white/75 border border-white/60'}`}>
                  <div className="flex flex-col items-center md:items-start gap-4 md:flex-row">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                      <img src={FrontendProfile} alt="Frontend Developer" className="w-full h-full object-cover scale-105" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg md:text-xl font-semibold">Frontend Developer</h3>
                      <p className="text-sm md:text-base opacity-90 mt-1">
                        Creating intuitive and responsive interfaces with React.js, Vue.js, and Flutter. Pixel-perfect UI and smooth animations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm md:text-base opacity-90 text-center">
                We're a collaborative development team that combines backend expertise with frontend finesse. From concept to deployment — full-stack excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Our Tech Stack</h2>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>Logos shown in their real colors where available.</p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-transform duration-150 hover:-translate-y-1
                  ${darkMode ? 'bg-white/3 border border-white/6' : 'bg-white/90 border border-gray-100'}`}
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <span className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                onClick={() => openModal(project, index)}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transform transition-all duration-200 cursor-pointer
                  ${darkMode ? 'bg-gray-900/60 border border-gray-800' : 'bg-white/95 border border-gray-100'}`}
              >
                <div className="relative w-full bg-gray-100 dark:bg-gray-800 h-48 flex items-center justify-center">
                  {/* project cover image — object-contain to avoid cropping */}
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="max-h-full max-w-full object-contain p-4" />
                  ) : (
                    <div className="text-sm text-gray-500">No preview available</div>
                  )}
                  <div className={`absolute inset-0 pointer-events-none ${darkMode ? '' : ''}`} />
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{project.name}</h3>
                  <p className={`text-sm md:text-base mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <TechBadge key={i} techName={t} />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-4 md:p-6 z-10
              ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white/95 border border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-150 focus:outline-none
                ${darkMode ? 'bg-white/5 border border-white/6 text-gray-100' : 'bg-white border border-gray-100 text-gray-700 shadow'}`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* project nav */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
              <button
                onClick={prevProject}
                className={`p-2 rounded-full transition-transform duration-150 ${darkMode ? 'bg-white/5 border border-white/6' : 'bg-white border border-gray-100'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20">
              <button
                onClick={nextProject}
                className={`p-2 rounded-full transition-transform duration-150 ${darkMode ? 'bg-white/5 border border-white/6' : 'bg-white border border-gray-100'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* content */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-bold">{selectedProject.name}</h2>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{selectedProject.description}</p>

              {/* tech list (icons inline) */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-lg border bg-white/5">
                    {(() => {
                      const item = techStack.find(x => x.name === t);
                      return item ? <img src={item.icon} alt={t} className="w-5 h-5" /> : null;
                    })()}
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>

              {/* links — modern card-like */}
              {(selectedProject.links || []).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(selectedProject.links || []).map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-transform duration-150 hover:-translate-y-1
                        ${darkMode ? 'bg-white/5 border border-white/6' : 'bg-white border border-gray-100'}`}
                    >
                      <span className={`font-medium ${darkMode ? 'text-green-300' : 'text-blue-600'}`}>{link.type}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${darkMode ? 'text-green-300' : 'text-blue-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7M10 14L21 3M21 14v7H3V3h7" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}

              {/* image carousel */}
              <div className="space-y-3">
                <div
                  className={`relative w-full rounded-lg overflow-hidden border ${darkMode ? 'border-white/6' : 'border-gray-100'} bg-gray-50 dark:bg-gray-800`}
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* center the image with object-contain to avoid cropping */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
                    <img
                      src={selectedProject.screenshots[currentImageIndex]}
                      alt={`Screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 p-2"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                      No screenshots available
                    </div>
                  )}

                  {/* carousel arrows */}
                  {(selectedProject.screenshots || []).length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5' : 'bg-white/90'}`}
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5' : 'bg-white/90'}`}
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* thumbnails */}
                {(selectedProject.screenshots || []).length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border transition-transform duration-150
                          ${i === currentImageIndex ? 'scale-105 ring-2 ring-offset-1' : 'opacity-75 hover:opacity-100'}`}
                        aria-label={`Go to screenshot ${i + 1}`}
                      >
                        <img src={s} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                <p className="text-center text-xs md:text-sm text-gray-400">
                  {((selectedProject.screenshots || []).length ? (currentImageIndex + 1) : 0)} / {(selectedProject.screenshots || []).length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
