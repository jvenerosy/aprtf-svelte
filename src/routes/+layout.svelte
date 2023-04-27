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

<style>
	.slot {
		padding-top: 120px;
	}
</style>
