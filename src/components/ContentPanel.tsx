import { Site } from '../types/site';
import { Quote, MessageCircleQuestion, Scale, FileText } from 'lucide-react';

interface ContentPanelProps {
  site: Site | null;
}

export function ContentPanel({ site }: ContentPanelProps) {
  if (!site) {
    return (
      <div
        className="bg-white border border-archival-200 rounded-lg p-6 shadow-sm text-center"
        aria-live="polite"
      >
        <p className="text-archival-500 italic">
          Select a location on the map or from the list to view its details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-white border border-archival-200 rounded-lg shadow-sm overflow-hidden"
      aria-live="polite"
    >
      <div className="bg-navy-800 px-6 py-4">
        <h2 className="font-serif text-2xl font-semibold text-white">{site.name}</h2>
      </div>

      <div className="p-6 space-y-8">
        {/* What Happened */}
        <section aria-labelledby={`${site.id}-narrative`}>
          <h3
            id={`${site.id}-narrative`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-3"
          >
            <FileText className="w-5 h-5 text-navy-600" aria-hidden="true" />
            What Happened
          </h3>
          <p className="text-archival-700 leading-relaxed">{site.narrative}</p>
        </section>

        {/* The Trial */}
        <section aria-labelledby={`${site.id}-trial`}>
          <h3
            id={`${site.id}-trial`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-3"
          >
            <Scale className="w-5 h-5 text-navy-600" aria-hidden="true" />
            The Trial
          </h3>
          <div className="space-y-4 bg-archival-50 rounded-md p-4 border border-archival-200">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500 mb-1">
                Summary
              </h4>
              <p className="text-archival-800">{site.trial.summary}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500 mb-1">
                Charges
              </h4>
              <p className="text-archival-800">{site.trial.charges}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500 mb-1">
                Verdict
              </h4>
              <p className="text-archival-800">{site.trial.verdict}</p>
            </div>
          </div>
        </section>

        {/* Testimony */}
        <section aria-labelledby={`${site.id}-testimony`}>
          <h3
            id={`${site.id}-testimony`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-3"
          >
            <Quote className="w-5 h-5 text-navy-600" aria-hidden="true" />
            Testimony
          </h3>
          <div className="space-y-4">
            {site.testimony.map((quote, idx) => (
              <blockquote
                key={idx}
                className="border-l-4 border-sepia-400 pl-4 italic text-archival-800 bg-sepia-50 py-3 pr-4 rounded-r-md"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </section>

        {/* Discussion Questions */}
        <section aria-labelledby={`${site.id}-questions`}>
          <h3
            id={`${site.id}-questions`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-3"
          >
            <MessageCircleQuestion className="w-5 h-5 text-navy-600" aria-hidden="true" />
            Discussion Questions
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {site.questions.map((q, idx) => (
              <li key={idx} className="text-archival-800 pl-2">
                {q}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
