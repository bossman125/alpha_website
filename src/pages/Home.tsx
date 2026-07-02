import { Link } from 'react-router-dom';
import { Map, BookOpen, Users, Scale, Shield } from 'lucide-react';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-archival-900 mb-4 border-b-2 border-sepia-300 pb-2">
      {children}
    </h2>
  );
}

export function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Hero */}
      <section className="text-center mb-16" aria-labelledby="hero-title">
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
      <section className="mb-14" aria-labelledby="research-goal">
        <SectionHeading>Research Goal</SectionHeading>
        <p className="text-archival-700 mb-4">
          The Hong Kong War Crimes Trials of 1946–1948 remain one of the most under-studied
          chapters of post-war justice. Existing records are scattered across archives in the
          United Kingdom, Canada, Australia, and Hong Kong, making the history difficult to
          access for students, educators, and the general public.
        </p>
        <p className="text-archival-700">
          This project organizes that history <em>geographically</em>. By mapping each trial to
          the location where the underlying crimes took place, we make an abstract legal record
          tangible and accessible. Our aim is to transform scattered archival documents into a
          coherent narrative that can be explored in the classroom or on the streets of Hong Kong.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-14" aria-labelledby="project-overview">
        <SectionHeading>Project Overview</SectionHeading>
        <p className="text-archival-700 mb-4">
          The interactive map at the heart of this website links key locations to detailed
          content about the trials that followed the Battle of Hong Kong and the Japanese
          occupation. Each location includes four components:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: BookOpen,
              title: 'What Happened',
              desc: 'A narrative of the events that led to the trial.',
            },
            {
              icon: Scale,
              title: 'The Trial',
              desc: 'Summary, charges, and verdict for each case.',
            },
            {
              icon: Users,
              title: 'Testimony',
              desc: 'Excerpts from witness statements and survivor accounts.',
            },
            {
              icon: Shield,
              title: 'Discussion Questions',
              desc: 'Prompts for classroom debate and critical thinking.',
            },
          ].map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 bg-white border border-archival-200 rounded-lg p-4 shadow-sm"
            >
              <item.icon
                className="w-6 h-6 text-navy-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-serif font-semibold text-archival-900">{item.title}</h3>
                <p className="text-sm text-archival-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-archival-700">
          Designed for post-secondary classrooms, the site can be used as a teaching resource or
          as a digital walking guide for visitors to Hong Kong who wish to engage with this
          history on location.
        </p>
      </section>

      {/* Overview of the Hong Kong War Crimes Trials */}
      <section className="mb-14" aria-labelledby="trials-overview">
        <SectionHeading>Overview of the Hong Kong War Crimes Trials</SectionHeading>
        <p className="text-archival-700 mb-4">
          Between 1946 and 1948, British military courts in Hong Kong tried more than forty
          Japanese military personnel and civilian administrators for war crimes committed during
          the occupation of Hong Kong (1941–1945). The trials covered offences against prisoners
          of war, civilian internees, and the local Chinese population, including murder,
          mistreatment, and the use of forced labour.
        </p>
        <p className="text-archival-700">
          Unlike the better-known International Military Tribunals at Nuremberg and Tokyo, the
          Hong Kong trials were conducted under national military law rather than international
          charter. They are consequently less studied, yet they produced a significant body of
          evidence and legal precedent concerning the treatment of POWs and civilian internees in
          East Asia.
        </p>
      </section>

      {/* Overview of the Battle of Hong Kong */}
      <section className="mb-14" aria-labelledby="battle-overview">
        <SectionHeading>Overview of the Battle of Hong Kong</SectionHeading>
        <p className="text-archival-700 mb-4">
          On 8 December 1941—just hours after the attack on Pearl Harbour—Japanese forces
          invaded Hong Kong. The colony's defenders, including British, Canadian, Indian, and
          local volunteer units, fought a desperate seventeen-day battle against overwhelming
          odds.
        </p>
        <p className="text-archival-700 mb-4">
          The Japanese advance split the defence, forcing a withdrawal from the mainland to Hong
          Kong Island and then a fighting retreat across the island itself. On 25 December 1941,
          the colony's governor, Sir Mark Aitchison Young, surrendered. The date became known as
          "Black Christmas."
        </p>
        <p className="text-archival-700">
          The surrender began nearly four years of Japanese occupation, during which the civilian
          population and Allied prisoners suffered severe hardship, repression, and, in some
          cases, atrocity.
        </p>
      </section>

      {/* About ALPHA Education */}
      <section aria-labelledby="alpha-education">
        <SectionHeading>About ALPHA Education</SectionHeading>
        <p className="text-archival-700">
          {/* This text is a placeholder and should be verified and expanded by ALPHA Education. */}
          ALPHA Education is a Canadian non-profit organization dedicated to fostering
          historical understanding of the Second World War in Asia and the Pacific. Through
          educational programming, research support, and public history projects, ALPHA Education
          works to ensure that the experiences of survivors and the lessons of this history are
          preserved and transmitted to new generations.
        </p>
      </section>
    </div>
  );
}
