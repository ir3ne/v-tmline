<script setup>
import { useTimelineDemo } from './timeline-demo';

const { isDark, timelineItems } = useTimelineDemo()

</script>

<template>
	<Timeline
		:items="timelineItems"
		colored="#50FFA7"
		:mode="isDark ? 'dark' : 'light'"
	/>
	<Timeline
		:items="timelineItems"
		colored="lightcoral"
		:mode="isDark ? 'dark' : 'light'"
	/>
</template>
