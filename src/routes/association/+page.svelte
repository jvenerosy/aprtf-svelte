<script>
    import { store } from '$lib/stores/Store';
    import Membre from '$lib/components/blocs/Membre.svelte';
    
    $store.nav = 'association';
    $store.slug = '/association';

    export let data;
    const membres = data.donnees;
</script>

<section class="section association">
    <div class="container is-max-widescreen">
        <div class="bloc">
            <h2 class="title is-2">Les missions de l’Aprtf</h2>
            <p class="subtitle">Fondée en 1981</p>
        </div>
        <div class="pepites columns">
            <div class="column">            
                <div class="box is-fullheight">
                    <picture>
                        <img src="images/pictos/megaphone.svg" srcset="images/pictos/megaphone.svg 38w" sizes="38px" alt="">
                    </picture>
                    <h3 class="parag">Développer la pratique des thérapies avec les familles</h3>
                    <p>Proposer des consultations de thérapie familiale et de couple, et promouvoir ces modalités de soins dans le service public de santé.</p>
                </div>
            </div>
            <div class="column">
                <div class="box is-fullheight">
                    <picture>
                        <img src="images/pictos/people.svg" srcset="images/pictos/people.svg 38w" sizes="38px" alt="">
                    </picture>
                    <h3 class="parag">Former les professionnels à la pratique systémique</h3>
                    <p>Proposer un parcours structuré de formation à la pratique thérapeutique familiale systémique pour les professionnels médicaux, psychologiques, paramédicaux et sociaux.</p>
                </div>
            </div>
            <div class="column">
                <div class="box is-fullheight">
                    <picture>
                        <img src="images/pictos/hospital.svg" srcset="images/pictos/hospital.svg 38w" sizes="38px" alt="">
                    </picture>
                    <h3 class="parag">Approfondir la recherche clinique</h3>
                    <p>Sur les processus thérapeutiques, les vécus expérientiels des familles et contribuer à la réflexion sur la pertinence des modèles systémiques.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section">
    <div class="container is-max-small">
        <div class="bloc">
            <h2 class="title is-2">La philosophie de l’Aprtf</h2>
            <p class="subtitle">Developper la pratiques des équipes</p>
            <p class="text">Les formateurs de l’Aprtf dont tous des professionnels exerçant comme thérapeutes dans le service public de psychiatrie (générale ou infanto-juvénile).</p>
            <p class="text">Ils ont participé à la création et au développement de nombreuses équipes de consultation publiques en thérapie familiale sur tout le territoire national.</p>
            <p class="text">Ils travaillent au sein d’unités de thérapie familiale, qui proposent des consultations gratuites, rattachées aux hôpitaux publics, ouvertes aux familles souffrant de dysfonctionnements relationnels sévères, touchées par des troubles psychiques ou des maladies mentales, ou traversant de graves crises existentielles.</p>
            <p class="text">Les thérapeutes et formateurs de l’Aprtf sont tous membres titulaires de la SFTF (Société française de thérapie familiale) et de l’EFTA (European family therapy association).</p>
        </div>
    </div>
</section>
<section class="section pedago">
    <div class="container is-max-widescreen">
        <div class="bloc">
            <h2 class="title is-2">L’équipe pédagogique</h2>
            <p class="text is-3">Membres fondateurs titulaires</p>
            <div class="columns is-multiline is-centered">
                {#each membres as item}
                {#if item.type === 'fondateur'}
                <div class="column is-6">
                    <Membre {...item} />
                </div>
                {/if}
                {/each}
            </div>
            <p class="text is-3">Membres titulaires</p>
            <div class="columns is-multiline is-centered">
                {#each membres as item}
                {#if item.type === 'associe'}
                <div class="column is-6">
                    <Membre {...item} />
                </div>
                {/if}
                {/each}
            </div>
            <p class="text is-3">Formateurs associés</p>
            <div class="columns is-multiline is-centered">
                {#each membres as item}
                {#if item.type === 'formateur'}
                <div class="column is-6">
                    <Membre {...item} />
                </div>
                {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../styles/variables.scss';
    
    .container {
        &.is-max-small {
            @media screen and (min-width: $b-desktop) {
                max-width: 60%;
            }
        }
    }
    
    .title {
        font-family: $family-title;
        &.is-2 {
            font-size: $size-title-2;
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-2-desktop;
            }
        }
    }
    
    .parag {
        font-size: $size-large;
        font-weight: 600;
        margin: 1em 0;
    }
    
    .text {
        text-align: left;
        margin-bottom: $gap;
        font-size: $size-regular;
        
        &.is-3 {
            font-weight: bold;
            text-align: center;
            font-size: $size-large;
        }
    }
    
    .association {
        background: $tertiary-light;
        color: $primary;
        padding-top: 60px;
        padding-bottom: 60px;
        
        img {
            filter: brightness(0) saturate(100%) invert(23%) sepia(91%) saturate(4339%) hue-rotate(243deg) brightness(100%) contrast(98%);
        }
        
        .title {
            color: $primary;
        }
        .subtitle {
            color: $primary;
        }
        
        .box {
            background: #F9F9FB80;
            box-shadow: none;
            color: $primary;
        }
    }
    
    .bloc {
        text-align: center;
        margin-bottom: calc($gap*2);
    }
    
    .is-fullheight {
        height: 100%;
    }
    
    .pedago {
        background: $grey-lighter;
    }
    
</style>