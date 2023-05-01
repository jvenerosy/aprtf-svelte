<script lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import { onMount } from 'svelte';
    import { store } from '../lib/stores/Store';
	import '../styles/global.scss';
	
	const endpoint = "http://0.0.0.0:8055/items/page_seo";
	let seo: string[] = [];
	
	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		seo = data.data;
	});
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
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://aprtfformations.fr/","url":"https://aprtfformations.fr/","name":"APRTF, formation de professionnels de la thérapie familiale.","isPartOf":{"@id":"https://aprtfformations.fr/#website"},"datePublished":"2015-04-20T13:30:25+00:00","dateModified":"2022-09-28T15:21:44+00:00","description":"formation continue en thérapie familiale systémique, centre de formation agréé, organisme de DPC.","breadcrumb":{"@id":"https://aprtfformations.fr/#breadcrumb"},"inLanguage":"fr-FR","potentialAction":[{"@type":"ReadAction","target":["https://aprtfformations.fr/"]}]},{"@type":"BreadcrumbList","@id":"https://aprtfformations.fr/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Accueil"}]},{"@type":"WebSite","@id":"https://aprtfformations.fr/#website","url":"https://aprtfformations.fr/","name":"Aprtf","description":"Formations","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://aprtfformations.fr/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"fr-FR"}]}</script>
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
