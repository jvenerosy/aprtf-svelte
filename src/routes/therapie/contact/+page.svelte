<script lang="ts">
    import Button from '$lib/components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    import { fade } from 'svelte/transition';
    import { enhance } from '$app/forms';
    $store.nav = 'therapie';
    
    let step = 1;

    /** @type {import('./$types').ActionData} */
    export let form: any = {};

    $: step = form?.step ?? 1;
    
    function prevStep(e: any) {
        e.preventDefault();
        step--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
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
                                <div class="current" style="width: calc({(step-1)*100/4}%)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="step {step === 1 ? '': 'is-hidden'}" transition:fade>
                        <div class="row">
                            <div class="box info">
                                <p class="title is-5">Information</p>
                                <p class="intro">Vous souhaitez initier une thérapie familiale ou de couple. La plupart des thérapies proposées sont payantes et non remboursées par la sécurité sociale, menées par des professionnels qualifiés. Par ailleurs, nous disposons d’une petite consultation gratuite, mais avec des disponibilités faibles.</p>
                            </div>
                        </div>
                        <div class="row">
                            <form method="POST" action="?/step1" use:enhance>
                                <div class="columns is-vcentered">
                                    <div class="column is-narrow">
                                        <a href="/therapie" class="link">Annuler</a>
                                    </div>
                                    <div class="column"></div>
                                    <div class="column is-narrow">
                                        <div class="buttons">
                                            <Button theme="is-family" text="Suivant →" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="step {step === 2 ? '': 'is-hidden'}" transition:fade>
                        <div class="box">
                            <form method="POST" action="?/step2" use:enhance>
                                <div class="fieldset">
                                    <div class="field">
                                        <legend class="label">Qui vous oriente ?</legend>
                                        <div class="control">
                                            <label for="orientation" class="radio is-2">
                                                <input
                                                type="radio"
                                                name="orientation"
                                                value="professionnel"
                                                class="radio"
                                                id="handicap"
                                                />
                                                Professionnel de santé
                                            </label>
                                        </div>
                                        <div class="control">
                                            <label for="orientationAutre" class="radio is-2">
                                                <input
                                                type="radio"
                                                name="orientation"
                                                value="autre"
                                                class="radio"
                                                id="orientationAutre"
                                                />
                                                Autres
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="fieldset">
                                    <div class="field">
                                        <label for="orienteby" class="label is-2">Civilité, nom et prénom de la personne qui vous oriente</label>
                                        <div class="control">
                                            <input
                                                type="text"
                                                class="input"
                                                name="orienteby"
                                                id="orienteby"
                                                value="{form?.orienteby ?? ''}"
                                            />
                                        </div>
                                        {#if form?.errors?.orienteby}
                                        <p class="has-text-danger mention">{form?.errors?.orienteby[0]}</p>
                                        {/if}
                                    </div>
                                </div>
                                <div class="fieldset">
                                    <div class="field">
                                        <legend class="label">Votre demande concerne ?</legend>
                                        <div class="control">
                                            <label for="demande" class="radio is-2">
                                                <input
                                                type="radio"
                                                name="demande"
                                                value="familiale"
                                                class="radio"
                                                id="demande"
                                                />
                                                Une thérapie familiale
                                            </label>
                                        </div>
                                        <div class="control">
                                            <label for="demandeCouple" class="radio is-2">
                                                <input
                                                type="radio"
                                                name="demande"
                                                value="couple"
                                                class="radio"
                                                id="demandeCouple"
                                                />
                                                Une thérapie de couple
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="fieldset">
                                    <legend class="label">Avez-vous été adressé à un thérapeute en particulier et si oui lequel?</legend>
                                    <div class="field">
                                        <label for="therapeute" class="label is-2">Indiquez le nom de celui-ci</label>
                                        <div class="control">
                                            <input
                                                type="text"
                                                class="input"
                                                name="therapeute"
                                                id="therapeute"
                                                value="{form?.therapeute ?? ''}"
                                            />
                                        </div>
                                        {#if form?.errors?.therapeute}
                                        <p class="has-text-danger mention">{form?.errors?.therapeute[0]}</p>
                                        {/if}
                                    </div>
                                </div>
                                <div class="columns is-vcentered">
                                    <div class="column is-narrow">
                                        <a href="/therapie" class="link">Annuler</a>
                                    </div>
                                    <div class="column"></div>
                                    <div class="column is-narrow">
                                        <div class="buttons">
                                            <Button theme="is-inverted-family" text="← Précédent" on:click={prevStep} />
                                            <Button theme="is-family" text="Suivant →" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="step {step === 3 ? '': 'is-hidden'}" transition:fade>
                        <div class="box">
                            <form method="POST" action="?/step3" use:enhance>
                                <legend for="" class="label">Merci de nous indiquer qui compose votre famille (foyer et hors foyer)</legend>
                                <label for="">Indiquez pour chacun le rôle, le nom, le prénom, l’âge et la profession ou scolarité</label>
                                <div class="fieldset">
                                    <div class="field person">
                                        <div class="columns">
                                            <div class="column">
                                                Personne 1
                                            </div>
                                            <div class="column">
                                                <a href="" class="link">Supprimer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <picture>
                    <img src="/images/therapie-familiale-illustration.svg" alt="" />     
                </picture>
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
        margin-bottom: calc($gap*2);
        p.intro {
            font-style: italic;
        }
    }
    .label {
        &.is-2 {
            font-weight: normal;
            
            span {
                color: $grey;
            }
        }
    }
    .person {
        padding-left: $gap;
        &:before {
            content: ● ;
            display: inline;
        }
    }
    
    form {
        text-align: left;
        
        input:not(.radio, .checkbox), select, .select {
            width: 100%;
        }
    }
    
    .fieldset {
        margin-bottom: calc($gap*2);
    }
    textarea {
        resize: none;
    }
    
    .ref {
        font-weight: bold;
        margin-top: calc($gap/2);
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
    }
    
    .link {
        color: $family;
        
        &:hover {
            text-decoration: underline;
        }
    }
</style>