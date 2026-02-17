<script>
    const currentYear = new Date().getFullYear();
    let dialogRef;

    const openModal = () => dialogRef.showModal();
    const closeModal = () => dialogRef.close();
</script>

<footer class="site-footer">
    <div class="footer-content">
        <p class="copyright">© {currentYear} Elias. Tous droits réservés.</p>

        <nav aria-label="Liens du pied de page">
            <ul class="footer-links">
                <li>
                    <a href="https://github.com/EliasZerar" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub (nouvel onglet)">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/elias-zerar-1412a8297/" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn (nouvel onglet)">LinkedIn</a>
                </li>
                <li class="separator" aria-hidden="true">|</li>
                <li>
                    <button type="button" class="legal-button" on:click={openModal}>
                        Mentions légales
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</footer>

<dialog bind:this={dialogRef} aria-labelledby="modal-title">
    <div class="modal-header">
        <h2 id="modal-title">Mentions Légales</h2>
        <button on:click={closeModal} aria-label="Fermer la fenêtre modale" class="close-btn">×</button>
    </div>
    <div class="modal-body">
        <h3>Éditeur du site</h3>
        <p>Elias - Développeur Web en alternance chez Radio France.</p>
        <h3>Hébergement</h3>
        <p>Vercel Inc. - 440 N Barranca Ave #4133 Covina, CA 91723</p>
    </div>
</dialog>

<style>
    .site-footer {
        font-family: 'Kameron', serif;
        padding: 1rem;
        margin-top: 4rem;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .footer-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .footer-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.8rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .copyright, .legal-button, a, .separator {
        font-size: 0.8rem;
        color: inherit;
        text-decoration: none;
    }

    .legal-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font-family: inherit;
        position: relative;
    }

    a {
        position: relative;
        transition: color 0.3s ease;
    }

    a:hover, .legal-button:hover { color: #ff530a; }

    a:hover::after, .legal-button:hover::after { width: 100%; }


    dialog {
        background: #1a1a1a;
        color: white;
        border: 2px solid #ff530a;
        border-radius: 8px;
        padding: 2rem;
        max-width: 90vw;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(4px);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .close-btn {
        background: none;
        border: 1px solid #ff530a;
        color: #ff530a;
        cursor: pointer;
        padding: 0.2rem 0.6rem;
    }

    @media (min-width: 768px) {
        .footer-content { justify-content: space-between; }
        .copyright, a, .legal-button, .separator { font-size: 1rem; }
        dialog { width: 600px; }
    }
</style>
