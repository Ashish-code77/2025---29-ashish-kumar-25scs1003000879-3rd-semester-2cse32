import React, { useState, useEffect } from 'react';
import { CASE_STUDY } from './data';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  Navigation, 
  Package, 
  Smartphone, 
  Users, 
  Search, 
  CheckCircle,
  Lightbulb,
  Crosshair,
  User,
  Heart,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle smooth scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'research', 'personas', 'flow', 'wireframes', 'process'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'intro', label: 'Overview', icon: <Search className="w-4 h-4 mr-2" /> },
    { id: 'research', label: 'User Research', icon: <CheckCircle className="w-4 h-4 mr-2" /> },
    { id: 'personas', label: 'Personas', icon: <Users className="w-4 h-4 mr-2" /> },
    { id: 'flow', label: 'User Flow', icon: <Navigation className="w-4 h-4 mr-2" /> },
    { id: 'wireframes', label: 'Wireframes', icon: <Smartphone className="w-4 h-4 mr-2" /> },
    { id: 'process', label: 'Design Process', icon: <Lightbulb className="w-4 h-4 mr-2" /> }
  ];

  return (
    <div className="flex min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-blue-200">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 z-50">
        <div className="font-bold text-xl tracking-tight text-blue-600">{CASE_STUDY.title}</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-stone-600">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-stone-200 p-6 flex flex-col
        transition-transform duration-300 z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="hidden lg:block mb-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-blue-600 mb-1">{CASE_STUDY.title}</h1>
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wider">UX Case Study</p>
        </div>
        
        <div className="flex-1 space-y-1 mt-16 lg:mt-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                ${activeSection === item.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-24 lg:py-16">
        
        {/* Intro Section */}
        <section id="intro" className="mb-24 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs font-semibold tracking-wide uppercase mb-6">
            App Concept
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-6 leading-tight">
            {CASE_STUDY.tagline}
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            {CASE_STUDY.overview}
          </p>
        </section>

        {/* 1. Research Section */}
        <section id="research" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-bold border-b border-stone-200 pb-4 mb-8 flex items-center">
            <span className="bg-stone-900 text-white w-8 h-8 inline-flex items-center justify-center rounded-full text-sm mr-3">1</span>
            Basic User Research
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="flex items-center text-lg font-bold mb-4 text-emerald-700">
                <Target className="w-5 h-5 mr-2" /> Core User Needs
              </h4>
              <ul className="space-y-4">
                {CASE_STUDY.research.needs.map((need, i) => (
                  <li key={i} className="flex items-start text-stone-600">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h4 className="flex items-center text-lg font-bold mb-4 text-rose-700">
                <AlertCircle className="w-5 h-5 mr-2" /> Major Pain Points
              </h4>
              <ul className="space-y-4">
                {CASE_STUDY.research.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start text-stone-600">
                    <XCircle className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">Project Goals</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-blue-900 mb-1">Primary User Goal</p>
                <p className="text-blue-800 text-sm leading-relaxed">{CASE_STUDY.research.goals.user}</p>
              </div>
              <div>
                <p className="font-semibold text-blue-900 mb-1">Primary Business Goal</p>
                <p className="text-blue-800 text-sm leading-relaxed">{CASE_STUDY.research.goals.business}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Personas Section */}
        <section id="personas" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-bold border-b border-stone-200 pb-4 mb-8 flex items-center">
            <span className="bg-stone-900 text-white w-8 h-8 inline-flex items-center justify-center rounded-full text-sm mr-3">2</span>
            User Personas
          </h3>

          <div className="space-y-8">
            {CASE_STUDY.personas.map((persona, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                {/* Persona Header / Avatar Side */}
                <div className="bg-stone-900 text-stone-50 p-8 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10">
                    {persona.imageType === 'business' ? <Briefcase className="w-48 h-48 -mr-10 -mt-10" /> : <Heart className="w-48 h-48 -mr-10 -mt-10" />}
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{persona.name}</h4>
                  <p className="text-stone-400 font-medium mb-4">{persona.role} • {persona.age}</p>
                  <p className="text-sm text-stone-300 flex items-center mb-6">
                    <MapPin className="w-4 h-4 mr-2 opacity-75" /> {persona.location}
                  </p>
                  <div className="italic text-sm text-stone-300 border-l-2 border-blue-500 pl-4 py-1">
                    "{persona.quote}"
                  </div>
                </div>
                
                {/* Persona Details Side */}
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Context</h5>
                    <p className="text-stone-700 leading-relaxed">{persona.context}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3 flex items-center">
                        <Crosshair className="w-3 h-3 mr-1" /> Goals
                      </h5>
                      <ul className="space-y-2">
                        {persona.goals.map((g, i) => (
                          <li key={i} className="text-sm text-stone-600 flex items-start">
                            <span className="text-emerald-500 mr-2 mt-0.5">•</span> {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-3 flex items-center">
                        <XCircle className="w-3 h-3 mr-1" /> Frustrations
                      </h5>
                      <ul className="space-y-2">
                        {persona.frustrations.map((f, i) => (
                          <li key={i} className="text-sm text-stone-600 flex items-start">
                            <span className="text-rose-500 mr-2 mt-0.5">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. User Flow Section */}
        <section id="flow" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-bold border-b border-stone-200 pb-4 mb-8 flex items-center">
            <span className="bg-stone-900 text-white w-8 h-8 inline-flex items-center justify-center rounded-full text-sm mr-3">3</span>
            User Flow
          </h3>
          <p className="font-semibold text-lg text-stone-800 mb-8">{CASE_STUDY.userFlow.happyPathTitle}</p>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100"></div>
            
            <div className="space-y-8 relative">
              {CASE_STUDY.userFlow.steps.map((step, idx) => (
                <div key={idx} className="flex">
                  <div className="flex flex-col items-center mr-6 z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md ring-4 ring-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex-1 mt-1 hover:border-blue-300 transition-colors">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h4>
                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Wireframes Section */}
        <section id="wireframes" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-bold border-b border-stone-200 pb-4 mb-8 flex items-center">
            <span className="bg-stone-900 text-white w-8 h-8 inline-flex items-center justify-center rounded-full text-sm mr-3">4</span>
            Wireframe Blueprint
          </h3>
          <p className="text-stone-600 mb-8 leading-relaxed max-w-2xl">
            Low-fidelity structural layouts defining the exact UI elements from top to bottom for the core happy path screens.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDY.wireframes.map((screen, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 shadow-sm p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{screen.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{screen.description}</p>
                </div>
                
                {/* Structural Mockup */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 flex-1">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-stone-300 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    {screen.elements.map((el, i) => (
                      <div key={i} className="bg-white px-4 py-3 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 shadow-sm flex items-center">
                        <ChevronRight className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                        <span className="leading-snug">{el}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Process Section */}
        <section id="process" className="mb-24 scroll-mt-20">
          <h3 className="text-2xl font-bold border-b border-stone-200 pb-4 mb-8 flex items-center">
            <span className="bg-stone-900 text-white w-8 h-8 inline-flex items-center justify-center rounded-full text-sm mr-3">5</span>
            Design Thinking Process
          </h3>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 flex items-center relative z-10">
                1. Empathize
              </h4>
              <p className="text-stone-600 leading-relaxed relative z-10 max-w-2xl">{CASE_STUDY.process.empathize}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Crosshair className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 flex items-center relative z-10">
                2. Define
              </h4>
              <p className="text-stone-600 leading-relaxed relative z-10 max-w-2xl">{CASE_STUDY.process.define}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Lightbulb className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 flex items-center relative z-10">
                3. Ideate
              </h4>
              <p className="text-stone-600 leading-relaxed relative z-10 max-w-2xl">{CASE_STUDY.process.ideate}</p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-stone-200 pt-8 pb-12 flex items-center justify-between">
           <p className="text-sm font-medium text-stone-500">Case Study Generated Documentation</p>
           <p className="text-sm font-bold text-blue-600">{CASE_STUDY.title}</p>
        </footer>

      </main>
    </div>
  );
}

// Icons not imported initially
function Target(props: any) {
  return <Crosshair {...props} />
}
function AlertCircle(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
}
function XCircle(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
}
