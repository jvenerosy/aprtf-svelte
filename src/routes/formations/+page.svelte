<script>
    import { store } from '$lib/stores/Store';
	import FormationNav from "$lib/components/FormationNav.svelte";
	import FormationSlider from '$lib/components/blocs/FormationSlider.svelte';

    export let data;
    const modules = data.donnees;
    
    $store.nav = 'formations';
    $store.sousnav = 'description';
    $store.slug = '/formations';
</script>

<FormationNav />
<section class="section description">
    <div class="container is-max-widescreen">
        <div class="columns">
            <div class="column is-7">
                <p class="title is-2">Descriptions du parcours des deux cycles</p>
                <p class="chapo">La Formation à l’Aprtf vise à développer l’approche familiale systémique au sein de la pratique psychiatrique et de ses champs connexes : Médecine générale, Psychologie clinique, Travail socio-éducatif ou socio-judiciaire.</p>
                <p>Elle apporte des ressources et des compétences pour la pratique de la thérapie familiale, mais aussi des entretiens familiaux systémiques.</p>
                <p>Elle nécessite une motivation et une implication personnelle importante de l’étudiant ainsi qu’un engagement dans la pratique des entretiens familiaux dès le premier cycle de formation, dont la dénomination (Training) souligne la nature d’entraînement à la pratique.</p>
                <p>Elle se déroule selon deux cycles sur quatre ans au minimum, selon les standards de l’European Family Therapy Association (E.F.T.A.).</p>
            </div>
            <div class="column">
                <picture>
                    <img src="images/cycles.png" alt="" />      
                </picture>
            </div>
        </div>
    </div>
</section>
<section class="section bilan">
    <div class="container is-max-widescreen">
        <p class="title is-2">Bilan des formations 2023</p>
        <p class="subtitle">126 des participants sur 208 ont répondu (60,6%) à un questionnaire de satisfaction</p>
        <div class="columns">
            <div class="column">
                <p class="numbers">97,6%</p>
                <p class="subnumbers">Taux de satisfaction</p>
            </div>
            <div class="column">
                <p class="numbers">92,2%</p>
                <p class="subnumbers">Taux mise en application au travail</p>
            </div>
            <div class="column">
                <p class="numbers">97,6%</p>
                <p class="subnumbers">Taux de recommandation</p>
            </div>
            <div class="column">
                <p class="numbers">2,9%</p>
                <p class="subnumbers">Taux d’abandon</p>
            </div>
        </div>
    </div>
</section>
<section class="section list">
    <div class="container is-max-widescreen">
        <div class="rows">
            <div class="row">
                <p class="title is-2">Les formations proposées</p>
                <p class="subtitle">Cycle 1 et cycle 2</p>
                <div class="container is-max-widescreen colloques">
                    <div class="columns is-centered is-multiline">
                        {#each modules as item}
                        {#if item.type === 'cycle-1' || item.type === 'cycle-2'}
                            <FormationSlider {...item} />
                        {/if}
                        {/each}
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="subtitle">Hors cycle</p>
                <div class="container is-max-widescreen colloques">
                    <div class="columns is-centered is-multiline">
                        {#each modules as item}
                        {#if item.type === 'hors-cycle'}
                            <FormationSlider {...item} />
                        {/if}
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../styles/variables.scss';

    .title {
        font-family: $family-title;

        &.is-2 {
            font-size: $size-title-2;
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-2-desktop;
            }
        }
    }
    
    .chapo {
        font-size: $size-large;
        font-weight: 600;
    }

    .description {
        p {
            margin: $gap auto;
        }

        img {
            width: 100%;
        }
    }

    .bilan {
        text-align: center;
        background: $grey-lighter;

        .columns {
            margin-top: calc($gap*2);
        }

        .numbers {
            font-size: 52px;
            font-weight: bold;
            color: $tertiary;
        }

        .subnumbers {
            font-weight: 600;
        }
    }

    .list {
        .row {
            margin-bottom: calc($gap*2);
        }
    }
</style>