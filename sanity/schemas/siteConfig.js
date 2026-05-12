export default {
  name: 'siteConfig',
  title: 'Configuración del Sitio',
  type: 'document',
  groups: [
    { name: 'brand', title: 'Marca' },
    { name: 'hero', title: 'Hero' },
    { name: 'services', title: 'Servicios' },
    { name: 'lookbook', title: 'Lookbook' },
    { name: 'about', title: 'Nosotros' },
    { name: 'testimonials', title: 'Testimonios' },
    { name: 'cta', title: 'CTA Reserva' },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Brand
    { name: 'brandName', title: 'Nombre', type: 'string', group: 'brand' },
    { name: 'brandLogo', title: 'Logo', type: 'string', group: 'brand' },
    { name: 'brandLogoGold', title: 'Logo Dorado', type: 'string', group: 'brand' },

    // Hero
    { name: 'heroLocation', title: 'Ubicación', type: 'string', group: 'hero' },
    { name: 'heroBarberName', title: 'Nombre del Barbero', type: 'string', group: 'hero' },
    { name: 'heroTitle', title: 'Título (usa <mark>ORO</mark>)', type: 'text', group: 'hero' },
    { name: 'heroSubtitle', title: 'Subtítulo', type: 'text', group: 'hero' },
    { name: 'heroCta', title: 'Texto Botón', type: 'string', group: 'hero' },
    { name: 'heroCtaLink', title: 'Link Botón', type: 'url', group: 'hero' },
    { name: 'heroCtaSecondary', title: 'Texto Botón Secundario', type: 'string', group: 'hero' },
    { name: 'heroCtaSecondaryLink', title: 'Link Botón Secundario', type: 'string', group: 'hero' },
    { name: 'heroImage', title: 'URL Imagen', type: 'url', group: 'hero' },

    // Services
    { name: 'servicesEyebrow', title: 'Subtítulo', type: 'string', group: 'services' },
    { name: 'servicesTitle', title: 'Título', type: 'text', group: 'services' },
    {
      name: 'servicesItems',
      title: 'Servicios',
      type: 'array',
      group: 'services',
      of: [{
        type: 'object',
        fields: [
          { name: 'num', title: 'Número', type: 'string' },
          { name: 'icon', title: 'Icono', type: 'string' },
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text' },
        ],
      }],
    },

    // Lookbook
    { name: 'lookbookEyebrow', title: 'Subtítulo', type: 'string', group: 'lookbook' },
    { name: 'lookbookTitle', title: 'Título', type: 'text', group: 'lookbook' },
    { name: 'lookbookCta', title: 'CTA', type: 'string', group: 'lookbook' },
    {
      name: 'lookbookItems',
      title: 'Imágenes',
      type: 'array',
      group: 'lookbook',
      of: [{
        type: 'object',
        fields: [
          { name: 'image', title: 'URL Imagen', type: 'url' },
          { name: 'fullImage', title: 'URL Full', type: 'url' },
          { name: 'tag', title: 'Etiqueta', type: 'string' },
          { name: 'caption', title: 'Texto', type: 'string' },
        ],
      }],
    },

    // About
    { name: 'aboutEyebrow', title: 'Subtítulo', type: 'string', group: 'about' },
    { name: 'aboutTitle', title: 'Título', type: 'text', group: 'about' },
    { name: 'aboutImage', title: 'URL Imagen', type: 'url', group: 'about' },
    { name: 'aboutImageAlt', title: 'Texto Alternativo', type: 'string', group: 'about' },
    { name: 'aboutStatsBadge', title: 'Badge Número', type: 'string', group: 'about' },
    { name: 'aboutStatsBadgeLabel', title: 'Badge Texto', type: 'string', group: 'about' },
    {
      name: 'aboutParagraphs',
      title: 'Párrafos',
      type: 'array',
      group: 'about',
      of: [{ type: 'text' }],
    },
    {
      name: 'aboutStats',
      title: 'Estadísticas',
      type: 'array',
      group: 'about',
      of: [{
        type: 'object',
        fields: [
          { name: 'number', title: 'Número', type: 'string' },
          { name: 'label', title: 'Etiqueta', type: 'string' },
        ],
      }],
    },

    // Testimonials
    { name: 'testimonialsEyebrow', title: 'Subtítulo', type: 'string', group: 'testimonials' },
    { name: 'testimonialsTitle', title: 'Título', type: 'text', group: 'testimonials' },
    {
      name: 'testimonialsItems',
      title: 'Testimonios',
      type: 'array',
      group: 'testimonials',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Texto', type: 'text' },
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'role', title: 'Rol', type: 'string' },
          { name: 'avatar', title: 'URL Avatar', type: 'url' },
        ],
      }],
    },

    // CTA
    { name: 'ctaLabel', title: 'Etiqueta', type: 'string', group: 'cta' },
    { name: 'ctaTitle', title: 'Título', type: 'text', group: 'cta' },
    { name: 'ctaSubtitle', title: 'Subtítulo', type: 'text', group: 'cta' },
    { name: 'ctaPhone', title: 'Teléfono', type: 'string', group: 'cta' },
    { name: 'ctaWhatsappUrl', title: 'URL WhatsApp', type: 'url', group: 'cta' },

    // Footer
    { name: 'footerTagline', title: 'Tagline', type: 'text', group: 'footer' },
    { name: 'footerInstagram', title: 'Instagram URL', type: 'url', group: 'footer' },
    { name: 'footerTiktok', title: 'TikTok URL', type: 'url', group: 'footer' },
    { name: 'footerWhatsapp', title: 'WhatsApp URL', type: 'url', group: 'footer' },
    { name: 'footerFacebook', title: 'Facebook URL', type: 'url', group: 'footer' },
    { name: 'footerAddress', title: 'Dirección', type: 'string', group: 'footer' },
    { name: 'footerPhone', title: 'Teléfono', type: 'string', group: 'footer' },
    { name: 'footerTel', title: 'Tel (link)', type: 'string', group: 'footer' },
    { name: 'footerEmail', title: 'Email', type: 'string', group: 'footer' },
    { name: 'footerHours', title: 'Horario', type: 'string', group: 'footer' },
    { name: 'footerCopyright', title: 'Copyright', type: 'string', group: 'footer' },

    // Menu items
    {
      name: 'footerMenu',
      title: 'Menú (Footer)',
      type: 'array',
      group: 'footer',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Texto', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' },
        ],
      }],
    },

    // SEO
    { name: 'seoTitle', title: 'Título (tag)', type: 'string', group: 'seo' },
    { name: 'seoDescription', title: 'Descripción (meta)', type: 'text', group: 'seo' },
  ],
};
