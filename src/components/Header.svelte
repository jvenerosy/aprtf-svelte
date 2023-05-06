<script>
	import { onMount } from 'svelte';
    import Button from './forms/Button.svelte';
    import InputText from './forms/InputText.svelte';
    import { store } from '../lib/stores/Store';

    let fixed = false;
    let isBurger = false;

    function openBurger() {
        isBurger = !isBurger;

        // if isBurger is true set html size to 100% and overflow hidden
        if (isBurger === true) {
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';
        } else {
            document.documentElement.style.overflow = 'auto';
            document.documentElement.style.height = 'auto';
        }
    }

    
    onMount(() => {
        // if window resize isBurger = false
        window.addEventListener('resize', () => {
            isBurger = false;
            document.documentElement.style.overflow = 'auto';
            document.documentElement.style.height = 'auto';
        });

        //when click on .nav > a link isBurger = false
        document.querySelectorAll('.nav > li > a').forEach((link) => {
            link.addEventListener('click', () => {
                isBurger = false;
                document.documentElement.style.overflow = 'auto';
                document.documentElement.style.height = 'auto';
            });
        });
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                fixed = true;
            } else {
                fixed = false;
            }
        });
    });
</script>

<header class="{fixed === true ? "fixed" : ""} {isBurger === true ? "is-open" : ""}">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-narrow logo">
                <div class="columns is-mobile is-vcentered">
                    <div class="column">
                        <a href="/">
                            <picture>
                                <img src="/images/logo.svg" srcset="/images/logo.svg 153w, /images/logo.svg 306w" sizes="(max-width: 1023px) 153px, 306px" alt="Logo APRTF">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            <div class="column menu {isBurger === true ? "" : "is-hidden-touch"}">
                <ul class="columns nav">
                    <li class="column is-narrow"><a class:active={$store.nav === 'home'} href="/">Accueil</a></li>
                    <li class="column is-narrow"><a class:active={$store.nav === 'association'} href="/association">Association</a></li>
                    <li class="column is-narrow"><a class:active={$store.nav === 'colloque'} href="/journees-cliniques">Journées cliniques</a></li>
                    <li class="column is-narrow"><a class:active={$store.nav === 'therapie'} href="/therapie">Thérapie</a></li>
                    <li class="column is-narrow"><a class:active={$store.nav === 'contact'} href="/contact">Contact</a></li>
                </ul>
            </div>
            <div class="column search is-narrow {isBurger === true ? "" : "is-hidden-touch"}">
                <p class="is-hidden-desktop">Vous n’avez pas trouvé ? Essayé de rechercher ici.</p>
                <form action="">
                    <InputText placeholder={"Tapez votre recherche"} />
                    <Button text={"Rechercher"} />
                </form>
            </div>
            <div class="burger-menu is-hidden-desktop">
                <button id="burger" aria-label="Burger Menu" class="burger {isBurger === true ? "is-open" : ""}" on:click={openBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    @import '../styles/variables.scss';
    
    header {
        padding: calc($gap/2);
        font-size: $size-regular;
        background: $inverted;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        
        
        @media screen and (min-width: $b-desktop) {
            padding: $gap calc($gap*2);
            height: auto;
        }
        
        &.fixed {
            -webkit-box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.37); 
            box-shadow: 0px 0px 15px 4px rgba(0,0,0,0.20);
            position: fixed;
        }

        &.is-open {
            height: 100%;

            @media screen and (min-width: $b-desktop) {
                height: auto;
            }
        }
    }

    .logo {
        margin-right: $gap;
    }

    li {
        margin: 0 12px 12px;
        font-size: $size-regular;
        
        @media screen and (min-width: $b-desktop) {
            text-align: center;
            margin-bottom: 0;
        }
        
        a {
            &:hover, &.active {
                color: $tertiary
            }
        }
    }

    .burger-menu {
        position: absolute;
        top: 22px;
        right: 10px;
    }

    .burger {
        display: block;
        width: 30px;
        height: 20px;
        position: relative;
        cursor: pointer;
        border: none;
        background: none;

        span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: $primary;
            position: absolute;
            left: 0;
            transition: all .3s ease-in-out;
            
            &:nth-child(1) {
                top: 0;
            }
            
            &:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
            }
            
            &:nth-child(3) {
                bottom: 0;
            }
        }

        &.is-open {
            span {
                &:nth-child(1) {
                    transform: rotate(45deg) translateX(-0%);
                    transform-origin: top center;
                    top: 50%;
                }
                
                &:nth-child(2) {
                    opacity: 0;
                }
                
                &:nth-child(3) {
                    transform-origin: bottom center;
                    transform: rotate(-45deg) translateX(-5%);
                    bottom: 50%;
                }
            }
        }
    }

    .container {
        position: relative;
        height: 100%;
    }

    .search {
        display: none !important;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        background: #F0EFFF;
        padding: calc($gap*2) $gap;

        @media screen and (min-width: $b-desktop) {
            position: relative;
            width: auto;
            left: auto;
            bottom: auto;
            background: none;
            padding: 0;
        }

        p {
            font-size: $size-large;
            margin-bottom: 30px;
            font-weight: 600;

            @media screen and (min-width: $b-desktop) {
                display: none;
            }
        }
    }
</style>