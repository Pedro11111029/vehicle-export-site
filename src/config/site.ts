// ============================================================
//  全站唯一的配置中心：改这里就够了，不用碰其他文件
//  标了 TODO 的地方换成你自己的信息
// ============================================================

export const SITE = {
  url: 'https://example.com', // TODO: 换成你的域名，带 https://，结尾不要加 /
  name: 'Global Auto Trading',
  legalName: 'TODO YOUR COMPANY CO., LTD.',
  tagline: 'Reliable Vehicle Export Partner Since 2010',
  description:
    'B2B vehicle export supplier — passenger cars, commercial trucks and new energy vehicles. Factory-direct pricing, full export documentation, worldwide shipping.',
  email: 'sales@example.com', // TODO: 换成你的域名邮箱
  phone: '+86 000 0000 0000', // TODO
  whatsapp: '+8613800000000', // TODO: 国家码+号码，不要加空格和括号
  address: 'TODO: 你的公司地址, City, Province, China',
  founded: '2010',
  hours: 'Mon–Sat 09:00–18:00 (GMT+8)',
  stats: [
    { value: '15+', label: 'Years of export experience' },
    { value: '60+', label: 'Countries served' },
    { value: '5,000+', label: 'Vehicles shipped' },
    { value: '24h', label: 'Response time' },
  ],
  certifications: ['ISO 9001', 'IATF 16949', 'CE', 'SGS Inspected'],
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'passenger-vehicles',
    name: 'Passenger Vehicles',
    shortName: 'Passenger Cars',
    tagline: 'Sedans, SUVs and MPVs for fleet and retail buyers',
    summary:
      'A full range of passenger vehicles sourced directly from authorized manufacturers. Petrol, hybrid and electric powertrains, left-hand and right-hand drive configurations, with options and colors to match your market.',
    highlights: [
      'LHD and RHD configurations available',
      'Petrol, hybrid and full-electric powertrains',
      'Full export documentation and homologation support',
      'Container or RoRo shipping, FOB / CIF / DDP terms',
    ],
    specs: [
      { label: 'Body types', value: 'Sedan / SUV / MPV / Hatchback' },
      { label: 'Powertrain', value: 'Petrol / Hybrid / BEV' },
      { label: 'Steering', value: 'LHD or RHD' },
      { label: 'MOQ', value: '1 unit (sample order welcome)' },
      { label: 'Lead time', value: '15–30 days after deposit' },
      { label: 'Payment', value: 'T/T, L/C at sight' },
    ],
    faqs: [
      {
        q: 'Can I order a single unit as a sample?',
        a: 'Yes. We accept sample orders of one unit so you can inspect quality before committing to a container load.',
      },
      {
        q: 'Do you provide right-hand drive versions?',
        a: 'Yes. We supply both left-hand and right-hand drive vehicles, and can advise which configuration suits your market regulations.',
      },
    ],
  },
  {
    slug: 'commercial-trucks',
    name: 'Commercial Trucks',
    shortName: 'Trucks',
    tagline: 'Light, medium and heavy-duty trucks built for work',
    summary:
      'Cargo trucks, tippers, tractor heads and special-purpose vehicles for logistics, construction and municipal fleets. Configured to your payload, road condition and emission standard requirements.',
    highlights: [
      'Euro III to Euro VI emission options',
      'Custom body and chassis configuration',
      'Spare parts supply and after-sales support',
      'Fleet pricing for volume orders',
    ],
    specs: [
      { label: 'GVW range', value: '3.5 t – 40 t' },
      { label: 'Emission', value: 'Euro III / IV / V / VI' },
      { label: 'Drive type', value: '4×2 / 6×4 / 8×4' },
      { label: 'Cab', value: 'Day cab or sleeper cab' },
      { label: 'Lead time', value: '25–45 days after deposit' },
      { label: 'Payment', value: 'T/T, L/C at sight' },
    ],
    faqs: [
      {
        q: 'Can trucks be customized for our road conditions?',
        a: 'Yes. Suspension, tyres, body material and cooling packages can be specified for tropical, desert or mountainous operation.',
      },
      {
        q: 'Do you supply spare parts?',
        a: 'We ship an initial spare parts kit with every fleet order and can set up a recurring parts supply agreement.',
      },
    ],
  },
  {
    slug: 'new-energy-vehicles',
    name: 'New Energy Vehicles',
    shortName: 'NEVs',
    tagline: 'EVs and hybrids for markets moving to electrification',
    summary:
      'Battery-electric passenger cars, electric light trucks and plug-in hybrids with export-ready charging configurations. We handle battery documentation, UN38.3 reports and dangerous goods shipping requirements.',
    highlights: [
      'UN38.3 and MSDS documentation prepared',
      'Export charging standards (Type 2 / GB/T / CCS)',
      'Battery warranty and remote diagnostics support',
      'Dangerous goods shipping handled end to end',
    ],
    specs: [
      { label: 'Vehicle types', value: 'BEV cars / e-trucks / PHEV' },
      { label: 'Range (WLTP)', value: '300 – 600 km' },
      { label: 'Charging', value: 'Type 2 / CCS / GB/T' },
      { label: 'Battery warranty', value: '8 years / 160,000 km' },
      { label: 'Lead time', value: '20–40 days after deposit' },
      { label: 'Payment', value: 'T/T, L/C at sight' },
    ],
    faqs: [
      {
        q: 'Can you ship vehicles with batteries installed?',
        a: 'Yes. We prepare UN38.3 test summaries and MSDS, and work with carriers approved for Class 9 dangerous goods.',
      },
      {
        q: 'Is charging equipment included?',
        a: 'A portable charger is included by default. Wallboxes and DC fast chargers matching your local standard can be added to the order.',
      },
    ],
  },
];

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
