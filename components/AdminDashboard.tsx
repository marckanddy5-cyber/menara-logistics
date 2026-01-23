
import React, { useState } from 'react';
import { Language } from '../types';

interface AdminDashboardProps {
  lang: Language;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deliveries' | 'merchants'>('overview');

  const stats = [
    { label: 'Active Deliveries', value: '142', trend: '+12%', color: 'blue' },
    { label: 'COD Collected (Today)', value: '12,450 DH', trend: '+5%', color: 'green' },
    { label: 'Pending Remittance', value: '8,200 DH', trend: '-2%', color: 'orange' },
    { label: 'Customer Satisfaction', value: '98.4%', trend: '0%', color: 'navy' },
  ];

  const recentDeliveries = [
    { id: 'ML-9921', merchant: 'Zora Fashion', status: 'Delivered', value: '450 DH' },
    { id: 'ML-9922', merchant: 'Atlas Spices', status: 'In Transit', value: '1,200 DH' },
    { id: 'ML-9923', merchant: 'Marrakech Crafts', status: 'Pending', value: '890 DH' },
  ];

  return (
    <div className="fixed inset-0 z-[110] bg-gray-100 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
      {/* Sidebar / Topbar for Admin */}
      <div className="bg-[#0f172a] text-white p-6 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-menara-orange rounded-lg flex items-center justify-center font-black">ADM</div>
          <div>
            <h2 className="font-black text-xl leading-none">ADMIN CONTROL CENTER</h2>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Menara Logistics HQ</p>
          </div>
        </div>
        <button onClick={onClose} className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 p-6 space-y-2 hidden md:block">
          {['overview', 'deliveries', 'merchants'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${
                activeTab === tab ? 'bg-menara-orange text-white' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">{s.label}</p>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-black text-navy">{s.value}</span>
                      <span className={`text-xs font-bold ${s.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {s.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Area */}
              <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="font-black text-navy uppercase tracking-widest">Recent Activity</h3>
                  <button className="text-menara-orange text-xs font-black hover:underline">VIEW ALL</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Merchant</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Value</th>
                        <th className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {recentDeliveries.map((d, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-navy">{d.id}</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">{d.merchant}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                              d.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                              d.status === 'In Transit' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                            }`}>
                              {d.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-black text-navy">{d.value}</td>
                          <td className="px-6 py-4">
                            <button className="text-gray-400 hover:text-menara-orange transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== 'overview' && (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-navy uppercase tracking-widest">Section Coming Soon</h3>
                <p className="text-gray-500">Full control over {activeTab} is being synchronized.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
