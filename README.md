<h1 align="center">
  Vue Timeline Component
</h1>

<p align="center">
 A flexible and customizable timeline component for Vue 3 applications.<br> Display a vertical timeline of events with customizable styles, alignments, and content. <br>For both light and dark themes. 🌝 🌚
<p>

<p align="center">
  Feel free to report <a href="https://github.com/ir3ne/v-tmline/issues/new?template=Blank+issue">issues</a>, make PR's and start <a href="https://github.com/ir3ne/v-tmline/discussions/new/choose">discussions</a>.
<p>

<p align="center">
  <img src="docs/public/logo.svg" alt="v-tmline-logo">
</p>

## Features

- Customizable bullets style: filled or outlined
- Custom colors
- Left and right alignment
- Support for light and dark mode

![dark-light-mode](https://raw.githubusercontent.com/ir3ne/v-tmline/edc69d434e40ed269690d530bc5f67e48010b4ef/assets/dark-light-mode.png)

## Installation

```bash
npm install v-tmline
```

## Usage

Import and use the component in your Vue application:

```vue
<script setup>
import { Timeline } from 'v-tmline'

const timelineItems = [
  {
	id: 1,
	label: 'First Point'
  },
  {
	id: 2,
	label: 'Second Point'
  },
  {
	id: 3,
	label: 'Third Point'
  }
]
</script>

<template>
  <Timeline :items="timelineItems" />
</template>
```

## Props

| Prop | Type | Default | Description | Available Options |
|------|------|---------|-------------|-------------------|
| items | Array | required | Array of timeline items. Each item must be an object with at least a `label` property | - |
| mode | String | 'light' | Theme mode of the timeline | 'light', 'dark' |
| fill | String | 'filled' | Style of timeline dots | 'filled', 'outlined' |
| colored | String | '' | Custom color for the timeline (CSS color value) | Any valid CSS color |
| align | String | 'left' | Alignment of the timeline | 'left', 'right' |

## Timeline Items

Each item in the `items` array should have the following structure:

```javascript
{
  id?: string | number, // Optional unique identifier
  label: string        // Required text to display
}
```

## Customization

### Basic Timeline

```vue
<template>
  <Timeline :items="[
    { label: 'Started project' },
    { label: 'Released v1.0' },
    { label: 'Added new features' }
  ]" />
</template>
```

### Custom Colored Timeline

```vue
<template>
  <Timeline
    :items="timelineItems"
    colored="#2196F3"
  />
</template>
```

### Dark Mode Timeline

```vue
<template>
  <Timeline
    :items="timelineItems"
    mode="dark"
  />
</template>
```

### Right-Aligned Timeline

```vue
<template>
  <Timeline
    :items="timelineItems"
    align="right"
  />
</template>
```

### Custom Content using Slots

You can customize the content of each timeline item using the `item` slot:

```vue
<template>
  <Timeline :items="timelineItems">
    <template #item="{ item, index }">
      <div class="custom-item">
        <h3>{{ item.label }}</h3>
        <p>Additional content for item {{ index + 1 }}</p>
      </div>
    </template>
  </Timeline>
</template>
```

## Styling

The component uses the following CSS classes that you can override:

- `.re-timeline` - Main timeline container
- `.re-timeline-item` - Individual timeline item
- `.re-timeline-item-tail` - Timeline connector line
- `.re-timeline-item-head` - Timeline dot
- `.re-timeline-item-content` - Content container

## Full Example

```vue
<script setup>
import { Timeline } from 'v-tmline'

const timelineItems = [
  {
    id: 1,
    label: 'Project Started',
  },
  {
    id: 2,
    label: 'First Milestone',
  },
  {
    id: 3,
    label: 'Project Completed',
  }
]
</script>

<template>
  <Timeline
    :items="timelineItems"
    mode="light"
    fill="filled"
    colored="#2196F3"
    align="left"
  >
    <template #item="{ item }">
      <div class="custom-timeline-content">
        <h3>{{ item.label }}</h3>
        <p>Custom content here</p>
      </div>
    </template>
  </Timeline>
</template>

<style scoped>
.custom-timeline-content {
  padding: 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
}
</style>
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
