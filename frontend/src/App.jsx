import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Shield, ShieldAlert, Activity, Globe, Terminal, Lock } from 'lucide-react';

function App() {
  const [attacks, setAttacks] = useState([]);
  const [stats, setStats] = useState({ total: 0, banned: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Hydra-Honey Dashboard Initializing...");

    const fetchData = async () => {
      try {
        // Backend se logs aur stats mangwana
        const [logsRes, statsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/stats/logs'),
          axios.get('http://localhost:5000/api/stats/summary')
        ]);

        setAttacks(logsRes.data);
        setStats({
          total: statsRes.data.total,
          banned: statsRes.data.banned
        });
        setLoading(false);
      } catch (err) {
        console.error("Backend connection failed!", err);
        // Connection fail hone par bhi loading band kar do taaki error dikh sake
        setLoading(false);
      }
    };

    fetchData();

    // Real-time update ke liye har 5 second mein polling
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-green-500 p-4 md:p-10 font-mono max-w-[1400px] mx-auto">
        <Terminal size={50} className="animate-bounce mb-4" />
        <p className="text-xl animate-pulse">ESTABLISHING SECURE CONNECTION...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-green-500 p-4 md:p-8 font-mono">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center border-b border-green-900/50 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-900/20 p-3 rounded-full border border-green-500/30">
            <Shield size={32} className="text-green-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white uppercase">
              Sentinel <span className="text-green-500">Vault</span>
            </h1>
            <p className="text-xs text-green-700 font-bold tracking-widest">ADVANCED HONEYPOT MONITORING v1.0</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-md border border-green-900/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xs text-zinc-300">SYSTEM: ONLINE</span>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-900/30 border border-green-900/40 p-6 rounded-xl hover:border-green-500/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <Activity className="text-zinc-500 group-hover:text-green-400 transition-colors" size={24} />
            <span className="text-[10px] bg-green-900/30 text-green-500 px-2 py-1 rounded">LIVE</span>
          </div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">Total Threats</p>
          <p className="text-4xl font-black text-white leading-none">{stats.total}</p>
        </div>

        <div className="bg-zinc-900/30 border border-red-900/40 p-6 rounded-xl hover:border-red-500/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <ShieldAlert className="text-zinc-500 group-hover:text-red-400 transition-colors" size={24} />
            <span className="text-[10px] bg-red-900/30 text-red-500 px-2 py-1 rounded">ACTIVE</span>
          </div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">IPs Banned</p>
          <p className="text-4xl font-black text-red-500 leading-none">{stats.banned}</p>
        </div>

        <div className="bg-zinc-900/30 border border-blue-900/40 p-6 rounded-xl hover:border-blue-500/50 transition-all group hidden lg:block">
          <div className="flex justify-between items-start mb-4">
            <Globe className="text-zinc-500 group-hover:text-blue-400 transition-colors" size={24} />
            <span className="text-[10px] bg-blue-900/30 text-blue-500 px-2 py-1 rounded">GLOBAL</span>
          </div>
          <p className="text-zinc-500 text-sm uppercase tracking-wider mb-1">System Integrity</p>
          <p className="text-4xl font-black text-white leading-none">98.2%</p>
        </div>
      </div>

      {/* Main Logs Table */}
      <div className="bg-zinc-900/20 border border-green-900/30 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-green-900/10 p-5 border-b border-green-900/30 flex items-center gap-2">
          <Lock size={18} className="text-green-500" />
          <h2 className="text-sm font-bold text-white uppercase tracking-widest">Real-time Attack Vector Logs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/50 text-[10px] text-zinc-500 uppercase tracking-tighter">
                <th className="p-4 border-b border-green-900/20 font-medium">Timestamp</th>
                <th className="p-4 border-b border-green-900/20 font-medium">Source IP</th>
                <th className="p-4 border-b border-green-900/20 font-medium">Method</th>
                <th className="p-4 border-b border-green-900/20 font-medium">Vector Path</th>
                <th className="p-4 border-b border-green-900/20 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {attacks.map((attack) => (
                <tr key={attack.id} className="hover:bg-green-500/5 transition-colors border-b border-green-900/10">
                  <td className="p-4 text-zinc-500 text-xs">{attack.detected_at}</td>
                  <td className="p-4 font-bold text-zinc-200">{attack.ip_address}</td>
                  <td className="p-4">
                    <span className="bg-zinc-800 text-zinc-400 px-2 py-1 rounded text-[10px] font-bold">{attack.method}</span>
                  </td>
                  <td className="p-4 text-red-400 font-semibold tracking-tight">{attack.path}</td>
                  <td className="p-4 text-right">
                    <span className="bg-red-500/10 text-red-500 border border-red-500/30 text-[10px] px-3 py-1 rounded-full font-black">
                      INTERCEPTED
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;