<script lang="ts">
    import { onMount } from 'svelte';
    import MarkdownIt from 'markdown-it';
    import Button from '../../../components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    
    export let data;
    const endpoint = `http://0.0.0.0:8055/items/colloques/${data.slug}`;
    let colloque: {
        titre: string,
        description: string,
        date_debut: string,
        date_fin: string,
        lieu: string,
        statut: string,
        illustration_colloque: string,
        chapo: string,
        tarifs: string,
        administratif: string,
        animateurs: string,
        public: string,
        modalite: string,
        slug: string
    } = {
        titre: '',
        description: '',
        date_debut: '',
        date_fin: '',
        statut: '',
        lieu: '',
        tarifs: '',
        chapo: '',
        illustration_colloque: '',
        administratif: '',
        animateurs: '',
        public: '',
        modalite: '',
        slug: ''
    };

    let statut: string;
    
    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        colloque = data.data;
        
        let md = new MarkdownIt();
        
        colloque.description = md.render(colloque.description);
        colloque.tarifs = md.render(colloque.tarifs);
        colloque.administratif = md.render(colloque.administratif);
        colloque.animateurs = md.render(colloque.animateurs);
        colloque.public = md.render(colloque.public);
        colloque.modalite = md.render(colloque.modalite);
        
        function formatDate(date: string) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('fr-FR', options);
        }
        
        colloque.date_debut = formatDate(colloque.date_debut);
        colloque.date_fin = formatDate(colloque.date_fin);
        statut = colloque.statut === 'past' ? 'Terminé' : colloque.statut === 'present' ? 'Inscriptions ouvertes' : 'A venir';
    });
    
    
    $store.nav = 'colloque';
</script>

<svelte:head>
<title>{colloque.titre}</title>
<meta name="robots" content="index follow" />
</svelte:head>

<section class="section">
    <div class="container is-max-widescreen">
        <div class="columns is-variable is-8">
            <div class="column is-7">
                <div class="rows">
                    <div class="row">
                        <h1 class="title is-1">{colloque.titre}</h1>
                        <span class="tag is-{colloque.statut}">{statut}</span>
                    </div>
                    <div class="row">
                        <p class="chapo">{colloque.chapo}</p>
                        <div class="description">
                            {@html colloque.description}
                        </div>
                    </div>
                    <div class="row">
                        {#if colloque.statut === 'present'}
                        <a href="/journees-cliniques/{data.slug}/inscription">
                            <Button text="Inscription" />
                        </a>
                        {:else if colloque.statut === 'past'}
                        <Button text="Evènement déjà passé" disabled />
                        {:else if colloque.statut === 'future'}
                        <Button text="Inscriptions ouvertes bientôt" disabled />
                        {/if}
                    </div>
                </div>
            </div>
            <div class="column infos">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img src="{`http://0.0.0.0:8055/assets/${colloque.illustration_colloque}`}" alt="">
                        </picture>
                    </div>
                    <div class="row">
                        <div class="box">
                            <p class="ref">Inscription ouvertes</p>
                            <p>du {colloque.date_debut} au {colloque.date_fin}</p>
                            <p class="ref">Tarifs</p>
                            {@html colloque.tarifs}
                            <p class="ref">Lieu du rendez-vous</p>
                            <p>{colloque.lieu}</p>
                            <div class="columns placement is-centered">
                                <div class="column has-text-centered">
                                    <a href="/">
                                        <Button theme="is-inverted" text="Télécharger le programme" />
                                    </a>
                                </div>
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
                            {@html colloque.administratif}
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
                            {@html colloque.animateurs}
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
                            {@html colloque.public}
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
                            {@html colloque.modalite}
                        </div>
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
    .infos {
        picture {
            img {
                display: block;
                border-radius: $gap;
                margin-bottom: calc($gap * 2);
            }
        }
        .ref {
            font-weight: bold;
            &:not(:first-child) {
                margin-top: calc($gap * 2);
            }
        }
        .placement {
            margin-top: calc($gap / 2);
            margin-bottom: -50px;
        }
    }
    
    .title {
        font-family: $family-title;
        
        &.is-1 {
            font-size: $size-title-1;
            text-align: center;
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-1-desktop;
                text-align: left;
            }
        }
        &.is-2 {
            font-size: $size-title-2;
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-2-desktop;
            }
        }
        &.is-3 {
            font-size: $size-title-3;
        }
    }

    :global(.text a) {
        color: $tertiary;
    }
    :global(.text a:hover) {
        color: $tertiary;
        text-decoration: underline;
    }

    .subtitle {
        font-family: $family-regular;
        font-weight: 600;
    }
    
    .utile {
        background: $tertiary-light;
    }
    
    .tag {
        font-size: $size-regular;
        font-family: $family-regular;
        font-weight: bold;
        margin: 0 0 $gap 0;
        
        &.is-past {
            background: $tag-past;
        }
        &.is-present {
            background: $tag-present;
        }
        &.is-future {
            background: $tag-future;
        }
    }
</style>