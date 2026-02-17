<script>
    let isOpen = $state(false);

    const openMenu= () => {
        isOpen = !isOpen;
    }
</script>

<nav>
    <button class="burger" class:active={isOpen} onclick={openMenu} aria-label="Ouvrir le menu de navigation">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <div class="menu" class:is-open={isOpen}>
        {#each ['Accueil', 'Projet', 'Contact'] as link}
            <a href="#{link.toLowerCase()}" onclick={() => isOpen = false}>
                {link}
            </a>
        {/each}
    </div>
</nav>

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
        padding-bottom: 2rem;
    }

    .is-open {
        display: flex;
        gap: 2rem;
        flex-direction: column;
    }

    a {
        margin: 1rem auto;
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }



    @media (min-width: 768px) {
        .burger {
            display: none;
        }
        nav{
            padding: 0;
            display: block;
        }

        .menu {
            display: flex;
            flex-direction: row;
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
