<script setup>
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
		mode="dark"
		colored="#50FFA7"
	/>
	<Timeline
		:items="timelineItems"
		mode="dark"
		colored="lightcoral"
	/>
</template>
