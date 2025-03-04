<script setup>
import { useTimelineDemo } from './timeline-demo';

const { isDark } = useTimelineDemo()

 const timelineSlotItems = [
	{
		label: 'Started new job',
		company: 'Pixel Pioneers',
		slotName: 'work',
		id: 1
	},
	{
		label: 'Graduated University',
		school: 'State University',
		slotName: 'education',
		id: 2
	},
	{
		label: 'Regular event',
		id: 3
		// No slotName - will use default 'item' slot
	}
]
</script>

<template>
	<Timeline
		:items="timelineSlotItems"
		:mode="isDark ? 'dark' : 'light'"
	>
    	<!-- Default item slot -->
		<template #item="{ item }">
		<div>Default: {{ item.label }}</div>
		</template>

		<!-- Custom slot for work items -->
		<template #work="{ item }">
		<div class="work-item">
			<h3>💫 {{ item.label }}</h3>
			<p>{{ item.company }}</p>
		</div>
		</template>

		<!-- Custom slot for education items -->
		<template #education="{ item }">
		<div class="education-item">
			<h3>📚 {{ item.label }}</h3>
			<p>{{ item.school }}</p>
		</div>
		</template>
  	</Timeline>
</template>
