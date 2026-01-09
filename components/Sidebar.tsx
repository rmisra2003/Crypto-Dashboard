import React from 'react';
import { Icons } from './Icons';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Dashboard', icon: Icons.Dashboard, active: true },
    { name: 'My Wallet', icon: Icons.Wallet, active: false },
    { name: 'Transaction', icon: Icons.Transaction, active: false },
    { name: 'Crypto', icon: Icons.Crypto, active: false },
    { name: 'Exchange', icon: Icons.Exchange, active: false },
    { name: 'Setting', icon: Icons.Setting, active: false },
  ];

  return (
    <aside className="w-72 bg-[#18191d] flex flex-col p-6 hidden lg:flex sticky top-0 h-screen overflow-y-auto border-r border-white/5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="relative">
          <h1 className="text-2xl font-bold text-white tracking-wide">Wallet</h1>
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-full bg-[#212429] p-1 shadow-[5px_5px_10px_#101114,-5px_-5px_10px_#2c3036] mb-4 relative">
            <img 
              src="https://picsum.photos/200" 
              alt="Sam" 
              className="w-full h-full rounded-full object-cover"
            />
        </div>
        <h2 className="text-white text-lg font-bold">Sam</h2>
        <p className="text-gray-500 text-sm font-medium">Product Designer</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 cursor-pointer relative ${
              item.active 
                ? 'text-white font-semibold' 
                : 'text-gray-500 hover:text-white'
            }`}
          >
            {item.active && (
              <div className="absolute left-0 w-1 h-8 bg-green-500 rounded-r-full shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            )}
            <item.icon size={20} className={item.active ? 'text-white' : 'text-gray-500 group-hover:text-white'} />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Bottom Card */}
      <div className="mt-8 p-5 rounded-[30px] bg-gradient-to-br from-[#212429] to-[#1a1c20] border-t border-white/5 shadow-[10px_10px_20px_#101114,-5px_-5px_15px_#2c3036] relative overflow-hidden group cursor-pointer">
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-green-500/20" />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-[#18191d] flex items-center justify-center border border-white/5">
             <Icons.Clock size={18} className="text-gray-300" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">History available</h3>
            <p className="text-gray-500 text-xs mt-1">Check your weekly transaction reports</p>
          </div>
        </div>
      </div>
    </aside>
  );
};