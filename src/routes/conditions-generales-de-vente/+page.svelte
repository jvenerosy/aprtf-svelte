<script lang="ts">
    import { store } from '$lib/stores/Store';

    export let data;
    const donnees = data.donnees;
    
    $store.nav = 'contact';
    $store.slug = '/contact';
    
</script>

<section class="section">
    <div class="container is-max-desktop legals">
        <h1 class="title is-1">Conditions générales de vente</h1>
        <p class="subtitle">Version du 4 janvier 2021</p>
        <div class="description">
            {@html donnees.contenu}
        </div>
    </div>
</section>


<style lang="scss">
    @import '../../styles/variables.scss';
    
    .legals {

        .description {
            margin-top: $gap;
        }

        :global(.description p) {
            margin-bottom: 20px;
        }

        :global(.description ul) {
            list-style-type: disc;
            margin-left: $gap;
        }

        :global(.text a) {
            color: $tertiary;
        }
        :global(.text a:hover) {
            color: $tertiary;
            text-decoration: underline;
        }
        :global(h3) {
            font-weight: bold;
            font-size: $size-large;
        }
    }
</style>