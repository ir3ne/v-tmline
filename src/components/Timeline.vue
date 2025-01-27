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

const headStyle = computed(() => getHeadStyle.value)
const tailStyle = computed(() => getTailStyle.value)

const getItemKey = (item, index) => item.id || `timeline-item-${index}`
</script>

<style>
.re-timeline {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
}

.re-timeline-item {
  position: relative;
  margin: 0;
  padding-bottom: 20px;
  font-size: inherit;
  line-height: in;
  list-style: none;
}

.re-timeline-item-tail {
    position: absolute;
    inset-block-start: 8px;
    inset-inline-start: 3px;
    height: calc(100% - 8px);
}

.re-timeline-item-head {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-radius: 50%;
}

.re-timeline-item-content {
  position: relative;
  inset-block-start: -7px;
  margin-inline-start: 26px;
  margin-inline-end: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  word-break: break-word;
  overflow: hidden;
}

.re-timeline-item:last-child .re-timeline-item-tail {
  display: none;
}

.re-timeline.outlined .re-timeline-item-head {
  background-color: transparent;
}

.re-timeline.right {
  text-align: right;
}

.re-timeline.right .re-timeline-item-tail {
  inset-inline-start: unset;
  inset-inline-end: 3px;
}

.re-timeline.right .re-timeline-item-head {
  left: unset;
  right: 0;
}

.re-timeline.right .re-timeline-item-content {
  margin-inline-start: 0;
  margin-inline-end: 26px;
}
</style>
