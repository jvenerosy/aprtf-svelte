<script lang="ts">
    import Button from '$lib/components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    $store.nav = 'therapie';
    
    let step = 1;

    /** @type {import('./$types').ActionData} */
    export let form: any = {};
    
</script>
<section class="section">
    <div class="container is-max-widescreen">
        <div class="columns is-variable is-8">
            <div class="column is-7">
                <div class="rows">
                    <div class="row">
                        <h1 class="title is-1">Thérapie familiale ou de couple</h1>
                    </div>
                    <div class="row">
                        <div class="step">
                            <div class="total">
                                <div class="current" style="width: calc({step -1}*20%)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box info">
                            <p class="title is-5">Information</p>
                            <p class="intro">Vous souhaitez initier une thérapie familiale ou de couple. La plupart des thérapies proposées sont payantes et non remboursées par la sécurité sociale, menées par des professionnels qualifiés. Par ailleurs, nous disposons d’une petite consultation gratuite, mais avec des disponibilités faibles.</p>
                        </div>
                    </div>
                    <div class="row">
                        <form method="POST" action="?/step1"></form>
                        <div class="buttons">
                            <Button theme="is-inverted-family" text="Annuler" />
                            <Button theme="is-family" text="Suivant" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style lang="scss">
    @import '../../../styles/variables.scss';
    
    .step {
        margin: calc($gap*2) 0;
        .total {
            width: 100%;
            background: $family-light;
            height: 5px;
            position: relative;
        }
        .current {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: $family;
            transition: all 1s ease;
        }
    }
    
    .info {
        border-left: 9px solid $family;
        
        p.intro {
            font-style: italic;
        }
    }
    
    .rows{
        display: flex;
        flex-direction: column;
        .row {
            margin-bottom: $gap;
        }
    }
</style>