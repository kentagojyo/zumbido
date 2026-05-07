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
  instagramUrl: string;
  profileImage: string;
  profileImagePosition?: string;
  profileImageTone?: string;
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
  instagramUrl: string;
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
    slug: 'megu',
    name: 'Megu',
    title: 'Lead Artist & Founder',
    style: ['Japanese Traditional', 'Neo-Japanese', 'Blackwork'],
    bio: 'Megu is the founder and lead artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. With over 15 years of experience in the tattoo industry, Megu has developed a distinctive style that blends traditional Japanese aesthetics with contemporary techniques. The work is known for bold compositions, precise linework, and a deep respect for the heritage of Japanese tattooing. Based in the heart of Tokyo, Megu welcomes both local and international clients seeking authentic Japanese tattoo artistry.',
    shortBio: 'Founder of ZUMBIDO TATTOO. Master of Japanese traditional and neo-Japanese styles with 15+ years in Tokyo.',
    yearsExperience: 15,
    instagram: '@megumu_weirdo',
    instagramUrl: 'https://www.instagram.com/megumu_weirdo/',
    profileImage: '/images/artists/mika.jpg',
    profileImagePosition: 'object-[50%_38%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.82)_brightness(0.86)] group-hover:[filter:contrast(1.1)_saturate(0.88)_brightness(0.93)]',
    portfolioImages: [
      '/images/work-blackwork-01.jpg',
      '/images/work-lettering-01.jpg',
    ],
    specialties: ['Full Sleeves', 'Back Pieces', 'Japanese Mythology', 'Koi', 'Dragons'],
    isResident: true,
  },
  {
    id: '2',
    slug: 'yasu',
    name: 'Yasu',
    title: 'Senior Artist',
    style: ['Blackwork', 'Geometric', 'Ornamental'],
    bio: 'Yasu brings a precise, architectural perspective to ZUMBIDO TATTOO in Nakameguro, Tokyo, specializing in blackwork and geometric designs. With 8 years of tattooing experience in Tokyo, Yasu has built a reputation for intricate ornamental pieces that push the boundaries of contemporary tattooing.',
    shortBio: 'Blackwork specialist with an architectural eye. Creating geometric masterpieces in Tokyo for 8 years.',
    yearsExperience: 8,
    instagram: '@yapetas',
    instagramUrl: 'https://www.instagram.com/yapetas/',
    profileImage: '/images/artists/yuki.jpg',
    profileImagePosition: 'object-[52%_44%]',
    profileImageTone: '[filter:contrast(1.06)_saturate(0.84)_brightness(0.88)] group-hover:[filter:contrast(1.08)_saturate(0.9)_brightness(0.95)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    specialties: ['Mandalas', 'Sacred Geometry', 'Dotwork', 'Ornamental', 'Minimalist'],
    isResident: true,
  },
  {
    id: '3',
    slug: 'gentaro',
    name: 'Gentaro',
    title: 'Artist',
    style: ['Realism', 'Dark Art', 'Horror'],
    bio: 'Gentaro is a master of dark realism at ZUMBIDO TATTOO in Nakameguro, Tokyo. His work explores dramatic contrast, atmosphere, and depth for clients wanting bold pieces with a cinematic presence.',
    shortBio: 'Dark realism specialist. 10 years creating horror-inspired masterpieces in Tokyo.',
    yearsExperience: 10,
    instagram: '@gentaro_tattoo',
    instagramUrl: 'https://www.instagram.com/gentaro_tattoo/',
    profileImage: '/images/artist-megumu.png',
    profileImagePosition: 'object-[54%_48%]',
    profileImageTone: '[filter:grayscale(1)_contrast(1.14)_brightness(0.78)] group-hover:[filter:grayscale(0.85)_contrast(1.16)_brightness(0.86)]',
    portfolioImages: [
      '/images/work-blackwork-01.jpg',
      '/images/work-lettering-01.jpg',
    ],
    specialties: ['Portraits', 'Horror', 'Dark Surrealism', 'Skulls', 'Gothic'],
    isResident: true,
  },
  {
    id: '4',
    slug: 'josh',
    name: 'Josh',
    title: 'Artist',
    style: ['Fine Line', 'Illustrative', 'Botanical'],
    bio: 'Josh brings delicate precision to ZUMBIDO TATTOO in Nakameguro, Tokyo. Specializing in fine line work and illustration, his tattoos balance detail, restraint, and contemporary composition.',
    shortBio: 'Fine line artist from Seoul, now creating botanical art in Tokyo for 6 years.',
    yearsExperience: 6,
    instagram: '@joshualeetattoo',
    instagramUrl: 'https://www.instagram.com/joshualeetattoo/',
    profileImage: '/images/artists/ryu.jpg',
    profileImagePosition: 'object-[58%_36%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.82)_brightness(0.82)] group-hover:[filter:contrast(1.1)_saturate(0.88)_brightness(0.9)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    specialties: ['Florals', 'Fine Line', 'Micro Tattoos', 'Botanical', 'Illustrative'],
    isResident: true,
  },
  {
    id: '5',
    slug: 'kotaro',
    name: 'Kotaro',
    title: 'Artist',
    style: ['Blackwork', 'Lettering', 'Graphic'],
    bio: 'Kotaro works with bold blackwork, graphic rhythm, and lettering at ZUMBIDO TATTOO in Nakameguro, Tokyo. His pieces are direct, sharp, and built around strong visual impact.',
    shortBio: 'Graphic blackwork and lettering artist creating sharp, high-impact Tokyo tattoos.',
    yearsExperience: 7,
    instagram: '@kotaro_zido',
    instagramUrl: 'https://www.instagram.com/kotaro_zido/',
    profileImage: '/images/guest-artist-01.jpg',
    profileImagePosition: 'object-[50%_34%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.72)_brightness(0.82)] group-hover:[filter:contrast(1.1)_saturate(0.78)_brightness(0.9)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    specialties: ['Lettering', 'Blackwork', 'Graphic Pieces', 'Flash', 'Custom Work'],
    isResident: true,
  },
  {
    id: '6',
    slug: 'echo',
    name: 'Echo',
    title: 'Artist',
    style: ['Fine Line', 'Ornamental', 'Minimalist'],
    bio: 'Echo creates refined fine line and ornamental tattoos at ZUMBIDO TATTOO in Nakameguro, Tokyo, with a focus on clean placement, quiet detail, and lasting balance.',
    shortBio: 'Fine line and ornamental artist focused on quiet detail and clean placement.',
    yearsExperience: 6,
    instagram: '@echo_tatt',
    instagramUrl: 'https://www.instagram.com/echo_tatt/',
    profileImage: '/images/guests/jake.jpg',
    profileImagePosition: 'object-[50%_34%]',
    profileImageTone: '[filter:contrast(1.06)_saturate(0.76)_brightness(0.82)] group-hover:[filter:contrast(1.08)_saturate(0.82)_brightness(0.9)]',
    portfolioImages: [
      '/images/portfolio/hana-1.jpg',
      '/images/portfolio/hana-2.jpg',
    ],
    specialties: ['Fine Line', 'Ornamental', 'Minimalist', 'Small Pieces', 'Botanical'],
    isResident: true,
  },
  {
    id: '7',
    slug: 'morgan',
    name: 'Morgan',
    title: 'Artist',
    style: ['Illustrative', 'Blackwork', 'Dark Art'],
    bio: 'Morgan brings illustrative blackwork and dark art sensibility to ZUMBIDO TATTOO in Nakameguro, Tokyo, shaping tattoos with atmosphere, texture, and editorial restraint.',
    shortBio: 'Illustrative blackwork artist shaping atmospheric tattoos with dark editorial restraint.',
    yearsExperience: 5,
    instagram: '@morgantat2',
    instagramUrl: 'https://www.instagram.com/morgantat2/',
    profileImage: '/images/guests/marcus.jpg',
    profileImagePosition: 'object-[50%_38%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.78)_brightness(0.8)] group-hover:[filter:contrast(1.1)_saturate(0.84)_brightness(0.88)]',
    portfolioImages: [
      '/images/work-blackwork-01.jpg',
      '/images/portfolio/hana-3.jpg',
    ],
    specialties: ['Illustrative', 'Blackwork', 'Dark Art', 'Texture', 'Custom Pieces'],
    isResident: true,
  },
];

export const guestArtists: GuestArtist[] = [
  {
    id: 'g1',
    name: 'Tomas Tomas',
    city: 'International',
    country: 'Guest Artist',
    style: ['Blackwork', 'Illustrative', 'Guest Work'],
    visitingDates: 'Limited guest spot',
    instagram: '@tomastomas108',
    instagramUrl: 'https://www.instagram.com/tomastomas108/',
    profileImage: '/images/guests/marcus.jpg',
    status: 'upcoming',
    bio: 'Guest artist visiting ZUMBIDO TATTOO for a limited residency in Nakameguro, Tokyo.',
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
  { id: 'p1', src: '/images/work-blackwork-01.jpg', artist: 'ZUMBIDO TATTOO', style: 'Blackwork' },
  { id: 'p2', src: '/images/work-lettering-01.jpg', artist: 'ZUMBIDO TATTOO', style: 'Lettering' },
  { id: 'p3', src: '/images/portfolio/hana-1.jpg', artist: 'Hana Kim', style: 'Fine Line' },
  { id: 'p4', src: '/images/portfolio/hana-2.jpg', artist: 'Hana Kim', style: 'Botanical' },
  { id: 'p5', src: '/images/portfolio/hana-3.jpg', artist: 'Hana Kim', style: 'Fine Line' },
];

export const studioInfo = {
  name: 'ZUMBIDO TATTOO',
  tagline: 'Underground Tattoo Studio in Nakameguro, Tokyo',
  description: 'Bold lines. Dark culture. Tokyo ink.',
  address: '1-2-3 Nakameguro, Meguro-ku, Tokyo 153-0061, Japan',
  phone: '+81-3-XXXX-XXXX',
  email: 'info@zumbidotattoo.com',
  instagram: '@zumbidotattoo',
  instagramUrl: 'https://www.instagram.com/zumbidotattoo',
  hours: {
    weekdays: '12:00 PM - 9:00 PM',
    saturday: '11:00 AM - 8:00 PM',
    sunday: 'By Appointment Only',
    monday: 'Closed',
  },
  mapUrl: 'https://maps.google.com/?q=Nakameguro,Tokyo',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Nakameguro%2C%20Tokyo&t=m&z=15&output=embed',
};
