<script setup>
import Timeline from 'v-tmline'

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
	<Timeline :items="timelineItems" />
</template>
