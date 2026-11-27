import { IMG } from './assets';

export const NAV = [
  { label: 'Home', href: '#home', children: [] as { label: string; href: string }[] },
  {
    label: 'Pages',
    href: '#about',
    children: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Benefits', href: '#benefits' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Partners & Clients', href: '#partners' },
      { label: 'Contacts', href: '#contacts' },
    ],
  },
  { label: 'Products', href: '#products', children: [] },
  { label: 'Gallery', href: '#gallery', children: [] },
  { label: 'Blog', href: '#blog', children: [] },
  { label: 'Contacts', href: '#contacts', children: [] },
];

export const TOPBAR = {
  location: { label: 'Location', value: '58 White St, New York' },
  phone: { label: 'Phone', value: '+ 1800 - 123 456 78', href: 'tel:+180012345678' },
  email: { label: 'Email', value: 'agrarium@mail.co', href: 'mailto:agrarium@mail.co' },
  socials: [
    { label: 'Twitter', href: 'https://twitter.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'Youtube', href: 'https://www.youtube.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};

export type Slide = {
  id: string;
  variant: 'script' | 'plain';
  title: string;
  text: string;
  image: string;
  align: 'center' | 'left' | 'right';
  cta: { label: string; href: string };
};

export const SLIDES: Slide[] = [
  {
    id: 'harvest',
    variant: 'script',
    title: 'Harvest',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel.',
    image: IMG.heroSven,
    align: 'center',
    cta: { label: 'Discover', href: '#products' },
  },
  {
    id: 'organic-vegetables',
    variant: 'plain',
    title: 'Organic Vegetables',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish.',
    image: IMG.heroOrganic,
    align: 'left',
    cta: { label: 'Discover', href: '#products' },
  },
  {
    id: 'quality',
    variant: 'plain',
    title: 'We Grow the Best Quality Products',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel.',
    image: IMG.heroField,
    align: 'right',
    cta: { label: 'Discover', href: '#products' },
  },
];

export const CLIENTS = [IMG.client1, IMG.client2, IMG.client3, IMG.client4, IMG.client5, IMG.client6];

export const ABOUT = {
  sub: 'Awesome Words About Agrarium',
  heading: 'We harvest a large crop of wheat & sunflowers',
  lead: 'White shark toadfish cutthroat trout dusky grouper rocket danio bass queen parrotfish North American freshwater catfish roach pike eel morwong flagfin.',
  text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red.',
  author: 'Andy Collins, Agrarium LLC',
  cta: { label: 'Explore more', href: '#services' },
};

export const GIANT_TEXT = 'Agrarium';

export const BANNERS = [
  { title: 'Fresh Vegetables', image: IMG.bannerVege },
  { title: 'Organic Fruits', image: IMG.bannerFruit },
  { title: 'Grain Harvest', image: IMG.bannerFarm },
  { title: 'Dairy Farm', image: IMG.bannerDairy },
];

export const DARK_SECTION = {
  sub: 'What we do',
  heading: 'We grow the finest organic products for your family',
  text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill.',
  items: [
    { icon: 'cereals' as const, label: 'Cereals' },
    { icon: 'gardening' as const, label: 'Gardening' },
    { icon: 'livestock' as const, label: 'Livestock' },
    { icon: 'veggies' as const, label: 'Vegetables & Fruits' },
  ],
  cta: { label: 'Explore more', href: '#benefits' },
};

export const BENEFITS = {
  sub: 'Benefits',
  heading: 'Awesome work with Agrarium Company',
  text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.” Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California.',
  items: [
    { icon: 'tractor' as const, label: 'Modern Agriculture Equipment' },
    { icon: 'wheat' as const, label: 'Awesome Harvest of Wheat' },
    { icon: 'veggies' as const, label: 'Fresh Fruits & Vegetables' },
  ],
  cta: { label: 'Explore more', href: '#services' },
};

export const BENEFITS_TWO = {
  sub: 'Benefits',
  heading: 'We do Creative Things for Success',
  text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin.',
  checklist: [
    'Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California',
    'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish mackerel yellow weaver sixgill',
    'California smoothtongue, striped burrfish threadtail',
    'Saber-toothed blenny red',
  ],
  image: IMG.benefitsPhoto,
  years: 45,
  cta: { label: 'Explore more', href: '#about' },
};

export type Product = { title: string; text: string; category: string; image: string };

export const PRODUCTS: Product[] = [
  {
    title: 'The Best Lemons',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    category: 'Organic Food',
    image: IMG.p1,
  },
  {
    title: 'Fresh Peach',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    category: 'Fruits',
    image: IMG.p2,
  },
  {
    title: 'Awesome Cereals',
    text: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch fl',
    category: 'Cereals',
    image: IMG.p3,
  },
  {
    title: 'Tasty Cucamber',
    text: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch fl',
    category: 'Vegetables',
    image: IMG.p4,
  },
  {
    title: 'Juicy Pears',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    category: 'Fruits',
    image: IMG.p5,
  },
  {
    title: 'Golden Apricot',
    text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    category: 'Fruits',
    image: IMG.p6,
  },
  {
    title: 'Sweet Mandarins',
    text: 'Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish',
    category: 'Fruits',
    image: IMG.p7,
  },
  {
    title: 'Fresh Vegetables',
    text: 'Climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    category: 'Vegetables',
    image: IMG.p8,
  },
];

export const BEST_PRODUCTS = [
  { title: 'Awesome Brokoli', text: 'Ballan wrasse climbing gourami amur pike Arctic char, steelhead', image: IMG.vegBroccoli },
  { title: 'Crispy Cabbage', text: 'Ballan wrasse climbing gourami amur pike Arctic char steelhead sprat sea', image: IMG.vegCabbage },
  { title: 'Juicy Tomato', text: 'Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish', image: IMG.vegTomato },
  { title: 'Orange Pumpkin', text: 'Wrasse climbing gourami amur pike Arctic char, steelhead sprat sea', image: IMG.vegPumpkin },
  { title: 'Bomb Corn', text: 'Climbing gourami amur pike arctic char steelhead sprat sea lamprey', image: IMG.vegCorn },
  { title: 'The Best Potato', text: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish', image: IMG.vegPotato },
];

export const GALLERY = [
  { title: 'Awesome Grape', category: 'Fruits', image: IMG.g1 },
  { title: 'Crispy Сucumbers', category: 'Vegetables', image: IMG.g2 },
  { title: 'Juicy Pears', category: 'Fruits', image: IMG.g3 },
  { title: 'Awesome Fruit', category: 'Fruits', image: IMG.g4 },
  { title: 'Juicy Mandrains', category: 'Fruits', image: IMG.g5 },
  { title: 'Cereals Harvest', category: 'Cereals', image: IMG.g6 },
];

export const TESTIMONIALS = [
  {
    quote:
      'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.” Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red.',
    author: 'Andy Collins',
    role: 'Agrarium LLC',
    avatar: IMG.avatarA,
  },
  {
    quote:
      'Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue.',
    author: 'Martha Reeves',
    role: 'Green Field Co.',
    avatar: IMG.avatarB,
  },
  {
    quote:
      'Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill.',
    author: 'Peter Nolan',
    role: 'Harvest Market',
    avatar: IMG.avatarA,
  },
];

export const POSTS = [
  {
    title: 'Agriculture Conference Harvest 2020 in Paris',
    category: 'Farming',
    date: 'August 9, 2021',
    author: 'andrew',
    image: IMG.post1,
  },
  {
    title: 'Fresh Fruits & Vegetables in our New Markets',
    category: 'Vegetables',
    date: 'August 8, 2021',
    author: 'andrew',
    image: IMG.post2,
  },
  {
    title: 'Livestock in our Agrarium Farm in Copenhagen city',
    category: 'Livestock',
    date: 'August 7, 2021',
    author: 'andrew',
    image: IMG.post3,
  },
];

export const PROMOS = [
  {
    sub: 'The Best Agriculture',
    heading: 'Harvest in the World',
    text: 'Awesome harvest we grow last 10 years. Wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby',
    cta: { label: 'Read more', href: '#about' },
    image: IMG.g4,
  },
  {
    sub: 'Agriculture',
    heading: 'The best crop in our fertile gardening',
    text: 'Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish',
    cta: { label: 'Read more', href: '#services' },
    image: IMG.g3,
  },
];

export const COUNTERS = [
  { value: 9, suffix: 'k', label: 'Tons of Harvest' },
  { value: 23, suffix: '+', label: 'Happy Clients' },
];

export const CONTACTS = {
  sub: 'Contacts',
  heading: 'Get in Touch',
  text: 'Wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish',
  info: [
    { icon: 'pin' as const, label: 'Location', lines: ['523 Sylvan Ave, 5th Floor', 'Mountain View, CA 94041 USA'] },
    { icon: 'phone' as const, label: 'Phone', lines: ['+1 234 719 8948', '+1 987 654 3210'] },
    { icon: 'mail' as const, label: 'Email', lines: ['support@agrarium.com'] },
  ],
};

export const FOOTER = {
  about:
    'We created awesome theme for agriculture, farming and organic food business. Fresh products, fair prices and a friendly team — that is Agrarium.',
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Gallery', href: '#gallery' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Products', href: '#products' },
        { label: 'Best Products', href: '#best' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contacts', href: '#contacts' },
      ],
    },
  ],
  copyright: 'Agrarium. All Rights Reserved by Arturium',
};
