<script lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import { onMount } from 'svelte';
    import { store } from '../lib/stores/Store';
	import '../styles/global.scss';
	
	const endpoint = "http://155.133.131.137:8055/items/page_seo";
	let seo: {title: string, description: string, url: string}[] = [];
	
	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		seo = data.data;
	});
	export const prerender = true;
</script>

<svelte:head>
	{#each seo as item}
		{#if item.url === $store.slug}
			<title>{item.title}</title>
			<meta name="description" content="{item.description}" />
			<meta name="robots" content="index follow" />

			<link rel="canonical" href="https://aprtfformations.fr{item.url}" />
			<meta property="og:locale" content="fr_FR" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="{item.title}" />
			<meta property="og:description" content="{item.description}" />
			<meta property="og:url" content="https://aprtfformations.fr/" />
			<meta property="og:site_name" content="Aprtf" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:description" content="{item.description}" />
			<meta name="twitter:title" content="{item.title}" />
			<meta name="twitter:site" content="@Aprtf" />
			<meta name="twitter:creator" content="@Aprtf" />
		{/if}
	{/each}
</svelte:head>
<Header />
<div class="slot">
	<slot />
</div>
<Footer />

<style lang="scss">
	@import '../styles/variables.scss';
	.slot {
		padding-top: 50px;
		
		@media screen and (min-width: $b-desktop) {
			padding-top: 100px;
		}
	}
</style>
