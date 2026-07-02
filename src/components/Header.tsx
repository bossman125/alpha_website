import { Link, useLocation } from 'react-router-dom';
import { Map, Home, Info } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/map', label: 'Interactive Map', icon: Map },
  { path: '/about', label: 'About', icon: Info },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-archival-900 text-archival-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-serif text-lg sm:text-xl font-semibold tracking-tight hover:text-sepia-300 transition-colors"
            aria-label="The Hong Kong War Crimes Trials: An Interactive History — Home"
          >
            <span className="hidden sm:inline">The Hong Kong War Crimes Trials</span>
            <span className="sm:hidden">HK War Crimes Trials</span>
          </Link>

          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1 sm:gap-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={
                        'flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sepia-400 focus:ring-offset-2 focus:ring-offset-archival-900 ' +
                        (isActive
                          ? 'bg-archival-700 text-sepia-200'
                          : 'text-archival-200 hover:bg-archival-800 hover:text-white')
                      }
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
