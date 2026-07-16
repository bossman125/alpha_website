import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';
import { sites } from '../data/sites';
import { ContentPanel } from '../components/ContentPanel';

export function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>();
  const site = sites.find((site) => site.id === siteId) ?? null;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const openLightbox = (src: string, alt = '') => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setSelectedAlt('');
  };

  const galleryImages = site.images ?? [];
  const heroImage = galleryImages[0];
  const secondaryImages = galleryImages.slice(1, 3);

  if (!site) {
    return (
      <div className="min-h-screen bg-[linear-gradient(135deg,#f7efe7_0%,#faf6f1_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-archival-200 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
          <h1 className="mb-4 font-serif text-3xl font-semibold text-archival-900 sm:text-4xl">
            Location not found
          </h1>
          <p className="mb-6 text-lg leading-8 text-archival-700">
            We couldn’t find the selected location. Please return to the map and try again.
          </p>
          <Link
            to="/map"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 font-medium text-navy-700 transition hover:-translate-y-0.5 hover:bg-navy-100 focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to interactive map
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f7efe7_0%,#faf6f1_100%)] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/map"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/80 px-4 py-2 font-medium text-navy-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to interactive map
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-archival-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-sepia-500" />
            Featured site study
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_360px]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-archival-200 bg-white/90 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
                Historical location
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-archival-900 sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-archival-700">
                Explore the significance of this site through the narrative, trial record, and discussion questions that bring the history into focus.
              </p>
            </div>
            <ContentPanel site={site} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6">
            {heroImage ? (
              <div className="overflow-hidden rounded-[32px] border border-archival-200 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-96 w-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openLightbox(heroImage.src, heroImage.alt)}
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-600">
                    {heroImage.caption ?? site.name}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-archival-900">
                    {site.name}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-archival-700">
                    {heroImage.caption ?? 'Historical imagery from this location.'}
                  </p>
                </div>
              </div>
            ) : null}
            <div className="space-y-4">
              {secondaryImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-[28px] border border-archival-200 bg-white/90 shadow-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-96 w-full object-cover cursor-pointer transition-transform hover:scale-105"
                    onClick={() => openLightbox(image.src, image.alt)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>
        <ImageLightbox open={lightboxOpen} src={selectedImage ?? ''} alt={selectedAlt} onClose={closeLightbox} />
      </div>
    </div>
  );
}
