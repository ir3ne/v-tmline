<script setup>
import { useTimelineDemo } from './timeline-demo';

const { isDark, timelineItems } = useTimelineDemo()
</script>

<template>
	<Timeline
		:items="timelineItems"
		:mode="isDark ? 'dark' : 'light'"
	/>
</template>
