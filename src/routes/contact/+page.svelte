<script lang="ts">
    import Button from '$lib/components/forms/Button.svelte';
    import { store } from '$lib/stores/Store';
    import { enhance } from '$app/forms';
    import { fade } from 'svelte/transition';
    
    $store.nav = 'contact';
    $store.slug = '/contact';
    
    /** @type {import('./$types').ActionData} */
    export let form: any = {};
    
    
</script>

<section class="section top">
    <div class="container is-max-widescreen">
        <div class="columns">
            <div class="column is-5 has-text-centered">
                <picture>
                    <img src="images/pro-illustration.svg" srcset="images/contact-illustration.svg 250w" sizes="250px" alt="" />      
                </picture>
            </div>
            <div class="column">
                <h1 class="title is-1">Besoin d’informations complémentaires ?</h1>
                <p class="parag">Vous souhaitez vous rendre à l’Aprtf ou nous contacter ? On vous donne toutes ces informations ici.</p>
            </div>
        </div>
    </div>
</section>
<section class="section bottom">
    <div class="container is-max-desktop">
        <div class="rows">
            <div class="row">
                <div class="columns">
                    <div class="column">
                        <h2 class="title is-2">Nous contacter</h2>
                        <address>
                            <p>Pour toutes demandes de renseignements, vous pouvez nous joindre par mail : <a href="mailto:contact@aprtfformations.fr">contact@aprtfformations.fr</a></p>
                            <p class="ref">Adresse</p>
                            <p>16 rue de l’Evangile – 75018 Paris</p>
                            <p class="ref">Téléphone</p>
                            <p><a href="tel:+33143381698">01 43 38 16 98</a></p>
                            <p class="ref">Mail</p>
                        </address>
                    </div>
                    <div class="column">
                        <iframe title="Localisation de l'APRTF" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.206113230414!2d2.3599578765283344!3d48.89240897133683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ffcceb3a2e3%3A0xa4efe7e4ef97fc55!2sAprtf!5e0!3m2!1sfr!2sit!4v1682666495810!5m2!1sfr!2sit" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="columns">
                    <div class="column">
                        <h2 class="title is-2">Informations pratiques</h2>
                        <picture>
                            <img src="images/contact-illustration-2.svg" srcset="images/contact-illustration-2.svg 250w" sizes="250px" alt="" />
                        </picture>
                    </div>
                    <div class="column">
                        <div class="explication">
                            <p class="ref">Restauration</p>
                            <p>
                                Les repas ne sont pas compris dans le tarif de formation.<br>
                                Il est possible de se restaurer à proximité ou bien sur place (cuisine équipée d’un micro-onde, réfrigérateur, vaisselle).<br>
                                Le café et le thé son accessibles gratuitement.
                            </p>
                            <p class="ref">Pendant les sessions, penser à prendre</p>
                            <p>
                                Papier, stylo et éventuellement votre ordinateur portable.<br>
                                L’espace est équipé d’un accès Wifi, d’ordinateurs portables, de téléviseurs, d’un rétro-projecteur et de Paperboards.
                            </p>
                            <p class="ref">Les locaux de l’APRTF sont accessibles</p>
                            <p>
                                Par le Métro : Marx Dormoy ou La Chapelle.<br>
                                Par les Bus 35 &  60 (arrêt Place de Torcy ou Place Hébert) et 65 (arrêt Boucry).
                            </p>
                            <p>
                                Accès routier : Par la Porte de la Chapelle<br>
                                Les formations sont assurées en présentiel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../styles/variables.scss';
    
    .section {
        text-align: center;
        
        @media screen and (min-width: $b-desktop) {
            text-align: left;
        }
    }
    
    .top {
        background: $grey-light;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .title {
        font-family: $family-title;
        
        &.is-1 {
            font-size: $size-title-1;
            text-align: center;
            margin-bottom: calc($gap*2);
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-1-desktop;
                text-align: left;
            }
        }
        &.is-2 {
            font-size: $size-title-2;
            margin-bottom: calc($gap*2);
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-2-desktop;
            }
        }
    }
    
    .label {
        &.is-2 {
            font-weight: normal;
        }
    }
    
    form {
        text-align: left;
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
    
    address {
        font-style: normal;
        
        a {
            color: $tertiary;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
    
    .row {
        margin-bottom: calc($gap*2);
    }
    
    .explication {
        margin-top: calc($gap*5);
        
        p {
            margin-bottom: calc($gap/2);
        }
    }
    .validation {
        text-align: center;
    }

    .mention {
        font-size: $size-small;
    }
</style>