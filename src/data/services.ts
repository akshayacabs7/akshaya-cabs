// Akshaya Cabs — Service Category Data
// akshayacabs.com | Tirupati, Andhra Pradesh
// 9 core service categories — all verified against master execution plan Section 01F.
//
// RULES:
// - No false real-time feature claims (GPS tracking, flight tracking, train tracking).
// - No live vehicle availability — we confirm via WhatsApp/phone.
// - Content descriptions must be independently written — not copied from SVTT.
// - All 9 service categories must be preserved (feature parity requirement).
// - Complete bilingual EN+TE coverage for titles, descriptions, features, and CTAs.

import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "local-cab",
    slug: "local-cab-services",
    title: "Tirupati Local Cab Services",
    titleTe: "తిరుపతి స్థానిక క్యాబ్ సేవలు",
    shortTitle: "Local Cabs",
    shortTitleTe: "స్థానిక క్యాబ్స్",
    description:
      "Comfortable and reliable local cab services for all your travel needs within Tirupati. Whether it is a temple visit, hospital trip, city sightseeing, hotel transfer, or a local errand — our well-maintained AC cabs and professional drivers are ready to assist, any time of day.",
    descriptionTe:
      "తిరుపతి నగరంలో మీ అన్ని ప్రయాణ అవసరాల కోసం సౌకర్యవంతమైన మరియు విశ్వసనీయ స్థానిక క్యాబ్ సేవలు. ఆలయ దర్శనాలు, హాస్పిటల్ ట్రిప్పులు, నగర వీక్షణ, హోటల్ బదిలీలు లేదా స్థానిక పనుల కోసం — మా శుభ్రమైన AC క్యాబ్‌లు మరియు మర్యాదపూర్వక డ్రైవర్లు ఎల్లప్పుడూ సిద్ధంగా ఉంటారు.",
    icon: "MapPin",
    image: "/images/akshaya/services/local-cab.webp",
    features: [
      "All major Tirupati landmarks covered",
      "Flexible local day packages",
      "Temple city sightseeing routes",
      "Punctual, courteous drivers",
      "AC & Wi‑Fi enabled vehicles",
      "Available 24 hours a day, 7 days a week",
    ],
    featuresTe: [
      "తిరుపతిలోని అన్ని ప్రధాన ప్రాంతాలు కవర్ చేయబడతాయి",
      "ఫ్లెక్సిబుల్ స్థానిక దినసరి ప్యాకేజీలు",
      "ఆలయ నగర వీక్షణ మార్గాలు",
      "సమయపాలన పాటించే, మర్యాదపూర్వక డ్రైవర్లు",
      "AC మరియు Wi‑Fi సౌకర్యం గల వాహనాలు",
      "రోజుకు 24 గంటలు, వారానికి 7 రోజులు అందుబాటులో",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Local Cab",
    ctaTe: "స్థానిక క్యాబ్ బుక్ చేయండి",
  },
  {
    id: "tirumala-taxi",
    slug: "tirumala-taxi-services",
    title: "Tirupati to Tirumala Taxi",
    titleTe: "తిరుపతి నుండి తిరుమల టాక్సీ సేవలు",
    shortTitle: "Tirumala Taxi",
    shortTitleTe: "తిరుమల టాక్సీ",
    description:
      "Dedicated taxi service from Tirupati to Tirumala, operated by experienced local drivers who are thoroughly familiar with the ghat road. We ensure a safe, comfortable, and timely journey for your Tirumala darshan — available at any hour.",
    descriptionTe:
      "తిరుపతి నుండి తిరుమలకు ప్రత్యేక టాక్సీ సేవలు. ఘాట్ రోడ్లు మరియు భద్రతా నిబంధనలపై పూర్తి అవగాహన ఉన్న అనుభవజ్ఞులైన స్థానిక డ్రైవర్లు. మీ తిరుమల శ్రీవారి దర్శనం కోసం సురక్షితమైన, సౌకర్యవంతమైన ప్రయాణాన్ని ఏ సమయంలోనైనా అందిస్తాము.",
    icon: "Mountain",
    image: "/images/akshaya/services/tirumala-taxi.webp",
    features: [
      "Tirupati to Tirumala and back",
      "Experienced ghat-road drivers",
      "Available around the clock",
      "AC & Wi‑Fi vehicles for all group sizes",
      "Safe and punctual service",
    ],
    featuresTe: [
      "తిరుపతి నుండి తిరుమల మరియు తిరుగు ప్రయాణం",
      "అనుభవజ్ఞులైన ఘాట్ రోడ్ డ్రైవర్లు",
      "24 గంటలూ నిరంతర సేవ అందుబాటులో",
      "అన్ని బృంద పరిమాణాలకు AC & Wi‑Fi వాహనాలు",
      "సురక్షితమైన, సమయపాలన గల ప్రయాణం",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Tirumala Taxi",
    ctaTe: "తిరుమల టాక్సీ బుక్ చేయండి",
  },
  {
    id: "temple-tours",
    slug: "temple-tour-packages",
    title: "Temple Tour Packages",
    titleTe: "దేవాలయ టూర్ ప్యాకేజీలు",
    shortTitle: "Temple Tours",
    shortTitleTe: "దేవాలయ టూర్లు",
    description:
      "Thoughtfully planned pilgrimage tour packages covering the most sacred temples in and around Tirupati and across South India. From city-level Tirupati temple darshans to multi-day inter-state pilgrimage journeys — we have a package to suit every devotee.",
    descriptionTe:
      "తిరుపతి పరిసరాలు మరియు దక్షిణ భారతదేశంలోని పరమ పవిత్ర ఆలయాలను దర్శించే పక్కా ప్రణాళికతో కూడిన తీర్థయాత్రా ప్యాకేజీలు. నగర స్థాయి ఆలయాల నుండి బహుళ రోజుల అంతర్రాష్ట్ర యాత్రల వరకు — ప్రతి భక్తుని అవసరాలకు సరిపోయే ప్యాకేజీలు ఉన్నాయి.",
    icon: "Landmark",
    image: "/images/akshaya/packages/akc0001-tirupati-tirumala.webp",
    features: [
      "10 planned pilgrimage packages",
      "Local, nearby and outstation options",
      "Comfortable AC & Wi‑Fi vehicles",
      "Multi-day South India tours",
      "Clear inclusions and exclusions",
      "Enquiry-based with confirmed pricing",
    ],
    featuresTe: [
      "10 క్యూరేటెడ్ ఆధ్యాత్మిక ప్యాకేజీలు",
      "స్థానిక, సమీప మరియు అవుట్‌స్టేషన్ ఎంపికలు",
      "సౌకర్యవంతమైన AC & Wi‑Fi వాహనాలు",
      "బహు-రోజుల దక్షిణ భారత తీర్థయాత్రలు",
      "స్పష్టమైన చేర్పులు మరియు మినహాయింపులు",
      "నిర్ధారిత పారదర్శక ధరలు",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12"],
    cta: "View All Packages",
    ctaTe: "అన్ని ప్యాకేజీలు చూడండి",
  },
  {
    id: "outstation-cabs",
    slug: "outstation-cab-services",
    title: "Outstation Cabs",
    titleTe: "అవుట్‌స్టేషన్ క్యాబ్ సేవలు",
    shortTitle: "Outstation Cabs",
    shortTitleTe: "అవుట్‌స్టేషన్ క్యాబ్స్",
    description:
      "Intercity cab service from Tirupati to Chennai, Bangalore, Hyderabad, Vijayawada and all major cities across Andhra Pradesh, Tamil Nadu, Karnataka, Telangana and Kerala. Comfortable AC vehicles with experienced long-distance drivers. One-way and round-trip options available.",
    descriptionTe:
      "తిరుపతి నుండి చెన్నై, బెంగళూరు, హైదరాబాద్, విజయవాడ మరియు ఆంధ్రప్రదేశ్, తమిళనాడు, కర్ణాటక, తెలంగాణ అంతటా అంతర్-నగర క్యాబ్ సేవలు. హైవేలపై దీర్ఘ ప్రయాణాల అనుభవం ఉన్న డ్రైవర్లతో సౌకర్యవంతమైన AC వాహనాలు. వన్-వే మరియు రౌండ్-ట్రిప్ సదుపాయం.",
    icon: "Navigation",
    image: "/images/akshaya/services/outstation-cab.webp",
    features: [
      "All major South Indian cities covered",
      "One-way and round-trip options",
      "AC & Wi‑Fi comfort on long journeys",
      "300 km/day included in base fare",
      "Tolls, parking paid separately by customer",
      "Experienced highway drivers",
    ],
    featuresTe: [
      "దక్షిణ భారతదేశంలోని అన్ని ప్రధాన నగరాలకు సేవ",
      "వన్-వే మరియు రౌండ్-ట్రిప్ ఆప్షన్లు",
      "సుదీర్ఘ ప్రయాణాల్లో AC & Wi‑Fi సౌకర్యం",
      "ప్రాథమిక రేటులో రోజుకు 300 కి.మీ చేర్చబడింది",
      "టోల్స్ మరియు పార్కింగ్ కస్టమర్ చెల్లిస్తారు",
      "అనుభవజ్ఞులైన హైవే డ్రైవర్లు",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "force-urbania-12"],
    cta: "Book Outstation Cab",
    ctaTe: "అవుట్‌స్టేషన్ క్యాబ్ బుక్ చేయండి",
  },
  {
    id: "airport-transfers",
    slug: "airport-pickup-drop",
    title: "Tirupati Airport Pickup & Drop",
    titleTe: "తిరుపతి విమానాశ్రయం పికప్ & డ్రాప్",
    shortTitle: "Airport Transfers",
    shortTitleTe: "విమానాశ్రయ బదిలీ",
    description:
      "Professional cab service to and from Tirupati Airport. Our drivers arrive on time for your departure and are ready to receive you on arrival — available for early morning, late night and all scheduled flights. No extra waiting charges for minor delays.",
    descriptionTe:
      "తిరుపతి (రేణిగుంట) విమానాశ్రయానికి ప్రొఫెషనల్ క్యాబ్ సేవలు. విమానం బయలుదేరే సమయానికి సకాలంలో చేరుస్తారు మరియు మీరు దిగినప్పుడు రిసీవ్ చేసుకుంటారు. తెల్లవారుజామున మరియు అర్ధరాత్రి విమానాలన్నింటికీ అందుబాటులో ఉంటుంది.",
    icon: "Plane",
    image: "/images/akshaya/services/airport-transfer.webp",
    features: [
      "Tirupati Airport pickup and drop",
      "Available for all flight timings",
      "Clean AC cabs with Wi‑Fi onboard",
      "Early morning and late-night service",
      "Luggage assistance included",
      "Professional and courteous drivers",
    ],
    featuresTe: [
      "తిరుపతి విమానాశ్రయం పికప్ మరియు డ్రాప్",
      "అన్ని షెడ్యూల్డ్ విమాన సమయాలకు లభ్యం",
      "Wi‑Fi తో కూడిన శుభ్రమైన AC క్యాబ్‌లు",
      "తెల్లవారుజాము & అర్ధరాత్రి సర్వీసులు",
      "లగేజీ నిర్వహణలో సహాయం",
      "మర్యాదపూర్వక డ్రైవర్లు",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Airport Transfer",
    ctaTe: "విమానాశ్రయ క్యాబ్ బుక్ చేయండి",
  },
  {
    id: "railway-transfers",
    slug: "railway-station-transfers",
    title: "Railway Station Transfers",
    titleTe: "రైల్వే స్టేషన్ బదిలీ సేవలు",
    shortTitle: "Railway Transfers",
    shortTitleTe: "రైల్వే బదిలీ",
    description:
      "Hassle-free cab service to and from Tirupati Railway Station. Whether you are arriving for a Tirumala pilgrimage or departing after your visit, our drivers will be ready and waiting with a clean, comfortable vehicle.",
    descriptionTe:
      "తిరుపతి మరియు రేణిగుంట రైల్వే స్టేషన్లకు ఇబ్బంది లేని క్యాబ్ సేవలు. మీరు తిరుమల దర్శనానికి వస్తున్నా లేదా యాత్ర ముగించుకుని తిరిగి వెళ్తున్నా, మా డ్రైవర్లు పరిశుభ్రమైన వాహనంతో సిద్ధంగా వేచి ఉంటారు.",
    icon: "Train",
    image: "/images/akshaya/services/railway-station-transfer.webp",
    features: [
      "Tirupati Railway Station pickup and drop",
      "Available 24 hours a day, 7 days a week",
      "Clean AC cabs with Wi‑Fi onboard",
      "Luggage handling assistance",
      "Direct routes to hotels and temples",
      "Reliable and punctual drivers",
    ],
    featuresTe: [
      "తిరుపతి & రేణిగుంట రైల్వే స్టేషన్ పికప్/డ్రాప్",
      "రోజుకు 24 గంటలు అందుబాటులో",
      "Wi‑Fi తో కూడిన శుభ్రమైన AC క్యాబ్‌లు",
      "లగేజీ సహాయం",
      "హోటళ్లు మరియు ఆలయాలకు నేరుగా రవాణా",
      "విశ్వసనీయ మరియు సమయపాలన గల సేవ",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta"],
    cta: "Book Station Transfer",
    ctaTe: "స్టేషన్ క్యాబ్ బుక్ చేయండి",
  },
  {
    id: "tempo-traveller",
    slug: "tempo-traveller-rental",
    title: "Tempo Traveller Rentals",
    titleTe: "టెంపో ట్రావెలర్ అద్దెలు",
    shortTitle: "Tempo Traveller",
    shortTitleTe: "టెంపో ట్రావెలర్",
    description:
      "Spacious Tempo Traveller hire and Force Urbania luxury van rental for group travel in and around Tirupati. Available in Tempo Traveller 12+1 and Force Urbania 12 Seater configurations — ideal for pilgrimage groups, family gatherings, corporate outings, and community trips. All vehicles are AC-equipped with push-back seats.",
    descriptionTe:
      "తిరుపతిలో పెద్ద బృందాలు మరియు కుటుంబాల కోసం విశాలమైన టెంపో ట్రావెలర్ (12+1) మరియు ఫోర్స్ అర్బానియా (12 సీటర్) అద్దె సేవలు. యాత్రా బృందాలు, కుటుంబ కలయికలు మరియు ఈవెంట్లకు అత్యుత్తమం. పుష్-బ్యాక్ సీట్లతో కూడిన AC వాహనాలు.",
    icon: "Bus",
    image: "/images/akshaya/services/tempo-traveller-group.webp",
    features: [
      "Tempo Traveller 12+1 and Force Urbania 12 Seater",
      "Fully AC with push-back reclining seats & Wi‑Fi",
      "Ample luggage storage space",
      "Suitable for group pilgrimages and events",
      "Experienced group-travel drivers",
    ],
    featuresTe: [
      "టెంపో ట్రావెలర్ 12+1 మరియు ఫోర్స్ అర్బానియా 12 సీటర్",
      "పుష్-బ్యాక్ రెక్లైనింగ్ సీట్లు & Wi‑Fi తో పూర్తి AC",
      "విశాలమైన లగేజీ నిల్వ స్థలం",
      "పెద్ద బృంద యాత్రలకు ఎంతో అనువైనది",
      "గ్రూప్ ప్రయాణాల్లో అనుభవం గల డ్రైవర్లు",
    ],
    vehicles: ["tempo-traveller-12", "force-urbania-12"],
    cta: "Book Tempo Traveller / Urbania",
    ctaTe: "టెంపో ట్రావెలర్ / అర్బానియా బుక్ చేయండి",
  },
  {
    id: "customized-tours",
    slug: "customized-tours",
    title: "Customized Tours",
    titleTe: "కస్టమైజ్డ్ టూర్లు & ప్రత్యేక ప్రణాళికలు",
    shortTitle: "Custom Tours",
    shortTitleTe: "కస్టమ్ టూర్లు",
    description:
      "Have a unique travel plan? We can arrange a custom itinerary for individuals, families and groups — across any destinations in South India. Share your required places, preferred dates, group size and we will plan a comfortable and well-priced trip for you.",
    descriptionTe:
      "మీకు ప్రత్యేక ప్రయాణ ఆలోచన ఉందా? వ్యక్తులు, కుటుంబాలు మరియు గ్రూపుల కోసం దక్షిణ భారతదేశం అంతటా మీ ఇష్టానుసారం టూర్ ప్లాన్ చేస్తాము. మీరు సందర్శించాలనుకునే ప్రదేశాలు, తేదీలు మరియు బృంద పరిమాణం చెబితే మేము ఉత్తమమైన ప్రయాణ ప్రణాళికను తయారు చేస్తాము.",
    icon: "Route",
    image: "/images/akshaya/services/outstation-cab.webp",
    features: [
      "Tailor-made itineraries for any route",
      "AC & Wi‑Fi enabled vehicles for all routes",
      "Any destinations across South India",
      "Flexible duration and travel dates",
      "Multi-day and multi-vehicle support",
      "Competitive and transparent pricing",
    ],
    featuresTe: [
      "ఏ మార్గానికైనా అనుకూల ప్రయాణ ప్రణాళిక",
      "అన్ని మార్గాలకు AC & Wi‑Fi వాహనాలు",
      "దక్షిణ భారతదేశంలోని ఏ గమ్యస్థానానికైనా",
      "సౌకర్యవంతమైన ప్రయాణ వ్యవధి మరియు తేదీలు",
      "బహు-రోజుల మరియు బహుళ-వాహనాల సదుపాయం",
      "పోటీతత్వ మరియు పారదర్శక ధరలు",
    ],
    vehicles: ["dzire-amaze-etios", "ertiga", "innova", "innova-crysta", "tempo-traveller-12", "force-urbania-12"],
    cta: "Request Custom Tour",
    ctaTe: "కస్టమ్ టూర్ కోరండి",
  },
  {
    id: "south-india-pilgrimage",
    slug: "south-india-pilgrimage-tours",
    title: "South India Pilgrimage Tours",
    titleTe: "దక్షిణ భారత యాత్రా టూర్లు",
    shortTitle: "Pilgrimage Tours",
    shortTitleTe: "దక్షిణ భారత యాత్ర",
    description:
      "Multi-state spiritual journeys covering the most sacred pilgrimage sites across Andhra Pradesh, Tamil Nadu, Karnataka, Kerala and Telangana. Our South India pilgrimage tours are designed for devoted travellers seeking a complete and well-organised spiritual experience.",
    descriptionTe:
      "ఆంధ్రప్రదేశ్, తమిళనాడు, కర్ణాటక, కేరళ మరియు తెలంగాణలోని పవిత్ర పుణ్యక్షేత్రాలను అనుసంధానించే బహుళ-రాష్ట్రాల ఆధ్యాత్మిక యాత్రలు. రామేశ్వరం, మదురై, కంచి, తిరువణ్ణామలై వంటి ప్రముఖ క్షేత్రాలను ప్రశాంతంగా దర్శించడానికి అనువైనది.",
    icon: "Compass",
    image: "/images/akshaya/services/south-india-pilgrimage.webp",
    features: [
      "Multi-state pilgrimage routes",
      "Comfortable AC & Wi‑Fi equipped fleet",
      "Rameshwaram, Madurai, Kanchipuram and more",
      "Experienced long-distance drivers",
      "Accommodation assistance available on request",
      "Both individual and group packages",
    ],
    featuresTe: [
      "బహుళ-రాష్ట్రాల తీర్థయాత్రా మార్గాలు",
      "సౌకర్యవంతమైన AC & Wi‑Fi అమర్చిన వాహనాలు",
      "రామేశ్వరం, మదురై, కాంచీపురం మరియు మరిన్ని",
      "సుదూర హైవే ప్రయాణాల్లో నిపుణ డ్రైవర్లు",
      "అభ్యర్థనపై బస ఏర్పాట్లకు మార్గదర్శకత్వం",
      "వ్యక్తులు మరియు గ్రూపులకు ప్రత్యేక ప్యాకేజీలు",
    ],
    vehicles: ["innova", "innova-crysta", "tempo-traveller-12", "force-urbania-12"],
    cta: "Plan Pilgrimage Tour",
    ctaTe: "యాత్రను ప్లాన్ చేయండి",
  },
];

// ── Helpers ───────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}