<template>
  <ul :class="timelineClasses" class="re-timeline">
    <li
      v-for="(item, idx) in items"
      :key="getItemKey(item, idx)"
      class="re-timeline-item"
    >
      <div
        class="re-timeline-item-tail"
        :style="{ borderInlineStart: `2px solid ${timelineColor}` }"
      ></div>
      <div
        class="re-timeline-item-head"
        :style="{
          backgroundColor: headBackgroundColor,
          borderColor: timelineColor
        }"
      ></div>
      <div class="re-timeline-item-content">
        <slot
          name="item"
          :item="item"
          :index="idx"
          v-if="!item.slotName"
        >
          {{ item.label }}
        </slot>
        <!-- Dynamic named slot -->
        <slot
          v-else
          :name="item.slotName"
          :item="item"
          :index="idx"
        >
          {{ item.label }}
        </slot>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useTimelineProps } from './composables/useTimelineProps'
import { useTimelineStyles } from './composables/useTimelineStyles'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => items.every(item => typeof item === 'object' && 'label' in item)
  },
  mode: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'dark'].includes(value)
  },
  fill: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined'].includes(value)
  },
  colored: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  }
})

const timelineColor = computed(() => {
  return props.colored
    ? props.colored
    : props.mode === "light"
      ? "black"
      : "white"
})

const headBackgroundColor = computed(() => {
  return props.fill === "outlined"
    ? "transparent"
    : timelineColor.value
})

const emit = defineEmits(['item-click'])

const { timelineClasses } = useTimelineProps(props)
const { getHeadStyle, getTailStyle } = useTimelineStyles(props)


const getItemKey = (item, index) => item.id || `timeline-item-${index}`
</script>
