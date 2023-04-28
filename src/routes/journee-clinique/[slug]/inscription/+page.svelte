<script lang="ts">
    import { onMount } from 'svelte';
    import MarkdownIt from 'markdown-it';
    import Button from '../../../../components/forms/Button.svelte';
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
    
    let step: number = 1;
    
    function nextStep() {
        step++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
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
    
    
    $store.nav = 'coloque';
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
                                <form action="">
                                    {#if step === 1}
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Comment vous appelez-vous ?</legend>
                                        </div>
                                        <div class="field">
                                            <div class="columns">
                                                <div class="column">
                                                    <label for="" class="label is-2">Prénom</label>
                                                    <input type="text" class="input">
                                                </div>
                                                <div class="column">
                                                    <label for="" class="label is-2">Nom</label>
                                                    <input type="text" class="input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Comment vous contacter ?</legend>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Numéro de téléphone</label>
                                            <input type="text" class="input">
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Mail</label>
                                            <input type="email" class="input">
                                        </div>
                                    </div>
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Quelles sont vos coordonnées postales ?</legend>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Adresse postale</label>
                                            <input type="text" class="input">
                                        </div>
                                        <div class="field">
                                            <div class="columns">
                                                <div class="column">
                                                    <label for="" class="label is-2">Code postal</label>
                                                    <input type="text" class="input">
                                                </div>
                                                <div class="column">
                                                    <label for="" class="label is-2">Ville</label>
                                                    <input type="text" class="input">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <Button theme="is-inverted" text="Annuler" />
                                        <Button text="Suivant" on:click={nextStep} />
                                    </div>
                                    {/if}
                                    {#if step === 2}
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Quelques informations complémentaires</legend>
                                            <label for="" class="label is-2">Comment avez-vous connu l’APRTF ?</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select name="raison" id="raison">
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
                                                    <input type="radio" class="radio" name="handicap" id="">
                                                </label>
                                                <label for="" class="radio is-2">
                                                    Non
                                                    <input type="radio" class="radio" name="handicap" id="">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Votre situation de handicap nécessite-t-elle une adaptation ?</label>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Rythmes et temps de formation adaptées
                                                </label>
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Modalités pédagogiques, contenus, supports et outils
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Renseignements professionnels</legend>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Profession</label>
                                            <input type="text" class="input" name="" id="">
                                        </div>
                                        <div class="field">
                                            <div class="columns">
                                                <div class="column">
                                                    <label for="" class="label is-2">Etablissement</label>
                                                    <input type="text" class="input" name="" id="">
                                                </div>
                                                <div class="column">
                                                    <label for="" class="label is-2">Service ou structure d’exercice</label>
                                                    <input type="text" class="input" name="" id="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <Button theme="is-inverted" text="Annuler" />
                                        <Button text="Suivant" on:click={nextStep} />
                                    </div>
                                    {/if}
                                    {#if step === 3}
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Questions de positionnement</legend>
                                            <label for="" class="label is-2">Quels sont vos objectifs et attentes quant à cette formation ?</label>
                                            <textarea id="message" class="textarea" placeholder="Exprimez vous ici"></textarea>
                                        </div>
                                        <div class="field">
                                            <label for="" class="label is-2">Niveau de connaissance ?</label>
                                            <div class="control">
                                                <label for="handicap" class="radio is-2">
                                                    <input type="radio" class="radio" name="handicap" id="">
                                                    Peu de connaissance
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label for="" class="radio is-2">
                                                    <input type="radio" class="radio" name="handicap" id="">
                                                    Connaissance théorique
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label for="" class="radio is-2">
                                                    <input type="radio" class="radio" name="handicap" id="">
                                                    Connaissance théorique et pratique
                                                </label>
                                                <textarea id="message" class="textarea" placeholder="Exprimez vous ici"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <Button theme="is-inverted" text="Annuler" />
                                        <Button text="Suivant" on:click={nextStep} />
                                    </div>
                                    {/if}
                                    {#if step === 4}
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Questions de positionnement</legend>
                                        </div>
                                        <div class="field">
                                            <label class="label is-2" for="lastname">Dans quel contexte(s) professionnel(s) recevez-vous des familles<span>(plusieurs réponses possibles)</span> ?</label>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    En libéral
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    En institution
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Dans une structure de psychiatrie adulte
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Dans une structure de pédopsychiatrie
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Dans le secteur médico-social
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Dans le milieu éducatif
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Dans le milieu social et/ou associatif
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fieldset">
                                        <div class="field">
                                            <label class="label is-2" for="lastname">Quel(s) est (sont) votre (vos) cadre(s) de travail avec les familles<span>(plusieurs réponses possibles)</span> ?</label>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Je participe ou conduits des entretiens familiaux
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Je pratique la thérapie familiale
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Je travaille seul
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Je travaille en équipe
                                                </label>
                                            </div>
                                            <div class="control">
                                                <label class="checkbox">
                                                    <input class="checkbox" type="checkbox">
                                                    Je peux filmer les entretiens
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <Button theme="is-inverted" text="Annuler" />
                                        <Button text="Suivant" on:click={nextStep} />
                                    </div>
                                    {/if}
                                    {#if step === 5}
                                    <div class="fieldset">
                                        <div class="field">
                                            <legend class="label">Qui finance votre formation ?</legend>
                                            <label class="label is-2" for="lastname">Les frais de formation sont à la charge de :</label>
                                            <div class="control">
                                                <div class="select">
                                                    <select name="raison" id="raison">
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
                                            <legend class="label">À remplir si votre institution prend en charge vos frais</legend>
                                            <label class="label is-2" for="lastname">Organisme payeur <span>(à remplir si les frais sont pris en charge par votre institution)</span></label>
                                            <div class="control">
                                                <input class="input" type="text">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label is-2" for="lastname">Responsable du service de formation</label>
                                            <div class="control">
                                                <input class="input" type="text">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label is-2" for="lastname">Mail du responsable du service de formation</label>
                                            <div class="control">
                                                <input class="input" type="text">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label is-2" for="lastname">Adresse de l’institution</label>
                                            <div class="control">
                                                <input class="input" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <Button theme="is-inverted" text="Annuler" />
                                        <Button text="Envoyer" on:click={nextStep} />
                                    </div>
                                    {/if}
                                    {#if step === 6}
                                        <div class="fieldset has-text-centered">
                                            <div class="field">
                                                <picture>
                                                    <img src="/images/pictos/check-circle.svg" alt="">
                                                </picture>
                                            </div>
                                            <div class="field">
                                                <p class="title is-2">Votre demande a bien été envoyée</p>
                                                <a href="/journee-clinique" class="link">← Retour aux formations</a>
                                            </div>
                                        </div>
                                    {/if}
                                </form>
                            </div>
                        </div>
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
            
            &.is-titre {
                color: $tertiary;
                margin-bottom: calc($gap * 2);
            }
        }
        .placement {
            margin-top: calc($gap / 2);
            margin-bottom: -50px;
        }
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
        &.is-3 {
            font-size: $size-title-3;
        }
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