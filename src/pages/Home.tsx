import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Map, BookOpen, Users, Scale, Shield } from 'lucide-react';

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-archival-900 mb-4 border-b-2 border-sepia-300 pb-2">
      {children}
    </h2>
  );
}

export function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background_image.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Hero */}
        <section className="rounded-[2rem] border border-white/60 bg-white/95 p-8 sm:p-10 shadow-2xl mb-10 text-center" aria-labelledby="hero-title">
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-archival-900 mb-4 leading-tight"
        >
          The Hong Kong War Crimes Trials
        </h1>
        <p className="text-lg sm:text-xl text-archival-600 font-serif italic mb-8">
          An interactive history of justice and remembrance, 1946–1948
        </p>
        <Link
          to="/map"
          className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-navy-400 focus:ring-offset-2"
        >
          <Map className="w-5 h-5" aria-hidden="true" />
          Explore the Interactive Map
        </Link>
      </section>

      {/* Research Goal */}
      <section className="mb-8 rounded-[2rem] border border-white/60 bg-white/95 p-6 sm:p-8 shadow-xl" aria-labelledby="research-goal">
        <SectionHeading>Research Goal</SectionHeading>
        <p className="text-archival-700 mb-4">
          This project aims to develop an interactive web-based map documenting the Hong Kong War Crimes Trials spanning from 1946 to 1948. Far less studied than the Nuremberg or Tokyo Tribunals, the Hong Kong trials remain poorly served by existing digital resources. Although the trial records are digitized, the primary online database relies on an obsolete interface with broken mapping functions that are incompatible with modern web browsers. Furthermore, the source documents are frequently obscured by poor scan quality and dense legal terminology.
        </p>
        <p className="text-archival-700">
          By organizing this history geographically and providing clear, holistic summaries of each case, this site resolves these technical and linguistic barriers. The platform translates a frustrating and abstract legal record into a tangible, accessible narrative for students, educators, and the public.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-8 rounded-[2rem] border border-white/60 bg-white/95 p-6 sm:p-8 shadow-xl" aria-labelledby="project-overview">
        <SectionHeading>Project Overview</SectionHeading>
        <p className="text-archival-700 mb-4">
          The interactive map at the heart of this website links key locations to detailed
          content about the trials that followed the Battle of Hong Kong and the Japanese
          occupation. Each location includes three components:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-archival-700">
          <li>Narrative and Overview</li>
          <li>Summary of Trial, Charges, Verdict</li>
          <li>Discussion Questions</li>
        </ul>
        <p className="text-archival-700">
          Designed for post-secondary classrooms, the site can be used as a teaching resource or
          as a digital walking guide for visitors to Hong Kong who wish to engage with this
          history on location.
        </p>
      </section>

      {/* Overview of the Hong Kong War Crimes Trials */}
      <section className="mb-8 rounded-[2rem] border border-white/60 bg-white/95 p-6 sm:p-8 shadow-xl" aria-labelledby="trials-overview">
        <SectionHeading>Overview of the Hong Kong War Crimes Trials</SectionHeading>
        <p className="text-archival-700 mb-4">
          Between 1946 and 1948, British military courts in Hong Kong held 46 trials involving 123 defendants, including Japanese military personnel and Formosa/Taiwan defendants, for war crimes committed during the occupation of Hong Kong. The cases covered abuses against prisoners of war, civilian internees, and local civilians, including murder, mistreatment, and forced labour. Conducted under British military jurisdiction rather than an international tribunal charter, the Hong Kong trials are less famous than Nuremberg and Tokyo but remain important for the historical record and the development of war-crimes jurisprudence.
        </p>
      </section>

      {/* Overview of the Battle of Hong Kong */}
      <section className="rounded-[2rem] border border-white/60 bg-white/95 p-6 sm:p-8 shadow-xl" aria-labelledby="battle-overview">
        <SectionHeading>Overview of the Battle of Hong Kong</SectionHeading>
        <p className="text-archival-700 mb-4">
          On 8 December 1941—just hours after the attack on Pearl Harbour—Japanese forces invaded Hong Kong. The colony's defenders, including British, Canadian, Indian, and local volunteer units, fought a desperate seventeen-day battle against overwhelming odds.
        </p>
        <p className="text-archival-700 mb-4">
          The Japanese advance split the defence, forcing a withdrawal from the mainland to Hong Kong Island and then a fighting retreat across the island itself. On 25 December 1941, the colony's governor, Sir Mark Aitchison Young, surrendered. The date became known as "Black Christmas."
        </p>
        <p className="text-archival-700">
          The surrender began nearly four years of Japanese occupation, during which the civilian population and Allied prisoners suffered severe hardship, repression, and, in some cases, atrocity.
        </p>
      </section>

      </div>
    </div>
  );
}
