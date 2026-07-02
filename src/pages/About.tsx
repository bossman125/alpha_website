import { Mail, Globe, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-archival-900 mb-8">
        About This Project
      </h1>

      {/* About ALPHA Education */}
      <section className="mb-14" aria-labelledby="about-alpha">
        <h2
          id="about-alpha"
          className="font-serif text-2xl font-semibold text-archival-900 mb-4 border-b-2 border-sepia-300 pb-2"
        >
          About ALPHA Education
        </h2>
        <div className="bg-white border border-archival-200 rounded-lg p-6 shadow-sm">
          <p className="text-archival-700 mb-4">
            {/* TODO: This text is a placeholder. Please verify and expand with ALPHA Education's official description. */}
            ALPHA Education is a Canadian non-profit organization dedicated to fostering
            historical understanding of the Second World War in Asia and the Pacific. Through
            educational programming, research support, and public history projects, ALPHA
            Education works to ensure that the experiences of survivors and the lessons of this
            history are preserved and transmitted to new generations.
          </p>
          <p className="text-archival-700 mb-4">
            The organization supports teachers, students, and researchers with resources that
            centre survivor testimony and primary-source documentation, promoting critical
            inquiry and historical empathy in the classroom.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium text-sm"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              {/* TODO: Replace with ALPHA Education website URL */}
              alphaeducation.org (placeholder)
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium text-sm"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {/* TODO: Replace with ALPHA Education contact email */}
              contact@alphaeducation.org (placeholder)
            </a>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section aria-labelledby="about-author">
        <h2
          id="about-author"
          className="font-serif text-2xl font-semibold text-archival-900 mb-4 border-b-2 border-sepia-300 pb-2"
        >
          About the Project Author
        </h2>
        <div className="bg-white border border-archival-200 rounded-lg p-6 shadow-sm">
          <p className="text-archival-700 mb-4">
            {/* TODO: Add project author biography here. */}
            <em>Author biography placeholder.</em> This section is reserved for a brief
            biography of the researcher or educator who compiled and wrote the content for this
            website. Please include academic background, research interests, and any relevant
            publications or affiliations.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium text-sm"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              {/* TODO: Replace with author academic profile or institutional page */}
              Academic profile (placeholder)
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-900 font-medium text-sm"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {/* TODO: Replace with author email */}
              author@institution.edu (placeholder)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
