/** Square Appointments booking site (all services). */
export const SQUARE_BOOKING_URL = 'https://squareup.com/appointments/book/L8BQMBQNEMSDW';

const SQUARE_SERVICE_BASE = 'https://book.squareup.com/appointments/zhn4aaf8qw5fqq/location/L8BQMBQNEMSDW/services/';

export interface ServiceItem {
  id: string; // 'A', 'B', 'C', 'D', 'E', 'F'
  category: 'manicure' | 'pedicure';
  title: string;
  priceFormatted: string;
  durationFormatted: string;
  basePrice: number;
  isStartingPrice?: boolean;
  shortDescription: string;
  fullDescription: string;
  techniqueNote?: string;
  addonsAllowed: boolean;
  /** Only some services require a deposit at booking. */
  depositRequired: boolean;
  /** Complimentary repair window, when the service has one. */
  guaranteeDays?: number;
  /** "What's included" list, shown on the service page. */
  included?: string[];
  /** Small print under the included list (extra charges, exclusions). */
  extraNote?: string;
  /** Direct Square link for this service. */
  squareUrl?: string;
  image?: string;
  imagePosition?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'A',
    squareUrl: `${SQUARE_SERVICE_BASE}FUXSK7QF6FYHQWXPREIC4U5E`,
    depositRequired: true,
    image: '/images/privex-russian-builder-gel.png',
    imagePosition: '50% 0%',
    category: 'manicure',
    title: 'Privéx Russian Builder Gel',
    priceFormatted: 'Starting at $80',
    durationFormatted: '120 min',
    basePrice: 80,
    isStartingPrice: true,
    shortDescription: 'Most popular Russian Manicure with Builder Gel for stronger natural nails and long-lasting finish. Nail art/extensions available as add-ons.',
    fullDescription: 'Our signature dry e-file technique meticulously cleans and exfoliates dead cuticle tissue with surgical precision. A structured apex overlay of hypoallergenic Builder Gel reinforces your natural nail architecture, preventing breakage while enabling optimal regrowth with zero lifting.',
    techniqueNote: 'Includes up to 90% gentle de-bulking removal of prior Builder Gel. We do not do standard "fills"; each set is rebalanced from the base with dry cuticle prep.',
    addonsAllowed: true,
  },
  {
    id: 'B',
    squareUrl: `${SQUARE_SERVICE_BASE}VTK5DTWW6NHY66TATBPGC7BD`,
    depositRequired: false,
    image: '/images/classic-manicure.png',
    category: 'manicure',
    title: 'Classic Manicure',
    priceFormatted: '$60',
    durationFormatted: '50 min',
    basePrice: 60,
    shortDescription: 'Detailed Russian Manicure with clear gel top coat or natural finish without color. Ideal for women or men.',
    fullDescription: 'A focused, high-precision dry manicure dedicated exclusively to optimal nail plate health, clean cuticle arches, and smooth sidewalls. Sealed with an optional micro-thin protective clear gel coat or high-shine natural buff.',
    techniqueNote: 'Waterless treatment preserving natural keratin integrity. Perfect maintenance visit for busy professionals.',
    addonsAllowed: false,
  },
  {
    id: 'C',
    squareUrl: `${SQUARE_SERVICE_BASE}APAZMUJDJ7BUQ2TIRMNHW3YM`,
    depositRequired: false,
    guaranteeDays: 7,
    image: '/images/gel-russian-manicure.png',
    imagePosition: '50% 0%',
    category: 'manicure',
    title: 'Gel Russian Manicure',
    priceFormatted: '$70',
    durationFormatted: '80 min',
    basePrice: 70,
    shortDescription: 'Detailed Russian Manicure finished with one solid gel polish color. No Builder Gel, art, or extensions included.',
    fullDescription: 'Comprehensive dry e-file cuticle detailing followed by precision application of a single solid gel shade nestled flush under the proximal nail fold for the cleanest 3-4 week regrowth line.',
    techniqueNote: 'No structural builder gel or nail enhancements included. If reinforcement or extension is needed, choose Russian Builder Gel.',
    addonsAllowed: false,
  },
  {
    id: 'D',
    squareUrl: `${SQUARE_SERVICE_BASE}OILJELBSSPUQX4UTGR364O36`,
    depositRequired: true,
    image: '/images/privex-gel-x-extensions.png',
    imagePosition: '50% 0%',
    category: 'manicure',
    title: 'Privéx Gel-X Extensions',
    priceFormatted: '$110',
    durationFormatted: '120 min',
    basePrice: 110,
    shortDescription: 'Detailed Russian Manicure, Gel-X extensions, and one solid color. Nail art/extra length available as add-ons.',
    fullDescription: 'Full dry Russian cuticle preparation combined with full-coverage soft gel Gel-X extensions. Provides instant length and elegant contouring without the harsh chemicals or nail damage associated with acrylic.',
    techniqueNote: 'Includes full-cover tips and single solid gel color. Extra length or custom nail art should be selected during intake.',
    addonsAllowed: true,
  },
  {
    id: 'E',
    squareUrl: `${SQUARE_SERVICE_BASE}UCJ3RN6PAXXTH2MFKIW5LIG3`,
    depositRequired: false,
    image: '/images/signature-gel-pedicure.png',
    imagePosition: '50% 60%',
    category: 'pedicure',
    title: 'Signature Gel Pedicure',
    priceFormatted: '$60',
    durationFormatted: '60 min',
    basePrice: 60,
    shortDescription: 'Refresh your feet with a gentle dry pedicure that brings together essential care and a beautifully polished finish.',
    fullDescription: 'Ideal for regular maintenance, this service leaves your feet feeling fresh, hydrated, and cared for while you enjoy a quiet moment to yourself.',
    included: ['Removal of previous gel polish', 'Nail trimming and shaping', 'Gentle cuticle care', 'Light heel exfoliation', 'Warm towels', 'Moisturizing finish', 'One gel color'],
    extraNote: 'Nail art and nail repairs are available for an additional charge.',
    addonsAllowed: true,
  },
  {
    id: 'F',
    squareUrl: `${SQUARE_SERVICE_BASE}ILBKCWWOC2F35SZ4HVTZ74HO`,
    depositRequired: false,
    image: '/images/russian-pedicure.png',
    imagePosition: '50% 60%',
    category: 'pedicure',
    title: 'Russian Pedicure',
    priceFormatted: '$80',
    durationFormatted: '90 min',
    basePrice: 80,
    shortDescription: 'An elevated pedicure experience combining meticulous care with soothing moments of relaxation.',
    fullDescription: 'Our detailed dry technique focuses on thorough cuticle work and deeper heel exfoliation for a soft, refined finish. Gentle steam, warm towels, and a relaxing massage make this an invitation to slow down and unwind.',
    included: ['Removal of previous gel polish', 'Nail trimming and shaping', 'Detailed cuticle care', 'Deep heel exfoliation', 'Gentle steam', 'Warm towels', 'Relaxing massage', 'One gel color'],
    extraNote: 'Nail art and nail repairs are available for an additional charge.',
    addonsAllowed: true,
  },
  {
    id: 'G',
    squareUrl: `${SQUARE_SERVICE_BASE}3RON5JW573NDSJH2LIZTTVE2`,
    depositRequired: false,
    image: '/images/classic-pedicure.png',
    imagePosition: '50% 60%',
    category: 'pedicure',
    title: 'Classic Pedicure',
    priceFormatted: '$70',
    durationFormatted: '50 min',
    basePrice: 70,
    shortDescription: 'Thoughtful care for naturally beautiful feet. Designed for ladies and gentlemen.',
    fullDescription: 'This dry pedicure offers the detailed cuticle and heel care of our Russian Pedicure without color. Enjoy gentle steam, warm towels, and a soothing massage for a refreshing experience with a clean, natural finish.',
    included: ['Nail trimming and shaping', 'Detailed cuticle care', 'Deep heel exfoliation', 'Gentle steam', 'Warm towels', 'Relaxing massage', 'Optional clear regular top coat'],
    extraNote: 'Color, gel top coat, nail art, and nail repairs are available for an additional charge. Removal of existing product is not included and costs an additional $10.',
    addonsAllowed: true,
  },
];

/** Text supports **bold** markers for key phrases. */
export const POLICIES = [
  {
    title: 'Booking & Deposits',
    items: [
      'A **deposit is required only for select services.** It is clearly marked on each service and at checkout, and is applied to your final total.',
      'A **card on file** is required to secure every appointment.',
      'We are **100% by appointment only** — no walk-ins.',
    ],
  },
  {
    title: 'Cancellations & No-Shows',
    items: [
      'Cancel or reschedule **at least 48 hours in advance** and your deposit can be **refunded or transferred** to a new appointment.',
      'Cancellations with **less than 48 hours’ notice** or **no-shows** forfeit the deposit.',
      '**Same-day cancellations** are charged **100% of the booked service price.**',
    ],
  },
  {
    title: 'Late Arrivals & Guarantee',
    items: [
      '**10-minute grace period.** Arrivals beyond 10 minutes may need to be rescheduled and are treated as a late cancellation.',
      '**7-Day Guarantee** on the Gel Russian Manicure: if lifting or chipping occurs within 7 days, we repair it at no cost.',
    ],
  },
  {
    title: 'Removals & Add-Ons',
    items: [
      'Removal of previous Privéx Builder Gel is **complimentary.**',
      'Foreign acrylic, SNS or dip powder removal (**Soak Off**) **starts at $15** and adds about 30 minutes — add it to your appointment in Square when booking.',
      'If you arrive with foreign product and Soak Off was not booked, **an extra charge may apply or your appointment may need to be rescheduled.**',
      'Add-ons chosen on our website are **not added automatically** — please select them again in Square so enough time is reserved.',
      'Nail art and extra length should be **selected in advance** so we reserve enough time.',
    ],
  },
  {
    title: 'Studio Etiquette & Health',
    items: [
      'Clients must be **16+ years old**; under 18 requires signed parental consent.',
      '**No children or guests** inside the treatment room.',
      'Please keep the studio serene: **no speakerphone or video calls** during your service.',
      'Let us know about any **skin sensitivities, dermatitis, eczema or allergies** before your treatment.',
    ],
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_CATEGORIES: { category: string; questions: FAQItem[] }[] = [
  {
    category: 'Russian Manicure & Nail Services',
    questions: [
      {
        q: 'What distinguishes a Russian Manicure from traditional nail care?',
        a: 'The Russian (dry/e-file) technique uses precision diamond bits under magnification rather than water soaks and cutting nippers. By working strictly dry, we safely exfoliate non-living cuticle tissue without traumatizing the proximal nail fold, allowing polish to be painted millimeter-close to the skin for an unmatched 3–4 week pristine regrowth.',
      },
      {
        q: 'Is the dry Russian Manicure painful or damaging to natural nails?',
        a: 'Not when performed by trained technicians. Founder Ari Márquez personally certifies every Privéx specialist in gentle e-file calibration. The natural nail plate is never thinned or over-filed; only dead tissue is buffed away.',
      },
      {
        q: 'Why do you not perform standard nail fills?',
        a: 'Rather than sandwiching old lifted material under new coats, we debulk approximately 90% of the existing Builder Gel at every visit. This ensures zero trapped bacteria, restores correct apex architecture, and guarantees your natural nail plate stays completely healthy.',
      },
      {
        q: 'What is Builder Gel vs. Regular Gel Polish?',
        a: 'Standard gel is a flexible color coating that provides no structural support. Privéx Builder Gel is a viscous, reinforced soak-off gel that builds a protective apex over your natural nail, making it virtually impervious to bending, splitting, and snapping.',
      },
      {
        q: 'Can I get nail art or extensions with my appointment?',
        a: 'Yes. We offer Gel-X full-coverage soft gel extensions as well as custom nail art. Please select the Nail Art add-on during booking so we allocate the proper time to your appointment.',
      },
      {
        q: 'Can you work over existing acrylic or dip powder (SNS)?',
        a: 'We do not apply acrylic or dip powder. If you arrive with foreign acrylic or dip powder, we must fully remove it (starting at $15) prior to performing your Russian manicure. Please disclose foreign products when booking.',
      },
      {
        q: 'What if I have eczema, dermatitis, or sensitive cuticles?',
        a: 'Please disclose any conditions on your intake form. Our technicians adjust bit grit, speed, and topical soothing serums to accommodate sensitive skin barriers comfortably and safely.',
      },
      {
        q: 'What is the minimum age requirement for appointments?',
        a: 'All clients must be at least 16 years old. Anyone under 18 requires written parent or guardian consent prior to treatment.',
      },
      {
        q: 'How long will my Russian Manicure last?',
        a: 'Because our dry preparation allows color application beneath the proximal skin line, clients routinely enjoy pristine, chip-free results for 3 to 4 full weeks.',
      },
    ],
  },
  {
    category: 'Russian & Dry Pedicure',
    questions: [
      {
        q: 'What does a 100% "Dry Pedicure" mean?',
        a: 'A dry pedicure completely eliminates traditional water footbaths. Traditional soaking basins are notorious vectors for bacteria, fungi, and microbial cross-contamination. Furthermore, water swells the nail keratin, leading to premature polish peeling.',
      },
      {
        q: 'What are the physiological benefits of waterless foot care?',
        a: 'Dry podiatry bits gently smooth calluses and cuticles without shredding skin. Waterlogged skin can easily be over-abraded; dry work allows precision tactile feedback, ensuring healthy tissue is preserved while dry skin is polished away.',
      },
      {
        q: 'Are Russian Dry Pedicures suitable for men?',
        a: 'Yes, absolutely. Our Classic Pedicure is designed for ladies and gentlemen, and is popular among men who prioritize foot hygiene, calloused skin smoothing, and clean, healthy toenail maintenance.',
      },
      {
        q: 'Can I choose a natural buff finish instead of gel polish?',
        a: 'Yes. You can opt for a high-gloss micro-buff finish or a clear strengthening coat instead of colored gel polish on any pedicure service.',
      },
    ],
  },
  {
    category: 'Appointments & Studio Policies',
    questions: [
      {
        q: 'Who performs the services at Privéx Studio?',
        a: 'Every single nail artist at Privéx has been personally hand-trained and certified by founder Ari Márquez in strict European dry hygiene standards, ensuring uniform artistry across all chairs.',
      },
      {
        q: 'Do all services require a deposit?',
        a: 'No. A deposit is required **only for select services**, and it is clearly marked on each service and when you book. When required, it is applied to your final total.',
      },
      {
        q: 'What is the studio cancellation and rescheduling policy?',
        a: 'With **at least 48 hours’ notice**, your deposit can be refunded or transferred to a new appointment. Cancellations with **less than 48 hours’ notice** or **no-shows** forfeit the deposit, and **same-day cancellations are charged 100% of the service price.**',
      },
      {
        q: 'What is the late arrival grace period?',
        a: 'We extend a strict 10-minute grace window. Due to the meticulous nature of Russian manicure appointments, arriving more than 10 minutes late may require rescheduling and is treated as a late cancellation.',
      },
      {
        q: 'What is your 7-Day Guarantee?',
        a: 'If any gel lifting, chipping, or breakage attributable to service application occurs within **7 days** of your Gel Russian Manicure, contact us and and we will repair it free of charge.',
      },
      {
        q: 'Can I bring my child, friend, or partner with me?',
        a: 'To maintain a peaceful, hygienic, hospital-grade sanctuary, no children and no inside accompanying guests are allowed. Adult companions may wait in the outer retail complex.',
      },
      {
        q: 'Can I take business calls or zoom meetings during my service?',
        a: 'No. To ensure technician concentration and preserve studio serenity for other clients, no speakerphone calls or video conferences are permitted.',
      },
      {
        q: 'What payment methods do you accept at checkout?',
        a: 'We accept cash, all major credit/debit cards (Visa, MasterCard, Amex, Discover), Apple Pay, and Google Pay. We never charge credit card surcharge fees.',
      },
      {
        q: 'Do you accept walk-in appointments?',
        a: 'No. Privéx Studio operates 100% strictly by appointment only to ensure every client receives unhurried, private care.',
      },
      {
        q: 'Where is Privéx Studio located?',
        a: 'We are in the Birmingham area, at 300 Lorna Square, Suite 312, Hoover, AL 35216, with convenient parking right outside.',
      },
      {
        q: 'How can I reach the studio if I have questions?',
        a: 'Text us directly at (863) 257-8841. We operate as text-only to avoid interrupting treatments with ringing phones.',
      },
    ],
  },
];

export interface AddOn {
  name: string;
  price: string;
  description: string;
  images?: string[];
  /** Shown as a small highlighted line, e.g. who can perform it. */
  note?: string;
  /** Direct Square link when the add-on can be booked on its own. */
  squareUrl?: string;
}

export const ADDONS: AddOn[] = [
  { name: 'Chrome Effect Nail Art', price: '$15', squareUrl: `${SQUARE_SERVICE_BASE}BI3PVUHVE4FEIJQFAMBS2CNW`, description: 'A luminous finish that creates a beautiful pearlescent, glazed, or reflective effect on your nails.', images: ['/images/addon-chrome.png'] },
  { name: 'Cat Eye Effect Nail Art', price: '$15', squareUrl: `${SQUARE_SERVICE_BASE}7BWW64FFLLC65TML44O7GHGM`, description: 'A magnetic gel effect that creates depth, dimension, and a captivating light-reflecting finish.', images: ['/images/addon-cat-eye.png'] },
  { name: 'French Nail Art (Hands & Feet)', price: '$15', squareUrl: `${SQUARE_SERVICE_BASE}POZDED2KMGJ4CLAF3EPXGBM6`, description: 'A timeless, elegant design featuring clean, precise tips for a sophisticated finish.', images: ['/images/addon-french.png'] },
  { name: 'Baby Boomer', price: '$25', squareUrl: `${SQUARE_SERVICE_BASE}HW6V354B3UKIQBP57DUUDEGD`, description: 'A soft, seamless ombré transition between natural pink and milky white for an elegant, timeless finish.' },
  {
    name: 'Intricate Nail Art',
    price: 'Starting at $30',
    squareUrl: `${SQUARE_SERVICE_BASE}VKDYDU7PZFTVRSVWD2OHA536`,
    description: 'Detailed, customized nail designs featuring intricate patterns, fine-line artwork, and creative elements. Pricing and service time vary depending on complexity.',
    note: 'Available exclusively with Ari.',
    images: [1, 2, 3, 4, 5].map((n) => `/images/intricate-nail-art-${n}.png`),
  },
];

export const EXTRA_ADDONS: AddOn[] = [
  { name: 'Nail Extensions (Full Set – 10 Fingernails)', price: '$15', squareUrl: `${SQUARE_SERVICE_BASE}UJE5IIAEM2CR7UFGULYNOZBE`, description: 'Add length to all ten fingernails with extensions for a customized, elegant look. Additional service time is required.' },
  { name: 'Cut Down & Reshape (Hands Only)', price: '$8', squareUrl: `${SQUARE_SERVICE_BASE}2PI3TROK72OSZIBOUCUDCGW6`, description: 'Shorten and reshape your fingernails to achieve your desired length and shape.' },
  { name: 'Paraffin Treatment', price: '$25', squareUrl: `${SQUARE_SERVICE_BASE}SPJRWS7OP543DQELGVYWE24I`, description: 'A warm paraffin treatment designed to deeply hydrate and soften the skin. Perfect for dry hands and cuticles, it restores moisture and leaves your hands feeling smooth, nourished, and refreshed.' },
  { name: 'Soak Off (Acrylic & Dip Powder Removal)', price: 'Starting at $15', squareUrl: `${SQUARE_SERVICE_BASE}Y2RVCA44HOSR3AUCTFTJSQQO`, description: 'Professional removal of acrylic or dip powder products. Pricing varies depending on nail length, product thickness, type of material, and the time required for safe removal.' },
  { name: 'Nail Repair', price: 'Starting at $5', description: 'Repair a damaged, cracked, or broken nail to restore its appearance and structure. Pricing varies depending on the extent of the repair.' },
];

export interface Review {
  name: string;
  text: string;
}

export const REVIEWS: Review[] = [
  { name: 'Danielle Collins', text: 'The absolute best! I truthfully do not trust anyone else, Ari is beyond talented!!' },
  { name: 'Samantha Wells', text: 'I have an amazing experience! The environment was clean and peaceful. Ari and Meiby are so nice and welcoming. My nails came out beautifully!' },
  { name: 'Kayla Anderson', text: 'Ari is one of the most talented nail artists I’ve ever been to. Her attention to detail is incredible, she offers a great variety of products, and she makes sure your nails are absolutely perfect. Her studio is clean and welcoming, with music, Netflix, and refreshments to make the experience even better. I highly recommend her!' },
  { name: 'Ely', text: 'Meiby did an extraordinary job with my pedicure! I just moved to the state & was looking for a nail technician that did both nails & toes. I came across privexstudio on TikTok & I had to come in to give them a try, as a nail tech myself I was looking for someone detailed oriented to not just the nails but the maintenance of my feet. Thank you Meiby for the wonderful experience, I will definitely be back!' },
  { name: 'Hasna Khandekar', text: 'Excellent nails everytime with the manicure and pedicure I ever got!! Literally have to book months in advance because she’s so good and always busy!!!' },
  { name: 'Anna Gabriella Pharo', text: 'I have been going to Ari for about 2 years now I believe and it is wonderful. I went through many techs before landing on her. Her designs are gorgeous and the shaping+attention to detail is flawless. My pedicures by Meiby are amazing as well and very neat+clean. Its something I will not go without. I love having my nails done here and always recommend it highly.' },
  { name: 'Kathryn H.', text: 'I absolutely love this nail salon and go out of my way to go here. I am a germaphobe, so the 100 health rating and cleanliness really put me at ease. I have never had a better manicure and pedicure. Ari did my Russian manicure and Meiby did my pedicure today. Both are top notch nail techs that are great at what they do. My cuticles and feet feel amazing. Highly recommend Nails by Ari to everyone. 5 Stars!' },
  { name: 'Marisa Morris', text: 'Absolute 5-star experience! Ari was incredibly attentive to detail, so kind, and made me feel completely comfortable from start to finish. She truly went above and beyond to make sure my nails came out absolutely perfect. I have honestly never had such beautiful nails! I can’t stop looking at them and will definitely be coming back to see Ari. Highly recommend!' },
  { name: 'Mary Hutto', text: 'Meiby gave me the best pedicure I have ever had!! Her attention to detail was excellent! My toes have never been as hydrated, cleaned, and shaped like this before. I loved my experience everyone is so kind! Book – I promise you will not be disappointed!' },
  { name: 'adrian slaton', text: 'Arianne is so sweet and knowledgeable! She creates a great experience from start to finish and the results are always spot on! Thank you!' },
  { name: 'Amber Alexander', text: 'I love Ari I go in after a long shift and she makes me feel pampered and loved and not to mention my nails are chefs kiss every time.' },
  { name: 'Valerie Jones', text: 'It was an amazing experience! The best I’ve ever had! I can’t wait to come back and see how healthy my nails can grow.' },
];

/** Add-ons a client can pre-select on a service page (reminded again before Square). */
export const BOOKABLE_ADDONS: AddOn[] = [...ADDONS, ...EXTRA_ADDONS].filter((a) => !a.name.startsWith('Soak Off'));

/** Lowest dollar amount in a price label, or null when there is none (e.g. "Price coming soon"). */
export const priceValue = (price: string): number | null => {
  const m = price.match(/\$(\d+)/);
  return m ? Number(m[1]) : null;
};
