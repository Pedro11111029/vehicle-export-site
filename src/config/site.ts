// ============================================================
//  全站唯一的配置中心：改这里就够了，不用碰其他文件
//  产品分类和车型在 src/data/products.ts，这里统一导出
// ============================================================

import { PRODUCTS } from '../data/products';
import type { Product, ProductModel } from '../data/products';

export { PRODUCTS };
export type { Product, ProductModel };

export const SITE = {
  url: 'https://usedtruk.com',
  name: 'Global Auto Trading',
  legalName: 'PedroZ CO., LTD.',
  tagline: 'Reliable Vehicle Export Partner Since 2010',
  description:
    'B2B vehicle export supplier — FAW trucks, special-purpose and municipal vehicles, Bestune cars, electric trucks and RVs. Factory-direct pricing, full export documentation, worldwide shipping.',
  email: 'Pedro@usedtruk.com',
  phone: '+86 152 2650 1029',
  whatsapp: '+8615226501029', // 国家码+号码，不要加空格和括号
  address: 'No. 1, Shijiazhuang, Hebei, China',
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

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
