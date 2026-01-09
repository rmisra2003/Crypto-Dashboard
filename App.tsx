import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Dashboard } from './components/CryptoDashboard.tsx';
import { Icons } from './components/Icons.tsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#18191d] text-slate-300 selection:bg-teal-500 selection:text-white overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#18191d] transform transition-transform duration-300 ease-in-out lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto relative">
             <Sidebar />
             <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-50"
             >
                <Icons.Close size={24} />
             </button>
        </div>
      </div>

      {/* Desktop Sidebar (Permanent) */}
      <div className="hidden lg:block h-screen sticky top-0 shrink-0">
          <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Mobile Top Header (Toggle) */}
        <div className="lg:hidden p-4 flex items-center justify-between sticky top-0 bg-[#18191d] z-30 border-b border-white/5">
             <h1 className="text-xl font-bold text-white">Wallet</h1>
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white bg-[#212429] rounded-lg shadow-md">
                <Icons.Menu size={24} />
             </button>
        </div>

        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
           <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;