#!/bin/bash
# Deploy Sanity Studio to fadestudio.sanity.studio
# Usage: SANITY_AUTH_TOKEN=<token> bash scripts/deploy-sanity.sh

set -e

cd "$(dirname "$0")/../sanity"

if [ -z "$SANITY_AUTH_TOKEN" ]; then
  echo "❌ Necesitas un token Admin de Sanity"
  echo "   Crea uno en: https://sanity.io/manage/project/o9ds1vqj → API → Add API token → Admin"
  echo "   Luego: SANITY_AUTH_TOKEN=<token> bash scripts/deploy-sanity.sh"
  exit 1
fi

echo "🚀 Desplegando Sanity Studio..."
SANITY_AUTH_TOKEN="$SANITY_AUTH_TOKEN" npx sanity deploy --url fadestudio -y

echo "✅ Estudio desplegado en: https://fadestudio.sanity.studio"
echo ""
echo "📝 Próximo paso: ejecutar scripts/seed-sanity.sh para cargar el contenido inicial"
