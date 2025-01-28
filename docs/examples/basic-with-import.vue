<script setup>
import Timeline from 'v-tmline'

const timelineItems = [
	{
		id: 1,
		label: "Choose a recipe",
	},
	{
		id: 2,
		label: "Make a list of the ingredients",
	},
	{
		id: 3,
		label: "Take the ingredients",
	},
	{
		id: 4,
		label: "Prepare the dish following the recipe’s instructions",
	},
	{
		id: 5,
		label: "Enjoy the dish!",
	},
]
</script>

<template>
	<Timeline :items="timelineItems" />
</template>
