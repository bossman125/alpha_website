import { Site } from '../types/site';

export const sites: Site[] = [
  {
    id: 'sham-shui-po',
    name: 'Sham Shui Po POW Camp',
    x: 54,
    y: 52,
    narrative: `After the fall of Hong Kong in December 1941, the Imperial Japanese Army established several prisoner-of-war (POW) camps across the territory. The largest was at Sham Shui Po on the Kowloon peninsula. Colonel Tokunaga Isao was the overall commandant of all POW camps in Hong Kong, with Captain Saito Shunkichi serving as the senior medical officer.

From January 1942 until the end of the war in August 1945, conditions in these camps deteriorated severely. The prosecution alleged that the senior Japanese officers did little to improve matters, and their subordinates followed suit. POWs were subjected to, just to list a few:

- Inadequate accommodation, sanitation, food, and clothing
- Harsh treatment of the sick
- Forced labour on war work and dangerous projects, even when physically unfit
- Misappropriation of Red Cross supplies

The most serious allegations involved the execution of recaptured escapees.`,
    trial: {
      summary:
        'The trial was held before a Military Court for the Trial of War Criminals in Hong Kong, with Lt. Col. R.C. Laming presiding as President. The prosecution was led by Major G.B. Puddicombe of the Victoria Rifles of Canada.',
      charges: `Accused: Col. Tokunaga Isao (D1) — Charges 1–10; Capt. Saito Shunkichi (D2) — Charges 1–5; Lt. Tanaka Hitochi (D3) — Charges 1, 3, 6, and 11; Int. Tsutada Itsuo (D4) — Charge 1; Sgt. Harada Jotaro (D5) — Charge 1.

The General Charges (1–5): Concerned the overall inhumane treatment of POWs.
The Escape Charges (6–8): Addressed the maltreatment and subsequent execution of recaptured Canadian and British POWs.
The Misappropriation Charge (9): Alleged that Tokunaga misappropriated Red Cross supplies for his own use.
The Civilian Ill-Treatment Charges (10–11): Concerned the beating, torture, and unlawful killing of Chinese civilians.`,
      verdict:
        'Accused sentences: Col. Tokunaga Isao (D1) — Death by hanging → Life imprisonment; Capt. Saito Shunkichi (D2) — Death by hanging → 20 years imprisonment; Lt. Tanaka Hitochi (D3) — 3 years imprisonment; Int. Tsutada Itsuo (D4) — 2 years imprisonment; Sgt. Harada Jotaro (D5) — 1 year imprisonment.',
    },
    testimony: [],
    questions: [
      'Colonel Tokunaga was the overall commandant. To what extent should a senior commander be held responsible for the actions of subordinates and the conditions in camps under their authority?',
      'The accused argued that they were following orders from higher authority, particularly regarding the executions. Should "superior orders" be a valid defence in war crimes trials? Why or why not?',
      'Captain Saito, as the senior medical officer, was found guilty of criminal neglect. What are the unique ethical obligations of medical personnel during wartime?',
    ],
  },
];
