export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  { slug: 'xiang-ye-cun-fu', name: '乡野村夫', description: '山野、草木与日常' },
  { slug: 'kong-xiang-hua-ting', name: '空想花庭', description: '想不清楚的那些事' },
  { slug: 'other', name: '其他', description: '技术、建站和杂项' },
];

export function categorySlug(name: string): string | undefined {
  return categories.find((c) => c.name === name)?.slug;
}

export function categoryUrl(name: string): string {
  const slug = categorySlug(name);
  return slug ? `/categories/${slug}/` : '/categories/';
}
