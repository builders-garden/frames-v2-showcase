import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const domain = headersList.get('host') ?? '';

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date()
    }
  ];
}
