<script>
	import { onMount } from 'svelte';
    import { store } from '$lib/stores/Store';
	import FormationNav from "$lib/components/FormationNav.svelte";
    
    $store.nav = 'formations';
    $store.sousnav = 'tarifs';
    $store.slug = '/formations/tarifs';

    onMount(() => {
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            item.addEventListener('click', () => {
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove('is-active');
                });
                item.classList.add('is-active');
            });
        });
                
    })
</script>

<FormationNav />
<section class="section tarifs">
    <div class="container is-max-widescreen">
        <p class="title is-2">Tarifs des formations applicables en 2023</p>
        <div class="table">
            <div class="infos">
                <p class="chapo">Information</p>
                <p>Le contrat ou la convention doivent avoir été signés au moins 15 jours avant le démarrage de la formation.</p>
            </div>
            <div class="box">
                <div class="line">
                    <table>
                        <tr>
                            <th>Nom du module</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Financement individuel</td>
                            <td>2465 €</td>
                        </tr>
                        <tr>
                            <td>Financement via la Formation Permanente</td>
                            <td>2765 €</td>
                        </tr>
                    </table>
                </div>
                <div class="line">
                    <table>
                        <tr>
                            <th>Nom du module</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Financement individuel</td>
                            <td>2465 €</td>
                        </tr>
                        <tr>
                            <td>Financement via la Formation Permanente</td>
                            <td>2765 €</td>
                        </tr>
                    </table>
                </div>
                <div class="line">
                    <table>
                        <tr>
                            <th>Nom du module</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Financement individuel</td>
                            <td>2465 €</td>
                        </tr>
                        <tr>
                            <td>Financement via la Formation Permanente</td>
                            <td>2765 €</td>
                        </tr>
                    </table>
                </div>
                <div class="line">
                    <table>
                        <tr>
                            <th>Nom du module</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Financement individuel</td>
                            <td>2465 €</td>
                        </tr>
                        <tr>
                            <td>Financement via la Formation Permanente</td>
                            <td>2765 €</td>
                        </tr>
                    </table>
                </div>
                <div class="line">
                    <table>
                        <tr>
                            <th>Nom du module</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Financement individuel</td>
                            <td>2465 €</td>
                        </tr>
                        <tr>
                            <td>Financement via la Formation Permanente</td>
                            <td>2765 €</td>
                        </tr>
                    </table>
                </div>
                <p class="mentions">L’APRTF n’est pas assujettie à la TVA.<br>Toute inscription ferme, donne lieu au règlement de 15 € de frais d’adhésion à la charge du stagiaire.</p>
            </div>
        </div>
    </div>
</section>
<section class="section financement">
    <div class="container is-desktop-max">
        <p class="title is-2">Gestion du financement</p>
        <p class="subtitle">Les critères de prise en charge par certains organismes</p>
        <div class="accordions">
            <div class="accordion-item is-active">
                <div class="accordion-name box">Compte CPF <span>↓</span></div>
                <div class="accordion-description">
                    <p>
                        Procédure de prise en charge :<br>
                        Des critères de prise en charge sont déterminés annuellement par les Représentants Professionnels de chaque profession.
                    </p>
                    <p>
                        Ces critères de prise en charge, disponibles sur le site du FIF PL, sont applicables du 1er janvier au 31 décembre de chaque année et peuvent, au regard des priorités du FIF PL et de chaque profession, être modifiés d’une année à l’autre.
                    </p>
                    <p>
                        Demande de prise en charge :<br>
                        Toute demande préalable de prise en charge doit impérativement être saisie en ligne, au plus tard, dans les 10 jours calendaires suivant le 1er jour de formation.<br>
                        Passé ce délai de 10 jours calendaires, la demande de prise en charge sera refusée.<br>
                        Le professionnel libéral saisit personnellement sa demande de prise en charge en ligne
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-name box">Compte CPF <span>↓</span></div>
                <div class="accordion-description">
                    <p>
                        Procédure de prise en charge :<br>
                        Des critères de prise en charge sont déterminés annuellement par les Représentants Professionnels de chaque profession.
                    </p>
                    <p>
                        Ces critères de prise en charge, disponibles sur le site du FIF PL, sont applicables du 1er janvier au 31 décembre de chaque année et peuvent, au regard des priorités du FIF PL et de chaque profession, être modifiés d’une année à l’autre.
                    </p>
                    <p>
                        Demande de prise en charge :<br>
                        Toute demande préalable de prise en charge doit impérativement être saisie en ligne, au plus tard, dans les 10 jours calendaires suivant le 1er jour de formation.<br>
                        Passé ce délai de 10 jours calendaires, la demande de prise en charge sera refusée.<br>
                        Le professionnel libéral saisit personnellement sa demande de prise en charge en ligne
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-name box">Fonds Interprofessionnels de Formation des Professionnels Libéraux <span>↓</span></div>
                <div class="accordion-description">
                    <p>
                        Procédure de prise en charge :<br>
                        Des critères de prise en charge sont déterminés annuellement par les Représentants Professionnels de chaque profession.
                    </p>
                    <p>
                        Ces critères de prise en charge, disponibles sur le site du FIF PL, sont applicables du 1er janvier au 31 décembre de chaque année et peuvent, au regard des priorités du FIF PL et de chaque profession, être modifiés d’une année à l’autre.
                    </p>
                    <p>
                        Demande de prise en charge :<br>
                        Toute demande préalable de prise en charge doit impérativement être saisie en ligne, au plus tard, dans les 10 jours calendaires suivant le 1er jour de formation.<br>
                        Passé ce délai de 10 jours calendaires, la demande de prise en charge sera refusée.<br>
                        Le professionnel libéral saisit personnellement sa demande de prise en charge en ligne
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-name box">Fonds d’assurance Formation de la Profession médicale <span>↓</span></div>
                <div class="accordion-description">
                    <p>
                        Procédure de prise en charge :<br>
                        Des critères de prise en charge sont déterminés annuellement par les Représentants Professionnels de chaque profession.
                    </p>
                    <p>
                        Ces critères de prise en charge, disponibles sur le site du FIF PL, sont applicables du 1er janvier au 31 décembre de chaque année et peuvent, au regard des priorités du FIF PL et de chaque profession, être modifiés d’une année à l’autre.
                    </p>
                    <p>
                        Demande de prise en charge :<br>
                        Toute demande préalable de prise en charge doit impérativement être saisie en ligne, au plus tard, dans les 10 jours calendaires suivant le 1er jour de formation.<br>
                        Passé ce délai de 10 jours calendaires, la demande de prise en charge sera refusée.<br>
                        Le professionnel libéral saisit personnellement sa demande de prise en charge en ligne
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-name box">OPCO SANTE <span>↓</span></div>
                <div class="accordion-description">
                    <p>
                        Procédure de prise en charge :<br>
                        Des critères de prise en charge sont déterminés annuellement par les Représentants Professionnels de chaque profession.
                    </p>
                    <p>
                        Ces critères de prise en charge, disponibles sur le site du FIF PL, sont applicables du 1er janvier au 31 décembre de chaque année et peuvent, au regard des priorités du FIF PL et de chaque profession, être modifiés d’une année à l’autre.
                    </p>
                    <p>
                        Demande de prise en charge :<br>
                        Toute demande préalable de prise en charge doit impérativement être saisie en ligne, au plus tard, dans les 10 jours calendaires suivant le 1er jour de formation.<br>
                        Passé ce délai de 10 jours calendaires, la demande de prise en charge sera refusée.<br>
                        Le professionnel libéral saisit personnellement sa demande de prise en charge en ligne
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../../styles/variables.scss';

    .title {
        font-family: $family-title;

        &.is-2 {
            font-size: $size-title-2;
            
            @media screen and (min-width: $b-desktop) {
                font-size: $size-title-2-desktop;
            }
        }
    }

    .tarifs {
        text-align: center;
    }

    .table {

        @media screen and (min-width: $b-desktop) {
            display: flex;
        }

        .line {
            border-bottom: 2px solid $grey-light;
            padding: $gap;
        }

        table {
            width: 100%;
        }

        td, th {
           border: none;
           padding: calc($gap/4);
        }

        th:first-child, td:first-child {
            width: 70%;
            text-align: left;
            @media screen and (min-width: $b-desktop) {
                width: 80%;
            }
        }

        .mentions {
            margin-top: $gap;
            font-size: $size-small;
            text-align: left;
        }
    }
    
    .infos {
        display: flex;
        border-radius: $gap $gap 0 0;
        margin: 0 $gap;
        background: $tertiary;
        padding: $gap;
        color: $inverted;
        flex-direction: column;;
        justify-content: center;
        align-items: center;
        
        @media screen and (min-width: $b-desktop) {
            border-radius: $gap 0 0 $gap;
            width: 30%;
            margin: 30px auto;
        }

        .chapo {
            font-size: $size-large;
            font-weight: 600;
            margin-bottom: calc($gap);

            @media screen and (min-width: $b-desktop) {
                margin-bottom: calc($gap*2);
            }
        }
    }

    .box {
        @media screen and (min-width: $b-desktop) {
            width: 70%;
        }
    }


    .financement {
        background: $grey-lighter;

        .title, .subtitle {
            text-align: center;
        }

        .container {
            max-width: 700px;
        }
    }

    .accordions {
        margin-top: calc($gap*3);

        .accordion-item {
            &:hover, &.is-active {
                .accordion-name {
                    outline: 1px solid $tertiary;
                    cursor: pointer;
                }
            }
            &.is-active {
                .accordion-name {
                    span {
                        transform: rotate(180deg);
                    }
                }
                .accordion-description {
                    height: auto;
                    visibility: visible;
                }
            }
        }

        .accordion-name {
            display: flex;
            width: 100%;
            font-weight: bold;
            margin-bottom: $gap;
            align-items: center;

            span {
                transition: all .3s ease;
                margin-left: auto;
            }
        }

        .accordion-description {
            padding: 0 $gap $gap;
            height: 0;
            visibility: hidden;

            p {
                margin-bottom: $gap;
            }
        }
    }
</style>