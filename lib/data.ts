export interface Artist {
  id: string;
  slug: string;
  name: string;
  title: string;
  style: string[];
  bio: string;
  shortBio: string;
  yearsExperience: number;
  instagram: string;
  profileImage: string;
  portfolioImages: string[];
  specialties: string[];
  isResident: boolean;
}

export interface GuestArtist {
  id: string;
  name: string;
  city: string;
  country: string;
  style: string[];
  visitingDates: string;
  instagram: string;
  profileImage: string;
  status: 'upcoming' | 'past';
  bio?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    slug: 'yuki-tanaka',
    name: 'Yuki Tanaka',
    title: 'Lead Artist & Founder',
    style: ['Japanese Traditional', 'Neo-Japanese', 'Blackwork'],
    bio: 'Yuki Tanaka is the founder and lead artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. With over 15 years of experience in the tattoo industry, Yuki has developed a distinctive style that blends traditional Japanese aesthetics with contemporary techniques. His work is known for bold compositions, precise linework, and a deep respect for the heritage of Japanese tattooing. Based in the heart of Tokyo, Yuki welcomes both local and international clients seeking authentic Japanese tattoo artistry.',
    shortBio: 'Founder of ZUMBIDO TATTOO. Master of Japanese traditional and neo-Japanese styles with 15+ years in Tokyo.',
    yearsExperience: 15,
    instagram: '@yuki_zumbido',
    profileImage: '/images/artists/yuki.jpg',
    portfolioImages: [
      '/images/portfolio/yuki-1.jpg',
      '/images/portfolio/yuki-2.jpg',
      '/images/portfolio/yuki-3.jpg',
      '/images/portfolio/yuki-4.jpg',
      '/images/portfolio/yuki-5.jpg',
      '/images/portfolio/yuki-6.jpg',
    ],
    specialties: ['Full Sleeves', 'Back Pieces', 'Japanese Mythology', 'Koi', 'Dragons'],
    isResident: true,
  },
  {
    id: '2',
    slug: 'mika-sato',
    name: 'Mika Sato',
    title: 'Senior Artist',
    style: ['Blackwork', 'Geometric', 'Ornamental'],
    bio: 'Mika Sato brings a unique perspective to ZUMBIDO TATTOO in Nakameguro, Tokyo, specializing in blackwork and geometric designs. Her architectural background influences her precise, mathematically-inspired compositions. With 8 years of tattooing experience in Tokyo, Mika has built a reputation for intricate mandala work and ornamental pieces that push the boundaries of contemporary tattooing.',
    shortBio: 'Blackwork specialist with an architectural eye. Creating geometric masterpieces in Tokyo for 8 years.',
    yearsExperience: 8,
    instagram: '@mika_blackink',
    profileImage: '/images/artists/mika.jpg',
    portfolioImages: [
      '/images/portfolio/mika-1.jpg',
      '/images/portfolio/mika-2.jpg',
      '/images/portfolio/mika-3.jpg',
      '/images/portfolio/mika-4.jpg',
      '/images/portfolio/mika-5.jpg',
      '/images/portfolio/mika-6.jpg',
    ],
    specialties: ['Mandalas', 'Sacred Geometry', 'Dotwork', 'Ornamental', 'Minimalist'],
    isResident: true,
  },
  {
    id: '3',
    slug: 'ryu-nakamura',
    name: 'Ryu Nakamura',
    title: 'Artist',
    style: ['Realism', 'Dark Art', 'Horror'],
    bio: 'Ryu Nakamura is a master of dark realism at ZUMBIDO TATTOO in Nakameguro, Tokyo. His work explores the macabre and supernatural, drawing inspiration from horror cinema, gothic literature, and the darker corners of human imagination. With 10 years of experience, Ryu has become a sought-after artist for clients wanting bold, dramatic pieces with incredible depth and detail.',
    shortBio: 'Dark realism specialist. 10 years creating horror-inspired masterpieces in Tokyo.',
    yearsExperience: 10,
    instagram: '@ryu_darkart',
    profileImage: '/images/artists/ryu.jpg',
    portfolioImages: [
      '/images/portfolio/ryu-1.jpg',
      '/images/portfolio/ryu-2.jpg',
      '/images/portfolio/ryu-3.jpg',
      '/images/portfolio/ryu-4.jpg',
      '/images/portfolio/ryu-5.jpg',
      '/images/portfolio/ryu-6.jpg',
    ],
    specialties: ['Portraits', 'Horror', 'Dark Surrealism', 'Skulls', 'Gothic'],
    isResident: true,
  },
  {
    id: '4',
    slug: 'hana-kim',
    name: 'Hana Kim',
    title: 'Artist',
    style: ['Fine Line', 'Illustrative', 'Botanical'],
    bio: 'Hana Kim brings delicate precision to ZUMBIDO TATTOO in Nakameguro, Tokyo. Specializing in fine line work and botanical illustrations, her tattoos capture the ephemeral beauty of nature with stunning detail. Originally from Seoul and now based in Tokyo, Hana has spent 6 years refining her craft, creating pieces that feel both timeless and contemporary.',
    shortBio: 'Fine line artist from Seoul, now creating botanical art in Tokyo for 6 years.',
    yearsExperience: 6,
    instagram: '@hana_fineline',
    profileImage: '/images/artists/hana.jpg',
    portfolioImages: [
      '/images/portfolio/hana-1.jpg',
      '/images/portfolio/hana-2.jpg',
      '/images/portfolio/hana-3.jpg',
      '/images/portfolio/hana-4.jpg',
      '/images/portfolio/hana-5.jpg',
      '/images/portfolio/hana-6.jpg',
    ],
    specialties: ['Florals', 'Fine Line', 'Micro Tattoos', 'Botanical', 'Illustrative'],
    isResident: true,
  },
];

export const guestArtists: GuestArtist[] = [
  {
    id: 'g1',
    name: 'Marcus Black',
    city: 'London',
    country: 'UK',
    style: ['Traditional', 'Neo-Traditional', 'Bold'],
    visitingDates: 'June 15-30, 2025',
    instagram: '@marcusblack_tattoo',
    profileImage: '/images/guests/marcus.jpg',
    status: 'upcoming',
    bio: 'London-based traditional tattoo master bringing classic Western style to Tokyo.',
  },
  {
    id: 'g2',
    name: 'Elena Voss',
    city: 'Berlin',
    country: 'Germany',
    style: ['Abstract', 'Watercolor', 'Avant-garde'],
    visitingDates: 'July 1-15, 2025',
    instagram: '@elenavoss_art',
    profileImage: '/images/guests/elena.jpg',
    status: 'upcoming',
    bio: 'Berlin avant-garde artist known for pushing boundaries with abstract compositions.',
  },
  {
    id: 'g3',
    name: 'Jake Morrison',
    city: 'Los Angeles',
    country: 'USA',
    style: ['Chicano', 'Script', 'Portrait'],
    visitingDates: 'March 1-14, 2025',
    instagram: '@jakemorrison_ink',
    profileImage: '/images/guests/jake.jpg',
    status: 'past',
    bio: 'LA legend specializing in Chicano style and script work.',
  },
  {
    id: 'g4',
    name: 'Sofia Chen',
    city: 'Taipei',
    country: 'Taiwan',
    style: ['Watercolor', 'Illustrative', 'Kawaii'],
    visitingDates: 'February 10-25, 2025',
    instagram: '@sofiachen_tattoo',
    profileImage: '/images/guests/sofia.jpg',
    status: 'past',
    bio: 'Taiwanese artist blending cute aesthetics with sophisticated illustration.',
  },
  {
    id: 'g5',
    name: 'Viktor Morozov',
    city: 'Moscow',
    country: 'Russia',
    style: ['Realism', 'Black and Grey', 'Portrait'],
    visitingDates: 'January 5-20, 2025',
    instagram: '@viktormorozov_art',
    profileImage: '/images/guests/viktor.jpg',
    status: 'past',
    bio: 'Russian realism master specializing in hyper-realistic portraits.',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Do you accept English-speaking clients?',
    answer: 'Absolutely! ZUMBIDO TATTOO welcomes international clients. All our artists are fluent in English and experienced in working with visitors from around the world. We pride ourselves on clear communication throughout the entire tattoo process.',
  },
  {
    question: 'Can tourists book appointments?',
    answer: 'Yes, we love working with tourists visiting Tokyo! We recommend booking at least 2-4 weeks in advance to secure your preferred artist and time slot. For larger pieces requiring multiple sessions, please contact us early to plan your schedule.',
  },
  {
    question: 'Do you accept walk-ins?',
    answer: 'While we primarily work by appointment, we occasionally have availability for walk-ins depending on the day and the size of the tattoo. Small pieces are more likely to be accommodated. For the best experience, we recommend booking in advance.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer: 'Get a good night\'s sleep, eat a proper meal before your appointment, stay hydrated, and avoid alcohol for 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed. Bring a valid ID and any reference images you\'d like to discuss.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash (Japanese Yen), major credit cards (Visa, Mastercard, American Express), and various mobile payment options including PayPay and LINE Pay. A deposit is required to secure your booking.',
  },
  {
    question: 'What is your booking process?',
    answer: 'Contact us via Instagram DM or our booking form with your idea, preferred artist, size, placement, and available dates. We\'ll respond with availability and pricing. A deposit (typically 10,000-30,000 JPY depending on the project) confirms your appointment.',
  },
  {
    question: 'How much do tattoos cost?',
    answer: 'Pricing varies based on size, complexity, placement, and artist. Small pieces start around 15,000 JPY, while larger custom work is quoted individually. We provide detailed quotes after consultation. All prices include aftercare instructions and products.',
  },
  {
    question: 'What styles do you specialize in?',
    answer: 'ZUMBIDO TATTOO specializes in Japanese traditional, neo-Japanese, blackwork, geometric, realism, dark art, fine line, and botanical styles. Check our artists\' portfolios to find the perfect match for your vision.',
  },
];

export const portfolioImages = [
  { id: 'p1', src: '/images/portfolio/work-1.jpg', artist: 'Yuki Tanaka', style: 'Japanese' },
  { id: 'p2', src: '/images/portfolio/work-2.jpg', artist: 'Mika Sato', style: 'Geometric' },
  { id: 'p3', src: '/images/portfolio/work-3.jpg', artist: 'Ryu Nakamura', style: 'Dark Art' },
  { id: 'p4', src: '/images/portfolio/work-4.jpg', artist: 'Hana Kim', style: 'Fine Line' },
  { id: 'p5', src: '/images/portfolio/work-5.jpg', artist: 'Yuki Tanaka', style: 'Neo-Japanese' },
  { id: 'p6', src: '/images/portfolio/work-6.jpg', artist: 'Mika Sato', style: 'Blackwork' },
  { id: 'p7', src: '/images/portfolio/work-7.jpg', artist: 'Ryu Nakamura', style: 'Realism' },
  { id: 'p8', src: '/images/portfolio/work-8.jpg', artist: 'Hana Kim', style: 'Botanical' },
  { id: 'p9', src: '/images/portfolio/work-9.jpg', artist: 'Yuki Tanaka', style: 'Japanese' },
  { id: 'p10', src: '/images/portfolio/work-10.jpg', artist: 'Mika Sato', style: 'Ornamental' },
  { id: 'p11', src: '/images/portfolio/work-11.jpg', artist: 'Ryu Nakamura', style: 'Horror' },
  { id: 'p12', src: '/images/portfolio/work-12.jpg', artist: 'Hana Kim', style: 'Illustrative' },
];

export const studioInfo = {
  name: 'ZUMBIDO TATTOO',
  tagline: 'Underground Tattoo Studio in Nakameguro, Tokyo',
  description: 'Bold lines. Dark culture. Tokyo ink.',
  address: '1-2-3 Nakameguro, Meguro-ku, Tokyo 153-0061, Japan',
  phone: '+81-3-XXXX-XXXX',
  email: 'info@zumbidotattoo.com',
  instagram: '@zumbido_tattoo',
  hours: {
    weekdays: '12:00 PM - 9:00 PM',
    saturday: '11:00 AM - 8:00 PM',
    sunday: 'By Appointment Only',
    monday: 'Closed',
  },
  mapUrl: 'https://maps.google.com/?q=Nakameguro,Tokyo',
};
