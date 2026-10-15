// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPagesBuild ? "/portfolio" : "/";

export default defineConfig({
  vite: {
    base: isGitHubPagesBuild ? `${basePath}/` : "/",
  },
  tanstackStart: {
    ...(isGitHubPagesBuild
      ? {
          router: { basepath: basePath },
          pages: [
            { path: "/", prerender: { enabled: true } },
            { path: "/projects/khadi-india", prerender: { enabled: true } },
          ],
          prerender: { enabled: true, failOnError: true, crawlLinks: false },
        }
      : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: isGitHubPagesBuild ? false : undefined,
});
