// ============================================================
//  产品数据：所有产品分类、车型、参数和 FAQ 都在这里
//  改完保存，产品页、首页、询盘下拉框会自动更新
// ============================================================

export type ProductModel = {
  name: string;
  type: string;
  description: string;
  specs: { label: string; value: string }[];
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  image?: string;
  imageAlt?: string;
  brands: string[];
  intro: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  models: ProductModel[];
  applications: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'tractor-trucks',
    name: 'Tractor Trucks',
    shortName: 'Tractor Trucks',
    tagline: 'FAW J7, J6P, JH6 and J5P prime movers for long-haul and regional fleets',
    summary:
      '6×4 tractor units from 380 to 500 hp on FAW Jiefang J7, J6P, JH6 and J5P platforms. Euro II to Euro V engines, manual or automated gearboxes, LHD or RHD, configured around your trailer fleet.',
    seoTitle: 'FAW Tractor Trucks for Export — J7, J6P, JH6 & J5P',
    seoDescription:
      'Export FAW Jiefang tractor trucks: J7 500 hp, New J6P, JH6 460 hp and J5P 380–420 hp. 6×4, Euro II–V, LHD/RHD, 600–1,000 L fuel. Request a quotation.',
    image: '/images/products/tractor-trucks-card.jpg',
    imageAlt: 'FAW J7 6x4 tractor unit with a box trailer on a highway',
    brands: ['FAW Jiefang'],
    intro:
      'The tractor unit is the most cost-sensitive vehicle in a haulage fleet, so the specification has to match the route, the fuel quality and the driver. We supply the FAW Jiefang range from the J5P value platform through the J6P and JH6 to the flagship J7 — all built on the same Jiefang driveline architecture and backed by a parts network covering more than 80 export markets.\n\nEvery unit is ordered to your requirement: emission level, gearbox type, rear-axle ratio, fifth-wheel height, tyre package and cab trim. We quote FOB, CIF or DDP and arrange a pre-shipment inspection before the truck leaves China.',
    highlights: [
      'J7 flagship: 500 hp, 2,500 Nm and a 1,000 L fuel tank',
      'Euro II to Euro V engines for different fuel and import rules',
      'LHD and RHD cabs, day cab or high-roof sleeper',
      'Fifth wheel, suspension and tyre packages matched to your trailers',
      'Spare-parts kit and English parts catalogue with every fleet order',
    ],
    specs: [
      { label: 'GVW / GCW', value: '25,000 kg / 49,000 kg' },
      { label: 'Drive type', value: '6×4' },
      { label: 'Power range', value: '380 – 500 hp' },
      { label: 'Emission', value: 'Euro II / III / V' },
      { label: 'Fuel tank', value: '600 – 1,000 L' },
      { label: 'Steering', value: 'LHD or RHD' },
    ],
    models: [
      {
        name: 'FAW J7 6×4',
        type: 'Flagship long-haul tractor · 500 hp',
        description:
          'The J7 is FAW’s European-class flagship: flat-floor high-roof cab, 12.52 L FAWDE engine and a 1,000 L tank for long relay routes. Recommended by the factory for European markets.',
        specs: [
          { label: 'Engine', value: 'FAWDE CA6DM3-50E5, 12.52 L' },
          { label: 'Power / torque', value: '500 hp / 2,500 Nm' },
          { label: 'Gearbox', value: 'FAW CA12TAX230M3, 12-speed' },
          { label: 'GCW / top speed', value: '49,000 kg / 120 km/h' },
        ],
      },
      {
        name: 'FAW New J6P 6×4',
        type: 'Heavy-duty tractor · 500 hp',
        description:
          'The volume heavy tractor for Russia, the Middle East and the Philippines. New J6P cab with double-layer sleeper, 1,000 L tank and the same 12.52 L driveline as the J7.',
        specs: [
          { label: 'Engine', value: 'FAWDE CA6DM3-50E5, 12.52 L' },
          { label: 'Power / torque', value: '500 hp / 2,300 Nm' },
          { label: 'Gearbox', value: 'FAW CA12TAX230M, 12-speed' },
          { label: 'Dimensions', value: '7,050 × 2,500 × 3,560 mm' },
        ],
      },
      {
        name: 'FAW JH6 6×4',
        type: 'Heavy-duty tractor · 460 hp',
        description:
          'A lightweight 460 hp tractor with a 16-speed gearbox and 800 L tank. A common choice for Mexico, South Africa, Myanmar, Malaysia and Peru.',
        specs: [
          { label: 'Engine', value: 'Weichai WP12.460E50, 11.596 L' },
          { label: 'Power / torque', value: '460 hp / 2,110 Nm' },
          { label: 'Gearbox', value: 'FAST C16JSDQXL220TA, 16-speed' },
          { label: 'Wheelbase', value: '3,300 + 1,350 mm' },
        ],
      },
      {
        name: 'FAW J5P V 6×4',
        type: 'Value tractor · 420 hp',
        description:
          'The value platform for Philippines, Chile and similar markets: 11.05 L FAWDE engine, Eaton 12-speed gearbox and a 600 L tank at a lower purchase price than the J6P.',
        specs: [
          { label: 'Engine', value: 'FAWDE CA6DM2-42E5, 11.05 L' },
          { label: 'Power / torque', value: '420 hp / 1,900 Nm' },
          { label: 'Gearbox', value: 'Eaton ETO-XX012-ALG, 12-speed' },
          { label: 'Wheelbase', value: '3,450 + 1,350 mm' },
        ],
      },
      {
        name: 'FAW New J5P 6×4',
        type: 'Entry tractor · 380 hp · Euro II',
        description:
          'A simple, repairable 380 hp tractor for markets running Euro II fuel — Nigeria, Tanzania, Pakistan, Malaysia and Peru. Natural-gas engine option available from the factory.',
        specs: [
          { label: 'Engine', value: 'Weichai WP10.380E32, 9.726 L' },
          { label: 'Power / torque', value: '380 hp / 1,460 Nm' },
          { label: 'Gearbox', value: 'FAST 12JSD160T, 12-speed' },
          { label: 'Fuel / LNG', value: '600 L diesel, gas bottle option' },
        ],
      },
    ],
    applications: ['Long-haul logistics', 'Container drayage', 'Fuel and chemical transport', 'Regional distribution', 'Cross-border freight'],
    faqs: [
      {
        q: 'Which FAW tractor is best for an African fleet?',
        a: 'For Euro II fuel markets we normally recommend the New J5P 380 hp; where Euro V fuel is available, the J5P V 420 hp or JH6 460 hp give better fuel economy and resale value. Tell us your route profile and we will compare the total cost of ownership.',
      },
      {
        q: 'Can you supply right-hand-drive tractors?',
        a: 'Yes. The JH6 and New J5P are available in RHD, and other models can be quoted in RHD subject to factory scheduling. Steering side is confirmed on the proforma invoice.',
      },
      {
        q: 'What fifth wheel and tyre options are available?',
        a: 'Standard is a 3.5-inch fifth wheel with 12R22.5 tyres. 2-inch fifth wheels, 315/80R22.5 tyres, aluminium rims and air suspension are available as factory or aftermarket options.',
      },
      {
        q: 'Do you supply spare parts with the trucks?',
        a: 'Every fleet order can include a recommended first spare-parts kit — filters, brake chambers, lamps and belts. We can also set up a recurring parts shipment against your service schedule.',
      },
    ],
    related: ['dump-trucks', 'cargo-trucks', 'electric-trucks'],
  },
  {
    slug: 'dump-trucks',
    name: 'Dump Trucks',
    shortName: 'Dump Trucks',
    tagline: 'FAW J6P 8×4 tippers for construction, quarry and mining haulage',
    summary:
      'FAW J6P, J6P V and New J6P 8×4 dump trucks, tunnel tippers and Tiger V 4×4 light tippers. Cargo bodies from 5.6 m to 7.2 m and payloads up to 23.6 t, built for sand, stone and construction waste.',
    seoTitle: 'FAW Dump Trucks for Export — J6P 8×4 Tipper & Tunnel Dump',
    seoDescription:
      'Export FAW J6P 8×4 dump trucks: 390 hp, 23.6 t payload, 7.2 m body, plus tunnel tippers and Tiger V 4×4. Euro V, LHD, full export documentation.',
    image: '/images/products/dump-trucks-card.jpg',
    imageAlt: 'Blue FAW J6P 8x4 dump truck at a quarry',
    brands: ['FAW Jiefang'],
    intro:
      'A tipper earns its money on cycle time and uptime, not on top speed. The FAW J6P dump range uses a reinforced ladder frame, 4U balanced suspension and a high-mounted brake chamber to survive quarry roads and repeated full loads.\n\nWe configure the body volume, steel thickness, hydraulic ram and tailgate for your material — sand, crushed stone, construction waste or coal — and can supply Euro II, III or V engines depending on the fuel available at site.',
    highlights: [
      '8×4 J6P with 390 hp and 23,640 kg rated payload',
      '7.2 × 2.3 × 1.4 m body with 8 mm floor and 6 mm sides',
      '4U balanced suspension and high-position brake chamber',
      'Desert air filter and radiator protection for dusty sites',
      'Tunnel and underground versions with a low-roof cab',
    ],
    specs: [
      { label: 'Drive type', value: '4×2 / 6×4 / 8×4' },
      { label: 'Payload', value: 'Up to 23,640 kg' },
      { label: 'Body length', value: '5.6 – 7.2 m' },
      { label: 'Engine', value: 'FAWDE 11.05 L, Euro III – V' },
      { label: 'Body steel', value: '8 mm floor / 6 mm sides' },
      { label: 'Steering', value: 'LHD (RHD on request)' },
    ],
    models: [
      {
        name: 'FAW J6P 8×4',
        type: 'Heavy tipper · 390 hp',
        description:
          'The standard quarry and construction tipper for Russia, the Middle East, the Philippines and Ghana. 7.2 m body, 23.6 t payload and a 12-speed gearbox.',
        specs: [
          { label: 'Engine', value: 'FAWDE CA6DM2-39E51, 11.05 L' },
          { label: 'Power / torque', value: '390 hp / 1,750 Nm' },
          { label: 'Body', value: '7,200 × 2,300 × 1,400 mm' },
          { label: 'GVW / payload', value: '42,600 kg / 23,640 kg' },
        ],
      },
      {
        name: 'FAW New J6P 8×4',
        type: 'Heavy tipper · 390–420 hp',
        description:
          'Updated J6P cab and a 300 × 80 × (8+8+5) mm frame for owners who load to the limit every day. Euro V engine and a 400 L tank.',
        specs: [
          { label: 'Engine', value: 'FAWDE CA6DM2, 11.05 L, Euro V' },
          { label: 'Power', value: '390 – 420 hp' },
          { label: 'Frame', value: '300 × 80 × (8+8+5) mm' },
          { label: 'Fuel tank', value: '400 L' },
        ],
      },
      {
        name: 'FAW J6P V 8×4',
        type: 'Value tipper · 350–390 hp',
        description:
          'A lower-cost 8×4 built on the J6P V cab, with 6.8–7.2 m bodies. A sensible choice for contractors who need capacity without the premium cab.',
        specs: [
          { label: 'Drive', value: '8×4' },
          { label: 'Power', value: '350 – 390 hp' },
          { label: 'Body', value: '6.8 – 7.2 m' },
          { label: 'Emission', value: 'Euro III / V' },
        ],
      },
      {
        name: 'FAW Tunnel Dump Truck',
        type: 'Low-roof tipper for tunnels and underground mining',
        description:
          'Shortened, lowered cab and compact body for height-restricted tunnels and underground sites. Available on 6×4 and 8×4 chassis.',
        specs: [
          { label: 'Drive', value: '6×4 / 8×4' },
          { label: 'Body', value: '5.6 – 6.2 m' },
          { label: 'Cab', value: 'Low-roof tunnel cab' },
          { label: 'Application', value: 'Tunnels, mining, underground works' },
        ],
      },
      {
        name: 'FAW Tiger V 4×4',
        type: 'Light tipper · 141 hp · all-wheel drive',
        description:
          'A compact 4×4 tipper for municipal works, narrow sites and unpaved access roads. Cummins ISF3.8 engine and a 4–5 m body.',
        specs: [
          { label: 'Engine', value: 'Cummins ISF3.8s5141, 3.76 L' },
          { label: 'Power / torque', value: '141 hp / 450 Nm' },
          { label: 'Drive', value: '4×4' },
          { label: 'GVW', value: '8,000 kg' },
        ],
      },
    ],
    applications: ['Quarry and sand haulage', 'Construction sites', 'Mining and tunnelling', 'Road building', 'Municipal works'],
    faqs: [
      {
        q: 'What body thickness should I order?',
        a: 'For sand and gravel, an 8 mm floor and 6 mm sides are enough. For blasted rock or recycled concrete, specify a 10 mm floor, Hardox wear plate and a reinforced tailgate. We quote both options so you can compare.',
      },
      {
        q: 'Can the tipper be shipped with the body removed?',
        a: 'Yes. For container shipment we can dismantle the body and load the chassis and body separately, which reduces freight cost. Assembly instructions and a hydraulic diagram are supplied.',
      },
      {
        q: 'Do you offer Euro II engines for African markets?',
        a: 'Yes. Euro II and Euro III mechanical engines are available on the J5P and J6P platforms for markets where low-sulphur diesel is not yet available.',
      },
    ],
    related: ['tractor-trucks', 'special-purpose-trucks', 'electric-trucks'],
  },
  {
    slug: 'cargo-trucks',
    name: 'Cargo & Light Trucks',
    shortName: 'Cargo Trucks',
    tagline: 'FAW J6L, Tiger V and Dragon V rigid trucks for distribution and logistics',
    summary:
      'FAW J6L medium-duty and Tiger V light-duty cargo trucks, plus Dragon V chassis for 6.8–9.6 m van, dropside and stake bodies. Payloads from 4.7 t to 10 t, LHD or RHD.',
    seoTitle: 'FAW Cargo Trucks for Export — J6L, Tiger V & Dragon V',
    seoDescription:
      'Export FAW J6L 4×2 180 hp, Tiger V 141 hp and Dragon V cargo trucks. 4.7–10 t payload, 6.1–9.6 m van or dropside bodies, LHD/RHD, Euro V.',
    image: '/images/products/cargo-trucks-card.jpg',
    imageAlt: 'White FAW J6L 4x2 box-body cargo truck on a city road',
    brands: ['FAW Jiefang'],
    intro:
      'Distribution fleets need a truck that is cheap to run, easy to load and simple to repair. The FAW J6L and Tiger V were designed for exactly that: proven mechanical drivelines, wide service coverage and body lengths that match local pallet and sack sizes.\n\nWe supply complete trucks with van, dropside, stake or refrigerated bodies, or bare chassis for local body building. Rear-axle ratios, tyre sizes and cab trim are specified at order so the truck suits your roads and speed limits.',
    highlights: [
      'J6L 4×2 with 9,995 kg payload and 6.2 m body',
      'Tiger V 4×2 from 4.7 t payload, LHD or RHD',
      'Dragon V chassis for 6.8–9.6 m bodies',
      'Van, dropside, stake and refrigerated bodies',
      'Bare chassis available for local body builders',
    ],
    specs: [
      { label: 'GVW', value: '8,000 – 25,000 kg' },
      { label: 'Payload', value: '4,745 – 9,995 kg' },
      { label: 'Body length', value: '6.1 – 9.6 m' },
      { label: 'Emission', value: 'Euro III / V' },
      { label: 'Body types', value: 'Van / dropside / stake / refrigerated' },
      { label: 'Steering', value: 'LHD or RHD' },
    ],
    models: [
      {
        name: 'FAW J6L 4×2',
        type: 'Medium-duty cargo truck · 180 hp',
        description:
          'The workhorse of the FAW medium-duty range. 9,995 kg payload, 6.2 m body and a 4.76 L FAW DEUTZ engine with an 8-speed gearbox.',
        specs: [
          { label: 'Engine', value: 'FAW DEUTZ CA4DK1-18E5, 4.764 L' },
          { label: 'Power / torque', value: '180 hp / 720 Nm' },
          { label: 'Body', value: '6,200 × 2,200 × 2,000 mm' },
          { label: 'GVW / payload', value: '15,795 kg / 9,995 kg' },
        ],
      },
      {
        name: 'FAW Tiger V 4×2',
        type: 'Light-duty cargo truck · 141 hp',
        description:
          'A compact distribution truck for city and intercity deliveries. Cummins ISF3.8 engine, ZF 6-speed gearbox, 6.13 m body and a three-seat cab.',
        specs: [
          { label: 'Engine', value: 'Cummins ISF3.8s5141, 3.76 L' },
          { label: 'Power / torque', value: '141 hp / 450 Nm' },
          { label: 'Gearbox', value: 'ZF6S500, 6-speed' },
          { label: 'GVW / payload', value: '8,000 kg / 4,745 kg' },
        ],
      },
      {
        name: 'FAW Dragon V',
        type: 'Medium-duty chassis for 6.8–9.6 m bodies',
        description:
          'A flexible medium-duty platform for longer van, dropside and stake bodies. Engine, axle and body specification are confirmed against your route and load.',
        specs: [
          { label: 'Drive', value: '4×2 / 6×2' },
          { label: 'Body length', value: '6.8 – 9.6 m' },
          { label: 'Body types', value: 'Van / dropside / stake' },
          { label: 'Emission', value: 'Euro III / V' },
        ],
      },
    ],
    applications: ['Urban distribution', 'Intercity freight', 'FMCG and beverage delivery', 'Building materials', 'Agricultural produce'],
    faqs: [
      {
        q: 'Can I buy a bare chassis and build the body locally?',
        a: 'Yes. J6L and Tiger V chassis are available without a body, with a body-builder drawing pack that shows mounting points, PTO options and rear-frame dimensions.',
      },
      {
        q: 'Do you supply refrigerated bodies?',
        a: 'Yes. We can supply insulated refrigerated bodies with a choice of Thermo King or Carrier units, from 5 t to 20 t payload, for frozen or chilled distribution.',
      },
      {
        q: 'What is the difference between J6L and Dragon V?',
        a: 'J6L is the lighter 4×2 medium-duty platform with a 6.2 m body, while Dragon V covers longer 6.8–9.6 m bodies and 6×2 configurations. We will recommend one after reviewing your route and load.',
      },
    ],
    related: ['tractor-trucks', 'dump-trucks', 'special-purpose-trucks'],
  },
  {
    slug: 'special-purpose-trucks',
    name: 'Special Purpose Trucks',
    shortName: 'Special Trucks',
    tagline: 'Mixers, cranes, wreckers, fire trucks and trailers on FAW chassis',
    summary:
      'Concrete mixers, truck-mounted cranes, wreckers, fire fighting trucks, aerial platforms, refrigerated trucks and semi-trailers built on FAW chassis by Chengli Special Automobile.',
    seoTitle: 'Special Purpose Trucks for Export — Mixers, Cranes & Wreckers',
    seoDescription:
      'Export special-purpose trucks on FAW chassis: concrete mixers, truck cranes, wreckers, fire trucks, aerial platforms, refrigerated trucks and semi-trailers.',
    image: '/images/products/special-purpose-trucks-card.jpg',
    imageAlt: 'FAW J6P 8x4 concrete mixer truck on a construction site',
    brands: ['FAW Jiefang', 'Chengli Special Automobile'],
    intro:
      'Special vehicles are only as good as the chassis and the body working together. We build on FAW J6L, J6P and JH6 chassis and specify the body with Chengli Special Automobile, one of China’s largest municipal and special-vehicle manufacturers.\n\nThe result is a vehicle with a factory-supported driveline and a body designed for the job — not a generic truck with equipment bolted on. We can supply a single unit for evaluation or a fleet with matched specifications and a spare-parts package.',
    highlights: [
      'Factory FAW chassis with Chengli body work',
      'Mixer drums from 8 m³ on 6×4 and 8×4 chassis',
      'Cranes, wreckers, fire trucks and aerial platforms',
      'Refrigerated bodies and semi-trailers to order',
      'CCC and ISO production, inspection before shipment',
    ],
    specs: [
      { label: 'Chassis', value: 'FAW J6L / J6P / JH6' },
      { label: 'Body builder', value: 'Chengli Special Automobile' },
      { label: 'Mixer drum', value: '8 – 12 m³' },
      { label: 'Crane capacity', value: '2 – 16 t' },
      { label: 'Fire truck', value: '2,000 – 12,000 L water / foam' },
      { label: 'Lead time', value: '30 – 55 days after deposit' },
    ],
    models: [
      {
        name: 'Concrete Mixer Truck',
        type: '6×4 / 8×4 · 8–12 m³',
        description:
          'FAW J6P 8×4 mixer with 390 hp and an 8 m³ drum, or J5M 6×4 with 280 hp for smaller plants. Drum, hydraulic system and water tank sized to your batching plant.',
        specs: [
          { label: 'Chassis', value: 'FAW J6P 8×4 / J5M 6×4' },
          { label: 'Drum', value: '8 – 12 m³' },
          { label: 'Engine', value: 'FAWDE 7.7 – 11.05 L' },
          { label: 'Hydraulics', value: 'PMP / ZF options' },
        ],
      },
      {
        name: 'Truck-Mounted Crane',
        type: '2–16 t lifting capacity',
        description:
          'Straight or knuckle-boom cranes on FAW cargo chassis for construction logistics, equipment recovery and municipal maintenance.',
        specs: [
          { label: 'Lifting capacity', value: '2 – 16 t' },
          { label: 'Boom type', value: 'Straight or knuckle boom' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
          { label: 'Outriggers', value: 'Hydraulic, front and rear' },
        ],
      },
      {
        name: 'Wrecker / Road Recovery',
        type: 'Flatbed and rotating boom',
        description:
          'Flatbed wreckers for cars and light commercial vehicles, and heavy rotating-boom wreckers for trucks and buses. Winch, wheel lift and under-lift options.',
        specs: [
          { label: 'Type', value: 'Flatbed / rotating boom' },
          { label: 'Winch', value: '4 – 20 t' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
          { label: 'Controls', value: 'Hydraulic, cab or side station' },
        ],
      },
      {
        name: 'Fire Fighting Truck',
        type: 'Water / foam · 2,000–12,000 L',
        description:
          'Municipal and industrial fire trucks with water or foam tanks, fire pump, hose reel and monitor. Built to the destination country’s equipment rules where required.',
        specs: [
          { label: 'Tank', value: '2,000 – 12,000 L' },
          { label: 'Pump', value: '1,000 – 4,000 L/min' },
          { label: 'Cab', value: 'Crew cab, 2 + 4' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
      {
        name: 'Aerial Work Platform',
        type: '12–28 m working height',
        description:
          'Truck-mounted aerial platforms for signage, lighting, tree care and municipal maintenance. Insulated bucket option for electrical work.',
        specs: [
          { label: 'Working height', value: '12 – 28 m' },
          { label: 'Bucket capacity', value: '200 – 300 kg' },
          { label: 'Chassis', value: 'FAW light / medium duty' },
          { label: 'Safety', value: 'Outrigger interlocks, emergency lowering' },
        ],
      },
      {
        name: 'Refrigerated Truck',
        type: '5–20 t payload · −18 °C',
        description:
          'Insulated bodies with Thermo King or Carrier refrigeration units for frozen, chilled and fresh distribution. Meat rails and multi-temperature partitions available.',
        specs: [
          { label: 'Payload', value: '5 – 20 t' },
          { label: 'Temperature', value: '−18 °C to +4 °C' },
          { label: 'Body', value: 'PU insulated panels, stainless options' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
      {
        name: 'Semi-Trailers',
        type: 'Flatbed, lowbed, tanker and bulk powder',
        description:
          'Flatbed, lowbed, fuel tanker, LPG tanker and bulk-powder trailers matched to your tractor’s fifth wheel and braking standard.',
        specs: [
          { label: 'Types', value: 'Flatbed / lowbed / tanker / bulk powder' },
          { label: 'Length', value: '12 – 13.75 m' },
          { label: 'Axles', value: '2 / 3 / 4 axles' },
          { label: 'Brakes', value: 'Dual-circuit air, ABS option' },
        ],
      },
    ],
    applications: ['Construction', 'Municipal services', 'Emergency response', 'Cold chain', 'Equipment recovery', 'Port and yard operations'],
    faqs: [
      {
        q: 'Can the body be built to my country’s standards?',
        a: 'Yes. We collect the relevant rules — tank capacity, lighting, reflective markings, fire-pump rating or axle loads — before the body drawing is released. For regulated equipment such as fire trucks, we ask for the local specification sheet.',
      },
      {
        q: 'Can I inspect the vehicle before shipment?',
        a: 'Yes. We arrange a third-party inspection at the body factory and send a photo and video report covering the chassis, body, hydraulics and paint before the unit is loaded.',
      },
      {
        q: 'Do you supply right-hand-drive special vehicles?',
        a: 'RHD is available on most FAW chassis and can be quoted for special bodies. Availability depends on the model, so confirm the configuration with our team before ordering.',
      },
    ],
    related: ['garbage-trucks', 'tanker-trucks', 'dump-trucks'],
  },
  {
    slug: 'garbage-trucks',
    name: 'Garbage & Sanitation Trucks',
    shortName: 'Garbage Trucks',
    tagline: 'Hook lift, compactor, skip loader and sewage suction trucks for municipal fleets',
    summary:
      'Hook lift, skip loader, rear compactor, side loader, dump garbage and sewage suction trucks on FAW J6L and J6P chassis, with hydraulic systems sized for daily municipal service.',
    seoTitle: 'Garbage Trucks for Export — Hook Lift, Compactor & Skip Loader',
    seoDescription:
      'Export garbage and sanitation trucks on FAW chassis: hook lift, skip loader, rear compactor, side loader, dump garbage and sewage suction. Municipal specifications.',
    image: '/images/products/garbage-trucks-card.jpg',
    imageAlt: 'FAW J6L rear-loading garbage compactor truck on a residential street',
    brands: ['FAW Jiefang', 'Chengli Special Automobile'],
    intro:
      'Municipal collection is a stop-start duty cycle: the truck spends its day braking, loading and compacting, and the body has to keep working through heat, dust and daily washing. We specify the hydraulics, bin-lift geometry and body steel around the collection method used in your city.\n\nOptions include hook lift and skip loader systems for bulk bins, rear and side compactors for household waste, and combined cleaning and sewage suction units for drain maintenance. Chassis are FAW J6L and J6P, with LHD or RHD and Euro III or V engines.',
    highlights: [
      'Hook lift, skip loader, rear compactor and side loader bodies',
      'Body volumes from 4 m³ to 18 m³',
      'Hydraulic bin lifts matched to local bin sizes',
      'Sewage and fecal suction units from 4 m³ to 20 m³',
      'Corrosion protection for coastal and humid climates',
    ],
    specs: [
      { label: 'Chassis', value: 'FAW J6L / J6P' },
      { label: 'Body volume', value: '4 – 18 m³' },
      { label: 'Suction tank', value: '4 – 20 m³' },
      { label: 'Drive', value: '4×2 / 6×4' },
      { label: 'Emission', value: 'Euro III / V' },
      { label: 'Steering', value: 'LHD or RHD' },
    ],
    models: [
      {
        name: 'Hook Lift Garbage Truck',
        type: '3–20 t · open and enclosed containers',
        description:
          'Carries one large container and sets it down at the collection point. Suits transfer stations, construction waste and green waste where bins are not used.',
        specs: [
          { label: 'Lift capacity', value: '3 – 20 t' },
          { label: 'Container', value: 'Open, enclosed or compactor' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
          { label: 'Hydraulics', value: 'Rear-tilt and push-off options' },
        ],
      },
      {
        name: 'Skip Loader Truck',
        type: '4–12 m³ skips',
        description:
          'The classic skip loader for construction and household bulky waste. Twin hydraulic arms lift and tip the skip at the disposal site.',
        specs: [
          { label: 'Skip volume', value: '4 – 12 m³' },
          { label: 'Lift capacity', value: '5 – 12 t' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
          { label: 'Controls', value: 'Cab and ground station' },
        ],
      },
      {
        name: 'Rear Compactor Truck',
        type: '6–18 m³ · household waste',
        description:
          'Rear-loading compactor with a hydraulic packer and bin lift. The most common municipal collection body for household waste.',
        specs: [
          { label: 'Body volume', value: '6 – 18 m³' },
          { label: 'Compaction ratio', value: '2.5 : 1 typical' },
          { label: 'Bin lift', value: '120 L / 240 L / 360 L' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
      {
        name: 'Side Loader Truck',
        type: '6–12 m³ · one-man collection',
        description:
          'Designed for one-person operation: the bin lift is on the kerb side and the packer is controlled from the cab. Reduces crew size on residential routes.',
        specs: [
          { label: 'Body volume', value: '6 – 12 m³' },
          { label: 'Bin lift', value: 'Kerbside, 120–360 L' },
          { label: 'Operation', value: 'One-person capable' },
          { label: 'Chassis', value: 'FAW J6L' },
        ],
      },
      {
        name: 'Sewage & Fecal Suction Truck',
        type: '4–20 m³ · vacuum tank',
        description:
          'Vacuum tanker for septic tanks and drains, with a high-capacity pump and rear discharge. Combined cleaning-and-suction units add a high-pressure water jet.',
        specs: [
          { label: 'Tank', value: '4 – 20 m³' },
          { label: 'Vacuum pump', value: 'Diesel or PTO driven' },
          { label: 'Options', value: 'High-pressure jetting, hose reel' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
      {
        name: 'Road Sweeper & Cleaning Truck',
        type: 'Mechanical sweeper / washer',
        description:
          'Mechanical sweepers with a suction pick-up, and combined sweep-and-wash units for municipal roads, ports and industrial estates.',
        specs: [
          { label: 'Hopper', value: '4 – 10 m³' },
          { label: 'Water tank', value: '2,000 – 8,000 L' },
          { label: 'Sweeping width', value: '2.5 – 3.5 m' },
          { label: 'Chassis', value: 'FAW light / medium duty' },
        ],
      },
    ],
    applications: ['Household waste collection', 'Construction waste', 'Transfer stations', 'Drain and septic service', 'Street cleaning', 'Port and industrial cleaning'],
    faqs: [
      {
        q: 'Can the bin lift match our local bins?',
        a: 'Yes. Send us the bin type, volume and lifting points. We specify the comb, trunnion or bar lift to match, and can supply a sample bin with the first truck for testing.',
      },
      {
        q: 'What body material is best for coastal cities?',
        a: 'For humid or coastal climates we recommend a zinc-rich primer, epoxy intermediate coat and polyurethane topcoat, with stainless-steel fasteners and galvanised hydraulic lines. This is a common specification for island and tropical markets.',
      },
      {
        q: 'Do you offer electric sanitation trucks?',
        a: 'Yes. Jiefang J6L battery-electric sanitation chassis are available with 81–282 kWh packs, and we can build the sweeper or compactor body on the electric chassis. See our electric trucks page.',
      },
    ],
    related: ['special-purpose-trucks', 'tanker-trucks', 'electric-trucks'],
  },
  {
    slug: 'tanker-trucks',
    name: 'Tanker Trucks',
    shortName: 'Tankers',
    tagline: 'Water, fuel, LPG, bulk powder and asphalt tankers from 5,000 to 30,000 L',
    summary:
      'Water bowsers, fuel tankers, LPG pressure vessels, bulk powder tankers and asphalt distributors on FAW chassis, with carbon steel, stainless steel or aluminium tanks.',
    seoTitle: 'Tanker Trucks for Export — Water, Fuel, LPG & Bulk Powder',
    seoDescription:
      'Export tanker trucks on FAW chassis: water bowsers, fuel tankers, LPG pressure vessels, bulk powder and asphalt tankers from 5,000 to 30,000 L. Custom compartments.',
    image: '/images/products/tanker-trucks-card.jpg',
    imageAlt: 'Blue FAW water tanker truck by the coast',
    brands: ['FAW Jiefang', 'Chengli Special Automobile'],
    intro:
      'A tanker is a pressure vessel, a pump system and a truck — and the weakest of the three determines the service life. We match the tank material and thickness to the product, the pump and meter to the delivery method, and the chassis to the loaded weight and road conditions.\n\nFuel and water bowsers are the volume products; LPG and bulk-powder tankers are engineered to the product density and discharge method. All tanks are pressure- and leak-tested before shipment, with test certificates supplied in the document pack.',
    highlights: [
      'Water and fuel tanks from 5,000 to 30,000 L',
      'Carbon steel, 304/316 stainless or aluminium',
      'Single or multi-compartment fuel tanks with pumps and meters',
      'LPG pressure vessels and bulk-powder tankers',
      'Pressure test, leak test and inspection certificates',
    ],
    specs: [
      { label: 'Capacity', value: '5,000 – 30,000 L' },
      { label: 'Tank material', value: 'Carbon steel / stainless / aluminium' },
      { label: 'Compartments', value: '1 – 5' },
      { label: 'Pump', value: 'PTO-driven, 500 – 1,500 L/min' },
      { label: 'Chassis', value: 'FAW J6L / J6P' },
      { label: 'Steering', value: 'LHD or RHD' },
    ],
    models: [
      {
        name: 'Water Tanker / Bowser',
        type: '5,000–30,000 L',
        description:
          'For municipal water supply, construction dust control and mining. Epoxy-lined carbon steel or stainless tank, rear spray bar and side spray options.',
        specs: [
          { label: 'Capacity', value: '5,000 – 30,000 L' },
          { label: 'Tank', value: 'Carbon steel, epoxy lined' },
          { label: 'Pump', value: 'Self-priming, PTO driven' },
          { label: 'Fittings', value: 'Spray bar, hose reel, manhole' },
        ],
      },
      {
        name: 'Fuel Tanker',
        type: '5,000–30,000 L · multi-compartment',
        description:
          'Carbon steel or aluminium tank with 1–5 compartments, bottom loading, vapour recovery and an approved flow meter. Built to ADR-style requirements on request.',
        specs: [
          { label: 'Capacity', value: '5,000 – 30,000 L' },
          { label: 'Compartments', value: '1 – 5' },
          { label: 'Material', value: 'Carbon steel / aluminium' },
          { label: 'Equipment', value: 'Pump, meter, vapour recovery' },
        ],
      },
      {
        name: 'LPG Tanker / Pressure Vessel',
        type: '10–60 m³',
        description:
          'Horizontal LPG storage and transport vessels with insulation, safety valves and a transfer pump. Supplied with pressure-test and material certificates.',
        specs: [
          { label: 'Volume', value: '10 – 60 m³' },
          { label: 'Design pressure', value: '1.6 – 2.0 MPa' },
          { label: 'Material', value: 'Q345R / Q370R pressure steel' },
          { label: 'Certification', value: 'Pressure test, NDT reports' },
        ],
      },
      {
        name: 'Bulk Powder Tanker',
        type: '20–40 m³ · pneumatic discharge',
        description:
          'For cement, fly ash and mineral powder. Fluidised bed, air compressor and pneumatic discharge pipe; tanker trailer version available.',
        specs: [
          { label: 'Volume', value: '20 – 40 m³' },
          { label: 'Discharge', value: 'Pneumatic, 1.0–1.5 t/min' },
          { label: 'Compressor', value: 'Truck-mounted or independent' },
          { label: 'Type', value: 'Truck or semi-trailer' },
        ],
      },
      {
        name: 'Asphalt Distributor Truck',
        type: '4,000–12,000 L · heated tank',
        description:
          'Heated asphalt tank with a spray bar, burner and circulation system for road construction and surface dressing.',
        specs: [
          { label: 'Capacity', value: '4,000 – 12,000 L' },
          { label: 'Heating', value: 'Diesel burner, insulated tank' },
          { label: 'Spray bar', value: '3 – 6 m, adjustable' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
      {
        name: 'Bulk Feed Tanker',
        type: '15–30 m³ · agricultural feed',
        description:
          'Pneumatic bulk feed tanker with divided compartments and a discharge auger for poultry and livestock feed delivery.',
        specs: [
          { label: 'Volume', value: '15 – 30 m³' },
          { label: 'Compartments', value: '2 – 4' },
          { label: 'Discharge', value: 'Pneumatic or auger' },
          { label: 'Chassis', value: 'FAW J6L / J6P' },
        ],
      },
    ],
    applications: ['Municipal water supply', 'Fuel distribution', 'LPG delivery', 'Cement and fly ash', 'Road construction', 'Agricultural feed'],
    faqs: [
      {
        q: 'Are tanks pressure-tested before shipment?',
        a: 'Yes. Every tank is hydrostatically tested and checked for leaks, and the test certificate, material certificate and weld inspection report are included in the shipping documents.',
      },
      {
        q: 'Can fuel tankers be built to ADR?',
        a: 'We can build to ADR-style requirements, including bottom loading, vapour recovery, an emergency shut-off valve and an approved meter. Please send the exact ADR clause or your local regulation so we can confirm compliance before quoting.',
      },
      {
        q: 'Which material should I choose for a fuel tanker?',
        a: 'Carbon steel is the most economical and is suitable for diesel and petrol. Aluminium reduces weight and is preferred where payload is critical. Stainless steel is used for chemicals and food-grade products.',
      },
    ],
    related: ['garbage-trucks', 'special-purpose-trucks', 'tractor-trucks'],
  },
  {
    slug: 'electric-trucks',
    name: 'Electric Trucks',
    shortName: 'Electric Trucks',
    tagline: 'Jiefang battery-electric tractors, tippers, mixers and sanitation vehicles',
    summary:
      'Jiefang battery-electric tractors, cargo trucks, tippers, mixers and sanitation vehicles from 141 to 612 kWh, with charging or battery-swap options and 200–480 km operating range.',
    seoTitle: 'Electric Trucks for Export — Jiefang EV Tractor, Tipper & Mixer',
    seoDescription:
      'Export Jiefang electric trucks: 423–612 kWh e-tractors, 310–612 kWh tippers, 282–423 kWh mixers and 81–282 kWh sanitation vehicles. Charging or battery swap.',
    image: '/images/products/electric-trucks.svg',
    imageAlt: 'Illustration of a battery-electric heavy truck',
    brands: ['FAW Jiefang'],
    intro:
      'Electric trucks make sense where the route is fixed and the depot can charge overnight: ports, steel mills, coal yards, quarries, concrete plants and municipal depots. Jiefang has put more than 140 green-energy models into series production across battery-electric, hybrid and fuel-cell routes.\n\nWe supply the battery-electric range with the charging architecture that fits your site. Where a depot charger is impractical, battery-swap versions change packs in minutes; where the route is longer, 466–600 kWh tractors extend the working day. We also advise on charger selection, grid capacity and UN38.3 shipping documentation.',
    highlights: [
      'E-tractors from 423 kWh to 600 kWh, up to 480 km range',
      'Battery-swap versions for 24-hour port and steel-mill duty',
      'E-tippers and e-mixers from 282 kWh to 612 kWh',
      'E-sanitation chassis from 81 kWh to 282 kWh',
      'LFP batteries, 20–80% charge in about 30 minutes',
    ],
    specs: [
      { label: 'Battery range', value: '141 – 612 kWh' },
      { label: 'Battery type', value: 'CATL / Guoxuan LFP' },
      { label: 'Charging', value: 'GB/T, CCS2 option' },
      { label: 'Swap', value: '282 / 350 / 400 / 513 kWh' },
      { label: 'Range', value: '200 – 480 km (loaded, typical)' },
      { label: 'Steering', value: 'LHD (RHD on request)' },
    ],
    models: [
      {
        name: 'J6P 6×4 Electric Tractor',
        type: '423 kWh · 570 hp peak',
        description:
          'The standard short-haul e-tractor for steel mills, ports and coal yards. 280 km range, 10.1 t curb weight and a 6-speed gearbox.',
        specs: [
          { label: 'Battery', value: '423 kWh LFP' },
          { label: 'Motor', value: '270 / 420 kW (570 hp peak)' },
          { label: 'Range', value: '280 km' },
          { label: 'GCW', value: '49,000 kg' },
        ],
      },
      {
        name: 'J6P 6×4 Long-Range E-Tractor',
        type: '466 / 528 / 600 kWh · up to 480 km',
        description:
          'For regional routes that cannot fit a mid-day charge. 600 kWh pack, 500 kW motor option and dual-gun 600 A charging.',
        specs: [
          { label: 'Battery', value: '466 / 528 / 600 kWh' },
          { label: 'Range', value: 'Up to 480 km' },
          { label: 'Consumption', value: '1.2 kWh/km' },
          { label: 'Charge', value: '20–80% in about 30 min' },
        ],
      },
      {
        name: 'J6L 4×2 Electric Cargo Truck',
        type: '169–310 kWh · 6.8–9.75 m body',
        description:
          'Urban and factory-logistics cargo truck with CATL or Guoxuan packs and a central-drive or e-axle driveline.',
        specs: [
          { label: 'Battery', value: '169 / 246 / 310 kWh' },
          { label: 'Body', value: '6.8 – 9.75 m' },
          { label: 'Driveline', value: 'Central drive or e-axle' },
          { label: 'Application', value: 'Urban distribution, factory logistics' },
        ],
      },
      {
        name: 'J6L 4×2 Battery-Swap Cargo Truck',
        type: '342 kWh · bottom swap',
        description:
          'Vehicle-and-battery separation lowers the purchase price and allows a pack change in minutes. 280 kW dual-motor e-axle.',
        specs: [
          { label: 'Battery', value: '342 kWh swap' },
          { label: 'Motor', value: '280 kW dual e-axle' },
          { label: 'Swap', value: 'Bottom-mounted pack' },
          { label: 'Body', value: '6.8 – 9.75 m' },
        ],
      },
      {
        name: 'J6P 8×4 Electric Dump Truck',
        type: '400–612 kWh · 571–680 hp',
        description:
          'Construction-waste and mining tipper with a 5.6–8.8 m body. The 612 kWh version is the largest pack in the range; the 400 kWh mining version uses a 680 hp motor.',
        specs: [
          { label: 'Battery', value: '400 / 423 / 600 / 612 kWh' },
          { label: 'Motor', value: '350 / 500 kW (680 hp max)' },
          { label: 'Body', value: '5.6 – 8.8 m' },
          { label: 'GVW', value: '31 – 40 t' },
        ],
      },
      {
        name: 'J6L 8×4 Electric Dump Truck',
        type: '310 / 352 kWh · 31–40 t',
        description:
          'Lightweight e-tipper for standard-load road transport. 352 kWh chassis weighs about 11 t; 500 A dual-gun charging gives a full pack in about an hour.',
        specs: [
          { label: 'Battery', value: '310 / 352 kWh' },
          { label: 'GVW', value: '31 – 40 t' },
          { label: 'Consumption', value: '≤ 1.3 kWh/km' },
          { label: 'Charge', value: '500 A dual-gun, about 1 h' },
        ],
      },
      {
        name: 'J6P / J6L Electric Mixer',
        type: '282–423 kWh · 8–15 m³',
        description:
          'Concrete mixer on an electric chassis for city plants and low-emission construction sites. Swap or charging versions with 8–15 m³ drums.',
        specs: [
          { label: 'Battery', value: '282 / 350 swap; 350–423 charge' },
          { label: 'Drum', value: '8 – 15 m³' },
          { label: 'Chassis', value: 'J6P 8×4 / J6L 8×4' },
          { label: 'Application', value: 'Urban concrete supply' },
        ],
      },
      {
        name: 'J6L 4×2 Electric Sanitation Truck',
        type: '81–282 kWh · sweeper or compactor body',
        description:
          'Electric municipal chassis for sweepers, washers and garbage compactors. Low noise for early-morning residential collection.',
        specs: [
          { label: 'Battery', value: '81 – 282 kWh' },
          { label: 'Body', value: 'Sweeper / washer / compactor' },
          { label: 'Drive', value: '4×2' },
          { label: 'Application', value: 'Municipal sanitation' },
        ],
      },
    ],
    applications: ['Port drayage', 'Steel mills and coal yards', 'Quarries and mining', 'Urban distribution', 'Concrete plants', 'Municipal sanitation'],
    faqs: [
      {
        q: 'Can you ship electric trucks with the batteries installed?',
        a: 'Yes. We prepare the UN38.3 test summary, MSDS and battery declaration, and book carriers approved for Class 9 dangerous goods. For some routes it is cheaper to ship the truck and batteries separately; we will quote both options.',
      },
      {
        q: 'What charging standard do the trucks use?',
        a: 'The standard is GB/T. CCS2 and Type 2 configurations can be specified for markets that use European connectors. Please confirm the charger make and model you plan to install so we can match the protocol.',
      },
      {
        q: 'How long does a battery pack last?',
        a: 'Jiefang quotes 4,500 cycles to 70% state of health on the long-life LFP packs. At one cycle per day that is more than ten years of service. The battery warranty is confirmed per order and per market.',
      },
      {
        q: 'Do you supply right-hand-drive electric trucks?',
        a: 'RHD is available on selected J6L and J6P electric models. Availability changes with factory scheduling, so please confirm the model and destination before ordering.',
      },
    ],
    related: ['tractor-trucks', 'dump-trucks', 'garbage-trucks'],
  },
  {
    slug: 'passenger-cars',
    name: 'Passenger Cars',
    shortName: 'Passenger Cars',
    tagline: 'Bestune sedans, SUVs and the Dongfeng Box RHD city car',
    summary:
      'Bestune T77, T90, B70, JOYEE S04, JOYEE S08, NATPro and Xiaoma, plus the Dongfeng Box E1–E3 right-hand-drive city car. Petrol, hybrid and battery-electric models with export charging and documentation.',
    seoTitle: 'Passenger Cars for Export — Bestune SUV, Sedan & Dongfeng Box',
    seoDescription:
      'Export Bestune T77, T90, B70, JOYEE S04/S08, NATPro and Xiaoma, plus Dongfeng Box RHD EV. Petrol, hybrid and electric, LHD/RHD, full export documents.',
    image: '/images/products/passenger-cars-card.jpg',
    imageAlt: 'Bestune passenger car range including T77, T90, B70, JOYEE S04, JOYEE S08, NATPro and Xiaoma',
    brands: ['FAW Bestune', 'Dongfeng'],
    intro:
      'Passenger cars are the fastest-moving part of the export business, and the models that sell depend on the market: a €12,000 SUV in one country is a fleet car in another. We supply the Bestune range — three petrol models and four new-energy models — plus the Dongfeng Box, a small right-hand-drive EV designed for Southeast Asia.\n\nCars are supplied with the correct steering side, charging connector, language pack and emission configuration for the destination. We handle the certificate of origin, export invoice, and the UN38.3 and MSDS documents for electrified models.',
    highlights: [
      'Bestune petrol: T77, T90 and B70 sedan',
      'Bestune electric: JOYEE S04, JOYEE S08, NATPro and Xiaoma',
      'Dongfeng Box E1–E3 RHD city car with CCS2 charging',
      'LHD and RHD configurations',
      'UN38.3, MSDS and export documentation for EV models',
    ],
    specs: [
      { label: 'Body types', value: 'Sedan / SUV / city car' },
      { label: 'Powertrain', value: 'Petrol / hybrid / BEV' },
      { label: 'Steering', value: 'LHD or RHD' },
      { label: 'Range (BEV)', value: '120 – 565 km CLTC' },
      { label: 'Charging', value: 'GB/T, Type 2, CCS2' },
      { label: 'MOQ', value: '1 unit sample order welcome' },
    ],
    models: [
      {
        name: 'Bestune JOYEE S04',
        type: 'Electric compact SUV · 445 / 565 km',
        description:
          'A five-seat electric SUV with a 2,750 mm wheelbase, 381 L boot and a 48.35 or 61.47 kWh LFP pack. The longer-range version reaches 565 km CLTC.',
        specs: [
          { label: 'Dimensions', value: '4,450 × 1,860 × 1,635 mm' },
          { label: 'Wheelbase', value: '2,750 mm' },
          { label: 'Battery / range', value: '48.35 / 61.47 kWh · 445 / 565 km' },
          { label: 'Consumption', value: '11.8 kWh/100 km' },
        ],
      },
      {
        name: 'Bestune JOYEE S08',
        type: 'Plug-in hybrid SUV · 1,555 km combined',
        description:
          'A full-size hybrid SUV with 210 km of electric range and 1,555 km combined CLTC range. 67 kW fast charging and a 590 L boot.',
        specs: [
          { label: 'Dimensions', value: '4,745 × 1,880 × 1,710 mm' },
          { label: 'Wheelbase', value: '2,772 mm' },
          { label: 'Battery / EV range', value: '21.2 / 30.9 kWh · 150 / 210 km' },
          { label: 'Combined range', value: '1,555 km CLTC' },
        ],
      },
      {
        name: 'Bestune Xiaoma',
        type: 'Electric city car · 120 / 170 km',
        description:
          'A three-metre two-door city car for urban delivery and short commutes. 9.3 or 13.9 kWh pack, foldable storage and a two-tone body.',
        specs: [
          { label: 'Dimensions', value: '3,000 × 1,510 × 1,630 mm' },
          { label: 'Wheelbase', value: '1,953 mm' },
          { label: 'Battery / range', value: '9.3 / 13.9 kWh · 120 / 170 km' },
          { label: 'Seats', value: '4' },
        ],
      },
      {
        name: 'Bestune NATPro',
        type: 'Electric MPV for ride-hailing · 401–425 km',
        description:
          'Purpose-built for ride-hailing and fleet use: 2,850 mm wheelbase, 120 kW motor and a three-minute battery swap on the swap version.',
        specs: [
          { label: 'Dimensions', value: '4,450 / 4,592 × 1,840 × 1,680 mm' },
          { label: 'Wheelbase', value: '2,850 mm' },
          { label: 'Battery / range', value: '53 / 54 kWh · 401 / 419 / 425 km' },
          { label: 'Motor', value: '120 kW, 3-minute battery swap' },
        ],
      },
      {
        name: 'Bestune T90',
        type: 'Petrol SUV · 1.5T or 2.0T',
        description:
          'A family SUV with a 2,772 mm wheelbase, Level 2.5 driver assistance and a Qualcomm 8155 chip. 1.5T + 7DCT or 2.0T + 8AT.',
        specs: [
          { label: 'Dimensions', value: '4,675 × 1,870 × 1,690 mm' },
          { label: 'Wheelbase', value: '2,772 mm' },
          { label: 'Powertrain', value: '1.5T + 7DCT / 2.0T + 8AT' },
          { label: 'Seats', value: '5' },
        ],
      },
      {
        name: 'Bestune B70 Classic',
        type: 'Petrol sedan · 1.5T or 2.0T',
        description:
          'A 4.81 m family sedan with a 2,800 mm wheelbase, 25 storage compartments and a large-opening hatchback tailgate.',
        specs: [
          { label: 'Dimensions', value: '4,810 × 1,840 × 1,455 mm' },
          { label: 'Wheelbase', value: '2,800 mm' },
          { label: 'Powertrain', value: '1.5T + 7DCT / 2.0T + 6AT' },
          { label: 'Seats', value: '5' },
        ],
      },
      {
        name: 'Bestune B70 Gen 4',
        type: 'Petrol sedan · 2.0T + 6AT',
        description:
          'The fourth-generation B70: 4.855 m body, 2.0T Aisin 6AT, Level 2+ driver assistance and a panoramic sunroof.',
        specs: [
          { label: 'Dimensions', value: '4,855 × 1,840 × 1,455 mm' },
          { label: 'Wheelbase', value: '2,800 mm' },
          { label: 'Powertrain', value: '2.0T + 6AT (Aisin)' },
          { label: 'Driver assist', value: 'Level 2+' },
        ],
      },
      {
        name: 'Bestune T77 Classic',
        type: 'Petrol SUV · 1.5T 105 kW',
        description:
          'A compact SUV with a 2,700 mm wheelbase and a 1.5T engine. The Classic trim is the value-focused version for fleet and rental buyers.',
        specs: [
          { label: 'Dimensions', value: '4,525 × 1,845 × 1,615 mm' },
          { label: 'Wheelbase', value: '2,700 mm' },
          { label: 'Power', value: '1.5T, 105 kW' },
          { label: 'Seats', value: '5' },
        ],
      },
      {
        name: 'Bestune T77',
        type: 'Petrol SUV · 1.5T + 7DCT',
        description:
          'The current T77 with a dual 12-inch screen, 1.5T engine and 7-speed dual-clutch gearbox. A strong value proposition in emerging SUV markets.',
        specs: [
          { label: 'Dimensions', value: '4,549 × 1,845 × 1,615 mm' },
          { label: 'Wheelbase', value: '2,700 mm' },
          { label: 'Powertrain', value: '1.5T + 7DCT' },
          { label: 'Seats', value: '5' },
        ],
      },
      {
        name: 'Dongfeng Box E1–E3',
        type: 'RHD electric city car · 330 / 430 km',
        description:
          'A right-hand-drive five-door EV built for Southeast Asian markets. 32.56 or 43.89 kWh LFP pack, CCS2 DC charging and a 12-inch centre screen.',
        specs: [
          { label: 'Dimensions', value: '4,020 × 1,810 × 1,570 mm' },
          { label: 'Wheelbase', value: '2,663 mm' },
          { label: 'Battery / range', value: '32.56 / 43.89 kWh · 330 / 430 km' },
          { label: 'Charging', value: '3.3 / 6.6 kW AC, CCS2 DC' },
        ],
      },
    ],
    applications: ['Dealer networks', 'Ride-hailing and taxi fleets', 'Corporate fleets', 'Car rental', 'Government procurement'],
    faqs: [
      {
        q: 'Can I order a single car as a sample?',
        a: 'Yes. Sample orders of one unit are welcome. We can ship in a container with other vehicles or as a single unit, and we will quote both options.',
      },
      {
        q: 'Do the electric models come with the right charging plug for my country?',
        a: 'We confirm the connector at order: GB/T for China-standard chargers, Type 2 for Europe, or CCS2 for markets such as Thailand and Indonesia. A portable charger is included; wallboxes can be added.',
      },
      {
        q: 'Are spare parts and service available?',
        a: 'We supply a first-parts kit with each order and can arrange recurring parts shipments. For dealer customers we can also provide technical training and diagnostic tools.',
      },
    ],
    related: ['rvs', 'electric-trucks', 'cargo-trucks'],
  },
  {
    slug: 'rvs',
    name: 'RVs & Motorhomes',
    shortName: 'RVs',
    tagline: 'Changan Fengjing Blue Whale Explorer 4×4 motorhome',
    summary:
      'The Changan Fengjing Blue Whale Explorer: a 5,995 mm four-wheel-drive motorhome with a 2.0T petrol engine, ZF 8AT, 4/6-seat layouts and a dedicated RV chassis.',
    seoTitle: 'RV & Motorhome for Export — Changan Fengjing 4×4',
    seoDescription:
      'Export the Changan Fengjing Blue Whale Explorer 4×4 motorhome: 5,995 mm, 2.0T 171 kW, ZF 8AT, 4/6 seats, dedicated RV chassis. LHD, full export documents.',
    image: '/images/products/rvs.svg',
    imageAlt: 'Illustration of a four-wheel-drive camper van',
    brands: ['Changan'],
    intro:
      'The Fengjing Blue Whale Explorer is built on Changan’s dedicated RV chassis rather than a converted van. That gives it a 3,430 mm wheelbase, a 5,995 mm body, four-wheel drive with low range and a 3,087 kg kerb weight — a combination that handles gravel access roads without giving up on-road comfort.\n\nThe 2.0T GDI engine produces 171 kW and 390 Nm through a ZF 8-speed automatic. Inside, the layout is available with four or six seats, a fixed bed, kitchen, shower and 80 L fuel tank for long touring legs. We supply LHD units with export documentation and can quote right-hand drive on request.',
    highlights: [
      'Dedicated Changan RV chassis, not a van conversion',
      '2.0T GDI 171 kW / 390 Nm with ZF 8AT',
      'Four-wheel drive with 2H / AUTO / 4L and rear diff lock',
      '4-seat and 6-seat layouts',
      '5,995 mm body, 3,430 mm wheelbase, 3,087 kg kerb weight',
    ],
    specs: [
      { label: 'Dimensions', value: '5,995 × 2,170 × 2,880 mm' },
      { label: 'Wheelbase', value: '3,430 mm' },
      { label: 'Engine', value: '2.0T GDI, 171 kW / 390 Nm' },
      { label: 'Gearbox', value: 'ZF 8AT' },
      { label: 'Drive', value: '4WD, 2H / AUTO / 4L' },
      { label: 'Seats', value: '4 or 6' },
    ],
    models: [
      {
        name: 'Fengjing Blue Whale Explorer — 4-seat',
        type: 'Couple / small-family layout',
        description:
          'Four-seat layout with a fixed rear bed, kitchen block, shower and a large rear storage garage. The lighter of the two layouts.',
        specs: [
          { label: 'Seats', value: '4' },
          { label: 'Kerb weight', value: '3,087 kg' },
          { label: 'Fuel tank', value: '80 L' },
          { label: 'Licence', value: 'Confirm local RV licence class' },
        ],
      },
      {
        name: 'Fengjing Blue Whale Explorer — 6-seat',
        type: 'Family layout with additional berths',
        description:
          'Six-seat layout with additional berths and a larger dining area. Suitable for family touring and rental fleets.',
        specs: [
          { label: 'Seats', value: '6' },
          { label: 'Layout', value: 'Fixed bed + convertible dinette' },
          { label: 'Water / power', value: 'Fresh water and leisure battery system' },
          { label: 'Options', value: 'Solar, awning, reversing camera' },
        ],
      },
    ],
    applications: ['Tourism and rental fleets', 'Family touring', 'Camping and outdoor hospitality', 'Mobile accommodation'],
    faqs: [
      {
        q: 'Is the RV left-hand or right-hand drive?',
        a: 'The standard production is left-hand drive. Right-hand drive can be quoted for fleet orders, subject to Changan’s production schedule.',
      },
      {
        q: 'Can the interior layout be customized?',
        a: 'Yes. Seat count, bed configuration, kitchen position and storage can be adjusted within the body structure. Send us a sketch or reference layout and we will confirm feasibility and price.',
      },
      {
        q: 'How is an RV shipped?',
        a: 'RVs are normally shipped by RoRo or in a flat-rack container because of their height. We confirm the dimensions with the carrier and can arrange door-to-port or door-to-door delivery.',
      },
    ],
    related: ['passenger-cars', 'special-purpose-trucks', 'cargo-trucks'],
  },
];
