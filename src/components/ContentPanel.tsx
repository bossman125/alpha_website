import { Fragment } from 'react';
import { Site } from '../types/site';
import { Quote, MessageCircleQuestion, Scale, FileText } from 'lucide-react';

interface ContentPanelProps {
  site: Site | null;
}

function renderRichText(text: string) {
  return text.split(/\n{2,}/).map((block, index) => {
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const nodes: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (!currentList.length) return;
      nodes.push(
        <ul key={`list-${index}-${nodes.length}`} className="list-disc list-inside space-y-2 text-archival-700 pl-5">
          {currentList.map((item, itemIndex) => (
            <li key={itemIndex} className="text-archival-700">
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    };

    lines.forEach((line) => {
      if (line.startsWith('- ')) {
        currentList.push(line.replace(/^-\s*/, ''));
      } else {
        flushList();
        nodes.push(
          <p key={`p-${index}-${nodes.length}`} className="text-archival-700 leading-relaxed">
            {line}
          </p>
        );
      }
    });

    flushList();

    return (
      <div key={index} className="space-y-4">
        {nodes}
      </div>
    );
  });
}

function renderVerdictTable(text: string) {
  const rows = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => {
      const trimmed = line.replace(/^-\s*/, '');
      const [defendant, sentence] = trimmed.split(' — ').map((part) => part.trim());
      return { defendant, sentence };
    });

  if (!rows.length) {
    return renderRichText(text);
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-archival-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-archival-200 text-left text-archival-800">
        <thead className="bg-archival-100">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-archival-600">
              Defendant
            </th>
            <th className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-archival-600">
              Sentence
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-archival-200">
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 ? 'bg-archival-50' : ''}>
              <td className="px-4 py-3 text-sm leading-6">{row.defendant}</td>
              <td className="px-4 py-3 text-sm leading-6">{row.sentence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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
      className="bg-white border border-archival-200 rounded-3xl shadow-sm overflow-hidden"
      aria-live="polite"
    >
      <div className="bg-navy-800 px-6 py-5">
        <h2 className="font-serif text-3xl font-semibold text-white">{site.name}</h2>
      </div>

      <div className="p-6 space-y-10">
        <section aria-labelledby={`${site.id}-narrative`}>
          <h3
            id={`${site.id}-narrative`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-4"
          >
            <FileText className="w-5 h-5 text-navy-600" aria-hidden="true" />
            What Happened
          </h3>
          <div className="space-y-4 rounded-3xl border border-archival-200 bg-archival-50 p-5">
            {renderRichText(site.narrative)}
          </div>
        </section>

        <section aria-labelledby={`${site.id}-trial`}>
          <h3
            id={`${site.id}-trial`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-4"
          >
            <Scale className="w-5 h-5 text-navy-600" aria-hidden="true" />
            The Trial
          </h3>
          <div className="grid gap-6 rounded-3xl border border-archival-200 bg-archival-50 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-3 p-4 rounded-3xl bg-white shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                Summary
              </h4>
              {renderRichText(site.trial.summary)}
            </div>

            <div className="space-y-3 p-4 rounded-3xl bg-white shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                Charges
              </h4>
              {renderRichText(site.trial.charges)}
            </div>

            <div className="space-y-3 p-4 rounded-3xl bg-white shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                Defence
              </h4>
              {renderRichText(site.trial.defence)}
            </div>

            <div className="space-y-3 p-4 rounded-3xl bg-white shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                Verdict
              </h4>
              {renderVerdictTable(site.trial.verdict)}
            </div>
          </div>
        </section>

        <section aria-labelledby={`${site.id}-testimony`}>
          <h3
            id={`${site.id}-testimony`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-4"
          >
            <Quote className="w-5 h-5 text-navy-600" aria-hidden="true" />
            Testimony
          </h3>
          <div className="space-y-4 rounded-3xl border border-archival-200 bg-archival-50 p-5">
            {site.testimony.length > 0 ? (
              site.testimony.map((quote, idx) => (
                <blockquote
                  key={idx}
                  className="border-l-4 border-sepia-400 bg-sepia-50 py-4 pl-5 pr-4 italic text-archival-800 rounded-r-2xl"
                >
                  {quote}
                </blockquote>
              ))
            ) : (
              <p className="text-archival-700">No testimony excerpts are available for this location.</p>
            )}
          </div>
        </section>

        <section aria-labelledby={`${site.id}-questions`}>
          <h3
            id={`${site.id}-questions`}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900 mb-4"
          >
            <MessageCircleQuestion className="w-5 h-5 text-navy-600" aria-hidden="true" />
            Discussion Questions
          </h3>
          <div className="rounded-3xl border border-archival-200 bg-archival-50 p-5">
            <ol className="list-decimal list-inside space-y-3 text-archival-800">
              {site.questions.map((q, idx) => (
                <li key={idx} className="pl-2">
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
