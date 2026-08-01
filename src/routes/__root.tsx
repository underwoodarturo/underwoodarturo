import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: 'Underwood — Personal Brand' },
      { name: 'description', content: 'Personal brand page for Arturo Underwood.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@700&display=swap',
      },
    ],
  }),
  component: () => (
    <>
      {/* For CSR without strict Document wrapper, we can also inject directly into the DOM or rely on React 19 native support */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@700&display=swap" />
      <title>Underwood — Personal Brand</title>
      <meta name="description" content="Personal brand page for Arturo Underwood." />
      <Outlet />
    </>
  ),
})
