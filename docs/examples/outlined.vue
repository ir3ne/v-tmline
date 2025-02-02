<script setup>
import { useTimelineDemo } from './timeline-demo';

const { isDark, timelineItems } = useTimelineDemo()
</script>

<template>
	<Timeline
		:items="timelineItems"
		fill="outlined"
		:mode="isDark ? 'dark' : 'light'"
	/>
	<Timeline
		:items="timelineItems"
		colored="lightcoral"
		fill="outlined"
		:mode="isDark ? 'dark' : 'light'"
	/>
</template>
