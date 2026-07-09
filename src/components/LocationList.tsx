import { Link } from 'react-router-dom';
import { Site } from '../types/site';
import { MapPin } from 'lucide-react';

interface LocationListProps {
  sites: Site[];
}

export function LocationList({ sites }: LocationListProps) {
  return (
    <nav aria-label="Location list">
      <h3 className="font-serif text-lg font-semibold text-archival-900 mb-3">
        Locations
      </h3>
      <ul className="space-y-2">
        {sites.map((site) => (
          <li key={site.id}>
            <Link
              to={`/map/${site.id}`}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors focus:outline-none focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 bg-white border border-archival-200 text-archival-800 hover:bg-archival-100"
            >
              <MapPin className="w-5 h-5 flex-shrink-0 text-navy-600" aria-hidden="true" />
              <span className="font-medium text-sm">{site.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
