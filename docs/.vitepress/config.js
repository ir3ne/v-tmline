import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V-Tmline",
  description: "Documentation",
  base: '/v-tmline/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: '/favicon.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
	  { text: 'API Reference', link: '/reference/props', activeMatch: '/reference/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
	  {
        text: 'API Reference',
        collapsed: false,
        items: [
          { text: 'Props', link: '/reference/props' },
          { text: 'Events', link: '/reference/events' },
        ]
      },
	  {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Basic', link: '/examples/basic' },
          { text: 'Colored', link: '/examples/colored' },
          { text: 'Outlined', link: '/examples/outlined' },
          { text: 'Alignment', link: '/examples/alignment' },
          { text: 'Mode', link: '/examples/mode' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ir3ne/v-tmline' }
    ]
  }
})
