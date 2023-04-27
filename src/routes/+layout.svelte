<script>
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import '../styles/global.scss'
</script>

<Header />
<div class="slot">
	<slot></slot>
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
