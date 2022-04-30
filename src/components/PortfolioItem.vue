<template>
	<div class="wrapper">
		<h3 class="title">{{ name }}</h3>
		<p class="description">{{ description }}</p>
		<p class="links">
			<a
				v-for="link in links"
				:href="link.url"
				:key="link.url + Math.random()"
				>{{ link.label }}</a
			>
		</p>
	</div>
</template>
<script lang="ts">
export default {
	name: "PortfolioItem",
	props: ["links", "name", "description"]
}
</script>
<style lang="scss">
.wrapper {
	border-radius: 0px;
	min-height: 200px;
	transition: 0.2s;
	background-color: white;

	:not(:last-child) {
		margin-right: 0.4rem;
	}

	h3 {
		font-size: 2rem;
		margin: 0 0 0.5rem 0;
	}
	.links {
		a {
			font-size: 0.9em;
		}
		a:not(:last-child) {
			margin-right: 1rem;
		}
	}
}
</style>
