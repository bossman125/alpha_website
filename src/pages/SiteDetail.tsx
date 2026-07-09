import { Link, useParams } from 'react-router-dom';
import { sites } from '../data/sites';
import { ContentPanel } from '../components/ContentPanel';

export function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>();
  const site = sites.find((site) => site.id === siteId) ?? null;

  if (!site) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-white border border-archival-200 p-8 shadow-sm">
          <h1 className="font-serif text-3xl font-semibold text-archival-900 mb-4">
            Location not found
          </h1>
          <p className="text-archival-700 mb-6">
            We couldn’t find the selected location. Please return to the map and try again.
          </p>
          <Link
            to="/map"
            className="inline-flex items-center gap-2 text-navy-700 font-medium hover:underline"
          >
            ← Back to interactive map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Link
          to="/map"
          className="inline-flex items-center gap-2 text-navy-700 font-medium hover:underline"
        >
          ← Back to interactive map
        </Link>
      </div>
      <ContentPanel site={site} />
    </div>
  );
}
