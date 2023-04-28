<script>
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import { fade } from "svelte/transition";
	import '../styles/global.scss';
	
	export let data
</script>

<Header />
{#key data.pathname}
	<div class="slot"
		in:fade={{ duration: 50, delay: 100 }}
		out:fade={{ duration: 50 }}
	>
		<slot />
	</div>
{/key}
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
