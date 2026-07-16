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
      charges: `Accused:
- Col. Tokunaga Isao (D1) — Charges 1–10
- Capt. Saito Shunkichi (D2) — Charges 1–5
- Lt. Tanaka Hitochi (D3) — Charges 1, 3, 6, and 11
- Int. Tsutada Itsuo (D4) — Charge 1
- Sgt. Harada Jotaro (D5) — Charge 1.

The General Charges (1–5): Concerned the overall inhumane treatment of POWs.
The Escape Charges (6–8): Addressed the maltreatment and subsequent execution of recaptured Canadian and British POWs.
The Misappropriation Charge (9): Alleged that Tokunaga misappropriated Red Cross supplies for his own use.
The Civilian Ill-Treatment Charges (10–11): Concerned the beating, torture, and unlawful killing of Chinese civilians.
`,
      defence: `The defence, led by Japanese barristers Mr. Fujita Tetsuo and Mr. Hagezawa, advanced several arguments:

- The accused admitted to minor offences but argued the prosecution had exaggerated the gravity of the acts.
- For the executions, the accused pleaded that they were merely following orders from the Chief of Staff of the Governor-General's Office.
- They argued they did their best in extremely difficult circumstances, with D1 claiming he did all in his power to ameliorate the prisoners' plight.
- D2, the medical officer, argued he was only responsible for supervising the POWs' own medical officers, not directly for their health. D3 claimed he could not control the guards or interpreters directly.
`,
      verdict: `
- Col. Tokunaga Isao (D1) — Death by hanging → Life imprisonment
- Capt. Saito Shunkichi (D2) — Death by hanging → 20 years imprisonment
- Lt. Tanaka Hitochi (D3) — 3 years imprisonment
- Int. Tsutada Itsuo (D4) — 2 years imprisonment
- Sgt. Harada Jotaro (D5) — 1 year imprisonment.
`,
    },
    testimony: [],
    questions: [
      'Colonel Tokunaga was the overall commandant. To what extent should a senior commander be held responsible for the actions of subordinates and the conditions in camps under their authority?',
      'The accused argued that they were following orders from higher authority, particularly regarding the executions. Should "superior orders" be a valid defence in war crimes trials? Why or why not?',
      'Captain Saito, as the senior medical officer, was found guilty of criminal neglect. What are the unique ethical obligations of medical personnel during wartime?',
    ],
    images: [
      {
        src: '/shamshuipo/shamshuipo1.jpg',
        alt: 'Historic street scene in Sham Shui Po',
        caption: 'Sham Shui Po POW camp main thoroughfare',
      },
      {
        src: '/shamshuipo/shamshuipo2.jpg',
        alt: 'Sham Shui Po architecture detail',
        caption: 'Camp architecture and living quarters',
      },
      {
        src: '/shamshuipo/shamshuipo3.jpeg',
        alt: 'Sham Shui Po street marketplace',
        caption: 'Street-level view of camp life',
      },
    ],
  },
  {
    id: 'stanley-hospital',
    name: 'Stanley Hospital',
    x: 63,
    y: 77,
    narrative: `This case concerns Sato Chochi, a First Lieutenant and Medical Doctor in the Japanese Army, who served as the Medical Officer in charge of the Hospital at Stanley Gaol (Prison) in Hong Kong during the Second World War. He was also appointed Health Officer of the Japanese Governor's Office in Hong Kong in October 1944.

The prosecution alleged that between October 1942 and 15 August 1945, Sato, being responsible for the well-being of British and Chinese prisoners who were patients in the Stanley Gaol Hospital, violated the laws and usages of war by being concerned in the ill-treatment of prisoners. This ill-treatment manifested as a criminal neglect of his medical duties, which included:

- Failing to provide adequate medical attention, medicine, drugs, and suitable diet.
- Rarely visiting the hospital and failing to supervise the hospital staff.
- Contributing to the deaths of many patients and causing physical suffering to others.

The prosecution argued that Sato's neglect was premeditated and calculated to inflict unwarranted suffering, and that he should be held accountable for the natural and probable consequences of his actions.
`,
    trial: {
      summary:
        'The trial was held before a Military Court for the Trial of War Criminals No. 7 in Hong Kong. The court was presided over by Lt. Col. N.G. Wait (Intelligence Corps), with Major Clayworth (Royal Artillery) and Capt. R.B.R. Corely (King’s Royal Rifle Corps) as members. The prosecution was led by Major R.C. Lai (Dept. of the JAG, India, Barrister), while the defence was conducted by Mr. Hasegawa Yukichi (Japanese Barrister).',
      charges: `Accused:
- Sato Chochi (First Lieutenant, Medical Doctor)

Charge: "COMMITTING A WAR CRIME, in that he at Hong Kong, between October 1942 and the 15th August 1945 when Medical Officer in charge of Stanley Gaol Hospital and as such responsible for the well-being of British and Chinese prisoners who were patients therein, in violation of the laws and usages of war was concerned in the illtreatment of the said prisoners by failing to provide them with adequate medical attention including medicine, drugs and suitable diet, thereby contributing to the deaths of many of them and causing physical suffering to others."
`,
      defence: `The Defence:
- Sato was an "extremely busy" person with multiple duties, including serving as Medical Officer to the Governor-General's Office. He was not given proper instruction when assigned to Stanley Gaol, making his job extremely difficult and his authority unclear.
- Despite difficulties, Sato tried his best to visit the hospital as often as possible. He delegated diagnosis to other officers with medical training and reviewed their reports.
- Sato argued he only had an advisory function regarding medical supplies and rations, with the ultimate responsibility resting with the Commissioner. He did request more rations and initiated vegetable plots to make the prison more self-sufficient.
`,
      verdict: `Sato Chochi was sentenced to 8 years imprisonment.`,
    },
    testimony: [],
    questions: [
      "The prosecution used the term \"concerned in\" to establish Sato's responsibility for the patients. How does this legal concept differ from direct command responsibility, and what are its implications for holding medical personnel accountable in war crimes trials?",
      "Sato argued that his multiple duties and lack of clear instruction from superiors made his job extremely difficult. To what extent should a superior's failure to provide clear guidance mitigate the responsibility of a subordinate who is aware of a duty of care?",
      "The Judge Advocate noted that the prosecution had misled the court during cross-examination, which could have prejudiced the accused. What is the significance of procedural fairness in war crimes trials, and how does it impact the legitimacy of the verdict?",
    ],
    images: [
      {
        src: '/stanley/stanley1.jpg',
        alt: 'Stanley Hospital interior view',
        caption: 'Stanley Hospital, wartime medical ward',
      },
      {
        src: '/stanley/stanley2.png',
        alt: 'Stanley Hospital exterior sign',
        caption: 'Stanley Hospital entrance',
      },
      {
        src: '/stanley/stanley3.jpg',
        alt: 'Stanley Gaol area',
        caption: 'Stanley Gaol surroundings during the occupation',
      },
    ],
  },
  {
    id: 'cheung-chow-island',
    name: 'Cheung Chow Island',
    x: 33,
    y: 81,
    narrative: `This case concerns Honda Isamu, a Sergeant Major in the Japanese Gendarmerie (Kempeitai), who served as the officer in charge of the Cheung Chow Kempeitai Station on Cheung Chow Island, located a few miles west of Hong Kong Island.

Between 24 December 1944 and 13 January 1945, Honda received a report about illegal dealings in rice. Several Chinese civilian residents of Cheung Chow Island were arrested and brought before him for interrogation. The prosecution alleged that during the investigation of this incident, Honda unlawfully maltreated the civilian suspects by subjecting them to torture and summary punishment. The maltreatment included:

- Beatings with bare fists or iron-rod loaded bamboo sticks causing injuries and bleeding.
- Stress positions, such as making a victim hold up a chair loaded with heavy weights for hours.
- "Water torture".
`,
    trial: {
      summary:
        'The trial was held before a Military Court for the Trial of War Criminals No. 7 in Hong Kong. The court was presided over by Lt. Col. C.F. Ball (Department of JAG in India, Barrister-at-Law), with Major M.I. Ormsby (West York Regt.) and Capt. R.B.R. Gorely (King’s Royal Rifle Corps) as members. The prosecution was led by Major R.C. Lai (JAG Branch), while the defence was conducted by Mr. Takano Junjiro (Japanese Barrister).',
      charges: `Accused:
- Honda Isamu (Sergeant Major, Gendarmerie)

Charge: "COMMITTING A WAR CRIME, in that he, at CHEUNG CHOW ISLAND in the Colony of Hong Kong between the 24th December 1944 and the 13th January 1945 when officer in charge of the CHEUNG CHOW KEMPEITAI STATION, was in violation of the laws and usages of war, concerned in maltreatment causing physical suffering to CHENG WO KWAI, LAM AH HENG, MAN FOOK, MAN YUK MUI, MAN SUI WA, CHOY SANG CHEUNG WA YUK and WONG MING also known as AH MING and FOOK TAI, all Chinese Civilian Residents of CHEUNG CHOW ISLAND."
`,
      defence: `The Defence:
- The defence argued that there was "but little convincing concurrence between the testimony given by the [prosecution witnesses] about the material points of" the case, making the evidence presented insufficient.
- The Accused denied committing any of the alleged atrocities.
- While admitting that there might "occasionally have been some slapping, hitting with bamboo sticks and splashing of water (but not 'water torture')," the defence contended these were done by "a man burning with natural disinterested indignation at the theft of the common property of that community".
- The defence argued that the testimonies given by various prosecution witnesses were not reliable, exaggerated, or contradictory.
`,
      verdict: `Honda Isamu was sentenced to 5 years imprisonment.

The Accused petitioned against the judgement, arguing that: (1) the verdict was against the weight of the evidence; and (2) the sentence was unduly severe in light of the evidence.

In his review of the case on 24 February 1947, the Judge Advocate (Brigadier FGT Davis, DJAG, South East Asia Land Forces) observed that "There were small discrepancies in the prosecution evidence in regard to the particular form of torture used on specific occasions, but there is no doubt that torture was used. The accused in his statement admits ill-treating persons during interrogation though he denies that it was so severe as alleged by the prosecution." Ultimately, he advised that "the finding of the court is supported by the evidence and I advise confirmation".`,
    },
    testimony: [],
    questions: [
      "The defence argued that the victims' testimonies were inconsistent and unreliable. What challenges do war crimes courts face in relying on victim testimony, particularly when the victims have suffered trauma and the events occurred some time ago?",
      "Honda admitted to \"slapping, hitting with bamboo sticks and splashing of water\" but denied that this constituted \"water torture.\" How should a court determine the line between permissible interrogation methods and torture, especially in a wartime context?",
      "The defence attempted to justify the ill-treatment by framing it as \"natural indignation at the theft of common property.\" To what extent, if any, should provocation or the gravity of the alleged offence (such as rice theft in a time of scarcity) mitigate the severity of punishment for war crimes?",
    ],
    images: [
      {
        src: '/cheungchow/cheung1.jpg',
        alt: 'Cheung Chow Island coastal view',
        caption: 'Coastal landscape at Cheung Chow Island',
      },
      {
        src: '/cheungchow/cheung2.jpg',
        alt: 'Cheung Chow Island terrain',
        caption: 'Island terrain and settlement',
      },
      {
        src: '/cheungchow/cheung3.jpg',
        alt: 'Cheung Chow Island waterfront scene',
        caption: 'Waterfront scene on Cheung Chow Island',
      },
    ],
  },
  {
    id: 'yaumati-police-station-building',
    name: 'Yaumati Police Station Building',
    x: 55,
    y: 58,
    narrative: `This case concerns five members of the Japanese Kempeitai (Gendarmerie) attached to the Kowloon District: Omura Kiyoshi (Warrant Officer and Chief of the Special Branch), Nishida Masato (Sergeant), Kawazumi Jun (Sergeant Major), Yoshioka Eizo (Sergeant Major), and Kawai Hisao (Sergeant).

Between September 1944 and January 1945, the accused were involved in the interrogation and ill-treatment of Chinese civilian residents of the New Territories and Kowloon who were suspected of Communist guerilla activities and anti-Japanese activity. The prosecution alleged that the detainees were subjected to severe torture and beatings while in custody at the Yaumati Police Station Building, the Kowloon Magistrates Court, and the Taipo Gendarmerie sub-station. The maltreatment included beatings with bamboo poles and other implements, causing serious physical suffering that led to the deaths of numerous victims across the three locations.

The case against Omura (D1) rested primarily on his general responsibility as Chief of the Special Branch for the actions of his subordinates during investigations. The prosecution submitted that he must have known how his subordinates were treating prisoners, and he actually admitted his responsibility for it.
`,
    trial: {
      summary:
        'The trial was held before a Military Court for the Trial of War Criminals No. 5 in Hong Kong. The court was presided over by Lt-Col. P. Warwick (R.A.S.C., Barrister-at-law), with Maj. V.E. House (King\'s Own Royal Regiment) and Capt. J. Benyon (Royal Engineers) as members. The prosecution was led by Maj. M.I. Ormsby (The West Yorkshire Regiment, DAJAG, FARELF), while the defence was conducted by Mr. Matsuoka Yoshihiko (Lawyer of the Tokyo Supreme Court).',
      charges: `Accused:
- Omura Kiyoshi (D1)
- Nishida Masato (D2)
- Kawazumi Jun (D3)
- Yoshioka Eizo (D4)
- Kawai Hisao (D5)

First charge: Concerned the ill-treatment of civilian residents at the Yaumati Police Station between 26 September 1944 and 15 November 1944, causing physical suffering which led to the deaths of 17 named victims (including Chan Yan, Lau Yuk Kwong, Yuen Fook, and others).

Second charge: Concerned the ill-treatment of civilians, particularly 12 named persons (including Mrs. John Siew, Walter Fong Ching, Hui Shu Pui, and others), at the Kowloon Magistrates Court between 27 October 1943 and 30 October 1944. No death was alleged.

Third charge: Concerned the ill-treatment of civilian residents at the Taipo Gendarmerie between 20 December 1944 and 31 January 1945, in particular 10 named victims, causing the deaths of three of them (Lam Tin Kau, Cheng Po, and Lam Shui Ki).
`,
      defence: `The Defence:
- The defence complained that witnesses were asked leading questions in their examination-in-chief, and much of the evidence was hearsay, as none of the witnesses was an eye-witness to the deaths that allegedly took place.
- The defence admitted that the listed victims were detained but denied all alleged ill-treatment for all of the accused.
- The defence insisted that the living conditions and rations were sufficient for the detainees to live.
- In their joint petition, the convicted accused argued that the means and methods applied during counter-measures against hostile activities were sometimes "carried too far", but that the crimes amounted only to negligence rather than intentional criminality. They further argued that the scope of D1's responsibility should be restricted to negligence, as he was not aware of the facts when he should have known them. They also cited "the persistence of superior orders" as a mitigating factor.
`,
      verdict: `Verdict:

Omura Kiyoshi (D1) — 20 years imprisonment
Nishida Masato (D2) — 20 years imprisonment
Kawazumi Jun (D3) — 12 years imprisonment
Yoshioka Eizo (D4) — Death by hanging (executed on 29 June 1948 at Stanley Prison)
Kawai Hisao (D5) — Acquitted (No case to answer)
`,
    },
    testimony: [],
    questions: [
      'The defence argued that the accused were merely carrying out "counter-measures" against guerilla activities and that the excesses amounted only to negligence rather than intentional criminality. How should a war crimes court distinguish between negligence and intentional war crimes in the context of interrogation and torture?',
      'Yoshioka (D4) received the death sentence for causing the deaths of three detainees through torture, while Omura (D1) received 20 years for command responsibility. To what extent should the degree of direct participation in violence, versus supervisory responsibility, determine the severity of punishment in war crimes trials?',
      'The defence raised concerns about hearsay evidence and the reliability of witnesses who were not eye-witnesses to the deaths. What procedural challenges arise in prosecuting war crimes years after the events, and how should courts balance the need for justice against the rights of the accused to a fair trial?',
    ],
    images: [
      {
        src: '/yaumati/yau1.jpg',
        alt: 'Yaumati Police Station Building exterior',
        caption: 'Yaumati Police Station Building exterior',
      },
      {
        src: '/yaumati/yau2.jpg',
        alt: 'Yaumati Police Station Building street view',
        caption: 'Street-level view of the building',
      },
      {
        src: '/yaumati/yau3.jpg',
        alt: 'Yaumati Police Station Building interior context',
        caption: 'Historic context around the station',
      },
    ],
  },
];
