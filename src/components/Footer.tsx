export function Footer() {
  return (
    <footer className="bg-archival-900 text-archival-300 border-t border-archival-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-lg font-semibold text-archival-100 mb-2">
              About This Project
            </h3>
            <p className="text-sm leading-relaxed">
              This website is an educational resource created for{' '}
              <strong className="text-archival-100">ALPHA Education</strong>, a Canadian
              non-profit organization dedicated to advancing understanding of the history of
              the Second World War in Asia and the Pacific.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-archival-100 mb-2">
              Map Image Source
            </h3>
            <p className="text-sm leading-relaxed">
              {/* TODO: Replace with actual citation once the historical map image is finalized. */}
              <em>Map image citation placeholder — to be updated with source and provenance.</em>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-archival-700 text-center text-xs text-archival-400">
          <p>
            &copy; {new Date().getFullYear()} ALPHA Education. All rights reserved. Content
            provided for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
