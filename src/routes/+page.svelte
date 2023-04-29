<script>
    import Button from '../components/forms/Button.svelte';
    import { store } from '../lib/stores/Store';

    $store.nav = 'home';
</script>

<svelte:head>
	<title>Hello world</title>
	<meta name="robots" content="index follow" />
    <meta name="description" content="Hello world" />
</svelte:head>

<section class="section association">
    <div class="container is-max-widescreen">
        <div class="columns is-vcentered">  
            <div class="column is-5">
                <picture>
                    <img src="images/home-illustration.svg" alt="" />      
                </picture>
            </div>
            <div class="column">
                <h1 class="title is-1">Association parisienne de recherche et de travail avec les familles</h1>
            </div>
        </div>
        <hr>
        <div class="bloc">
            <h2 class="title is-2">Les missions de l’Aprtf</h2>
            <p class="subtitle">Fondée en 1981</p>
        </div>
        <div class="pepites columns">
            <div class="column">            
                <div class="box">
                    <picture>
                        <img src="images/pictos/megaphone.svg" srcset="images/pictos/megaphone.svg 38w" sizes="38px" alt="">
                    </picture>
                    <h3 class="parag">Développer la pratique des thérapies avec les familles</h3>
                    <p>Proposer des consultations de thérapie familiale et de couple, et promouvoir ces modalités de soins dans le service public de santé.</p>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <picture>
                        <img src="images/pictos/people.svg" srcset="images/pictos/people.svg 38w" sizes="38px" alt="">
                    </picture>
                    <h3 class="parag">Former les professionnels à la pratique systémique</h3>
                    <p>Proposer un parcours structuré de formation à la pratique thérapeutique familiale systémique pour les professionnels médicaux, psychologiques, paramédicaux et sociaux.</p>
                </div>
            </div>
            <div class="column">
                <div class="box">
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
<section class="section qrv">
    <div class="container is-max-widescreen">
        <div class="bloc">
            <h2 class="title is-2">Que recherchez-vous ?</h2>
            <p class="subtitle">Les consultations familiales et les formations pour les professionnel(le)s</p>
        </div>
        <div class="formations columns">
            <div class="column is-4 family">
                <div class="box is-fullheight">
                    <h3 class="title is-3">Vous êtes une famille, un couple</h3>
                    <p class="subtitle">Consultation familiale et conjugale</p>
                    <p class="text">Nous proposons des thérapies pour accompagner les difficultés familiales (enfants, adolescents, adultes, fratries) ou de couple. Bienvenue dans cette section pour en savoir plus ou faire une demande.</p>
                    <div class="links columns is-vcentered is-mobile">
                        <div class="column is-narrow">
                            <Button theme="is-family" text="Contacter" />
                        </div>
                        <div class="column">
                            <a href="/therapie">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column pro">
                <div class="box is-fullheight">
                    <h3 class="title is-3">Vous êtes un(e) professionnel(le)</h3>
                    <p class="subtitle">Formations et journées cliniques</p>
                    <p class="text">Nous développons depuis de nombreuses années des formations longues à la pratique systémique, en thérapie familiale et en thérapie multifamiliale, à destination des professionnels des champs sanitaire, social &médico-social, et de nombreux événements cliniques thématiques. Si vous voulez en savoir plus, bienvenue dans cette section.</p>
                    <div class="links columns is-vcentered is-mobile">
                        <div class="column is-narrow">
                            <a href="/association">
                                <Button text="Découvrir" />
                            </a>
                        </div>
                        <div class="column">
                            <a href="/journees-cliniques">Voir les événements</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../styles/variables.scss';

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
    
    .parag {
        font-size: $size-large;
        font-weight: 600;
        margin: 1em 0;
    }

    .association {
        background: $tertiary;
        color: $inverted;
        padding-top: 60px;
        padding-bottom: 60px;
        
        .title {
            color: $inverted;
        }
        .subtitle {
            color: $inverted;
        }

        .box {
            background: -webkit-linear-gradient(top, rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 100%);
            background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 100%);
            box-shadow: none;
            color: $inverted;
        }
    }

    hr {
        max-width: 260px;
        margin: calc($gap*2) auto;
    }

    .bloc {
        text-align: center;
        margin-bottom: calc($gap*2);
    }

    .is-fullheight {
        height: 100%;
    }

    .links {
        margin-top: 20px;
    }

    .qrv {
        .box {
            padding-bottom: 160px;
            background-repeat: no-repeat;
            background-position: 90% bottom;
            transition: all 0.3s ease-in-out;
    
            &:hover {
                box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.4), 0 0px 0 1px rgba(10, 10, 10, 0.1);
            }
        }
        .family {
            .box {
                border: 1px solid $family;
                background-image: url('images/family-illustration.svg');
            }
            a {
                color: $family;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .pro {
            .box {
                border: 1px solid $tertiary;
                background-image: url('images/pro-illustration.svg');
            }
            a {
                color: $tertiary;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

</style>