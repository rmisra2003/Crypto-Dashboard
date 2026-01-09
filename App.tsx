import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/CryptoDashboard';
import { Icons } from './components/Icons';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#18191d] text-slate-300 selection:bg-teal-500 selection:text-white">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Wrapper */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#18191d] transform transition-transform duration-300 lg:relative lg:translate-x-0 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
             <Sidebar />
             <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
             >
                <Icons.Close size={24} />
             </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-screen sticky top-0">
          <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Header Toggle */}
        <div className="lg:hidden p-4 flex items-center justify-between sticky top-0 bg-[#18191d] z-30 border-b border-white/5">
             <h1 className="text-xl font-bold text-white">Wallet</h1>
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white">
                <Icons.Menu size={24} />
             </button>
        </div>

        <div className="flex-1 overflow-y-auto scroll-smooth">
           <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;