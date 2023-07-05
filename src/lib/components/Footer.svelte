<footer>
    <div class="container">
        <div class="columns top">
            <div class="column first">
                <div class="rows">
                    <div class="row">
                        <picture class="logo">
                            <img src="/images/logo-inverted.svg" srcset="/images/logo-inverted.svg 360w, /images/logo-inverted.svg 306w" sizes="(max-width: 1023px) 360px, 306px" width="160" height="90" alt="Logo APRTF">
                        </picture>
                    </div>
                    <div class="row">
                        <p class="parag">
                            Association loi 1901 agréée par la formation permanente.<br/>
                            La certification qualité a été délivrée au titre de la catégorie Actions de formation.<br/>
                            Organisme Référencé Datadock - 0050392<br/>
                            Siret : 333 869 428 00032 - code APE 9499Z<br/>
                            Déclaration d'activité enregistrée sous le numéro 11 75 41 412 75 auprès de la Préfecture de la région Île de France.</p>
                    </div>
                </div>
            </div>
            <ul class="column">
                <li><a href="/association">Association</a></li>
                <li><a href="/journees-cliniques">Journées cliniques</a></li>
            </ul>
            <ul class="column">
                <!-- <li><a href="/#">Formations</a></li> -->
                <li><a href="/therapie">Thérapie familiale & couple</a></li>
                <li><a href="/formations">Formations</a></li>
            </ul>
            <ul class="column">
                <!-- <li><a href="/#">Ressources</a></li> -->
                <li><a href="/contact">Contact & Infos</a></li>
                <li><a href="/formations/tarifs">Tarifs</a></li>
            </ul>
        </div>
        <div class="columns bottom">
            <div class="column">© 2023 A.P.R.T.F</div>
            <div class="column">
                <a href="/conditions-generales-de-vente">Conditions générales de vente</a>
            </div>
            <div class="column">
                <a href="/reglement-interieur">Règlement intérieur</a>
            </div>
            <div class="column">
                Membre de <a href="https://europeanfamilytherapy.eu/fr/accueil/" target="_blank">l'EFTA</a> et la <a href="https://www.sftf.net/" target="_blank">SFTF</a>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    @import '../../styles/variables.scss';

    footer {
        background-color: $primary;
        color: $inverted;
        font-size: $size-regular;
        text-align: center;
        padding: calc($gap/2);

        @media screen and (min-width: $b-desktop) {
            text-align: left;
            padding: $gap;
        }
    }

    li {
        margin-bottom: 1em;
    }

    .logo {
        display: block;
        margin: 0 0 $gap 0;
    }

    .columns {
        padding-top: $gap;
        padding-bottom: calc($gap*2);
    }

    .first {
        @media screen and (min-width: $b-desktop) {
            margin-right: calc($gap*2);
        }
    }

    .top {
        a {
            font-weight: bold;
        }
    }

    .bottom {
        border-top: 1px solid $inverted;

        a {
            text-decoration: underline;
        }
    }

    .parag {
        font-size: $size-small;
    }
</style>