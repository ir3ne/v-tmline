import { computed } from 'vue'

export function useTimelineProps(props) {
  const timelineClasses = computed(() => {
    return {
      [props.mode]: true,
      [props.fill]: true,
      [props.align]: true,
      [`colored-${props.colored}`]: !!props.colored
    }
  })

  return {
    timelineClasses
  }
}
