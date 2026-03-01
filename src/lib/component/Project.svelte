<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    const { project } = data;

    let selectedImage = $state<{ src: string; alt: string } | null>(null);
    let dialogRef = $state<HTMLDialogElement | null>(null);

    function openModal(image: { src: string; alt: string }) {
        selectedImage = image;
        setTimeout(() => {
            dialogRef?.showModal();
        }, 0);
    }

    function closeModal() {
        dialogRef?.close();
        selectedImage = null;
    }

    function handleBackdropClick(event: MouseEvent) {
        if (event.target === dialogRef) {
            closeModal();
        }
    }
</script>
<section class="project-detail-section">
    <div class="top-nav">
        <a href="/#projets" class="btn-back" aria-label="retour à la page d'accueil">
            <span>←</span> Retour
        </a>
    </div>

    <header class="project-header">
        <img src={project.image} alt="" />

        <div class="header-content">
            <div class="title-group">
                <h1 class="project-title">{project.title}</h1>
                <p class="project-year">Promotion {project.year}</p>
            </div>

            <div class="actions">
                <div class="tools-container">
                    {#each project.tools as tool}
                        <ul class="tool-badge">
                            <li>{tool}</li>
                        </ul>
                    {/each}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="btn-link" aria-label="visiter le site {project.title}">
                    Visiter le site
                    <span class="external-icon" aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </header>

    <div class="content-grid">
        <aside class="sidebar">
            <h2 class="section-subtitle">Détails</h2>
            <dl class="metadata">
                <div>
                    <dt class="label">Rôle</dt>
                    <dd class="value">Design & Développement</dd>
                </div>
                <div>
                    <dt class="label">Stack</dt>
                    <dd class="value">{project.tools.join(', ')}</dd>
                </div>
            </dl>
        </aside>

        <section class="project-description-section">
            <h2 class="section-subtitle">À propos</h2>
            <p class="project-description">
                {project.description}
            </p>
        </section>
    </div>

    {#if project.gallery && project.gallery.length > 0}
        <section class="project-gallery-section">
            <h2 class="section-subtitle">Galerie</h2>
            <div class="gallery-grid">
                {#each project.gallery as image}
                    <button
                            type="button"
                            class="gallery-item-btn"
                            onclick={() => openModal(image)}
                            aria-label="Agrandir l'image : {image.alt}"
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                {/each}
            </div>
        </section>
    {/if}
</section>
<dialog role="dialog"
        bind:this={dialogRef}
        class="image-modal"
        onclose={closeModal}
        onclick={handleBackdropClick}
>
    {#if selectedImage}
        <div class="modal-content">
            <button
                    type="button"
                    class="btn-close-modal"
                    onclick={closeModal}
                    aria-label="Fermer la vue agrandie"
            >
                ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
    {/if}
</dialog>

<style>
	:global(body) {
		background-color: #0a0a0a;
		color: #e5e5e5;
	}

	.project-detail-section {
		margin: 0 auto;
		padding: 2rem 1rem;
		max-width: 1100px;
	}

	.top-nav {
		margin-bottom: 2rem;
	}

	.btn-back {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #ffffff;
		text-decoration: none;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		margin-bottom: 4rem;
	}

	.header-content {
		display: grid;
		gap: 2rem;
	}

	.project-title {
		font-size: 4rem;
		margin: 0;
		color: #fff;
	}

	.project-year {
		margin-top: 0.5rem;
	}

	.actions {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.tools-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.tool-badge {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 0.5rem 1.3rem;
		border-radius: 6.25rem;
		font-size: 0.8rem;
		list-style: none;
		margin: 0;
	}

	.btn-link {
		background: #fff;
		color: #000;
		padding: 1rem 2rem;
		border-radius: 12px;
		text-decoration: none;
		font-weight: 600;
		display: inline-flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.content-grid {
		display: grid;
		gap: 3rem;
		margin-bottom: 5rem;
	}

	.section-subtitle {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
	}

	.project-description {
		font-size: 1.25rem;
		line-height: 1.6;
		color: #d4d4d4;
	}

	.metadata {
		display: grid;
		gap: 1.5rem;
		dt {
			margin-bottom: 0.5rem;
		}
		dd {
			margin: 0;
			font-weight: 700;
			font-size: 1.1rem;
		}
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

    .gallery-item-btn {
        border-radius: 16px;
        overflow: hidden;
        background: #171717;
        border: none;
        padding: 0;
        cursor: pointer;
        position: relative;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: block;
        width: 100%;
        text-align: left;
    }

    .gallery-item-btn:focus-visible {
        outline: 3px solid #ffffff;
        outline-offset: 4px;
    }

    .gallery-item-btn:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }

    .gallery-item-btn img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .zoom-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        opacity: 0;
        transition: opacity 0.2s ease;
        background: rgba(0, 0, 0, 0.6);
        padding: 1rem;
        border-radius: 50%;
    }

    .gallery-item-btn:hover .zoom-indicator,
    .gallery-item-btn:focus-visible .zoom-indicator {
        opacity: 1;
    }

    .image-modal {
        padding: 0;
        border: none;
        border-radius: 12px;
        background: transparent;
        max-width: 90vw;
        max-height: 90vh;
        overflow: visible;
    }

    .image-modal::backdrop {
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(5px);
    }

    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }

    .btn-close-modal {
        position: absolute;
        top: -20px;
        right: -20px;
        background: #ffffff;
        color: #000000;
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        transition: transform 0.2s ease;
        z-index: 10;
    }

    .btn-close-modal:hover {
        transform: scale(1.1);
    }

    .btn-close-modal:focus-visible {
        outline: 3px solid #000000;
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        .btn-close-modal {
            top: 10px;
            right: 10px;
        }
    }

	@media (min-width: 768px) {
		.header-content {
			grid-template-columns: 1fr auto;
			align-items: flex-end;
		}

		.content-grid {
			grid-template-columns: 250px 1fr;
		}

		.project-detail-section {
			padding: 4rem 2rem;
		}
	}
</style>
