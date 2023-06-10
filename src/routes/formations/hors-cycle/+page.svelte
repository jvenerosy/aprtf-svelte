<script>
	import { onMount } from 'svelte';
    import { store } from '$lib/stores/Store';
	import FormationNav from "$lib/components/FormationNav.svelte";
    import Button from '$lib/components/forms/Button.svelte';
    
    $store.nav = 'formations';
    $store.sousnav = 'hcycle';
    $store.slug = '/formations/hors-cycle';
</script>

<FormationNav />
<section class="section">
    <div class="container is-max-widescreen">
        <div class="columns is-variable is-8">
            <div class="column is-7">
                <div class="rows">
                    <div class="row">
                        <h1 class="title is-2">Hors Cycles</h1>
                        <span class="subtitle">Description</span>
                    </div>
                    <div class="row">
                        <div class="description">
                            <p>En dehors de la formation longue à la pratique et aux thérapies familiales systémiques, l’APRTF propose des formations hors cycle selon les besoins des étudiants. La sensibilisation vise à donner des bases sur la thérapie familiale systémique. La formation en thérapie multifamiliale s’attache à former des équipes et/ou des professionnels en binôme à cette pratique spécifique à destination de plusieurs familles. Enfin, des demandes de la part d’institution peuvent aboutir à des formules sur site adaptées aux besoins.</p>
                        </div>
                    </div>
                    <div class="row">
                        <span class="subtitle">Formation Hors Cycles</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../../styles/variables.scss';

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
        .ref {
            font-weight: bold;
            &:not(:first-child) {
                margin-top: calc($gap * 2);
            }
        }
        .placement {
            margin-top: calc($gap / 2);
            margin-top: -30px;
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