<script>
    import { store } from '$lib/stores/Store';
	import FormationNav from "$lib/components/FormationNav.svelte";
    import Button from '$lib/components/forms/Button.svelte';

    export let data;
    
    $store.nav = 'formations';
    $store.sousnav = 'cycle2';
    $store.slug = '/formations/cycle-2';
</script>

<FormationNav />
<section class="section">
    <div class="container is-max-widescreen">
        <div class="columns is-variable is-8">
            <div class="column is-7">
                <div class="rows">
                    <div class="row">
                        <h1 class="title is-2">Cycle 2 Thérapie familiale</h1>
                        <span class="subtitle">Description</span>
                    </div>
                    <div class="row">
                        <div class="description">
                            <p>Une pratique effective d’entretiens ou de thérapies familiales est exigée à ce niveau de la formation.</p>
                            <p>Ce second cycle de formation se décline en deux modules de formation à l’Aprtf. Un second cycle complet implique, au minimum, un an de Supervision clinique et un an de Résonance, soit 2 ans à raison de 70 heures minimum par an.</p>
                        </div>
                    </div>
                    <div class="row">
                        <a href="/journees-cliniques/{data.slug}/inscription">
                            <Button text="Inscription" />
                        </a>
                        <a href="/formations/tarifs">
                            <Button theme="is-inverted" text="Voir le tarif" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="column infos">
                <div class="rows">
                    <div class="row">
                        <div class="box">
                            <div class="placement-tag">
                                <p class="tag violet">Goupe de 40 personnes max</p>
                            </div>
                            <div class="placement-txt">
                                <p class="ref">Durée</p>
                                <p>du 05/09/22 au 15/01/23</p>
                                <p class="ref">Inscription</p>
                                <p>18 journées soit 126h</p>
                                <p class="ref">Session</p>
                                <p>18 journées<br>+ stage clinique (50h) soit 176h</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="columns placement is-centered">
                            <div class="column has-text-centered">
                                <a href="/">
                                    <Button theme="is-inverted" text="Télécharger le programme et le planning" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section utile">
    <div class="container is-max-widescreen">
        <h2 class="title is-2">Informations utiles</h2>
        <div class="columns is-variable is-6">
            <div class="column">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img src="/images/pictos/email.svg" alt="logo">
                        </picture>
                    </div>
                    <div class="row">
                        <p class="subtitle">Information et inscription administrative</p>
                        <div class="text">
                            <p>Pour toute information d’ordre administratif ou organisationnel, nous contacter à l’adresse <a href="mailto:contact@aprtfformations.fr">contact@aprtfformations.fr</a></p>
                        </div>
                    </div>
                </div>
            </div>   
            <div class="column">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img src="/images/pictos/contact.svg" alt="logo">
                        </picture>
                    </div>
                    <div class="row">
                        <p class="subtitle">Nom et coordonnées du/des animateurs</p>
                        <div class="text">
                            <p>Jean Desmarquet est le référent pédagogique pour cette formation, lui écrire à l’adresse : <a href="mailto:jdesmarquet@aprtfformations.fr">jdesmarquet@aprtfformations.fr</a></p>
                        </div>
                    </div>
                </div>
            </div>   
            <div class="column">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img src="/images/pictos/public.svg" alt="logo">
                        </picture>
                    </div>
                    <div class="row">
                        <p class="subtitle">Public concerné</p>
                        <div class="text">
                            <p>Professionnels de la santé et du champ social travaillant avec des familles et souhaitant développer leurs compétences en thérapie familiale et/ou en interventions systémiques</p>
                        </div>
                    </div>
                </div>
            </div>   
            <div class="column">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img src="/images/pictos/modalite.svg" alt="logo">
                        </picture>
                    </div>
                    <div class="row">
                        <p class="subtitle">Modalité d'inscription</p>
                        <div class="text">
                            <p>Il est nécessaire de renseigner la fiche d’inscription et de positionnement, et de joindre un CV et une lettre de motivation.</p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</section>
<section class="section list">
    <div class="container is-max-widescreen">
        <p class="title is-2">Les autres formations proposées</p>
    </div>
</section>

<style lang="scss">
    @import '../../../../styles/variables.scss';

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

    .is-fullheight {
        height: 100%;
    }

    .infos {
        .placement-txt {
            .ref {
                font-weight: bold;
                &:not(:first-child) {
                    margin-top: calc($gap * 2);
                }
            }
        }
        .placement {
            margin-top: calc($gap / 2);
            margin-top: -30px;
        }
        .placement-tag {
            display: flex;
            justify-content: center;
            margin-top: -40px;
        }
        .box {
            padding-bottom: calc($gap * 2);
        }
    }

    .stage {
        align-items: end;
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

    .subtitle {
        font-family: $family-regular;
        font-weight: 600;
    }
    .tags {
        text-align: center;
        display: flex;
        justify-content: center;
        @media screen and (min-width: $b-desktop) {
                justify-content: flex-start;
            }
    }
    
    .tag {
        border-radius: 19px;
        padding: calc($gap/2) $gap;
        display: inline-block;
        text-align: center;
        line-height: 24px;
        height: auto;
        font-weight: 600;
        font-size: $size-regular;

        &.rose {
            background: $tag-past-light;
        }
        &.violet {
            background: $tertiary-light;
        }
    }
    
    .utile {
        background: $tertiary-light;
    }

    .info {
        border-left: 9px solid $tertiary;
        margin-bottom: calc($gap*2);
        p.intro {
            font-style: italic;
            &:not(:last-child) {
                margin-bottom: $gap;
            }
        }
    }

    .groupe {
        background: $grey-lighter;
        .title {
            text-align: center;
        }

        .annee {
            font-size: $size-small;
            color: $grey;
        }
        .training {
            font-size: $size-small;
            font-weight: 600;
        }

        ul {
            margin: $gap 0 $gap $gap;
            list-style-type: "→";
            padding-bottom: $gap;
            border-bottom: 2px solid $grey-light;

            li {
                padding-left: calc($gap/2);
            }
        }

        .details {
            font-size: $size-regular;
            font-weight: 600;
        }
    }
</style>