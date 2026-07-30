import { Network, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/8 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <Network size={18} />
            <span className="tracking-wide">Aditya Narayanan S</span>
          </div>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Built with <Heart size={12} className="text-cyan-500 fill-cyan-500" /> using React & Tailwind CSS
          </p>
          <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Aditya Narayanan S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
