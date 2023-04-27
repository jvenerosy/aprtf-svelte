<footer>
    <div class="container">
        <div class="columns top">
            <div class="column first">
                <div class="rows">
                    <div class="row">
                        <picture class="logo">
                            <img src="https://placehold.it/160x90" width="160" height="90" alt="Logo APRTF">
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
                <li><a href="/#">Association</a></li>
                <li><a href="/#">Journées cliniques</a></li>
            </ul>
            <ul class="column">
                <li><a href="/#">Formations</a></li>
                <li><a href="/#">Thérapie familiale & couple</a></li>
            </ul>
            <ul class="column">
                <li><a href="/#">Ressources</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </div>
        <div class="columns bottom">
            <div class="column">© 2023 A.P.R.T.F</div>
            <div class="column">
                <a href="/#">Tarifs et conditions</a>
            </div>
            <div class="column">
                <a href="/#">Règlement intérieur</a>
            </div>
            <div class="column">
                Membre de <a href="/#">l'EFTA</a> et la <a href="/#">SFTF</a>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    @import '../styles/variables.scss';

    footer {
        background-color: $primary;
        color: $inverted;
        font-size: 1.6rem;
        text-align: center;
        padding: 10px;

        @media screen and (min-width: $b-desktop) {
            text-align: left;
            padding: 20px;
        }
    }

    li {
        margin-bottom: 1em;
    }

    .logo {
        display: block;
        margin: 0 0 20px 0;
    }

    .columns {
        padding-top: 20px;
        padding-bottom: 40px;
    }

    .first {
        @media screen and (min-width: $b-desktop) {
            margin-right: 40px;
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
        font-size: 1.4rem;
    }
</style>