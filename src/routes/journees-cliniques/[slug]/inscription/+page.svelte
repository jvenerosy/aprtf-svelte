<script lang="ts">
    import Button from '$lib/components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    import { fade } from 'svelte/transition';
    
    import { PUBLIC_HOST_API } from '$env/static/public';
    
    $store.nav = 'colloque';
    
    export let data;
    const colloque = data.colloque;
    
    let answer: {
        firstname: string,
        lastname: string,
        phone_number: string,
        email: string,
        address: string,
        postal_code: string,
        city: string,
        connu: string,
        handicap: boolean,
        handicap_adapt: string,
        handicap_pedago: string,
        profession: string,
        etablissement: string,
        service: string,
        objectif: string,
        level: number,
        connaissance: string,
        context: string,
        cadre: string,
        finance: number,
        finance_payeur: string,
        finance_responsable: string,
        finance_mail: string,
        finance_address: string
        
    } = {
        firstname: '',
        lastname: '',
        phone_number: '',
        email: '',
        address: '',
        postal_code: '',
        city: '',
        connu: '',
        handicap: false,
        handicap_adapt: '',
        handicap_pedago: '',
        profession: '',
        etablissement: '',
        service: '',
        objectif: '',
        level: 0,
        connaissance: '',
        context: '',
        cadre: '',
        finance: 0,
        finance_payeur: '',
        finance_responsable: '',
        finance_mail: '',
        finance_address: ''
    }
    
    let step: number = 1;
    
    function nextStep() {
        step++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function prevStep() {
        step--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
                        <h1 class="title is-1">Inscription à la journée clinique thématique </h1>
                        <p class="subtitle">Débute le {colloque.date_debut} jusqu'au {colloque.date_fin}</p>
                    </div>
                    <div class="row">
                        <div class="step">
                            <div class="total">
                                <div class="current" style="width: calc({step - 1}*20%)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box-content">
                                <div class="step {step === 1 ? '': 'is-hidden'}" transition:fade>
                                    <form action="">
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Comment vous appelez-vous ?</legend>
                                            </div>
                                            <div class="field">
                                                <div class="columns">
                                                    <div class="column">
                                                        <label for="firstname" class="label is-2">Prénom</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            id="firstname"
                                                            bind:value={answer.firstname}
                                                        />
                                                    </div>
                                                    <div class="column">
                                                        <label for="lastname" class="label is-2">Nom</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            id="lastname"
                                                            bind:value={answer.lastname}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Comment vous contacter ?</legend>
                                            </div>
                                            <div class="field">
                                                <label for="phone_number" class="label is-2">Numéro de téléphone</label>
                                                <input 
                                                    type="text"
                                                    class="input"
                                                    id="phone_number"
                                                    bind:value={answer.phone_number}
                                                />
                                            </div>
                                            <div class="field">
                                                <label for="email" class="label is-2">Mail</label>
                                                <input
                                                    type="email"
                                                    class="input"
                                                    id="email"
                                                    bind:value={answer.email}
                                                />
                                            </div>
                                        </div>
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Quelles sont vos coordonnées postales ?</legend>
                                            </div>
                                            <div class="field">
                                                <label for="address" class="label is-2">Adresse postale</label>
                                                <input
                                                    type="text"
                                                    class="input"
                                                    id="address"
                                                    bind:value={answer.address}
                                                />
                                            </div>
                                            <div class="field">
                                                <div class="columns">
                                                    <div class="column">
                                                        <label for="postal_code" class="label is-2">Code postal</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            id="postal_code"
                                                            bind:value={answer.postal_code}
                                                        />
                                                    </div>
                                                    <div class="column">
                                                        <label for="city" class="label is-2">Ville</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            id="city"
                                                            bind:value={answer.city}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="columns is-vcentered">
                                            <div class="column is-narrow">
                                                <a href="/journees-cliniques/{data.slug}" class="link">Annuler</a>
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <div class="buttons">
                                                    <Button text="Suivant →" on:click={nextStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div class="step {step === 2 ? '': 'is-hidden'}" transition:fade>
                                    <form action="">
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Quelques informations complémentaires</legend>
                                                <label for="connu" class="label is-2">Comment avez-vous connu l’APRTF ?</label>
                                                <div class="control">
                                                    <div class="select">
                                                        <select
                                                            bind:value={answer.connu}
                                                            name="connu"
                                                            id="connu"
                                                        >
                                                            <option value="" disabled selected>Selectionnez une réponse</option>
                                                            <option value="1">Raison 1</option>
                                                            <option value="2">Raison 2</option>
                                                            <option value="3">Raison 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Êtes-vous en situation de handicap ?</legend>
                                                <div class="control">
                                                    <label for="handicap" class="radio is-2">
                                                        Oui
                                                        <input
                                                            type="radio"
                                                            class="radio"
                                                            name="handicap"
                                                            id="handicap"
                                                            bind:group={answer.handicap}
                                                            value={true}
                                                        />
                                                    </label>
                                                    <label for="" class="radio is-2">
                                                        Non
                                                        <input
                                                            type="radio"
                                                            class="radio"
                                                            name="handicap"
                                                            id="handicap"
                                                            bind:group={answer.handicap}
                                                            value={false}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                            {#if answer.handicap}
                                            <div class="field">
                                                <label for="" class="label is-2">Votre situation de handicap nécessite-t-elle une adaptation ?</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            name="handicap_adapt"
                                                            value="rythme"
                                                            bind:group={answer.handicap_adapt}
                                                            class="checkbox"
                                                            type="checkbox"
                                                        />
                                                        Rythmes et temps de formation adaptées
                                                    </label>
                                                    <label class="checkbox">
                                                        <input name="handicap_adapt" value="pedago"
                                                            bind:group={answer.handicap_pedago}
                                                            class="checkbox"
                                                            type="checkbox"
                                                        />
                                                        Modalités pédagogiques, contenus, supports et outils
                                                    </label>
                                                </div>
                                            </div>
                                            {/if}
                                        </div>
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Renseignements professionnels</legend>
                                            </div>
                                            <div class="field">
                                                <label for="profession" class="label is-2">Profession</label>
                                                <input
                                                    type="text"
                                                    class="input"
                                                    name="profession"
                                                    id="profession"
                                                    bind:value={answer.profession}
                                                />
                                            </div>
                                            <div class="field">
                                                <div class="columns">
                                                    <div class="column">
                                                        <label for="etablissement" class="label is-2">Etablissement</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            name="etablissement"
                                                            id="etablissement"
                                                            bind:value={answer.etablissement}
                                                        />
                                                    </div>
                                                    <div class="column">
                                                        <label for="service" class="label is-2">Service ou structure d’exercice</label>
                                                        <input
                                                            type="text"
                                                            class="input"
                                                            name="service"
                                                            id="service"
                                                            bind:value={answer.service}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="columns is-vcentered">
                                            <div class="column is-narrow">
                                                <a href="/journees-cliniques/{data.slug}" class="link">Annuler</a>
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <div class="buttons">
                                                    <Button theme="is-inverted" text="← Précédent" on:click={prevStep} />
                                                    <Button text="Suivant →" on:click={nextStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            
                                <div class="step {step === 3 ? '': 'is-hidden'}" transition:fade>
                                    <form action="">
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Questions de positionnement</legend>
                                                <label for="objectif" class="label is-2">Quels sont vos objectifs et attentes quant à cette formation ?</label>
                                                <textarea 
                                                    id="objectif" 
                                                    class="textarea" 
                                                    placeholder="Exprimez vous ici" 
                                                    bind:value={answer.objectif}   
                                                ></textarea>
                                            </div>
                                            <div class="field">
                                                <label for="level" class="label is-2">Niveau de connaissance ?</label>
                                                <div class="control">
                                                    <label for="level_1" class="radio is-2">
                                                        <input
                                                            bind:group={answer.level}
                                                            type="radio"
                                                            class="radio"
                                                            name="level"
                                                            value={1}
                                                            id="level_1"
                                                        />
                                                        Peu de connaissance
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label for="level_2" class="radio is-2">
                                                        <input
                                                            bind:group={answer.level}
                                                            type="radio"
                                                            class="radio"
                                                            name="level"
                                                            value={2}
                                                            id="level_2"
                                                        />
                                                        Connaissance théorique
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label for="level_3" class="radio is-2">
                                                        <input
                                                            bind:group={answer.level}
                                                            type="radio"
                                                            class="radio"
                                                            name="level"
                                                            value={3}
                                                            id="level_3"
                                                        />
                                                        Connaissance théorique et pratique
                                                    </label>
                                                    <textarea
                                                        id="level_message"
                                                        class="textarea"
                                                        placeholder="Exprimez vous ici"
                                                        bind:value={answer.connaissance}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="columns is-vcentered">
                                            <div class="column is-narrow">
                                                <a href="/journees-cliniques/{data.slug}" class="link">Annuler</a>
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <div class="buttons">
                                                    <Button theme="is-inverted" text="← Précédent" on:click={prevStep} />
                                                    <Button text="Suivant →" on:click={nextStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                                <div class="step {step === 4 ? '': 'is-hidden'}" transition:fade>
                                    <form action="">

                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Questions de positionnement</legend>
                                            </div>
                                            <div class="field">
                                                <label class="label is-2" for="context">Dans quel contexte(s) professionnel(s) recevez-vous des familles <span>(plusieurs réponses possibles)</span> ?</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="liberal"
                                                        />
                                                        En libéral
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="institution"
                                                        />
                                                        En institution
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="structure_adulte"
                                                        />
                                                        Dans une structure de psychiatrie adulte
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="structure_pedopsy"
                                                        />
                                                        Dans une structure de pédopsychiatrie
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="medico_social"
                                                        />
                                                        Dans le secteur médico-social
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="educatif"
                                                        />
                                                        Dans le milieu éducatif
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="context"
                                                            bind:group={answer.context}
                                                            value="associatif"
                                                        />
                                                        Dans le milieu social et/ou associatif
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="fieldset">
                                            <div class="field">
                                                <label class="label is-2" for="cadre">Quel(s) est (sont) votre (vos) cadre(s) de travail avec les familles<span>(plusieurs réponses possibles)</span> ?</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="cadre"
                                                            bind:group={answer.cadre}
                                                            value="participe"
                                                        />
                                                        Je participe ou conduits des entretiens familiaux
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="cadre"
                                                            bind:group={answer.cadre}
                                                            value="pratique"
                                                        />
                                                        Je pratique la thérapie familiale
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="cadre"
                                                            bind:group={answer.cadre}
                                                            value="seul"
                                                        />
                                                        Je travaille seul
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="cadre"
                                                            bind:group={answer.cadre}
                                                            value="equipe"
                                                        />
                                                        Je travaille en équipe
                                                    </label>
                                                </div>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input
                                                            class="checkbox"
                                                            type="checkbox"
                                                            name="cadre"
                                                            bind:group={answer.cadre}
                                                            value="filmer"
                                                        />
                                                        Je peux filmer les entretiens
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="columns is-vcentered">
                                            <div class="column is-narrow">
                                                <a href="/journees-cliniques/{data.slug}" class="link">Annuler</a>
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <div class="buttons">
                                                    <Button theme="is-inverted" text="← Précédent" on:click={prevStep} />
                                                    <Button text="Suivant →" on:click={nextStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            
                                <div class="step {step === 5 ? '': 'is-hidden'}" transition:fade>
                                    <form action="">

                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">Qui finance votre formation ?</legend>
                                                <label class="label is-2" for="finance">Les frais de formation sont à la charge de :</label>
                                                <div class="control">
                                                    <div class="select">
                                                        <select
                                                            bind:value={answer.finance}
                                                            name="finance"
                                                            id="finance"
                                                        >
                                                            <option value={0} disabled selected hidden>La raison de votre contact</option>
                                                            <option value={1}>A ma charge</option>
                                                            <option value={2}>A la charge de mon employeur</option>
                                                            <option value={3}>Mixte</option>
                                                            <option value={4}>Sous réserve d'une prise en charge (employeur ou autre)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {#if answer.finance === 2 || answer.finance === 3 || answer.finance === 4}
                                        <div class="fieldset">
                                            <div class="field">
                                                <legend class="label">À remplir si votre institution prend en charge vos frais</legend>
                                                <label class="label is-2" for="finance_payeur">Organisme payeur <span>(à remplir si les frais sont pris en charge par votre institution)</span></label>
                                                <div class="control">
                                                    <input
                                                        class="input"
                                                        type="text"
                                                        name="finance_payeur"
                                                        bind:value={answer.finance_payeur}
                                                    >
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label is-2" for="finance_responsable">Responsable du service de formation</label>
                                                <div class="control">
                                                    <input
                                                        class="input"
                                                        type="text"
                                                        name="finance_responsable"
                                                        bind:value={answer.finance_responsable}
                                                    >
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label is-2" for="finance_mail">Mail du responsable du service de formation</label>
                                                <div class="control">
                                                    <input
                                                        class="input"
                                                        type="text"
                                                        name="finance_mail"
                                                        bind:value={answer.finance_mail}
                                                    >
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label class="label is-2" for="finance_adress">Adresse de l’institution</label>
                                                <div class="control">
                                                    <input
                                                        class="input"
                                                        type="text"
                                                        name="finance_address"
                                                        bind:value={answer.finance_address}
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        {/if}
                                        <div class="columns is-vcentered">
                                            <div class="column is-narrow">
                                                <a href="/journees-cliniques/{data.slug}" class="link">Annuler</a>
                                            </div>
                                            <div class="column"></div>
                                            <div class="column is-narrow">
                                                <div class="buttons">
                                                    <Button theme="is-inverted" text="← Précédent" on:click={prevStep} />
                                                    <Button text="Envoyer" on:click={nextStep} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            
                                <div class="step {step === 6 ? '': 'is-hidden'}" transition:fade>
                                    <div class="fieldset has-text-centered">
                                        <div class="field">
                                            <picture>
                                                <img src="/images/pictos/check-circle.svg" alt="">
                                            </picture>
                                        </div>
                                        <div class="field">
                                            <p class="title is-2">Votre demande a bien été envoyée</p>
                                            <a href="/journees-cliniques" class="link">← Retour aux journées cliniques</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column infos">
                <div class="rows">
                    <div class="row">
                        <picture>
                            <img class="mea" src="{`${PUBLIC_HOST_API}/assets/${colloque.illustration_colloque}?width=400&height=300&format=webp`}" alt="">
                        </picture>
                    </div>
                    <div class="row">
                        <div class="box">
                            <p class="ref is-titre">{colloque.titre}</p>
                            <p class="ref">Date</p>
                            <p>du {colloque.date_debut} au {colloque.date_fin}</p>
                            <p class="ref">Lieu du rendez-vous</p>
                            <p>{colloque.lieu}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../../../styles/variables.scss';
    
    :global(.description p) {
        margin-bottom: 20px;
    }
    .infos {
        img.mea {
            display: block;
            border-radius: $gap;
            margin: 0 auto calc($gap * 2);
        }
        
        .box {
            background: $grey-light;
            box-shadow: none;
        }
        
        .ref {
            font-weight: bold;
            &:not(:first-child) {
                margin-top: calc($gap * 2);
            }
            
            &.is-titre {
                color: $tertiary;
                margin-bottom: calc($gap * 2);
            }
        }
    }
    
    .box {
        transition: all 0.3s ease;
    }
    
    .step {
        margin: calc($gap*2) 0;
        .total {
            width: 100%;
            background: $tertiary-light;
            height: 5px;
            position: relative;
        }
        .current {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: $tertiary;
            transition: all 1s ease;
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
    
    .subtitle {
        font-family: $family-regular;
        font-weight: 600;
    }
    
    .link {
        color: $tertiary;
        
        &:hover {
            text-decoration: underline;
        }
    }
</style>