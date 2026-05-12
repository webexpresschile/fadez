#!/usr/bin/env node
// Seed Sanity with initial content from site.json
// Usage: SANITY_AUTH_TOKEN=<token> node scripts/seed-sanity.cjs

const { createClient } = require('@sanity/client');
const path = require('path');
const fs = require('fs');

const token = process.env.SANITY_AUTH_TOKEN;
if (!token) {
  console.error('❌ Necesitas SANITY_AUTH_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId: 'o9ds1vqj',
  dataset: 'production',
  token,
  apiVersion: '2026-05-12',
  useCdn: false,
});

async function seed() {
  const site = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'site.json'), 'utf-8')
  );

  const doc = {
    _type: 'siteConfig',
    _id: 'siteConfig',

    brandName: site.brand?.name || 'FADE STUDIO',
    brandLogo: site.brand?.logo || 'FADE',
    brandLogoGold: site.brand?.logoGold || 'FADE',

    heroLocation: site.hero?.location || '',
    heroBarberName: site.hero?.barberName || '',
    heroTitle: site.hero?.title || '',
    heroSubtitle: site.hero?.subtitle || '',
    heroCta: site.hero?.cta || '',
    heroCtaLink: site.hero?.ctaLink || '',
    heroCtaSecondary: site.hero?.ctaSecondary || '',
    heroCtaSecondaryLink: site.hero?.ctaSecondaryLink || '',
    heroImage: site.hero?.image || '',

    servicesEyebrow: site.services?.eyebrow || '',
    servicesTitle: site.services?.title || '',
    servicesItems: (site.services?.items || []).map(item => ({
      _key: `svc_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      num: item.num,
      icon: item.icon,
      name: item.name,
      description: item.description,
    })),

    lookbookEyebrow: site.lookbook?.eyebrow || '',
    lookbookTitle: site.lookbook?.title || '',
    lookbookCta: site.lookbook?.cta || '',
    lookbookItems: (site.lookbook?.items || []).map(item => ({
      _key: `lb_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      image: item.image,
      fullImage: item.fullImage,
      tag: item.tag,
      caption: item.caption,
    })),

    aboutEyebrow: site.about?.eyebrow || '',
    aboutTitle: site.about?.title || '',
    aboutImage: site.about?.image || '',
    aboutImageAlt: site.about?.imageAlt || '',
    aboutStatsBadge: site.about?.statsBadge || '',
    aboutStatsBadgeLabel: site.about?.statsBadgeLabel || '',
    aboutParagraphs: site.about?.paragraphs || [],
    aboutStats: (site.about?.stats || []).map(s => ({
      _key: `stat_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      number: s.number,
      label: s.label,
    })),

    testimonialsEyebrow: site.testimonials?.eyebrow || '',
    testimonialsTitle: site.testimonials?.title || '',
    testimonialsItems: (site.testimonials?.items || []).map(item => ({
      _key: `test_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      text: item.text,
      name: item.name,
      role: item.role,
      avatar: item.avatar,
    })),

    ctaLabel: site.cta?.label || '',
    ctaTitle: site.cta?.title || '',
    ctaSubtitle: site.cta?.subtitle || '',
    ctaPhone: site.cta?.phone || '',
    ctaWhatsappUrl: site.cta?.whatsappUrl || '',

    footerTagline: site.footer?.tagline || '',
    footerInstagram: site.footer?.social?.instagram || '',
    footerTiktok: site.footer?.social?.tiktok || '',
    footerWhatsapp: site.footer?.social?.whatsapp || '',
    footerFacebook: site.footer?.social?.facebook || '',
    footerAddress: site.footer?.contact?.address || '',
    footerPhone: site.footer?.contact?.phone || '',
    footerTel: site.footer?.contact?.tel || '',
    footerEmail: site.footer?.contact?.email || '',
    footerHours: site.footer?.contact?.hours || '',
    footerCopyright: site.footer?.copyright || '',
    footerMenu: (site.footer?.menu || []).map(m => ({
      _key: `menu_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      label: m.label,
      href: m.href,
    })),

    seoTitle: site.seo?.title || '',
    seoDescription: site.seo?.description || '',
  };

  // Delete existing if any
  const existing = await client.fetch('*[_type == "siteConfig"][0]._id');
  if (existing) {
    await client.delete(existing);
    console.log('🗑️ Documento anterior eliminado');
  }

  const result = await client.createOrReplace(doc);
  console.log('✅ Contenido cargado en Sanity!');
  console.log('   ID:', result._id);
  console.log('   Studio: https://fadestudio.sanity.studio');
}

seed().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
