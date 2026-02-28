import { Outlet, Link } from 'react-router-dom';
import { Moon } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 md:px-8 flex items-center justify-between border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 group">
          <Moon className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
          <h1 className="font-serif text-xl md:text-2xl font-medium tracking-wide gold-text">
            Aura Mystic
          </h1>
        </Link>
        <nav className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium tracking-wider uppercase text-slate-300">
          <Link to="/" className="hover:text-gold-400 transition-colors">Trang chủ</Link>
          <Link to="/about" className="hover:text-gold-400 transition-colors">Về chúng tôi</Link>
        </nav>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Outlet />
      </main>

      <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/5 mt-auto">
        <p>© 2026 Aura Mystic. Nơi giao thoa của những vì sao và vận mệnh.</p>
      </footer>
    </div>
  );
}
