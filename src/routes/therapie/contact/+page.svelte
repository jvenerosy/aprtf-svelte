<script lang="ts">
    import Button from '$lib/components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    import { fade } from 'svelte/transition';
    import { enhance } from '$app/forms';
    $store.nav = 'therapie';
    
    let step = 1;
    
    /** @type {import('./$types').ActionData} */
    export let form: any = {};
    
    $: step = form?.step ?? 2;
    
    function prevStep(e: any) {
        e.preventDefault();
        step--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    let orientation: string = form?.answer?.orientation ?? form?.orientation ?? '';
    let demande: string = form?.answer?.demande ?? form?.demande ?? '';

    let addPerson = (e) => {
        e.preventDefault();
        personFamily.push({ name: '', age: '', sexe: '' });
    }
    
</script>
<section class="section">
    <div class="container is-max-widescreen">
        <div class="columns is-vcentered is-variable is-8">
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
                                {#key form }
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
                                                id="orientation"
                                                bind:group={orientation}
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
                                                bind:group={orientation}
                                                />
                                                Autres
                                            </label>
                                        </div>
                                        {#if form?.errors?.orientation}
                                        <p class="has-text-danger mention">{form?.errors?.orientation[0]}</p>
                                        {/if}
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
                                            value="{form?.answer?.orienteby ?? form?.orienteby ?? ''}"
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
                                                bind:group={demande}
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
                                                bind:group={demande}
                                                />
                                                Une thérapie de couple
                                            </label>
                                        </div>
                                        {#if form?.errors?.demande}
                                        <p class="has-text-danger mention">{form?.errors?.demande[0]}</p>
                                        {/if}
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
                                            value="{form?.answer?.therapeute ?? form?.therapeute ?? ''}"
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
                                {/key}
                            </form>
                        </div>
                    </div>
                    <div class="step {step === 3 ? '': 'is-hidden'}" transition:fade>
                        <div class="box">
                            <form method="POST" action="?/step3" use:enhance>
                                <div class="fieldset">
                                    <div class="field">
                                        <legend class="label">Merci de nous indiquer qui compose votre famille (foyer et hors foyer)</legend>
                                        <label for="">Indiquez pour chacun le rôle, le nom, le prénom, l’âge et la profession ou scolarité</label>
                                    </div>
                                    <div class="addPerson">
                                        <div class="columns mb-0">
                                            {#each person as personFamily}
                                            <div class="column is-5">
                                                Père
                                            </div>
                                            <div class="column">
                                                Venerosy Julien, webmastersqdeffezgrzffegrefe
                                            </div>
                                            <div class="column is-narrow">
                                                <a href="/#" class="link">Supprimer</a>
                                            </div>
                                            {/each}
                                        </div>
                                        <div class="columns">
                                            <div class="column is-5">
                                                <input type="text" class="input" placeholder="Rôle de la personne">
                                            </div>
                                            <div class="column">
                                                <input type="text" class="input" placeholder="Nom, prénom, âge et profession ou scolarité">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control">
                                    <a href="/#" class="link add" on:click={addPerson}>
                                        <span class="icon-text">
                                            <span class="icon">
                                                <img src="/images/pictos/add.svg" alt="" />
                                            </span>
                                            <span>Ajouter une personne</span>
                                        </span>
                                    </a>
                                </div>
                                <hr>
                                <div class="fieldset">
                                    <div class="field">
                                        <legend class="label">Y-a-t-il des personnes ressources en dehors de votre famille ?</legend>
                                        <label for="">Indiquez pour chacun le rôle, le nom, le prénom, l’âge et la profession ou scolarité</label>
                                    </div>
                                    <div class="addPerson">
                                        <div class="columns mb-0">
                                            <div class="column is-narrow">
                                                Personne 1
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <a href="/#" class="link">Supprimer</a>
                                            </div>
                                        </div>
                                        <div class="columns">
                                            <div class="column is-5">
                                                <input type="text" class="input" placeholder="Rôle de la personne">
                                            </div>
                                            <div class="column">
                                                <input type="text" class="input" placeholder="Nom, prénom, âge et profession ou scolarité">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="control">
                                    <a href="/#" class="link add">
                                        <span class="icon-text">
                                            <span class="icon">
                                                <img src="/images/pictos/add.svg" alt="" />
                                            </span>
                                            <span>Ajouter une personne</span>
                                        </span>
                                    </a>
                                </div>
                                <hr>
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
                    <div class="step {step === 4 ? '': 'is-hidden'}" transition:fade>
                        <div class="box">
                            <form method="POST" action="?/step4" use:enhance>
                                <div class="fieldset">
                                    <div class="field">
                                        <label class="label" for="problem">Merci de nous donner une description succincte de votre problème</label>
                                        <textarea class="textarea" name="problem" id="problem" placeholder="Exprimez-vous ici"></textarea>
                                    </div>
                                </div>
                                <div class="fieldset">
                                    <legend class="label">Comment vous appelez vous ?</legend>
                                    <div class="field">
                                        <div class="columns">
                                            <div class="column">
                                                <label for="prenom">Prénom</label>
                                                <input class="input" type="text" id="prenom" name="prenom">
                                            </div>
                                            <div class="column">
                                                <label for="nom">Nom</label>
                                                <input class="input" type="text" id="nom" name="nom">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label for="place">Votre place dans la famille</label>
                                        <input class="input" type="text" id="place" name="place">
                                    </div>
                                </div>
                                <div class="fieldset">
                                    <legend class="label">Comment pouvons-nous vous contacter ?</legend>
                                    <div class="field">
                                        <label for="email">Email</label>
                                        <input class="input" type="email" id="email" name="email">
                                    </div>
                                    <div class="field">
                                        <label for="phone">Téléphone</label>
                                        <input class="input" type="tel" id="phone" name="phone">
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
                    <div class="step {step === 5 ? '': 'is-hidden'}" transition:fade>
                        <div class="box">
                            <div class="fieldset has-text-centered">
                                <div class="field">
                                    <picture class="is-family">
                                        <img src="/images/pictos/check-circle.svg" alt="">
                                    </picture>
                                </div>
                                <div class="field">
                                    <p class="title is-2">Votre demande a bien été envoyée</p>
                                    <p>Nous vous remercions, vous serez prochainement contacté(e) par un professionnel pour vous orienter.</p>
                                </div>
                                <a href="/therapie" class="link">← Retour</a>
                            </div>
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
    
    form {
        text-align: left;
        
        input:not(.radio, .checkbox) {
            width: 100%;
        }
    }
    
    .fieldset {
        margin-bottom: calc($gap*2);
    }
    textarea {
        resize: none;
    }
    .add {
        display: flex;
        img {
            filter: invert(28%) sepia(91%) saturate(5927%) hue-rotate(333deg) brightness(84%) contrast(94%);
        }
    }
    .is-family {
        img {
            filter: invert(28%) sepia(91%) saturate(5927%) hue-rotate(333deg) brightness(84%) contrast(94%);
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
    }
    
    .link {
        color: $family;
        
        &:hover {
            text-decoration: underline;
        }
    }
    
</style>