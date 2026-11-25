import { defineConfig } from 'astro/config';

// O domínio público é definido por PUBLIC_SITE_URL no momento da publicação.
// Sem ele, nenhuma URL absoluta é inventada nos metadados.
const site = process.env.PUBLIC_SITE_URL || 'https://livros.pcgdigital.com.br';

export default defineConfig({
  site,
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
