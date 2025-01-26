import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "V-Tmline",
  description: "Documentation",
//   base: '/v-tmline/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: 'public/favicon.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
	//   {
    //     text: 'API Reference',
    //     collapsed: false,
    //     items: [
    //       { text: 'Props', link: '/reference/props' },
    //       { text: 'Events', link: '/reference/events' },
    //       { text: 'Slots', link: '/reference/slots' },
    //       { text: 'Types', link: '/reference/types', items: [
    //         { text: 'TimelineGroup', link: '/reference/types#timelinegroup' },
    //         { text: 'TimelineItem', link: '/reference/types#timelineitem' },
    //         { text: 'TimelineMarker', link: '/reference/types#timelinemarker' },
    //       ] },
    //     ]
    //   },
	  {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Basic example', link: '/examples/basic-example' },
        //   { text: 'Hover position', link: '/examples/hover-position' },
        //   { text: 'Custom timestamp labels', link: '/examples/custom-timestamp-labels' },
        //   { text: 'Custom timestamp intervals', link: '/examples/custom-timestamp-intervals' },
        //   { text: 'Draggable Items', link: '/examples/draggable-items' },
        //   { text: 'Custom Charts or Canvas Rendering', link: '/examples/custom-charts-or-canvas-rendering' },
        //   { text: 'Synced timelines', link: '/examples/synced-timelines' },
        //   { text: 'Tooltips', link: '/examples/tooltips' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ir3ne/v-tmline' }
    ]
  }
})
