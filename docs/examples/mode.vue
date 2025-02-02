<script setup>
import { useData } from 'vitepress';
const { isDark } = useData()

const timelineItems = [
	{
		label: "Choose a recipe",
	},
	{
		label: "Make a list of the ingredients",
	},
	{
		label: "Take the ingredients",
	},
	{
		label: "Prepare the dish following the recipe’s instructions",
	},
	{
		label: "Enjoy the dish!",
	},
]
</script>

<template>
	<Timeline
		:items="timelineItems"
		:mode="isDark ? 'dark' : 'light'"
	/>
</template>
