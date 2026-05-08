import type { InstagramFeedEmbedConfig } from '@/components/instagram-feed-embed';

export interface Artist {
  id: string;
  slug: string;
  name: string;
  title: string;
  style: string[];
  bio: string;
  shortBio: string;
  yearsExperience?: number;
  instagram: string;
  instagramUrl: string;
  instagramProfileUrl: string;
  profileImage: string;
  profileImagePosition?: string;
  profileImageTone?: string;
  portfolioImages: string[];
  instagramPostUrls: string[];
  instagramFeedEmbedUrl?: string;
  instagramFeedEmbed?: InstagramFeedEmbedConfig;
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

const meguInstagramUrl = 'https://www.instagram.com/megumu_weirdo/';
const yasuInstagramUrl = 'https://www.instagram.com/yapetas/';

export const artists: Artist[] = [
  {
    id: '1',
    slug: 'megu',
    name: 'Megu',
    title: 'Lead Artist & Founder',
    style: ['American Traditional', 'Japanese Traditional', 'Neo-Japanese'],
    bio: 'Megu is the founder and lead artist of ZUMBIDO TATTOO in Nakameguro, Tokyo.\n\nBlending the aesthetics of traditional Japanese tattooing, American Traditional, and Neo-Japanese influences, Megu has developed a distinctive visual language built on bold compositions, precise linework, and a deep respect for tattoo heritage.\n\nWith over 30 years of experience in the tattoo industry, Megu works with both local and international clients seeking authentic custom tattoo work in Tokyo.\n\nFor booking inquiries, please contact via Instagram DM.',
    shortBio: 'Founder and lead artist of ZUMBIDO TATTOO, blending American Traditional, Japanese Traditional, and Neo-Japanese influences.',
    yearsExperience: 30,
    instagram: '@megumu_weirdo',
    instagramUrl: meguInstagramUrl,
    instagramProfileUrl: meguInstagramUrl,
    profileImage: '/images/artists/Megu.png',
    profileImagePosition: 'object-[50%_38%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.82)_brightness(0.86)] group-hover:[filter:contrast(1.1)_saturate(0.88)_brightness(0.93)]',
    portfolioImages: [
      '/images/portfolio/megu/work-01.jpg',
      '/images/portfolio/megu/work-02.jpg',
      '/images/portfolio/megu/work-03.jpg',
      '/images/portfolio/megu/work-04.jpg',
      '/images/portfolio/megu/work-05.jpg',
      '/images/portfolio/megu/work-06.jpg',
    ],
    instagramPostUrls: [
      'https://www.instagram.com/p/DHCh1OeSeK0/?img_index=1',
      'https://www.instagram.com/p/DUaweHujwz-/?img_index=1',
      'https://www.instagram.com/p/CzdklXbyS0s/',
      'https://www.instagram.com/p/DJl8ac5SwXC/?img_index=1',
      'https://www.instagram.com/p/DDZyBCdSZlZ/?img_index=1',
      'https://www.instagram.com/p/C9WEuTgS7LJ/?img_index=1',
    ],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '2',
    slug: 'yasu',
    name: 'YASU',
    title: 'Senior Artist',
    style: ['Tribal', 'Neo-Tribal', 'Abstract', 'Geometric', 'Blackwork', 'Black Ink'],
    bio: 'YASU is a senior artist at ZUMBIDO TATTOO, known for one-of-a-kind freehand tribal patterns created directly with the body.\n\nHis work continues to evolve through tribal, neo-tribal, abstract, geometric, and black ink tattooing, pushing each composition toward a more personal and instinctive form.\n\nWith over 25 years of experience, YASU’s tattoos are shaped through collaboration with each client. The final work is not only designed by the artist, but brought to life through the person who carries it.\n\nFor booking inquiries, please contact via Instagram DM.',
    shortBio: 'Senior artist known for freehand tribal, neo-tribal, abstract, geometric, and black ink tattooing.',
    yearsExperience: 25,
    instagram: '@yapetas',
    instagramUrl: yasuInstagramUrl,
    instagramProfileUrl: yasuInstagramUrl,
    profileImage: '/images/artists/yas.png',
    profileImagePosition: 'object-[52%_44%]',
    profileImageTone: '[filter:contrast(1.06)_saturate(0.84)_brightness(0.88)] group-hover:[filter:contrast(1.08)_saturate(0.9)_brightness(0.95)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    instagramPostUrls: [
      'https://www.instagram.com/p/Cjar61IPsW-/',
      'https://www.instagram.com/p/CaTpBFQllXL/',
      'https://www.instagram.com/p/CG4791_gUoE/',
      'https://www.instagram.com/p/CGqYbR6AK3P/',
      'https://www.instagram.com/p/CAbTtxegU2L/',
      'https://www.instagram.com/p/B0b-Br5AChE/',
    ],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '3',
    slug: 'gentaro',
    name: 'Gentaro',
    title: 'Artist',
    style: ['Realism', 'Dark Art', 'Horror'],
    bio: 'Gentaro is a resident artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. Confirmed biography, portfolio notes, and preferred booking details can be added here when available.',
    shortBio: 'Resident artist at ZUMBIDO TATTOO. Biography and portfolio notes will be updated with confirmed details.',
    instagram: '@gentaro_tattoo',
    instagramUrl: 'https://www.instagram.com/gentaro_tattoo/',
    instagramProfileUrl: 'https://www.instagram.com/gentaro_tattoo/',
    profileImage: '/images/artists/gentaro.png',
    profileImagePosition: 'object-[54%_48%]',
    profileImageTone: '[filter:grayscale(1)_contrast(1.14)_brightness(0.78)] group-hover:[filter:grayscale(0.85)_contrast(1.16)_brightness(0.86)]',
    portfolioImages: [
      '/images/work-blackwork-01.jpg',
      '/images/work-lettering-01.jpg',
    ],
    instagramPostUrls: [],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '4',
    slug: 'josh',
    name: 'Josh',
    title: 'Artist',
    style: ['Fine Line', 'Illustrative', 'Botanical'],
    bio: 'Josh is a resident artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. Confirmed biography, portfolio notes, and preferred booking details can be added here when available.',
    shortBio: 'Resident artist at ZUMBIDO TATTOO. Biography and portfolio notes will be updated with confirmed details.',
    instagram: '@joshualeetattoo',
    instagramUrl: 'https://www.instagram.com/joshualeetattoo/',
    instagramProfileUrl: 'https://www.instagram.com/joshualeetattoo/',
    profileImage: '/images/artists/joshua.png',
    profileImagePosition: 'object-[58%_36%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.82)_brightness(0.82)] group-hover:[filter:contrast(1.1)_saturate(0.88)_brightness(0.9)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    instagramPostUrls: [],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '5',
    slug: 'kotaro',
    name: 'Kotaro',
    title: 'Artist',
    style: ['Blackwork', 'Lettering', 'Graphic'],
    bio: 'Kotaro is a resident artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. Confirmed biography, portfolio notes, and preferred booking details can be added here when available.',
    shortBio: 'Resident artist at ZUMBIDO TATTOO. Biography and portfolio notes will be updated with confirmed details.',
    instagram: '@kotaro_zido',
    instagramUrl: 'https://www.instagram.com/kotaro_zido/',
    instagramProfileUrl: 'https://www.instagram.com/kotaro_zido/',
    profileImage: '/images/artists/kotaro.png',
    profileImagePosition: 'object-[50%_34%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.72)_brightness(0.82)] group-hover:[filter:contrast(1.1)_saturate(0.78)_brightness(0.9)]',
    portfolioImages: [
      '/images/work-lettering-01.jpg',
      '/images/work-blackwork-01.jpg',
    ],
    instagramPostUrls: [],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '6',
    slug: 'echo',
    name: 'Echo',
    title: 'Artist',
    style: ['Fine Line', 'Ornamental', 'Minimalist'],
    bio: 'Echo is a resident artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. Confirmed biography, portfolio notes, and preferred booking details can be added here when available.',
    shortBio: 'Resident artist at ZUMBIDO TATTOO. Biography and portfolio notes will be updated with confirmed details.',
    instagram: '@echo_tatt',
    instagramUrl: 'https://www.instagram.com/echo_tatt/',
    instagramProfileUrl: 'https://www.instagram.com/echo_tatt/',
    profileImage: '/images/artists/echo.png',
    profileImagePosition: 'object-[50%_34%]',
    profileImageTone: '[filter:contrast(1.06)_saturate(0.76)_brightness(0.82)] group-hover:[filter:contrast(1.08)_saturate(0.82)_brightness(0.9)]',
    portfolioImages: [
      '/images/portfolio/hana-1.jpg',
      '/images/portfolio/hana-2.jpg',
    ],
    instagramPostUrls: [],
    instagramFeedEmbedUrl: '',
    specialties: [],
    isResident: true,
  },
  {
    id: '7',
    slug: 'morgan',
    name: 'Morgan',
    title: 'Artist',
    style: ['Illustrative', 'Blackwork', 'Dark Art'],
    bio: 'Morgan is a resident artist at ZUMBIDO TATTOO in Nakameguro, Tokyo. Confirmed biography, portfolio notes, and preferred booking details can be added here when available.',
    shortBio: 'Resident artist at ZUMBIDO TATTOO. Biography and portfolio notes will be updated with confirmed details.',
    instagram: '@morgantat2',
    instagramUrl: 'https://www.instagram.com/morgantat2/',
    instagramProfileUrl: 'https://www.instagram.com/morgantat2/',
    profileImage: '/images/artists/megan.png',
    profileImagePosition: 'object-[50%_38%]',
    profileImageTone: '[filter:contrast(1.08)_saturate(0.78)_brightness(0.8)] group-hover:[filter:contrast(1.1)_saturate(0.84)_brightness(0.88)]',
    portfolioImages: [
      '/images/work-blackwork-01.jpg',
      '/images/portfolio/hana-3.jpg',
    ],
    instagramPostUrls: [],
    instagramFeedEmbedUrl: '',
    specialties: [],
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
  email: 'info@v0-zombido.vercel.app',
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
