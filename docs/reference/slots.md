---
outline: deep
---

# Slots

The timeline component provides several slots to customize the content of your timeline items.

| Slot Name | Scope Properties | Description |
|-----------|-----------------|-------------|
| `item` | `{ item }` | Default slot for timeline items. Used when `item.slotName` is not provided. |
| `[dynamic]` | `{ item }` | Dynamic named slot based on `item.slotName`. Allows custom content for specific items. |

## Default Item Slot

The default `item` slot allows you to customize how each timeline item is rendered:

```vue
<template>
  <Timeline :items="items">
    <!-- Default slot -->
    <template #item="{ item }">
      <div>Default: {{ item.label }}</div>
    </template>
  </Timeline>
</template>
```

## Dynamic Named Slots

You can use dynamic named slots by setting the `slotName` property on your timeline items:

```vue
<template>
  <Timeline :items="items">
    <!-- Custom slot -->
    <template #custom-slot-1="{ item }">
      <div class="work-item">
        <h3>🏢 {{ item.label }}</h3>
        <p>{{ item.company }}</p>
      </div>
    </template>

    <!-- Custom slot -->
    <template #custom-slot-2="{ item }">
      <div class="education-item">
        <h3>🎓 {{ item.label }}</h3>
        <p>{{ item.school }}</p>
      </div>
    </template>
  </Timeline>
</template>
```

## Scope Properties

Each slot provides access to:

- `item`: The current timeline item object with all its properties

This property can be used to customize the rendering of each timeline item based on its data.
