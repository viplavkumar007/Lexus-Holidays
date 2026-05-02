export const brand = {
  name: "Lexus Holidays",
  tagline: "Crafting Extraordinary Journeys",
  subTagline: "Premium travel experiences curated for the discerning traveller",
  phone: "+91 92175 12040",
  whatsapp: "919217512040",
  email: "lexusholidaysinn@gmail.com",
  address: "124, H Block, Street No. 16, Sangam Vihar, New Delhi - 110080",
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
  badge: "Delhi's Premier Travel Company",
  heading: "Escape the Ordinary,",
  headingAccent: "Discover the Extraordinary",
  subheading:
    "From domestic tours and international holidays to flights, hotels, visas, and taxi transfers, we craft journeys that become stories worth telling.",
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
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    highlights: ["Beach Resort Stay", "Sightseeing Tours", "Water Sports", "Airport Transfers"],
    description: "Sun, sand, and sea - experience Goa's vibrant beaches, Portuguese heritage, and nightlife.",
  },
  {
    id: "pkg-2",
    category: "Domestic",
    badge: "Popular",
    destination: "Kerala Backwaters",
    duration: "5 Nights / 6 Days",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    highlights: ["Houseboat Stay", "Alleppey Backwaters", "Munnar Hills", "Ayurvedic Spa"],
    description: "Drift through emerald backwaters on a luxury houseboat and unwind among misty hill stations.",
  },
  {
    id: "pkg-3",
    category: "Domestic",
    badge: "Trending",
    destination: "Rajasthan Royal",
    duration: "6 Nights / 7 Days",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    highlights: ["Heritage Hotel Stay", "Jaipur & Udaipur", "Desert Safari", "Cultural Shows"],
    description: "Palaces, forts, and desert dunes - the royal grandeur of Rajasthan awaits you.",
  },
  {
    id: "pkg-4",
    category: "International",
    badge: "Premium",
    destination: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    highlights: ["5-Star Resort", "Temple Tours", "Rice Terrace Treks", "Cooking Class"],
    description: "Gods, temples, and terraced rice fields - Bali is a feast for all the senses.",
  },
  {
    id: "pkg-5",
    category: "International",
    badge: "Luxury",
    destination: "Maldives",
    duration: "4 Nights / 5 Days",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    highlights: ["Overwater Villa", "Private Beach", "Snorkelling", "All Inclusive"],
    description: "Turquoise lagoons, coral reefs, and overwater villas - pure island paradise.",
  },
  {
    id: "pkg-6",
    category: "International",
    badge: "Hot Deal",
    destination: "Thailand",
    duration: "6 Nights / 7 Days",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
    highlights: ["Bangkok & Phuket", "Island Hopping", "Thai Massage", "Street Food Tour"],
    description: "Temples, islands, and street food - Thailand offers endless adventure at great value.",
  },
  {
    id: "pkg-7",
    category: "Pilgrimage",
    badge: "Spiritual",
    destination: "4 Dham Yatra",
    duration: "10 Nights / 11 Days",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    description: "Embark on the sacred 4 Dham Yatra with complete travel planning, stays, transfers, and guidance.",
  },
  {
    id: "pkg-8",
    category: "Domestic",
    badge: "Adventure",
    destination: "Manali Tour",
    duration: "7 Nights / 8 Days",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    highlights: ["Rohtang Pass", "Snow Activities", "Local Sightseeing", "Private Cab"],
    description: "A complete Manali tour package with scenic mountain stays, sightseeing, and comfortable transfers.",
  },
];

export const hotelPackages = [
  {
    id: "hotel-1",
    name: "The Leela Palace",
    location: "Udaipur, Rajasthan",
    stars: 5,
    category: "Luxury",
    pricePerNight: "Rs18,000",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    amenities: ["Infinity Pool", "Spa", "Fine Dining", "Lake View", "Concierge"],
    description: "A palace-turned-luxury hotel overlooking Lake Pichola with unmatched grandeur.",
  },
  {
    id: "hotel-2",
    name: "ITC Grand Bharat",
    location: "Delhi NCR",
    stars: 5,
    category: "Heritage",
    pricePerNight: "Rs22,000",
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
    pricePerNight: "Rs12,500",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    amenities: ["Beachfront", "Water Sports", "Pool Bar", "Spa", "Live Music"],
    description: "Nestled between Varca and Cavelossim beaches - the essence of Goan luxury.",
  },
  {
    id: "hotel-4",
    name: "Taj Coral Reef",
    location: "Maldives",
    stars: 5,
    category: "Overwater Villa",
    pricePerNight: "Rs45,000",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
    amenities: ["Glass Floor Villa", "Private Pool", "Snorkelling", "Diving", "Private Butler"],
    description: "Overwater bungalows above one of the most pristine coral reefs in the Indian Ocean.",
  },
  {
    id: "hotel-5",
    name: "The Kumarakom Lake Resort",
    location: "Kerala",
    stars: 5,
    category: "Heritage Lake",
    pricePerNight: "Rs14,000",
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
    pricePerNight: "Rs20,000",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    amenities: ["Private Pool Villas", "Thai Cooking", "Spa", "Water Sports", "Beach Club"],
    description: "A north-shore sanctuary with traditional Thai architecture and contemporary luxury.",
  },
];

export const services = [
  {
    id: "svc-1",
    icon: "FaPlane",
    title: "Domestic & International Flights",
    description:
      "Best airfare deals for both domestic and international routes with reliable booking support and flexible travel options.",
  },
  {
    id: "svc-2",
    icon: "FaHotel",
    title: "Domestic & International Hotel Booking",
    description:
      "We arrange hotel bookings across India and abroad, from budget stays to premium resorts with reliable end-to-end support.",
  },
  {
    id: "svc-3",
    icon: "FaPassport",
    title: "Visa Apply Services",
    description:
      "End-to-end visa application assistance with documentation help, appointment guidance, and smooth processing support.",
  },
  {
    id: "svc-4",
    icon: "FaRoute",
    title: "Tour Packages",
    description:
      "We create ready and custom tour packages for destinations like 4 Dham Yatra, Manali, Goa, Kerala, Thailand, Bali, and more.",
  },
  {
    id: "svc-5",
    icon: "FaCarSide",
    title: "Taxi Transfer Services",
    description:
      "Comfortable taxi services for one place to another, including airport pickup, hotel transfer, local travel, and outstation rides.",
  },
  {
    id: "svc-6",
    icon: "FaUsers",
    title: "Group & Family Travel",
    description:
      "Group tours, family vacations, pilgrimage departures, and special travel planning with end-to-end coordination.",
  },
  {
    id: "svc-7",
    icon: "FaShieldAlt",
    title: "Complete Travel Support",
    description:
      "From enquiry to return journey, we support bookings, coordination, itinerary changes, and transparent trip planning under one roof.",
  },
];

export const testimonials = [
  {
    id: "t-1",
    name: "Priya Sharma",
    location: "South Delhi",
    rating: 5,
    avatar: "PS",
    package: "Bali Honeymoon Package",
    review:
      "Lexus Holidays made our honeymoon absolutely magical. Every detail was taken care of, from airport pickup in Bali to the surprise villa decoration.",
  },
  {
    id: "t-2",
    name: "Rajesh Kumar",
    location: "Sangam Vihar, Delhi",
    rating: 5,
    avatar: "RK",
    package: "Rajasthan Family Tour",
    review:
      "Traveling with my family of 8 to Rajasthan was smooth and comfortable. The team arranged heritage stays and handled every detail beautifully.",
  },
  {
    id: "t-3",
    name: "Ananya Singh",
    location: "Greater Kailash, Delhi",
    rating: 5,
    avatar: "AS",
    package: "Kerala Backwaters",
    review:
      "The houseboat stay on the Kerala backwaters was a dream come true. The itinerary was perfectly paced and everything was coordinated seamlessly.",
  },
  {
    id: "t-4",
    name: "Vikram Agarwal",
    location: "Lajpat Nagar, Delhi",
    rating: 5,
    avatar: "VA",
    package: "Maldives Luxury Package",
    review:
      "Worth every rupee. The overwater villa in Maldives exceeded our expectations, and the team stayed responsive on WhatsApp throughout the trip.",
  },
];

export const faqs = [
  {
    id: "faq-1",
    question: "How do I book a holiday package with Lexus Holidays?",
    answer:
      "Simply fill out our enquiry form, call us directly, or message us on WhatsApp. Our travel experts will get back to you quickly and help create the right itinerary.",
  },
  {
    id: "faq-2",
    question: "Do you offer customised tour packages?",
    answer:
      "Yes. All our packages can be customised for dates, duration, hotels, inclusions, and special requests based on your budget and preferences.",
  },
  {
    id: "faq-3",
    question: "What is the payment process?",
    answer:
      "We accept UPI, net banking, credit cards, debit cards, and bank transfers. Advance payment is required to confirm bookings, with the balance due before departure.",
  },
  {
    id: "faq-4",
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We provide visa application support for many international destinations and help with documents, appointments, and submission guidance.",
  },
  {
    id: "faq-5",
    question: "Do you provide hotel, flight, and taxi booking separately?",
    answer:
      "Yes. You can book domestic or international hotels, flights, visa services, taxi transfers, or complete holiday packages with us separately as needed.",
  },
  {
    id: "faq-6",
    question: "Do you organise group tours and family travel?",
    answer:
      "Yes. We handle group tours, family vacations, pilgrimage departures, and special travel planning with end-to-end coordination.",
  },
];

export const contactInfo = {
  phone: "+91 92175 12040",
  whatsapp: "919217512040",
  whatsappMessage: "Hello! I'm interested in booking a holiday package with Lexus Holidays. Please help me.",
  email: "lexusholidaysinn@gmail.com",
  emailSubject: "Holiday Package Enquiry - Lexus Holidays",
  address: "124, H Block, Street No. 16, Sangam Vihar, New Delhi - 110080",
  hours: "Mon-Sat: 9:30 AM - 7:00 PM | Sun: 10:00 AM - 4:00 PM",
  mapUrl: "https://maps.google.com/?q=124+H+Block+Street+No+16+Sangam+Vihar+New+Delhi+110080",
};
