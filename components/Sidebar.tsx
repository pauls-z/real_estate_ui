"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, ListChecks, Eye, FileText, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Listings', href: '/listings', icon: ListChecks },
  { name: 'My Watches', href: '/watches', icon: Eye },
  { name: 'Transactions', href: '/transactions', icon: FileText },
  { name: 'Statistics', href: '/statistics', icon: BarChart2 },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside className={cn(
      "bg-white text-gray-800 flex flex-col transition-all duration-300 ease-in-out relative",
      expanded ? "w-64" : "w-20"
    )}>
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <h1 className={cn(
          "text-2xl font-bold transition-opacity duration-300",
          expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
        )}>
          RealEstatePro
        </h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={cn(
                "flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200",
                pathname === item.href && "bg-gray-200 font-semibold",
                !expanded && "justify-center"
              )}>
                <item.icon className="w-6 h-6 mr-2" />
                <span className={cn(
                  "transition-opacity duration-300",
                  expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                )}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="absolute top-1/2 -right-3 bg-white border border-gray-300 rounded-full p-1 shadow-md"
      >
        {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </aside>
  );
}