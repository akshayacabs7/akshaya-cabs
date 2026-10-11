// Akshaya Cabs — Popular Cab Routes & Destination Landing Data (TASK-27)
// akshayacabs.com | Tirupati, Andhra Pradesh
// High-intent, non-doorway landing pages for verified routes.
//
// RULES:
// - Exact real highway distances and driving durations.
// - Driver allowance is INCLUDED in all fares.
// - Tolls, parking, and state permits are paid separately by customer.
// - Zero fake prices or fabricated GPS claims.
// - Fully localized in English and authentic Telugu.

export interface RouteFleetOption {
  vehicleId: string;
  name: string;
  nameTe: string;
  capacity: string;
  capacityTe: string;
  rateDescription: string;
  rateDescriptionTe: string;
}

export interface RouteFaq {
  q: string;
  qTe: string;
  a: string;
  aTe: string;
}

export interface CabRoute {
  id: string;
  slug: string;
  title: string;
  titleTe: string;
  metaTitle: string;
  metaTitleTe: string;
  metaDescription: string;
  metaDescriptionTe: string;
  from: string;
  fromTe: string;
  to: string;
  toTe: string;
  distanceKm: number;
  durationApprox: string;
  durationApproxTe: string;
  highway: string;
  highwayTe: string;
  startingPrice: number;
  priceNote: string;
  priceNoteTe: string;
  tripType: "ghat" | "airport" | "outstation" | "local";
  image: string;
  overview: string;
  overviewTe: string;
  keyFeatures: string[];
  keyFeaturesTe: string[];
  routeStops?: string[];
  routeStopsTe?: string[];
  fleetOptions: RouteFleetOption[];
  importantNotes: string[];
  importantNotesTe: string[];
  faqs: RouteFaq[];
  relatedPackageSlug?: string;
  relatedBlogSlug?: string;
}

export const CAB_ROUTES: CabRoute[] = [
  {
    id: "tirupati-to-tirumala",
    slug: "tirupati-to-tirumala-cabs",
    title: "Tirupati to Tirumala Cab Service",
    titleTe: "తిరుపతి నుండి తిరుమల క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Tirumala Cab Service | Ghat Road Taxi & Rates | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి తిరుమల క్యాబ్ సర్వీస్ | ఘాట్ రోడ్ టాక్సీ & రేట్లు | అక్షయ క్యాబ్స్",
    metaDescription: "Reliable 24/7 Tirupati to Tirumala cab service via ghat road. AC Sedans, Ertiga, Innova Crysta & Tempo Travellers. Driver allowance included. Book on WhatsApp.",
    metaDescriptionTe: "ఘాట్ రోడ్ ద్వారా తిరుపతి నుండి తిరుమల 24/7 నమ్మకమైన క్యాబ్ సర్వీస్. ఏసీ సెడాన్లు, ఎర్టిగా, ఇన్నోవా క్రిస్టా మరియు టెంపో ట్రావెలర్స్. వాట్సాప్‌లో సులభంగా బుక్ చేయండి.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Tirumala (Hilltop)",
    toTe: "తిరుమల (కొండపైకి)",
    distanceKm: 22,
    durationApprox: "45–55 mins",
    durationApproxTe: "45–55 నిమిషాలు",
    highway: "Tirumala Ghat Roads (Alipiri Checkpost)",
    highwayTe: "తిరుమల ఘాట్ రోడ్లు (అలిపిరి చెక్‌పోస్ట్)",
    startingPrice: 1500,
    priceNote: "One-way hill drop starting fare (Sedan 4+1) | Driver allowance included",
    priceNoteTe: "వన్-వే కొండపై డ్రాప్ ప్రారంభ ధర (సెడాన్ 4+1) | డ్రైవర్ భత్యం చేర్చబడింది",
    tripType: "ghat",
    image: "/images/akshaya/services/service-tirumala-taxi.webp",
    overview: "Travelling the 22 km distance from Tirupati up the Seshachalam hills to Tirumala is the quintessential pilgrim journey. Akshaya Cabs offers 24/7 dedicated ghat-road taxis with skilled, verified drivers who strictly follow TTD safety guidelines and speed regulations. Whether you need an early morning drop for your darshan slot, senior citizen assistance, or a full round-trip with waiting, we have comfortable AC vehicles ready for you.",
    overviewTe: "తిరుపతి నుండి శేషాచల కొండల గుండా 22 కి.మీ ప్రయాణించి తిరుమల చేరుకోవడం భక్తుల ప్రధాన యాత్ర. TTD భద్రతా నిబంధనలు మరియు వేగ పరిమితులను ఖచ్చితంగా పాటించే అనుభవజ్ఞులైన డ్రైవర్లతో అక్షయ క్యాబ్స్ 24/7 ఘాట్ రోడ్ టాక్సీ సేవలను అందిస్తుంది. మీ దర్శన సమయానికి వేకువజామున డ్రాప్ అయినా, వృద్ధులకు సహాయం అయినా లేదా వెయిటింగ్‌తో కూడిన రౌండ్-ట్రిప్ అయినా పరిశుభ్రమైన ఏసీ వాహనాలు అందుబాటులో ఉంటాయి.",
    keyFeatures: [
      "Strict compliance with TTD 28-minute minimum transit time rule to prevent overspeeding",
      "Door-to-door pickup from any hotel, residence, or railway station in Tirupati",
      "Direct drop at CRO, guest houses, mutts, or cottage areas in Tirumala",
      "Luggage loading & unloading assistance for families and senior pilgrims",
      "All hill road vehicle permits and taxes arranged seamlessly",
    ],
    keyFeaturesTe: [
      "అతివేగాన్ని నివారించడానికి TTD 28-నిమిషాల కనీస ప్రయాణ నియమాన్ని ఖచ్చితంగా పాటించడం",
      "తిరుపతిలోని ఏదైనా హోటల్, నివాసం లేదా రైల్వే స్టేషన్ నుండి డోర్-టు-డోర్ పికప్",
      "తిరుమలలోని CRO, గెస్ట్ హౌస్‌లు, మఠాలు లేదా కాటేజీల వద్ద నేరుగా డ్రాప్",
      "కుటుంబాలు మరియు వృద్ధ యాత్రికుల లగేజీ నిర్వహణలో సహాయం",
      "కొండ రోడ్డు పర్మిట్లు మరియు నిబంధనల పూర్తి నిర్వహణ",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "From ₹1,500 (one-way drop) / ₹2,000 (round-trip base)", rateDescriptionTe: "₹1,500 నుండి (వన్-వే డ్రాప్) / ₹2,000 (రౌండ్-ట్రిప్ బేస్)" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "From ₹2,000 (one-way drop) / ₹2,300 (round-trip base)", rateDescriptionTe: "₹2,000 నుండి (వన్-వే డ్రాప్) / ₹2,300 (రౌండ్-ట్రిప్ బేస్)" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "From ₹2,500 (one-way drop) / ₹3,000 (round-trip base)", rateDescriptionTe: "₹2,500 నుండి (వన్-వే డ్రాప్) / ₹3,000 (రౌండ్-ట్రిప్ బేస్)" },
      { vehicleId: "tempo", name: "Tempo Traveller (12+1)", nameTe: "టెంపో ట్రావెలర్ (12+1)", capacity: "12 Passengers", capacityTe: "12 మంది ప్రయాణికులు", rateDescription: "From ₹3,000 (local round-trip base)", rateDescriptionTe: "₹3,000 నుండి (స్థానిక రౌండ్-ట్రిప్ బేస్)" },
    ],
    importantNotes: [
      "Ghat road operating hours: Typically closed between 12:00 AM midnight and 03:00 AM for vehicle movement.",
      "Toll charges: TTD Alipiri toll gate fee is charged separately at actuals.",
      "Darshan tickets: Taxi fares cover transportation only; temple darshan tickets are not included.",
    ],
    importantNotesTe: [
      "ఘాట్ రోడ్ సమయాలు: రాత్రి వేళల్లో భద్రత కోసం అర్ధరాత్రి 12:00 నుండి తెల్లవారుజామున 03:00 వరకు వాహనాల రాకపోకలు నిలిపివేయబడతాయి.",
      "టోల్ ఛార్జీలు: అలిపిరి టోల్ గేట్ ఫీజు అసలు రసీదు ప్రకారం వర్తిస్తుంది.",
      "దర్శన టిక్కెట్లు: క్యాబ్ ఛార్జీలు రవాణాకు మాత్రమే; దర్శన టిక్కెట్లతో సంబంధం లేదు.",
    ],
    faqs: [
      {
        q: "How long does it take from Tirupati to Tirumala by cab?",
        qTe: "తిరుపతి నుండి తిరుమలకు క్యాబ్‌లో ఎంత సమయం పడుతుంది?",
        a: "The drive takes approximately 45 to 55 minutes, including the security check at Alipiri and the mandatory 28-minute minimum transit time enforced on the ghat road.",
        aTe: "అలిపిరి సెక్యూరిటీ చెక్ మరియు ఘాట్ రోడ్‌పై TTD అమలు చేసే 28 నిమిషాల కనీస ప్రయాణ సమయంతో కలిపి సుమారు 45 నుండి 55 నిమిషాలు పడుతుంది.",
      },
      {
        q: "Can the cab wait in Tirumala while we complete our darshan?",
        qTe: "మా దర్శనం పూర్తయ్యే వరకు క్యాబ్ తిరుమలలో వేచి ఉంటుందా?",
        a: "Yes. We offer round-trip packages where your dedicated driver waits at designated parking areas in Tirumala and brings you back down to Tirupati after your darshan.",
        aTe: "అవును. మీ దర్శనం పూర్తయ్యే వరకు డ్రైవర్ తిరుమల పార్కింగ్ వద్ద వేచి ఉండి, దర్శనానంతరం మిమ్మల్ని తిరిగి తిరుపతికి తీసుకువచ్చే రౌండ్-ట్రిప్ ప్యాకేజీలు అందుబాటులో ఉన్నాయి.",
      },
    ],
    relatedPackageSlug: "tirupati-tirumala-local-temples",
    relatedBlogSlug: "tirumala-travel-guide",
  },
  {
    id: "tirupati-airport-cabs",
    slug: "tirupati-airport-cabs",
    title: "Tirupati Airport Cab Service",
    titleTe: "తిరుపతి ఎయిర్‌పోర్ట్ క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati Airport Cab Service | Terminal Pickup & Drop (TIR) | Akshaya Cabs",
    metaTitleTe: "తిరుపతి ఎయిర్‌పోర్ట్ క్యాబ్ సర్వీస్ | టెర్మినల్ పికప్ & డ్రాప్ (TIR) | అక్షయ క్యాబ్స్",
    metaDescription: "Pre-book Tirupati Airport (Renigunta TIR) taxi transfers to Tirupati city and direct to Tirumala. Flight tracking, zero waiting surge, AC sedans & SUVs.",
    metaDescriptionTe: "తిరుపతి ఎయిర్‌పోర్ట్ (రేణిగుంట TIR) నుండి తిరుపతి నగరానికి మరియు నేరుగా తిరుమలకు నమ్మకమైన టాక్సీ. ఫ్లైట్ ట్రాకింగ్, జీరో సర్జ్ ఛార్జీలు, ఏసీ వాహనాలు.",
    from: "Tirupati Airport (Renigunta - TIR)",
    fromTe: "తిరుపతి ఎయిర్‌పోర్ట్ (రేణిగుంట - TIR)",
    to: "Tirupati City / Tirumala Hill",
    toTe: "తిరుపతి నగరం / తిరుమల కొండ",
    distanceKm: 15,
    durationApprox: "25–30 mins (City) | 80 mins (Hill)",
    durationApproxTe: "25–30 నిమి (నగరం) | 80 నిమి (కొండ)",
    highway: "NH 71 (Tirupati–Renigunta Highway)",
    highwayTe: "NH 71 (తిరుపతి-రేణిగుంట హైవే)",
    startingPrice: 800,
    priceNote: "Airport to Tirupati city from ₹800 | Direct to Tirumala from ₹2,000",
    priceNoteTe: "ఎయిర్‌పోర్ట్ నుండి నగరానికి ₹800 నుండి | తిరుమలకు నేరుగా ₹2,000 నుండి",
    tripType: "airport",
    image: "/images/akshaya/services/service-airport-pickup.webp",
    overview: "Tirupati International Airport at Renigunta connects pilgrims across India directly to Lord Balaji's abode. Pre-booking your airport pickup with Akshaya Cabs eliminates long terminal taxi queues and spot surge pricing. Our driver greets you outside the terminal with a name sign, assists with heavy baggage, and whisks your family directly to your hotel or up the Tirumala hill.",
    overviewTe: "రేణిగుంటలోని తిరుపతి అంతర్జాతీయ విమానాశ్రయం భక్తులను నేరుగా ఆధ్యాత్మిక నగరానికి చేరుస్తుంది. అక్షయ క్యాబ్స్‌తో ముందుగానే ఎయిర్‌పోర్ట్ పికప్ బుక్ చేసుకోవడం వల్ల క్యూలలో నిలబడే అవసరం మరియు అధిక స్పాట్ ఛార్జీల బెడద ఉండదు. మీ పేరు బోర్డుతో డ్రైవర్ అరైవల్స్ వద్ద స్వాగతం పలికి, లగేజీతో సహాయం చేసి నేరుగా మీ గమ్యస్థానానికి చేరుస్తారు.",
    keyFeatures: [
      "Real-time flight tracking — delay adjustments made automatically at no extra fee",
      "Terminal arrival meet-and-greet with guest name placard",
      "Pre-cooled, sanitized AC vehicles ready on your touchdown",
      "Direct transfers to Tirumala hill cottages without vehicle switching",
      "Transparent flat fares with driver allowances included",
    ],
    keyFeaturesTe: [
      "రియల్-టైమ్ ఫ్లైట్ ట్రాకింగ్ — విమానం ఆలస్యమైనా అదనపు ఛార్జీలు లేకుండా సమయ సర్దుబాటు",
      "అరైవల్స్ వద్ద అతిథి పేరు బోర్డుతో స్వాగతం",
      "విమానం దిగగానే సిద్ధంగా ఉండే శుభ్రమైన ఏసీ వాహనాలు",
      "మధ్యలో వాహనాలు మారకుండా నేరుగా తిరుమల కాటేజీలకు ప్రయాణం",
      "డ్రైవర్ భత్యం చేర్చబడిన పారదర్శక స్థిర ధరలు",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "City drop ₹800 | Direct to Tirumala ₹2,000", rateDescriptionTe: "సిటీ డ్రాప్ ₹800 | నేరుగా తిరుమల ₹2,000" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "City drop ₹1,200 | Direct to Tirumala ₹2,500", rateDescriptionTe: "సిటీ డ్రాప్ ₹1,200 | నేరుగా తిరుమల ₹2,500" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "City drop ₹1,600 | Direct to Tirumala ₹3,000", rateDescriptionTe: "సిటీ డ్రాప్ ₹1,600 | నేరుగా తిరుమల ₹3,000" },
    ],
    importantNotes: [
      "Provide flight number during booking so our operations team tracks delays.",
      "Parking ticket at the airport is charged at actuals per airport authority tariff.",
    ],
    importantNotesTe: [
      "బుకింగ్ సమయంలో మీ ఫ్లైట్ నంబర్ తెలపండి, తద్వారా మా టీమ్ సమయాలను గమనిస్తుంది.",
      "ఎయిర్‌పోర్ట్ పార్కింగ్ రసీదు అసలు ఖర్చు ప్రకారం వర్తిస్తుంది.",
    ],
    faqs: [
      {
        q: "What if my flight arrives late at night?",
        qTe: "నా విమానం రాత్రి వేళల్లో ఆలస్యంగా వస్తే?",
        a: "We operate 24/7. Your assigned driver tracks your flight status and will be waiting outside arrivals whenever you land, without cancellation.",
        aTe: "మేము 24 గంటలూ సేవలు అందిస్తాము. మీ డ్రైవర్ ఫ్లైట్ సమయాలను గమనించి, మీరు ఎప్పుడు ల్యాండ్ అయినా రద్దు కాకుండా వేచి ఉంటారు.",
      },
    ],
    relatedBlogSlug: "tirupati-airport-to-tirumala-travel-guide",
  },
  {
    id: "tirupati-to-chennai-cabs",
    slug: "tirupati-to-chennai-cabs",
    title: "Tirupati to Chennai Cab Service",
    titleTe: "తిరుపతి నుండి చెన్నై క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Chennai Cab Service | One-Way & Round-Trip Taxi | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి చెన్నై క్యాబ్ సర్వీస్ | వన్-వే & రౌండ్-ట్రిప్ టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Comfortable Tirupati to Chennai intercity taxi service (~140 km). Drops to Chennai Airport (MAA), Central Station & city addresses. Inter-state permit disclosed.",
    metaDescriptionTe: "తిరుపతి నుండి చెన్నై ఇంటర్‌సిటీ టాక్సీ సర్వీస్ (~140 కి.మీ). చెన్నై ఎయిర్‌పోర్ట్ (MAA), సెంట్రల్ స్టేషన్ మరియు నగర ప్రాంతాలకు సౌకర్యవంతమైన ప్రయాణం.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Chennai (City / Airport / Central)",
    toTe: "చెన్నై (నగరం / విమానాశ్రయం / సెంట్రల్)",
    distanceKm: 140,
    durationApprox: "3.5–4.0 hours",
    durationApproxTe: "3.5–4.0 గంటలు",
    highway: "NH 716 via Tiruttani / Nagari",
    highwayTe: "NH 716 (తిరుత్తణి / నగరి మీదుగా)",
    startingPrice: 3800,
    priceNote: "One-way drop from ₹3,800 | Outstation round trip from ₹15/km (300 km daily min)",
    priceNoteTe: "వన్-వే డ్రాప్ ₹3,800 నుండి | రౌండ్ ట్రిప్ ₹15/కి.మీ (300 కి.మీ రోజువారీ కనీసం)",
    tripType: "outstation",
    image: "/images/akshaya/services/service-outstation-cabs.webp",
    overview: "Connecting the sacred city of Tirupati with Chennai is one of our primary intercity routes. Spanning approximately 140 km, the drive takes 3.5 to 4 hours along smooth national highway corridors. Whether catching an international flight at Chennai Airport (MAA), catching an express train at Chennai Central, or visiting family in Chennai, Akshaya Cabs provides dependable AC sedans, Innovas, and Tempo Travellers with complete interstate permit compliance.",
    overviewTe: "తిరుపతి మరియు చెన్నై మధ్య ప్రయాణం మా ప్రధాన ఇంటర్‌సిటీ మార్గాలలో ఒకటి. సుమారు 140 కి.మీ దూరం ఉండే ఈ ప్రయాణం హైవే గుండా 3.5 నుండి 4 గంటలు పడుతుంది. చెన్నై విమానాశ్రయం (MAA) లో విమానం అందుకోవాలన్నా, చెన్నై సెంట్రల్ రైల్వే స్టేషన్‌కు వెళ్ళాలన్నా, అక్షయ క్యాబ్స్ తమిళనాడు రాష్ట్ర పర్మిట్ నిబంధనలతో కూడిన నమ్మకమైన ఏసీ క్యాబ్‌లను అందిస్తుంది.",
    keyFeatures: [
      "Direct drop to Chennai International Airport terminal departures",
      "Experienced highway chauffeurs fluent in Tamil and Telugu",
      "Doorstep pickup anywhere in Tirupati or Tirumala",
      "Tamil Nadu interstate commercial permit transparently handled",
      "En-route stop at Tiruttani Murugan Temple available upon request",
    ],
    keyFeaturesTe: [
      "చెన్నై అంతర్జాతీయ విమానాశ్రయ డిపార్చర్ టెర్మినల్ వద్ద నేరుగా డ్రాప్",
      "తమిళం మరియు తెలుగు మాట్లాడగల అనుభవజ్ఞులైన హైవే డ్రైవర్లు",
      "తిరుపతి లేదా తిరుమలలో ఎక్కడి నుంచైనా డోర్‌స్టెప్ పికప్",
      "తమిళనాడు రాష్ట్ర కమర్షియల్ పర్మిట్ పారదర్శక నిర్వహణ",
      "కోరినట్లయితే దారిలోని తిరుత్తణి మురుగన్ ఆలయ దర్శనానికి వెసులుబాటు",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "One-way from ₹3,800 | Round trip ₹15/km", rateDescriptionTe: "వన్-వే ₹3,800 నుండి | రౌండ్ ట్రిప్ ₹15/కి.మీ" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "One-way from ₹4,600 | Round trip ₹19/km", rateDescriptionTe: "వన్-వే ₹4,600 నుండి | రౌండ్ ట్రిప్ ₹19/కి.మీ" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "One-way from ₹5,800 | Round trip ₹23/km", rateDescriptionTe: "వన్-వే ₹5,800 నుండి | రౌండ్ ట్రిప్ ₹23/కి.మీ" },
    ],
    importantNotes: [
      "Tamil Nadu state border permit and toll gate fees are charged at actuals.",
      "Outstation round trips operate with a 300 km daily minimum allowance.",
    ],
    importantNotesTe: [
      "తమిళనాడు రాష్ట్ర సరిహద్దు పర్మిట్ మరియు టోల్ గేట్ ఫీజులు అసలు ఖర్చు ప్రకారం ఉంటాయి.",
      "అవుట్‌స్టేషన్ రౌండ్ ట్రిప్‌లకు రోజుకు కనీసం 300 కి.మీ అలవెన్స్ వర్తిస్తుంది.",
    ],
    faqs: [
      {
        q: "Do you drop directly to Chennai Airport terminal?",
        qTe: "చెన్నై ఎయిర్‌పోర్ట్ టెర్మినల్ వద్ద నేరుగా డ్రాప్ చేస్తారా?",
        a: "Yes, our drivers drop you directly at the departure gates of Chennai Domestic or International Terminals (T1/T2/T4).",
        aTe: "అవును, మా డ్రైవర్లు మిమ్మల్ని చెన్నై డొమెస్టిక్ లేదా ఇంటర్నేషనల్ టెర్మినల్ డిపార్చర్ గేట్ల వద్ద నేరుగా డ్రాప్ చేస్తారు.",
      },
    ],
  },
  {
    id: "tirupati-to-bangalore-cabs",
    slug: "tirupati-to-bangalore-cabs",
    title: "Tirupati to Bangalore Cab Service",
    titleTe: "తిరుపతి నుండి బెంగళూరు క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Bangalore Cab Service | Outstation Taxi (Bengaluru) | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి బెంగళూరు క్యాబ్ సర్వీస్ | అవుట్‌స్టేషన్ టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Reliable Tirupati to Bengaluru (Bangalore) cab hire (~250 km). Drops to Kempegowda Airport, Whitefield, Electronic City. AC Innova, Ertiga & Sedans.",
    metaDescriptionTe: "తిరుపతి నుండి బెంగళూరు (~250 కి.మీ) నమ్మకమైన క్యాబ్ సర్వీస్. కెంపెగౌడ విమానాశ్రయం, వైట్‌ఫీల్డ్, ఎలక్ట్రానిక్ సిటీకి సౌకర్యవంతమైన ప్రయాణం.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Bengaluru (Bangalore)",
    toTe: "బెంగళూరు",
    distanceKm: 250,
    durationApprox: "4.5–5.5 hours",
    durationApproxTe: "4.5–5.5 గంటలు",
    highway: "NH 69 / NH 75 via Chittoor – Kolar – Hoskote",
    highwayTe: "NH 69 / NH 75 (చిత్తూరు-కోలార్-హోస్కోట్ మీదుగా)",
    startingPrice: 5800,
    priceNote: "One-way drop from ₹5,800 | Round trip ₹15/km (300 km daily min)",
    priceNoteTe: "వన్-వే డ్రాప్ ₹5,800 నుండి | రౌండ్ ట్రిప్ ₹15/కి.మీ (300 కి.మీ రోజువారీ కనీసం)",
    tripType: "outstation",
    image: "/images/akshaya/services/service-outstation-cabs.webp",
    overview: "Connecting Tirupati and Silicon Valley of India, Bengaluru, across ~250 km of scenic 4-lane highway via Chittoor and Kolar. With travel times between 4.5 and 5.5 hours, a comfortable AC cab is the most flexible and peaceful transit choice for IT professionals, families with elders, and pilgrims returning home. We serve all areas of Bengaluru including Kempegowda International Airport (BLR), Whitefield, Indiranagar, Electronic City, and Koramangala.",
    overviewTe: "తిరుపతి నుండి బెంగళూరుకు చిత్తూరు మరియు కోలార్ మీదుగా సుమారు 250 కి.మీ నాలుగు లేన్ల హైవే గుండా సాగే ప్రయాణం. దాదాపు 4.5 నుండి 5.5 గంటల సమయం పట్టే ఈ మార్గంలో కుటుంబాలు మరియు ఐటీ ఉద్యోగులకు ఏసీ క్యాబ్ అత్యంత సౌకర్యవంతమైన ఎంపిక. కెంపెగౌడ అంతర్జాతీయ విమానాశ్రయం (BLR), వైట్‌ఫీల్డ్, ఎలక్ట్రానిక్ సిటీ మరియు బెంగళూరులోని అన్ని ప్రాంతాలకు డ్రాప్ సౌకర్యం ఉంది.",
    keyFeatures: [
      "Smooth travel along 4-lane NH 75 highway with good hygienic restaurant stops",
      "Drops to Kempegowda Airport (BLR) or any Bengaluru residential/office layout",
      "Karnataka interstate permit arranged transparently without delays",
      "Clean, air-conditioned vehicles with spacious boot space for luggage",
      "Senior citizen friendly with customizable breaks en-route",
    ],
    keyFeaturesTe: [
      "మంచి రెస్టారెంట్ స్టాప్‌లతో కూడిన నాలుగు లేన్ల NH 75 హైవే ప్రయాణం",
      "కెంపెగౌడ ఎయిర్‌పోర్ట్ (BLR) లేదా బెంగళూరులోని ఏదైనా ప్రాంతానికి డ్రాప్",
      "కర్ణాటక రాష్ట్ర సరిహద్దు పర్మిట్ సులభతర నిర్వహణ",
      "లగేజీ కోసం విశాలమైన బూట్ స్పేస్ ఉన్న పరిశుభ్రమైన ఏసీ వాహనాలు",
      "అవసరమైనప్పుడు విశ్రాంతి విరామాలతో వృద్ధులకు అనుకూలమైన ప్రయాణం",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "One-way from ₹5,800 | Round trip ₹15/km", rateDescriptionTe: "వన్-వే ₹5,800 నుండి | రౌండ్ ట్రిప్ ₹15/కి.మీ" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "One-way from ₹7,000 | Round trip ₹19/km", rateDescriptionTe: "వన్-వే ₹7,000 నుండి | రౌండ్ ట్రిప్ ₹19/కి.మీ" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "One-way from ₹8,800 | Round trip ₹23/km", rateDescriptionTe: "వన్-వే ₹8,800 నుండి | రౌండ్ ట్రిప్ ₹23/కి.మీ" },
    ],
    importantNotes: [
      "Karnataka state permit fee and NHAI tolls are payable at actuals.",
      "Outstation round trips follow standard 300 km per day minimum distance calculation.",
    ],
    importantNotesTe: [
      "కర్ణాటక రాష్ట్ర పర్మిట్ మరియు టోల్ ఛార్జీలు అసలు రసీదు ప్రకారం ఉంటాయి.",
      "అవుట్‌స్టేషన్ రౌండ్ ట్రిప్‌లకు రోజుకు కనీసం 300 కి.మీ లెక్కించబడుతుంది.",
    ],
    faqs: [
      {
        q: "Can the cab pick us up directly from Tirumala hill for Bengaluru?",
        qTe: "బెంగళూరు వెళ్ళడానికి తిరుమల కొండపైనే పికప్ చేసుకుంటారా?",
        a: "Yes, our driver can pick you up directly from your Tirumala guest house or mutt and proceed straight to Bengaluru via Tirupati.",
        aTe: "అవును, మా డ్రైవర్ తిరుమలలోని మీ గెస్ట్ హౌస్ లేదా మఠం వద్ద పికప్ చేసుకుని తిరుపతి మీదుగా బెంగళూరుకు బయలుదేరవచ్చు.",
      },
    ],
  },
  {
    id: "tirupati-to-srikalahasti",
    slug: "tirupati-to-srikalahasti-cabs",
    title: "Tirupati to Sri Kalahasti Cab Service",
    titleTe: "తిరుపతి నుండి శ్రీకాళహస్తి క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Sri Kalahasti Cab Service | Rahu Ketu Temple Taxi | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి శ్రీకాళహస్తి క్యాబ్ సర్వీస్ | రాహు కేతు ఆలయ టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Reliable Tirupati to Sri Kalahasti taxi service (~38 km). Round-trip waiting for Rahu-Ketu Sarpa Dosha Puja. Combined with Padmavathi Temple from ₹2,500.",
    metaDescriptionTe: "తిరుపతి నుండి శ్రీకాళహస్తి టాక్సీ సేవ (~38 కి.మీ). రాహు-కేతు సర్పదోష పూజకు రౌండ్-ట్రిప్ వెయిటింగ్ సదుపాయం. పద్మావతి ఆలయంతో కలిపి ₹2,500 నుండి.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Sri Kalahasti (Sri Kalahasteeswara Temple)",
    toTe: "శ్రీకాళహస్తి (శ్రీ కాళహస్తీశ్వర ఆలయం)",
    distanceKm: 38,
    durationApprox: "50–60 mins",
    durationApproxTe: "50–60 నిమిషాలు",
    highway: "NH 71 (Tirupati–Srikalahasti Highway)",
    highwayTe: "NH 71 (తిరుపతి-శ్రీకాళహస్తి హైవే)",
    startingPrice: 2500,
    priceNote: "Package AKC0010 (Padmavathi + Srikalahasti) from ₹2,500 (150 km included)",
    priceNoteTe: "ప్యాకేజీ AKC0010 (పద్మావతి + శ్రీకాళహస్తి) ₹2,500 నుండి (150 కి.మీ చేర్చబడింది)",
    tripType: "local",
    image: "/images/akshaya/blog/blog-srikalahasti.webp",
    overview: "Sri Kalahasti is one of South India's premier Shiva pilgrimage destinations, representing the Vayu (Air) Lingam among the Pancha Bhuta Stalams. Devotees visit Srikalahasti primarily for the powerful Rahu-Ketu Sarpa Dosha Nivarana Puja. Situated 38 km east of Tirupati, a private cab allows you to participate in the puja unhurriedly while your driver safely guards your luggage and returns you to Tirupati.",
    overviewTe: "శ్రీకాళహస్తి పంచభూత క్షేత్రాలలో వాయు లింగంగా ప్రసిద్ధి చెందిన శైవ పుణ్యక్షేత్రం. రాహు-కేతు సర్పదోష నివారణ పూజ కోసం దేశవ్యాప్తంగా భక్తులు ఇక్కడికి వస్తారు. తిరుపతికి 38 కి.మీ దూరంలో ఉన్న ఈ ఆలయానికి ప్రైవేట్ క్యాబ్‌లో వెళ్లడం ద్వారా లగేజీని వాహనంలో ఉంచి ప్రశాంతంగా పూజ పూర్తి చేసుకోవచ్చు.",
    keyFeatures: [
      "Round-trip cab with waiting time included during your Rahu-Ketu Puja",
      "Combined packages with Goddess Padmavathi Temple at Tiruchanur",
      "Safe storage for luggage and electronic gadgets not allowed inside temple",
      "Knowledgeable drivers who guide you on temple queue locations",
    ],
    keyFeaturesTe: [
      "రాహు-కేతు పూజ పూర్తయ్యే వరకు రౌండ్-ట్రిప్ వెయిటింగ్ సదుపాయం",
      "తిరుచానూరు పద్మావతి అమ్మవారి ఆలయంతో కలిపిన సంయుక్త ప్యాకేజీలు",
      "ఆలయంలోకి అనుమతించని లగేజీ మరియు వస్తువులకు వాహనంలో భద్రత",
      "ఆలయ క్యూలు మరియు ప్రవేశాల గురించి అవగాహన ఉన్న డ్రైవర్లు",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "Package AKC0010: ₹2,500 (150 km)", rateDescriptionTe: "ప్యాకేజీ AKC0010: ₹2,500 (150 కి.మీ)" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "Package AKC0010: ₹3,100 (150 km)", rateDescriptionTe: "ప్యాకేజీ AKC0010: ₹3,100 (150 కి.మీ)" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "Package AKC0010: ₹3,800 (150 km)", rateDescriptionTe: "ప్యాకేజీ AKC0010: ₹3,800 (150 కి.మీ)" },
    ],
    importantNotes: [
      "Traditional Indian attire is compulsory for Rahu-Ketu Puja.",
      "Puja tickets are purchased directly at the temple administration counters.",
    ],
    importantNotesTe: [
      "రాహు-కేతు పూజకు సాంప్రదాయ వస్త్రధారణ తప్పనిసరి.",
      "పూజా టిక్కెట్లను ఆలయ కౌంటర్ల వద్దే నేరుగా తీసుకోవాలి.",
    ],
    faqs: [
      {
        q: "Can the driver wait while we finish the 2-hour Rahu-Ketu puja?",
        qTe: "మేము 2 గంటల పూజ పూర్తి చేసుకునే వరకు డ్రైవర్ వేచి ఉంటారా?",
        a: "Yes, waiting time is fully included in our Srikalahasti packages. The driver will wait at the parking lot until you are ready.",
        aTe: "అవును, మా శ్రీకాళహస్తి ప్యాకేజీలలో వెయిటింగ్ సమయం చేర్చబడింది. మీ దర్శనం పూర్తయ్యే వరకు డ్రైవర్ పార్కింగ్ వద్ద వేచి ఉంటారు.",
      },
    ],
    relatedPackageSlug: "padmavathi-srikalahasti",
    relatedBlogSlug: "tirupati-to-srikalahasti-travel-guide",
  },
  {
    id: "tirupati-to-kanipakam",
    slug: "tirupati-to-kanipakam-cabs",
    title: "Tirupati to Kanipakam Cab Service",
    titleTe: "తిరుపతి నుండి కాణిపాకం క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Kanipakam Cab Service | Varasidhi Vinayaka Taxi | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి కాణిపాకం క్యాబ్ సర్వీస్ | వరసిద్ధి వినాయక టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Book Tirupati to Kanipakam Vinayaka Temple cab (~75 km). Comfortable AC sedans & SUVs. Combined packages with Tirumala & Padmavathi from ₹4,500.",
    metaDescriptionTe: "తిరుపతి నుండి కాణిపాకం వినాయక ఆలయానికి (~75 కి.మీ) క్యాబ్ బుకింగ్. తిరుమల మరియు పద్మావతి ఆలయాలతో కలిపిన ప్యాకేజీలు ₹4,500 నుండి.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Kanipakam (Sri Varasidhi Vinayaka Swamy Temple)",
    toTe: "కాణిపాకం (శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం)",
    distanceKm: 75,
    durationApprox: "1.5–2.0 hours",
    durationApproxTe: "1.5–2.0 గంటలు",
    highway: "NH 716 / NH 140 via Chittoor",
    highwayTe: "NH 716 / NH 140 (చిత్తూరు మీదుగా)",
    startingPrice: 4500,
    priceNote: "Package AKC0006 (Tirumala + Kanipakam) from ₹4,500 (200 km included)",
    priceNoteTe: "ప్యాకేజీ AKC0006 (తిరుమల + కాణిపాకం) ₹4,500 నుండి (200 కి.మీ చేర్చబడింది)",
    tripType: "outstation",
    image: "/images/akshaya/blog/blog-kanipakam.webp",
    overview: "Sri Varasidhi Vinayaka Swamy Temple at Kanipakam is a celebrated Ganesha shrine where the deity is worshipped as self-manifested (Swayambhu) in a sacred water well. Located approximately 75 km southwest of Tirupati near Chittoor, it is one of the most popular half-day pilgrimage extensions from Tirupati. Akshaya Cabs offers reliable round-trip cab service with comfortable AC vehicles and courteous drivers.",
    overviewTe: "కాణిపాకంలోని శ్రీ వరసిద్ధి వినాయక స్వామి ఆలయం స్వయంభువుగా బావిలో వెలసిన ప్రసిద్ధ గణేశ క్షేత్రం. తిరుపతికి నైరుతి దిశలో చిత్తూరు సమీపంలో 75 కి.మీ దూరంలో ఉన్న ఈ ఆలయానికి భక్తులు విశేషంగా తరలివస్తారు. అక్షయ క్యాబ్స్ సౌకర్యవంతమైన ఏసీ వాహనాలు మరియు డ్రైవర్లతో నమ్మకమైన రౌండ్-ట్రిప్ క్యాబ్ సేవలను అందిస్తుంది.",
    keyFeatures: [
      "Comfortable ~75 km drive via scenic Chittoor highway corridor",
      "Combined packages: Tirumala + Kanipakam + Padmavathi (AKC0003 starting ₹5,200)",
      "Dedicated waiting while you attend darshan and special pujas",
      "Driver allowance included in all rates",
    ],
    keyFeaturesTe: [
      "చిత్తూరు హైవే గుండా సులభమైన ~75 కి.మీ ప్రయాణం",
      "సంయుక్త ప్యాకేజీలు: తిరుమల + కాణిపాకం + పద్మావతి (AKC0003 ₹5,200 నుండి)",
      "దర్శనం మరియు పూజలు పూర్తయ్యే వరకు ప్రత్యేక వెయిటింగ్",
      "అన్ని ధరలలో డ్రైవర్ భత్యం చేర్చబడింది",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "Package AKC0006: ₹4,500 (200 km)", rateDescriptionTe: "ప్యాకేజీ AKC0006: ₹4,500 (200 కి.మీ)" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "Package AKC0006: ₹5,200 (200 km)", rateDescriptionTe: "ప్యాకేజీ AKC0006: ₹5,200 (200 కి.మీ)" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "Package AKC0006: ₹6,500 (200 km)", rateDescriptionTe: "ప్యాకేజీ AKC0006: ₹6,500 (200 కి.మీ)" },
    ],
    importantNotes: [
      "Expect heavy crowds during Vinayaka Chavithi and annual Brahmotsavam festival periods.",
      "Tolls on the national highway are billed at actuals.",
    ],
    importantNotesTe: [
      "వినాయక చవితి మరియు వార్షిక బ్రహ్మోత్సవాల సమయాల్లో విపరీతమైన రద్దీ ఉంటుంది.",
      "జాతీయ రహదారి టోల్ గేట్ ఛార్జీలు అసలు రసీదు ప్రకారం ఉంటాయి.",
    ],
    faqs: [
      {
        q: "How much time is needed for a Tirupati to Kanipakam trip?",
        qTe: "తిరుపతి నుండి కాణిపాకం యాత్రకు ఎంత సమయం పడుతుంది?",
        a: "A typical trip takes around 5 to 6 hours in total, including 3.5 hours of driving both ways and 1.5 to 2 hours for darshan.",
        aTe: "రెండు వైపులా ప్రయాణానికి దాదాపు 3.5 గంటలు మరియు దర్శనానికి 1.5 నుండి 2 గంటలతో కలిపి మొత్తం సుమారు 5 నుండి 6 గంటలు పడుతుంది.",
      },
    ],
    relatedPackageSlug: "tirumala-kanipakam-padmavathi",
    relatedBlogSlug: "tirupati-to-kanipakam-travel-guide",
  },
  {
    id: "tirupati-to-vellore-golden-temple",
    slug: "tirupati-to-vellore-golden-temple-cabs",
    title: "Tirupati to Vellore Golden Temple Cab Service",
    titleTe: "తిరుపతి నుండి వెల్లూరు గోల్డెన్ టెంపుల్ క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati to Vellore Golden Temple Cab Service | Sripuram Taxi | Akshaya Cabs",
    metaTitleTe: "తిరుపతి నుండి వెల్లూరు గోల్డెన్ టెంపుల్ క్యాబ్ సర్వీస్ | శ్రీపురం టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Day trip taxi from Tirupati to Sripuram Golden Temple, Vellore (~140 km). Interstate TN permit included. Combined with Arunachalam & Kanipakam from ₹8,000.",
    metaDescriptionTe: "తిరుపతి నుండి వెల్లూరు శ్రీపురం గోల్డెన్ టెంపుల్ కు 1-రోజు టాక్సీ (~140 కి.మీ). తమిళనాడు పర్మిట్ తో కూడిన ప్రయాణం. అరుణాచలం మరియు కాణిపాకంతో కలిపి ₹8,000 నుండి.",
    from: "Tirupati",
    fromTe: "తిరుపతి",
    to: "Vellore (Sripuram Sri Lakshmi Narayani Temple)",
    toTe: "వెల్లూరు (శ్రీపురం శ్రీ లక్ష్మీ నారాయణి ఆలయం)",
    distanceKm: 140,
    durationApprox: "3.0–3.5 hours",
    durationApproxTe: "3.0–3.5 గంటలు",
    highway: "NH 716 / NH 40 via Chittoor – Katpadi",
    highwayTe: "NH 716 / NH 40 (చిత్తూరు-కాట్పాడి మీదుగా)",
    startingPrice: 4800,
    priceNote: "One-way drop from ₹4,800 | Package AKC0007 (Kanipakam + Vellore + Arunachalam) from ₹8,000",
    priceNoteTe: "వన్-వే డ్రాప్ ₹4,800 నుండి | ప్యాకేజీ AKC0007 (కాణిపాకం + వెల్లూరు + అరుణాచలం) ₹8,000 నుండి",
    tripType: "outstation",
    image: "/images/akshaya/blog/blog-golden-temple.webp",
    overview: "The Sripuram Sri Lakshmi Narayani Golden Temple near Vellore, Tamil Nadu, is adorned with over 1.5 tonnes of pure gold. Situated ~140 km south of Tirupati, this renowned shrine features a celebrated 1.8 km star-shaped pathway leading to the sanctum sanctorum. Akshaya Cabs provides comprehensive interstate day-trip services with experienced highway drivers and transparent permit management.",
    overviewTe: "తమిళనాడులోని వెల్లూరు సమీపంలో ఉన్న శ్రీపురం శ్రీ లక్ష్మీ నారాయణి స్వర్ణ దేవాలయం 1.5 టన్నులకు పైగా బంగారంతో నిర్మించబడింది. తిరుపతికి సుమారు 140 కి.మీ దూరంలో ఉన్న ఈ అద్భుత క్షేత్రానికి 1.8 కి.మీ నక్షత్ర మార్గం గుండా చేరుకుంటారు. అక్షయ క్యాబ్స్ అనుభవజ్ఞులైన డ్రైవర్లతో తమిళనాడు పర్మిట్ నిబంధనలకు లోబడి పూర్తి 1-రోజు యాత్రా సేవలను అందిస్తుంది.",
    keyFeatures: [
      "Dedicated interstate cab with Tamil Nadu permit transparency",
      "Full waiting time included while devotees complete the 1.8 km star walk",
      "Combined circuit options: Kanipakam + Golden Temple + Arunachalam (AKC0007)",
      "Experienced drivers who know safe dining stops on the AP-TN highway",
    ],
    keyFeaturesTe: [
      "తమిళనాడు పర్మిట్ పారదర్శకతతో కూడిన డెడికేటెడ్ ఇంటర్‌స్టేట్ క్యాబ్",
      "1.8 కి.మీ నక్షత్ర మార్గం దర్శనం పూర్తయ్యే వరకు పూర్తి వెయిటింగ్ సదుపాయం",
      "సంయుక్త సర్క్యూట్: కాణిపాకం + గోల్డెన్ టెంపుల్ + అరుణాచలం (AKC0007)",
      "హైవేపై సురక్షితమైన భోజన శాలల సమాచారం తెలిసిన డ్రైవర్లు",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "Package AKC0007: ₹8,000 (circuit)", rateDescriptionTe: "ప్యాకేజీ AKC0007: ₹8,000 (సర్క్యూట్)" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "Package AKC0007: ₹11,500 (circuit)", rateDescriptionTe: "ప్యాకేజీ AKC0007: ₹11,500 (సర్క్యూట్)" },
      { vehicleId: "tempo", name: "Tempo Traveller (12+1)", nameTe: "టెంపో ట్రావెలర్ (12+1)", capacity: "12 Passengers", capacityTe: "12 మంది ప్రయాణికులు", rateDescription: "Package AKC0007: ₹14,000 (circuit)", rateDescriptionTe: "ప్యాకేజీ AKC0007: ₹14,000 (సర్క్యూట్)" },
    ],
    importantNotes: [
      "Zero electronics policy: No mobile phones or cameras allowed inside Sripuram.",
      "Tamil Nadu state border permit and highway tolls billed at actuals.",
    ],
    importantNotesTe: [
      "ఎలక్ట్రానిక్స్ నిషేధం: శ్రీపురం లోపలికి మొబైల్ ఫోన్లు లేదా కెమెరాలు అనుమతించబడవు.",
      "తమిళనాడు రాష్ట్ర సరిహద్దు పర్మిట్ మరియు టోల్ ఛార్జీలు అసలు రసీదు ప్రకారం ఉంటాయి.",
    ],
    faqs: [
      {
        q: "What is the best time of day to reach Vellore Golden Temple?",
        qTe: "వెల్లూరు గోల్డెన్ టెంపుల్ చేరుకోవడానికి ఉత్తమ సమయం ఏది?",
        a: "Late afternoon (around 4:00 PM) is ideal. You can complete the star walk during daylight and view the dazzling golden temple illuminated under lights at dusk.",
        aTe: "మధ్యాహ్నం 4:00 గంటలకు చేరుకోవడం ఉత్తమం. పగటి వెలుతురులో నక్షత్ర మార్గంలో నడిచి, సంధ్యా సమయంలో దీపాల వెలుగుల్లో స్వర్ణ మందిరాన్ని చూడవచ్చు.",
      },
    ],
    relatedPackageSlug: "kanipakam-golden-temple-arunachalam",
    relatedBlogSlug: "tirupati-to-golden-temple-vellore",
  },
  {
    id: "tirupati-local-sightseeing",
    slug: "tirupati-local-sightseeing-cabs",
    title: "Tirupati Local Sightseeing Cab Service",
    titleTe: "తిరుపతి స్థానిక ఆలయాల దర్శనం క్యాబ్ సర్వీస్",
    metaTitle: "Tirupati Local Sightseeing Cab Service | Valley Temple Tour Taxi | Akshaya Cabs",
    metaTitleTe: "తిరుపతి స్థానిక ఆలయాల దర్శనం క్యాబ్ సర్వీస్ | లోకల్ సైట్‌సీయింగ్ టాక్సీ | అక్షయ క్యాబ్స్",
    metaDescription: "Book local Tirupati sightseeing taxi for Padmavathi Temple, Govindaraja Swamy, Kapilatheertham & Srinivasa Mangapuram. Package AKC0009 from ₹2,300.",
    metaDescriptionTe: "పద్మావతి ఆలయం, గోవిందరాజ స్వామి, కపిలతీర్థం మరియు శ్రీనివాస మంగాపురం స్థానిక ఆలయాల దర్శనానికి టాక్సీ. ప్యాకేజీ AKC0009 ₹2,300 నుండి.",
    from: "Tirupati City",
    fromTe: "తిరుపతి నగరం",
    to: "Tirupati Valley Temples Circuit",
    toTe: "తిరుపతి లోయలోని ఆలయాల సర్క్యూట్",
    distanceKm: 70,
    durationApprox: "6–8 hours",
    durationApproxTe: "6–8 గంటలు",
    highway: "Tirupati City & Foothill Arterial Roads",
    highwayTe: "తిరుపతి నగర మరియు కొండ పాదాల రహదారులు",
    startingPrice: 2300,
    priceNote: "Package AKC0009: ₹2,300 (Sedan 4+1, 100 km allowance included)",
    priceNoteTe: "ప్యాకేజీ AKC0009: ₹2,300 (సెడాన్ 4+1, 100 కి.మీ అలవెన్స్ చేర్చబడింది)",
    tripType: "local",
    image: "/images/akshaya/blog/blog-temple-tour.webp",
    overview: "Tirupati city and its surrounding valley host some of the most sacred and architecturally majestic shrines in India. Many pilgrims finish their Tirumala visit and wish to complete the sacred pilgrimage cycle by paying homage to Goddess Padmavathi at Tiruchanur, Lord Govindaraja Swamy, Kapileswara Swamy at the foot of Seshachalam waterfalls, and Kalyana Venkateswara at Srinivasa Mangapuram. Akshaya Cabs provides dedicated 8-hour city cab packages so you can visit every shrine comfortably without negotiating with local auto drivers.",
    overviewTe: "తిరుపతి నగరం మరియు లోయ ప్రాంతంలో అత్యంత పవిత్రమైన పురాతన ఆలయాలు ఉన్నాయి. తిరుమల యాత్ర ముగిశాక తిరుచానూరు శ్రీ పద్మావతి అమ్మవారు, శ్రీ గోవిందరాజ స్వామి, కపిలతీర్థం మరియు శ్రీనివాస మంగాపురం దర్శించుకోవాలని భక్తులు కోరుకుంటారు. ఆటోలతో బేరసారాల ఇబ్బంది లేకుండా, అక్షయ క్యాబ్స్ 8-గంటల స్థానిక ఆలయ ప్యాకేజీలను అందిస్తుంది.",
    keyFeatures: [
      "Comprehensive valley circuit: Padmavathi, Govindaraja, Kapilatheertham & Srinivasa Mangapuram",
      "Flexible schedule with pickup from any Tirupati railway station, bus stand or hotel",
      "Dedicated air-conditioned vehicle waiting at every temple entrance",
      "Driver allowance included in flat package price",
      "Option to add Chandragiri Fort or ISKCON Tirupati upon request",
    ],
    keyFeaturesTe: [
      "సమగ్ర లోయ సర్క్యూట్: పద్మావతి, గోవిందరాజ, కపిలతీర్థం & శ్రీనివాస మంగాపురం",
      "రైల్వే స్టేషన్, బస్ స్టాండ్ లేదా హోటల్ నుండి అనుకూలమైన పికప్",
      "ప్రతి ఆలయ ప్రవేశం వద్ద వేచి ఉండే పరిశుభ్రమైన ఏసీ వాహనం",
      "స్థిర ప్యాకేజీ ధరలో డ్రైవర్ భత్యం చేర్చబడింది",
      "కోరినట్లయితే చంద్రగిరి కోట లేదా ఇస్కాన్ ఆలయాన్ని చేర్చుకునే అవకాశం",
    ],
    fleetOptions: [
      { vehicleId: "sedan", name: "Dzire / Amaze / Etios", nameTe: "డిజైర్ / అమేజ్ / ఎటియోస్", capacity: "4 Passengers", capacityTe: "4 గురు ప్రయాణికులు", rateDescription: "Package AKC0009: ₹2,300 (100 km included)", rateDescriptionTe: "ప్యాకేజీ AKC0009: ₹2,300 (100 కి.మీ చేర్చబడింది)" },
      { vehicleId: "ertiga", name: "Maruti Ertiga", nameTe: "మారుతి ఎర్టిగా", capacity: "6 Passengers", capacityTe: "6 గురు ప్రయాణికులు", rateDescription: "Package AKC0009: ₹2,800 (100 km included)", rateDescriptionTe: "ప్యాకేజీ AKC0009: ₹2,800 (100 కి.మీ చేర్చబడింది)" },
      { vehicleId: "innova-crysta", name: "Toyota Innova Crysta", nameTe: "టయోటా ఇన్నోవా క్రిస్టా", capacity: "7 Passengers", capacityTe: "7 గురు ప్రయాణికులు", rateDescription: "Package AKC0009: ₹3,500 (100 km included)", rateDescriptionTe: "ప్యాకేజీ AKC0009: ₹3,500 (100 కి.మీ చేర్చబడింది)" },
      { vehicleId: "tempo", name: "Tempo Traveller (12+1)", nameTe: "టెంపో ట్రావెలర్ (12+1)", capacity: "12 Passengers", capacityTe: "12 మంది ప్రయాణికులు", rateDescription: "Package AKC0009: ₹4,500 (100 km included)", rateDescriptionTe: "ప్యాకేజీ AKC0009: ₹4,500 (100 కి.మీ చేర్చబడింది)" },
    ],
    importantNotes: [
      "Package AKC0009 includes 8 hours and 100 km. Extra km and extra hours are billed at standard nominal rates.",
      "Temple parking slips are payable at actuals.",
    ],
    importantNotesTe: [
      "ప్యాకేజీ AKC0009 లో 8 గంటలు మరియు 100 కి.మీ చేర్చబడ్డాయి. అదనపు కిలోమీటర్లు మరియు గంటలకు సాధారణ రేట్లు వర్తిస్తాయి.",
      "ఆలయ పార్కింగ్ రశీదులు అసలు ఖర్చు ప్రకారం ఉంటాయి.",
    ],
    faqs: [
      {
        q: "In what order should we visit the Tirupati city temples?",
        qTe: "తిరుపతి నగర ఆలయాలను ఏ క్రమంలో దర్శించుకోవాలి?",
        a: "A tested sequence is starting with Padmavathi Ammavari Temple (Tiruchanur) in the morning, followed by Govindaraja Swamy Temple, Kapilatheertham in the afternoon, and concluding with Srinivasa Mangapuram.",
        aTe: "ఉదయం తిరుచానూరు పద్మావతి అమ్మవారితో ప్రారంభించి, ఆపై గోవిందరాజ స్వామి, మధ్యాహ్నం కపిలతీర్థం మరియు సాయంత్రం శ్రీనివాస మంగాపురంతో ముగించడం అనుకూలమైన క్రమం.",
      },
    ],
    relatedPackageSlug: "tirupati-local-temples",
    relatedBlogSlug: "tirupati-temple-tour-guide",
  },
];

export function getCabRouteBySlug(slug: string): CabRoute | undefined {
  return CAB_ROUTES.find((r) => r.slug === slug);
}
