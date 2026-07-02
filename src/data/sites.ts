import { Site } from '../types/site';

export const sites: Site[] = [
  {
    id: 'st-stephens',
    name: "St. Stephen's College",
    x: 78,
    y: 82,
    narrative:
      "On 25 December 1941, the day of Hong Kong's surrender, wounded Allied soldiers and medical staff at St. Stephen's College in Stanley were massacred by Japanese troops. The victims included patients too injured to be moved, as well as doctors and nurses who had remained to care for them. The atrocity became one of the most notorious incidents of the Battle of Hong Kong and was later the subject of a war crimes trial.",
    trial: {
      summary:
        "Colonel Tanaka Ryosaburo was tried by a British military court in Hong Kong for his role in the St. Stephen's College massacre. The prosecution presented evidence that troops under his command had killed wounded prisoners of war and medical personnel.",
      charges:
        'Violation of the laws and usages of war: ordering or permitting the killing of wounded prisoners of war and non-combatant medical personnel.',
      verdict:
        'Guilty. Tanaka was sentenced to death by hanging. The sentence was carried out in 1946.',
    },
    testimony: [
      '"I saw the Japanese soldiers enter the wards and begin bayoneting the wounded men where they lay. Some tried to crawl away but were shot." — Eyewitness account, presented at trial',
      '"The nurses were separated from the patients. We heard shots from the direction of the college buildings shortly after." — Survivor testimony',
    ],
    questions: [
      'Why might medical facilities and wounded soldiers have been targeted during the battle?',
      'How did the prosecution establish command responsibility in this case?',
      'What does this trial reveal about the legal treatment of atrocities committed during the chaos of battle?',
    ],
  },
  {
    id: 'stanley-internment',
    name: 'Stanley Internment Camp',
    x: 80,
    y: 85,
    narrative:
      "Stanley Internment Camp held approximately 2,800 civilian internees—British, American, Dutch, and other Allied nationals—from early 1942 until the Japanese surrender in August 1945. The camp was located in and around St. Stephen's College and the warders' quarters of the nearby prison. Internees suffered from overcrowding, malnutrition, and inadequate medical care, though conditions were generally less brutal than in the military prisoner-of-war camps.",
    trial: {
      summary:
        'Several Japanese camp administrators and guards were tried for mistreatment of civilian internees at Stanley. The trials focused on the denial of adequate food and medical supplies, forced labour, and physical abuse of prisoners.',
      charges:
        'Violation of the laws and usages of war: failure to provide adequate food, medical care, and humane treatment to civilian internees; unlawful use of forced labour; and physical assault.',
      verdict:
        'Multiple defendants were found guilty and received sentences ranging from imprisonment to death, depending on the severity of the proven abuse.',
    },
    testimony: [
      '"Our daily rice ration was barely enough to sustain life. By 1944, many of the children were showing signs of severe malnutrition." — Internee testimony',
      '"The guards would beat men for the slightest infraction, sometimes with rifle butts, sometimes with their fists." — Witness statement',
    ],
    questions: [
      'How did the legal status of civilian internees differ from that of military prisoners of war under international law?',
      'What challenges did prosecutors face in proving systematic neglect rather than isolated incidents?',
      'How might internee diaries and records have been used as evidence in these trials?',
    ],
  },
  {
    id: 'north-point',
    name: 'North Point Camp',
    x: 65,
    y: 35,
    narrative:
      'North Point Camp was established in early 1942 to hold Allied prisoners of war, including a significant number of Canadian troops captured during the Battle of Hong Kong. The camp was located on the site of a former refugee camp and warehouse complex on the north shore of Hong Kong Island. POWs were subjected to forced labour, inadequate rations, and harsh discipline. Many were later shipped to labour camps in Japan, where conditions were even worse.',
    trial: {
      summary:
        'The commandant and guards of North Point Camp were tried for the mistreatment of Allied POWs, with particular attention to the treatment of Canadian soldiers. Evidence included testimony from survivors who had been sent to Japan and from those who remained in Hong Kong.',
      charges:
        'Violation of the laws and usages of war: subjecting prisoners of war to cruel treatment, inadequate food and medical care, and forced labour under dangerous conditions.',
      verdict:
        'The camp commandant and several guards were convicted. Sentences included lengthy prison terms and, in one case, the death penalty for a guard responsible for multiple beatings that resulted in death.',
    },
    testimony: [
      '"We were made to work on the docks, loading and unloading cargo for twelve hours a day on a bowl of rice and water." — Canadian POW testimony',
      '"The doctor had no medicine. Men died of dysentery and malaria that could have been treated if we had even basic supplies." — Medical officer, Royal Rifles of Canada',
    ],
    questions: [
      'Why were Canadian troops particularly prominent among the defendants and witnesses in these trials?',
      'How did the use of POWs for forced labour violate the Geneva Conventions?',
      'What role did survivor testimony play in securing convictions when physical evidence was limited?',
    ],
  },
];
