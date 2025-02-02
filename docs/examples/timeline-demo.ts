import { useData } from 'vitepress'

export function useTimelineDemo() {
  const { isDark } = useData()

  const timelineItems = [
    { label: "Choose a recipe" },
    { label: "Make a list of the ingredients" },
    { label: "Take the ingredients" },
    { label: "Prepare the dish following the recipe's instructions" },
    { label: "Enjoy the dish!" }
  ]

  return {
    isDark,
    timelineItems
  }
}
