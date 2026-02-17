<script>
    let isOpen = $state(false);

    const openMenu= () => {
        isOpen = !isOpen;
    }
</script>
<header>
<nav>
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <button class="burger" class:active={isOpen} onclick={openMenu} aria-label="Ouvrir le menu de navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <ul class="menu" class:is-open={isOpen}>
        {#each ['Accueil', 'À propos', 'Projets'] as link}
            <li>
                <a href="#{link.toLowerCase()}" onclick={() => isOpen = false}>
                    {link}
                </a>
            </li>
        {/each}
    </ul>
</nav>
</header>
<style>
    nav {
        padding-top: 1rem;
        padding-left: 1rem;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 2rem;
        background: transparent;
        border: none;
        padding: 0;
        margin: 1rem;
    }
    .skip-link {
        padding: 0;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        height: 0;

        &:focus-within {
            height: auto;
        }

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
    .burger span {
        width: 2rem;
        height: 0.25rem;
        background: white;
        position: relative;
        transform-origin: 1px;
    }

    .active span:first-child { transform: rotate(45deg); }
    .active span:nth-child(2) { opacity: 0; transform: translateX(20px); }
    .active span:nth-child(3) { transform: rotate(-45deg); }

    .menu {
        display: none;
        list-style: none;
        margin: 0;
        padding-left: 0;
        padding-bottom: 2rem;
    }

    .is-open {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center; /* Centre les <li> sur mobile */
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        display: block; /* Permet au lien de prendre toute la place disponible */
    }

    @media (min-width: 768px) {
        .burger {
            display: none;
        }

        nav {
            padding: 0;
            display: block;
        }

        .menu {
            display: flex;
            flex-direction: row;
            align-items: center;
            border: solid 1px white;
            border-radius: 2rem;
            background-color: transparent;
            padding-bottom: 0;
            width: fit-content;
            margin: 3rem auto 4rem auto;
        }

        .menu a {
            padding: 0.5rem 4rem;
            margin: 0.5rem;
        }

        a:hover {
            text-decoration: underline;
        }
    }

</style>
