<script setup> import BasicExample from '/examples/basic.vue' </script>

# Getting Started

`v-tmline` is a flexible and customizable timeline component for Vue 3 applications. Display a vertical timeline of events with customizable styles, alignments, and content. For both light and dark themes. 🌝 🌚

Feel free to report [issues](https://github.com/ir3ne/v-tmline/issues/new?template=Blank+issue), make PR's and start [discussions](https://github.com/ir3ne/v-tmline/discussions/new/choose).

## Installation

::: code-group

```bash [pnpm]
pnpm add v-tmline
```

```bash [npm]
npm add v-tmline
```

```bash [yarn]
yarn add v-tmline
```
:::

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
