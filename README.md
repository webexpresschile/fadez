# FADE STUDIO

**El Estándar de Oro en Cortes Masculinos**

Barbería premium en Puerto Cabello, Venezuela. Sitio web construido con el sistema WebExpress — template data-driven con panel Decap CMS.

## 🌐 Live

- **GitHub Pages:** https://webexpresschile.github.io/fadez/
- **Admin Panel:** https://webexpresschile.github.io/fadez/admin/

## 🚀 Stack

- **Framework:** [Astro](https://astro.build/) (Static Site)
- **Estilos:** Tailwind CSS + CSS personalizado
- **CMS:** [Decap CMS](https://decapcms.org/) (Git-based, headless)
- **Deploy:** GitHub Actions → GitHub Pages

## 📝 Editar Contenido

1. Ve al panel `/admin/`
2. Autentica con tu cuenta de GitHub
3. Edita cualquier sección del sitio
4. Guarda — se genera un commit automático
5. GitHub Actions reconstruye y despliega en segundos

## 🧱 Estructura

```
src/
├── data/
│   └── site.json          ← TODO el contenido editable
├── layouts/
│   └── Base.astro          ← Layout principal (head, fonts, body)
└── pages/
    └── index.astro         ← Página principal (componentes + estilos)

public/admin/
├── index.html              ← Panel Decap CMS
└── config.yml              ← Configuración del CMS
```

## 🛠️ Desarrollo Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Build estático → dist/
```

## 📋 Template WebExpress

Este proyecto es el **template de barbería** del ecosistema WebExpress. Sirve como base para crear sitios de barberías: clona, edita `site.json`, y despliega.

---
*Generado por [WebExpress](https://github.com/webexpresschile/WebExpress)*
