<template>
	<NuxtLayout>
		<NuxtPage :page-key="route => route.fullPath" />
	</NuxtLayout>
</template>

<script setup>

</script>

<style>
:root {
	--brand: #1688c5;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	background: #1e1e1e;
	color: #fff;
	font-family: system-ui, "SF Pro", "SF Pro Text", "SF Pro Display",
		"SF Compact", "SF Compact Text", "SF Compact Display", -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
		"Open Sans", "Helvetica Neue", sans-serif;
	overflow: hidden scroll;
}

/* span > * {
	display: inline-block;
} */

a.nostyle {
	font-weight: inherit !important;
	color: inherit !important;
	text-decoration: none !important;
}

select {
	color: #fff;
	outline: none;
	border: none;
	appearance: none;
	width: fit-content;
	text-align: center;
}

.picker.dark {
	background: #1e1e1e;
}

.picker {
	background: #101010;
	display: flex;
	flex-direction: row;
	padding: 0.6em 1em;
	border-radius: 100px;
	gap: 0.6em;
}

.picker a,
.picker button,
.picker select {
	padding: 0.6em 1.2em;
	border-radius: 100px;
	text-decoration: none !important;
	font-size: 1.1em;
	color: #fff;
	background: transparent;
	outline: none;
	border: none;
	cursor: pointer;
}

.picker a.selected,
.picker button.selected,
.picker select {
	background: #505050ab;
}

.picker a:not(.selected):hover,
.picker button:not(.selected):hover {
	background: #50505050;
}

.no-pc {
	display: none;
}

@media screen and (max-width: 1000px) {
	.picker {
		font-size: 0.8em;
	}

	.picker.small {
		flex-direction: column;
		align-items: center;
		border-radius: 25px;
		padding: 0.6em 1em;
	}

	.picker.small a,
	.picker.small button {
		width: fit-content;
	}
	
	.no-pc {
		display: inherit;
	}

	.no-mobile {
		display: none;
	}
}
</style>
