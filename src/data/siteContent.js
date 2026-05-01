export const brand = {
  name: "Lexus Holidays",
  tagline: "Crafting Extraordinary Journeys",
  subTagline: "Premium travel experiences curated for the discerning traveller",
  phone: "+91 94316 XXXXX",
  whatsapp: "919431600000",
  email: "info@lexusholidays.in",
  address: "Main Road, Ranchi, Jharkhand – 834001",
  gst: "GSTIN: 20XXXXX1234Z5",
  socialLinks: {
    instagram: "https://instagram.com/lexusholidays",
    facebook: "https://facebook.com/lexusholidays",
    youtube: "https://youtube.com/@lexusholidays",
  },
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Hotels", href: "#hotels" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Jharkhand's Premier Travel Company",
  heading: "Escape the Ordinary,",
  headingAccent: "Discover the Extraordinary",
  subheading:
    "From the ghats of Varanasi to the beaches of Maldives — we craft journeys that become stories worth telling.",
  ctas: [
    { label: "Explore Packages", href: "#packages", variant: "primary" },
    { label: "Talk to Expert", href: "#contact", variant: "outline" },
  ],
  stats: [
    { value: "5000+", label: "Happy Travellers" },
    { value: "200+", label: "Destinations" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
  ],
};

export const holidayPackages = [
  {
    id: "pkg-1",
    category: "Domestic",
    badge: "Best Seller",
    destination: "Goa",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹18,500",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    highlights: ["Beach Resort Stay", "Sightseeing Tours", "Water Sports", "Airport Transfers"],
    description: "Sun, sand & sea — experience Goa's vibrant beaches, Portuguese heritage, and legendary nightlife.",
  },
  {
    id: "pkg-2",
    category: "Domestic",
    badge: "Popular",
    destination: "Kerala Backwaters",
    duration: "5 Nights / 6 Days",
    startingPrice: "₹22,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    highlights: ["Houseboat Stay", "Alleppey Backwaters", "Munnar Hills", "Ayurvedic Spa"],
    description: "Drift through emerald backwaters on a luxury houseboat and rejuvenate amidst misty hill stations.",
  },
  {
    id: "pkg-3",
    category: "Domestic",
    badge: "Trending",
    destination: "Rajasthan Royal",
    duration: "6 Nights / 7 Days",
    startingPrice: "₹25,500",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    highlights: ["Heritage Hotel Stay", "Jaipur & Udaipur", "Desert Safari", "Cultural Shows"],
    description: "Palaces, forts & desert dunes — the royal grandeur of Rajasthan awaits you.",
  },
  {
    id: "pkg-4",
    category: "International",
    badge: "Premium",
    destination: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    startingPrice: "₹55,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    highlights: ["5-Star Resort", "Temple Tours", "Rice Terrace Treks", "Cooking Class"],
    description: "Gods, temples & terraced rice fields — Bali is a feast for all the senses.",
  },
  {
    id: "pkg-5",
    category: "International",
    badge: "Luxury",
    destination: "Maldives",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹85,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    highlights: ["Overwater Villa", "Private Beach", "Snorkelling", "All Inclusive"],
    description: "Turquoise lagoons, coral reefs and overwater villas — pure island paradise.",
  },
  {
    id: "pkg-6",
    category: "International",
    badge: "Hot Deal",
    destination: "Thailand",
    duration: "6 Nights / 7 Days",
    startingPrice: "₹45,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
    highlights: ["Bangkok & Phuket", "Island Hopping", "Thai Massage", "Street Food Tour"],
    description: "Temples, islands & street food — Thailand offers endless adventure at an incredible value.",
  },
  {
    id: "pkg-7",
    category: "Pilgrimage",
    badge: "Spiritual",
    destination: "Char Dham Yatra",
    duration: "10 Nights / 11 Days",
    startingPrice: "₹32,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    description: "Embark on the sacred Char Dham journey — a pilgrimage of a lifetime through the Himalayas.",
  },
  {
    id: "pkg-8",
    category: "Domestic",
    badge: "Adventure",
    destination: "Manali & Spiti",
    duration: "7 Nights / 8 Days",
    startingPrice: "₹28,000",
    perPerson: true,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    highlights: ["Rohtang Pass", "Spiti Valley", "Camping", "River Rafting"],
    description: "High altitude valleys, snow peaks and ancient monasteries — Himachal's best kept secrets.",
  },
];

export const hotelPackages = [
  {
    id: "hotel-1",
    name: "The Leela Palace",
    location: "Udaipur, Rajasthan",
    stars: 5,
    category: "Luxury",
    pricePerNight: "₹18,000",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    amenities: ["Infinity Pool", "Spa", "Fine Dining", "Lake View", "Concierge"],
    description: "A palace-turned-luxury hotel overlooking Lake Pichola — unmatched grandeur.",
  },
  {
    id: "hotel-2",
    name: "ITC Grand Bharat",
    location: "Delhi NCR",
    stars: 5,
    category: "Heritage",
    pricePerNight: "₹22,000",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    amenities: ["Golf Course", "3 Pools", "Kaya Kalp Spa", "Multiple Restaurants", "Butler"],
    description: "Set on 300 acres, this retreat blends modern luxury with India's rich heritage.",
  },
  {
    id: "hotel-3",
    name: "Zuri White Sands",
    location: "South Goa",
    stars: 5,
    category: "Beach Resort",
    pricePerNight: "₹12,500",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    amenities: ["Beachfront", "Water Sports", "Pool Bar", "Spa", "Live Music"],
    description: "Nestled between Varca and Cavelossim beaches — the essence of Goan luxury.",
  },
  {
    id: "hotel-4",
    name: "Taj Coral Reef",
    location: "Maldives",
    stars: 5,
    category: "Overwater Villa",
    pricePerNight: "₹45,000",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
    amenities: ["Glass Floor Villa", "Private Pool", "Snorkelling", "Diving", "Private Butler"],
    description: "Overwater bungalows above the most pristine coral reef in the Indian Ocean.",
  },
  {
    id: "hotel-5",
    name: "The Kumarakom Lake Resort",
    location: "Kerala",
    stars: 5,
    category: "Heritage Lake",
    pricePerNight: "₹14,000",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    amenities: ["Private Jetty", "Ayurveda Centre", "Backwater Views", "Infinity Pool", "Cooking Classes"],
    description: "A heritage property with thatched villas floating above Vembanad Lake.",
  },
  {
    id: "hotel-6",
    name: "Anantara Bophut",
    location: "Koh Samui, Thailand",
    stars: 5,
    category: "Island Resort",
    pricePerNight: "₹20,000",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    amenities: ["Private Pool Villas", "Thai Cooking", "Spa", "Water Sports", "Beach Club"],
    description: "A north-shore sanctuary with traditional Thai architecture and contemporary luxury.",
  },
];

export const services = [
  {
    id: "svc-1",
    icon: "FaPlane",
    title: "Flight Booking",
    description:
      "Best airfare deals on domestic and international flights. We compare 200+ airlines so you don't have to.",
  },
  {
    id: "svc-2",
    icon: "FaHotel",
    title: "Hotel & Resort Packages",
    description:
      "Curated stays from boutique guesthouses to 5-star resorts — always at negotiated best rates.",
  },
  {
    id: "svc-3",
    icon: "FaRoute",
    title: "Custom Itineraries",
    description:
      "Tailored travel plans built around your interests, budget and pace. No cookie-cutter itineraries.",
  },
  {
    id: "svc-4",
    icon: "FaPassport",
    title: "Visa Assistance",
    description:
      "End-to-end visa processing for 50+ countries. We handle paperwork, documentation & appointments.",
  },
  {
    id: "svc-5",
    icon: "FaShieldAlt",
    title: "Travel Insurance",
    description:
      "Comprehensive coverage for medical emergencies, trip cancellations, baggage loss and more.",
  },
  {
    id: "svc-6",
    icon: "FaUsers",
    title: "Group & MICE Tours",
    description:
      "Corporate retreats, destination weddings, family reunions — we manage every detail for groups.",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Priya Sharma",
    location: "Ranchi",
    rating: 5,
    avatar: "PS",
    package: "Bali Honeymoon Package",
    review:
      "Lexus Holidays made our honeymoon absolutely magical. Every detail was taken care of — from the airport pickup in Bali to the surprise rose-petal decoration in our villa. We didn't have to think about anything!",
  },
  {
    id: "t-2",
    name: "Rajesh Kumar",
    location: "Jamshedpur",
    rating: 5,
    avatar: "RK",
    package: "Rajasthan Family Tour",
    review:
      "Traveled with my family of 8 to Rajasthan. The team was incredibly patient with our needs, arranged heritage hotel stays and even organized a special dinner at a palace. Truly 5-star service.",
  },
  {
    id: "t-3",
    name: "Ananya Singh",
    location: "Dhanbad",
    rating: 5,
    avatar: "AS",
    package: "Kerala Backwaters",
    review:
      "The houseboat stay on the Kerala backwaters was a dream come true. Lexus sorted every detail seamlessly. The itinerary was perfectly paced — we never felt rushed. Will definitely book again!",
  },
  {
    id: "t-4",
    name: "Vikram Agarwal",
    location: "Bokaro",
    rating: 5,
    avatar: "VA",
    package: "Maldives Luxury Package",
    review:
      "Worth every rupee. The overwater villa in Maldives exceeded our expectations. The Lexus team was responsive on WhatsApp throughout the trip. Exceptional value and service.",
  },
];

export const faqs = [
  {
    id: "faq-1",
    question: "How do I book a holiday package with Lexus Holidays?",
    answer:
      "Simply fill out our enquiry form, call us directly, or message us on WhatsApp. Our travel experts will call you back within 2 hours to discuss your requirements and create a customised itinerary.",
  },
  {
    id: "faq-2",
    question: "Do you offer customised tour packages?",
    answer:
      "Absolutely. All our packages can be fully customised — dates, duration, accommodation category, inclusions and special requests. We build itineraries around your budget and preferences, not the other way around.",
  },
  {
    id: "faq-3",
    question: "What is the payment process?",
    answer:
      "We accept UPI, net banking, credit/debit cards and bank transfers. A 25% advance is required to confirm bookings, with the balance due 15 days before departure. EMI options are available on select packages.",
  },
  {
    id: "faq-4",
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We provide complete visa assistance for 50+ countries including Bali, Thailand, Maldives, Singapore, Dubai, Europe and more. We handle documentation, appointment scheduling and application submission.",
  },
  {
    id: "faq-5",
    question: "What if I need to cancel or reschedule my trip?",
    answer:
      "Cancellation and rescheduling policies vary by package and airline. We always recommend travel insurance, which we can arrange for you. Our team assists with rebooking and minimising cancellation charges wherever possible.",
  },
  {
    id: "faq-6",
    question: "Do you organise group tours and corporate travel?",
    answer:
      "Yes! We specialise in group tours, corporate offsite, MICE events, destination weddings and pilgrimage tours. Groups of 10+ get special pricing and a dedicated relationship manager.",
  },
];

export const contactInfo = {
  phone: "+91 94316 XXXXX",
  whatsapp: "919431600000",
  whatsappMessage: "Hello! I'm interested in booking a holiday package with Lexus Holidays. Please help me.",
  email: "info@lexusholidays.in",
  emailSubject: "Holiday Package Enquiry – Lexus Holidays",
  address: "2nd Floor, Travels Hub, Main Road, Ranchi, Jharkhand – 834001",
  hours: "Mon–Sat: 9:30 AM – 7:00 PM | Sun: 10:00 AM – 4:00 PM",
  mapUrl: "https://maps.google.com/?q=Ranchi+Jharkhand",
};
