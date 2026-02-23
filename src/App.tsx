import { motion } from 'motion/react';
import { Terminal, Users, Zap, MessageSquare, Code } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none"></div>

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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a 
            href="https://discord.gg/x7a7WcPx6j"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Login
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center max-w-5xl mx-auto">
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
          The ultimate nexus for <span className="text-white font-medium">tech</span> enthusiasts, 
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
          
          <a 
            href="https://discord.gg/x7a7WcPx6j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium text-lg border border-white/10 transition-colors"
          >
            Explore
          </a>
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
      </main>
    </div>
  );
}
