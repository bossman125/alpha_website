import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  open: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ open, src, alt = '', onClose }: ImageLightboxProps) {
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    // trigger enter animation on mount
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') startClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const startClose = () => {
    setExiting(true);
    setEntered(false);
    // match transition duration (300ms)
    setTimeout(() => {
      setExiting(false);
      onClose();
    }, 320);
  };

  if (!open && !exiting) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${entered ? 'bg-black/60' : 'bg-black/0'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) startClose();
      }}
    >
      <div className={`relative mx-auto max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg bg-black transform transition-all duration-300 ${entered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button
          className="absolute top-3 right-3 z-30 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-archival-900 shadow"
          aria-label="Close image"
          onClick={startClose}
        >
          <X className="h-4 w-4" />
        </button>

        <img
          src={src}
          alt={alt}
          className="h-auto w-full max-h-[90vh] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
