import { computed } from 'vue'

export function useTimelineStyles(props) {
  const getBaseColor = computed(() => {
    if (props.colored) return props.colored
    return props.mode === 'light' ? 'black' : 'white'
  })

  const getHeadStyle = computed(() => ({
    backgroundColor: props.fill === 'outlined' ? 'transparent' : getBaseColor.value,
    borderColor: getBaseColor.value
  }))

  const getTailStyle = computed(() => ({
    borderColor: getBaseColor.value
  }))

  return {
    getHeadStyle,
    getTailStyle
  }
}
