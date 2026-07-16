import { useState } from 'react';
import { Site } from '../types/site';
import { Quote, MessageCircleQuestion, Scale, FileText, ChevronDown } from 'lucide-react';

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
        <ul key={`list-${index}-${nodes.length}`} className="list-disc list-inside space-y-2 pl-5 text-base leading-8 text-archival-700">
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
          <p key={`p-${index}-${nodes.length}`} className="text-base leading-8 text-archival-700">
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
    <div className="overflow-x-auto rounded-[24px] border border-archival-200 bg-white shadow-sm">
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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    narrative: true,
    trial: false,
    testimony: false,
    questions: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((current) => ({ ...current, [key]: !current[key] }));
  };

  if (!site) {
    return (
      <div
        className="rounded-[28px] border border-archival-200 bg-white/90 p-6 text-center shadow-[0_16px_44px_rgba(15,23,42,0.06)]"
        aria-live="polite"
      >
        <p className="text-lg text-archival-500 italic">
          Select a location on the map or from the list to view its details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden rounded-[32px] border border-archival-200 bg-white/90 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
      aria-live="polite"
    >
      <div className="border-b border-archival-200 bg-navy-800 px-6 py-6 sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-white">{site.name}</h2>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-navy-200">
          Detailed historical overview
        </p>
      </div>

      <div className="space-y-4 p-4 sm:p-6 lg:p-8">
        <section aria-labelledby={`${site.id}-narrative`} className="rounded-[24px] border border-archival-200 bg-archival-50/80 p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
          <button
            type="button"
            onClick={() => toggleSection('narrative')}
            aria-expanded={openSections.narrative}
            className="flex w-full items-center justify-between gap-3 rounded-[20px] px-2 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <span className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900">
              <FileText className="h-5 w-5 text-navy-600" aria-hidden="true" />
              What Happened
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-archival-500 transition-transform ${openSections.narrative ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openSections.narrative ? 'mt-4 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4 rounded-[20px] border border-archival-200 bg-white/80 p-4 sm:p-5">
              {renderRichText(site.narrative)}
            </div>
          </div>
        </section>

        <section aria-labelledby={`${site.id}-trial`} className="rounded-[24px] border border-archival-200 bg-archival-50/80 p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
          <button
            type="button"
            onClick={() => toggleSection('trial')}
            aria-expanded={openSections.trial}
            className="flex w-full items-center justify-between gap-3 rounded-[20px] px-2 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <span className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900">
              <Scale className="h-5 w-5 text-navy-600" aria-hidden="true" />
              The Trial
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-archival-500 transition-transform ${openSections.trial ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openSections.trial ? 'mt-4 max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid gap-6 rounded-[20px] border border-archival-200 bg-white/80 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:p-5">
              <div className="space-y-3 rounded-[20px] bg-archival-50 p-4 shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                  Summary
                </h4>
                {renderRichText(site.trial.summary)}
              </div>

              <div className="space-y-3 rounded-[20px] bg-archival-50 p-4 shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                  Charges
                </h4>
                {renderRichText(site.trial.charges)}
              </div>

              <div className="space-y-3 rounded-[20px] bg-archival-50 p-4 shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                  Defence
                </h4>
                {renderRichText(site.trial.defence)}
              </div>

              <div className="space-y-3 rounded-[20px] bg-archival-50 p-4 shadow-sm">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-archival-500">
                  Verdict
                </h4>
                {renderVerdictTable(site.trial.verdict)}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby={`${site.id}-testimony`} className="rounded-[24px] border border-archival-200 bg-archival-50/80 p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
          <button
            type="button"
            onClick={() => toggleSection('testimony')}
            aria-expanded={openSections.testimony}
            className="flex w-full items-center justify-between gap-3 rounded-[20px] px-2 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <span className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900">
              <Quote className="h-5 w-5 text-navy-600" aria-hidden="true" />
              Testimony
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-archival-500 transition-transform ${openSections.testimony ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openSections.testimony ? 'mt-4 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4 rounded-[20px] border border-archival-200 bg-white/80 p-4 sm:p-5">
              {site.testimony.length > 0 ? (
                site.testimony.map((quote, idx) => (
                  <blockquote
                    key={idx}
                    className="rounded-r-[20px] border-l-4 border-sepia-400 bg-sepia-50 py-4 pl-5 pr-4 italic text-archival-800"
                  >
                    {quote}
                  </blockquote>
                ))
              ) : (
                <p className="text-base leading-8 text-archival-700">No testimony excerpts are available for this location.</p>
              )}
            </div>
          </div>
        </section>

        <section aria-labelledby={`${site.id}-questions`} className="rounded-[24px] border border-archival-200 bg-archival-50/80 p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
          <button
            type="button"
            onClick={() => toggleSection('questions')}
            aria-expanded={openSections.questions}
            className="flex w-full items-center justify-between gap-3 rounded-[20px] px-2 py-2 text-left transition focus:outline-none focus:ring-2 focus:ring-navy-400"
          >
            <span className="flex items-center gap-2 font-serif text-xl font-semibold text-archival-900">
              <MessageCircleQuestion className="h-5 w-5 text-navy-600" aria-hidden="true" />
              Discussion Questions
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-archival-500 transition-transform ${openSections.questions ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openSections.questions ? 'mt-4 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="rounded-[20px] border border-archival-200 bg-white/80 p-4 sm:p-5">
              <ol className="list-decimal list-inside space-y-3 text-base leading-8 text-archival-800">
                {site.questions.map((q, idx) => (
                  <li key={idx} className="pl-2">
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
