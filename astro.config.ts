import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite =
  repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repository && !isUserSite ? `/${repository}` : '/',
});
