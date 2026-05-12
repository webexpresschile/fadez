import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'o9ds1vqj',
  dataset: 'production',
  apiVersion: '2026-05-12',
  useCdn: true,
})

export async function getSiteConfig() {
  const query = `*[_type == "siteConfig"][0]`
  return await client.fetch(query)
}
