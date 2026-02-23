import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Users, Zap, MessageSquare, Code, Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [showExplore, setShowExplore] = useState(false);
  const [activeTab, setActiveTab] = useState<'linux' | 'windows'>('linux');

  const linuxDistros = [
    { name: 'Void Linux', url: 'https://voidlinux.org/download/' },
    { name: 'NixOS', url: 'https://nixos.org/download/' },
    { name: 'Arch Linux', url: 'https://archlinux.org/download/' },
    { name: 'LMDE', url: 'https://linuxmint.com/download_lmde.php' },
    { name: 'Linux Mint', url: 'https://linuxmint.com/download.php' },
    { name: 'Debian', url: 'https://www.debian.org/' },
    { name: 'Fedora', url: 'https://fedoraproject.org/' },
    { name: 'Rocky Linux', url: 'https://rockylinux.org/download' },
    { name: 'Ubuntu', url: 'https://ubuntu.com/#download-ubuntu' },
    { name: 'CachyOS', url: 'https://cachyos.org/download/' }
  ];

  const windowsIsos = [
    { name: 'Windows X-Lite', url: 'https://windowsxlite.com/downloads/' },
    { name: 'KernelOS', url: 'https://kernelos.org/#downloads' },
    { name: 'Windows 11 LTSC', url: 'https://buzzheavier.com/2gtemvaqgfm3' },
    { name: 'Windows 10 LTSC', url: 'https://buzzheavier.com/yhggy3l1e5oq' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <Terminal className="w-6 h-6 text-indigo-400" />
          <span>VCTA</span>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center max-w-5xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System Online
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 leading-[0.9]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
            VCTA
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light"
        >
          The ultimate community for <span className="text-white font-medium">tech</span> enthusiasts, 
          <span className="text-white font-medium"> developers</span>, and late-night 
          <span className="text-white font-medium"> hangouts</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a 
            href="https://discord.gg/x7a7WcPx6j"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <MessageSquare className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Join the Server</span>
          </a>
          
          <button 
            onClick={() => {
              setShowExplore(!showExplore);
              if (!showExplore) {
                setTimeout(() => {
                  document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium text-lg border border-white/10 transition-colors"
          >
            Explore <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showExplore ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Code, label: "Coding" },
            { icon: Zap, label: "Tech News" },
            { icon: Users, label: "Community" },
            { icon: MessageSquare, label: "Voice Chats" }
          ].map((feature, i) => (
            <div key={i} className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/5 border border-white/5 text-sm text-gray-300">
              <feature.icon className="w-4 h-4 text-indigo-400" />
              {feature.label}
            </div>
          ))}
        </motion.div>

        {/* Explore Section */}
        <AnimatePresence>
          {showExplore && (
            <motion.div
              id="explore-section"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 80 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="w-full max-w-4xl mx-auto overflow-hidden"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md text-left">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
                  <h2 className="text-2xl font-bold tracking-tight">Downloads & Resources</h2>
                  <div className="flex bg-black/40 p-1 rounded-full border border-white/5">
                    <button
                      onClick={() => setActiveTab('linux')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTab === 'linux' 
                          ? 'bg-indigo-600 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      Linux Distros
                    </button>
                    <button
                      onClick={() => setActiveTab('windows')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTab === 'windows' 
                          ? 'bg-indigo-600 text-white' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      Windows ISOs
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence mode="wait">
                    {activeTab === 'linux' ? (
                      <motion.div
                        key="linux"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                      >
                        {linuxDistros.map((distro, i) => (
                          <a
                            key={i}
                            href={distro.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all group"
                          >
                            <span className="font-medium text-gray-200 group-hover:text-white">{distro.name}</span>
                            <Download className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                          </a>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="windows"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {windowsIsos.map((iso, i) => (
                          <a
                            key={i}
                            href={iso.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all group"
                          >
                            <span className="font-medium text-gray-200 group-hover:text-white">{iso.name}</span>
                            <Download className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400">
                    For more resources and discussions,{' '}
                    <a href="https://discord.gg/x7a7WcPx6j" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4">
                      join our Discord server!
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
