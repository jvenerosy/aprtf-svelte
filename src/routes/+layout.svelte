<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
    import { store } from '$lib/stores/Store';
	import '../styles/global.scss';
	
	export let data;
	const seo = data.donnees;
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
