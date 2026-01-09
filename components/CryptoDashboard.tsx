import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Icons } from './Icons';

// --- Types ---
interface CryptoCardProps {
  name: string;
  price: string;
  change: string;
  iconColor: string;
  iconBg: string;
  chartColor: string;
  IconComponent: React.ElementType | string;
}

// --- Data ---
const chartData = [
  { name: 'Mon', value: 300 },
  { name: 'Tue', value: 450 },
  { name: 'Wed', value: 825 },
  { name: 'Thu', value: 400 },
  { name: 'Fri', value: 789 },
  { name: 'Sat', value: 2954 },
  { name: 'Sun', value: 2100 },
];

const transactions = [
  { id: 1, name: 'Bitcoin', time: '10:42:23 AM', amount: '+1545.00', status: 'Completed', type: 'in' },
  { id: 2, name: 'Ethereum', time: '12:30:45 PM', amount: '-432.50', status: 'Completed', type: 'out' },
  { id: 3, name: 'Litecoin', time: '02:15:10 PM', amount: '+890.00', status: 'Pending', type: 'in' },
];

const sellOrderData = [
  { price: '89.03', amount: '0.15', total: '$126.00' },
  { price: '94.02', amount: '0.18', total: '$126.00' },
  { price: '92.06', amount: '0.22', total: '$252.00', active: true },
  { price: '95.20', amount: '0.26', total: '$176.00' },
  { price: '95.30', amount: '0.31', total: '$226.00' },
  { price: '92.01', amount: '0.35', total: '$2326.00' },
  { price: '97.34', amount: '0.53', total: '$2243.00' },
];


// --- Sub Components ---

const CryptoCard: React.FC<CryptoCardProps> = ({ name, price, change, iconColor, iconBg, chartColor, IconComponent }) => (
  <div className="relative p-6 rounded-[30px] bg-[#212429] border-t border-white/5 shadow-[15px_15px_30px_#141519,-10px_-10px_30px_#2e3238] flex flex-col justify-between overflow-hidden min-h-[160px] group hover:scale-[1.02] transition-transform duration-300">
    <div className="flex justify-between items-start z-10">
      <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center shadow-inner`}>
        {typeof IconComponent === 'string' ? (
             <span className={`font-bold text-xl ${iconColor}`}>{IconComponent}</span>
        ) : (
            // @ts-ignore
            <IconComponent size={24} className={iconColor} />
        )}
      </div>
      <Icons.More size={20} className="text-gray-500 cursor-pointer hover:text-white" />
    </div>
    
    <div className="z-10 mt-4">
      <h3 className="text-3xl font-bold text-white mb-1">{price}</h3>
      <p className="text-gray-500 text-sm font-medium">
        <span className={change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{change.split(' ')[0]}</span> 
        <span className="opacity-70"> {change.split(' ').slice(1).join(' ')}</span>
      </p>
    </div>

    {/* Decorative mini wave */}
    <svg className="absolute bottom-4 right-4 w-24 h-12 opacity-80" viewBox="0 0 100 50">
        <path d="M0 40 Q 25 20, 50 40 T 100 20" fill="none" stroke={chartColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
    
    {/* Glow effect */}
    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-10 ${iconBg.replace('bg-', 'bg-')}`}></div>
  </div>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#18191d] border border-white/10 p-2 rounded-xl shadow-xl">
        <p className="text-white font-bold text-sm">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.value === 2954) { // Highlight peak
        return (
            <g>
                <circle cx={cx} cy={cy} r={8} fill="#18191d" stroke="white" strokeWidth={3} />
                <rect x={cx - 30} y={cy - 45} width="60" height="30" rx="8" fill="#18191d" className="shadow-xl" />
                <text x={cx} y={cy - 25} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$2954</text>
            </g>
        );
    }
    return <circle cx={cx} cy={cy} r={6} fill="#18191d" stroke="white" strokeWidth={2} />;
};

export const Dashboard: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
           {/* Search Bar */}
           <div className="relative flex-1 md:flex-none">
             <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
             <input 
                type="text" 
                placeholder="Search" 
                className="w-full md:w-64 bg-[#18191d] border border-white/5 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700 shadow-inner"
             />
           </div>

           {/* Top Actions */}
           <div className="flex gap-2">
             <button className="p-2.5 rounded-full bg-[#212429] hover:bg-[#2c3036] text-gray-400 hover:text-white transition-colors">
                <Icons.Chat size={18} />
             </button>
             <button className="p-2.5 rounded-full bg-[#212429] hover:bg-[#2c3036] text-gray-400 hover:text-white transition-colors">
                <Icons.Gift size={18} />
             </button>
             <button className="p-2.5 rounded-full bg-[#212429] hover:bg-[#2c3036] text-gray-400 hover:text-white transition-colors">
                <Icons.Setting size={18} />
             </button>
           </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Main Content Column */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          
          {/* Crypto Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CryptoCard 
                name="Bitcoin" 
                price="$1200" 
                change="+45% This week" 
                iconBg="bg-gradient-to-br from-orange-400 to-yellow-600" 
                iconColor="text-white"
                chartColor="#f59e0b"
                IconComponent={({className, size}: any) => <span className={`font-bold ${className}`} style={{fontSize: size}}>₿</span>}
            />
            <CryptoCard 
                name="Ethereum" 
                price="$232,40" 
                change="35% This week" 
                iconBg="bg-gradient-to-br from-teal-400 to-green-600" 
                iconColor="text-white"
                chartColor="#10b981"
                IconComponent={({className, size}: any) => <svg viewBox="0 0 32 32" className={className} width={size} height={size} fill="currentColor"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378 7.502-10.379z"/></svg>}
            />
            <CryptoCard 
                name="Near" 
                price="600" 
                change="21% This week" 
                iconBg="bg-gradient-to-br from-red-400 to-pink-600" 
                iconColor="text-white"
                chartColor="#ec4899"
                IconComponent="N"
            />
          </div>

          {/* Market Overview Chart */}
          <div className="p-6 md:p-8 rounded-[30px] bg-[#212429] border-t border-white/5 shadow-[15px_15px_30px_#141519,-10px_-10px_30px_#2e3238] relative">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-xl font-bold text-white">Market Overview</h2>
                <p className="text-gray-500 text-sm mt-1">Prices value updates</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#18191d] border border-white/5 text-gray-300 text-sm hover:text-white transition-colors">
                Weekly (2020) <Icons.ArrowDown size={14} className="ml-1" />
              </button>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#9ca3af" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2e3238" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontSize: 12 }} 
                    dy={20}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6b7280', fontSize: 12 }} 
                    dx={-10}
                    tickFormatter={(value) => `${value >= 1000 ? value/1000 + 'K' : value}`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#9ca3af" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    dot={<CustomDot />}
                    activeDot={{ r: 8, fill: '#18191d', stroke: 'white', strokeWidth: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="p-6 md:p-8 rounded-[30px] bg-[#212429] border-t border-white/5 shadow-[15px_15px_30px_#141519,-10px_-10px_30px_#2e3238]">
             <h2 className="text-xl font-bold text-white mb-6">Recent Activities</h2>
             <div className="space-y-4">
                {transactions.map((tx) => (
                    <div key={tx.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4 mb-2 md:mb-0">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-[#18191d] text-gray-400' : 'bg-[#18191d] text-gray-400'}`}>
                                {tx.type === 'in' ? <Icons.ArrowDown size={18} /> : <Icons.ArrowUp size={18} />}
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{tx.name}</h4>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm md:text-center w-full md:w-auto">{tx.time}</div>
                        <div className={`font-bold ${tx.amount.startsWith('+') ? 'text-white' : 'text-white'}`}>{tx.amount}</div>
                        <div className="text-gray-500 text-sm text-right">{tx.status}</div>
                    </div>
                ))}
             </div>
          </div>

        </div>

        {/* Right Sidebar / Sell Order Panel */}
        <div className="w-full xl:w-[350px] shrink-0">
            {/* Header with Filters for Dashboard (Hidden on Mobile/Tablet in typical layout, but placed here for replication) */}
            {/* Note: The image has "Filters" on the dashboard header. The Sell Order is a separate floating card. */}
            
            <div className="sticky top-8">
                {/* Sell Order Card */}
                <div className="p-6 rounded-[30px] bg-[#212429] border-t border-white/5 shadow-[20px_20px_60px_#101114,-10px_-10px_30px_#2e3238] relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-white">Sell Order</h2>
                        <Icons.More size={20} className="text-gray-500 cursor-pointer" />
                    </div>

                    <div role="table" aria-label="Sell orders">
                        <div role="row" className="grid grid-cols-3 gap-4 mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                            <div role="columnheader" className="text-left">Price</div>
                            <div role="columnheader" className="text-center">Amount</div>
                            <div role="columnheader" className="text-right">Total</div>
                        </div>

                        <div role="rowgroup" className="space-y-2">
                            {sellOrderData.map((order, idx) => (
                                <div 
                                    key={idx} 
                                    role="row"
                                    className={`grid grid-cols-3 gap-4 p-3 rounded-xl items-center transition-transform duration-200 cursor-pointer ${
                                        order.active 
                                        ? 'bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg scale-105 z-10' 
                                        : 'hover:bg-white/5 text-gray-400'
                                    }`}
                                >
                                    <div role="cell" className={`text-left font-medium ${order.active ? 'text-white' : ''}`}>{order.price}</div>
                                    <div role="cell" className={`text-center font-medium ${order.active ? 'text-white' : ''}`}>{order.amount}</div>
                                    <div role="cell" className="text-right">
                                        <button 
                                            type="button"
                                            className={`font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1 -mr-1 w-full text-right ${order.active ? 'text-white' : 'hover:text-teal-400'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopy(order.total, idx);
                                            }}
                                            title="Click to copy total"
                                            aria-label={`Copy total amount ${order.total}`}
                                        >
                                            {copiedIndex === idx ? (
                                                <span className={`text-xs font-bold animate-pulse ${order.active ? 'text-white' : 'text-teal-400'}`}>Copied!</span>
                                            ) : (
                                                order.total
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Action Buttons for Mobile Context (Optional) */}
            </div>
        </div>

      </div>
    </div>
  );
};