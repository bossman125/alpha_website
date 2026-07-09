import { useNavigate } from 'react-router-dom';
import { sites } from '../data/sites';
import { MarkerPin } from './MarkerPin';
import { LocationList } from './LocationList';

export function MapView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-archival-900 mb-2">
        Interactive Map
      </h1>
      <p className="text-archival-600 mb-6">
        Click a marker on the map or select a location from the list to explore the trials.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map + Markers */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-[4/3] bg-archival-200 rounded-lg overflow-hidden border border-archival-300 shadow-inner">
            <img
              src={`${import.meta.env.BASE_URL}hk_map.jpeg`}
              alt="Map of Hong Kong, c. 1945"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.backgroundImage =
                    'repeating-linear-gradient(0deg, transparent, transparent 39px, #c4bdae 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #c4bdae 40px)';
                  parent.style.backgroundColor = '#ddd8ce';
                }
              }}
            />

            {sites.map((site) => (
              <MarkerPin
                key={site.id}
                x={site.x}
                y={site.y}
                name={site.name}
                onClick={() => navigate(`/map/${site.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Sidebar: Location List */}
        <div className="space-y-6">
          <LocationList sites={sites} />
        </div>
      </div>
    </div>
  );
}
