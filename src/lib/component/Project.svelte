<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    const { project } = data;
</script>

<section class="project-detail-section">
    <div class="top-nav">
        <a href="/#projets" class="btn-back">
            <span>←</span> Retour
        </a>
    </div>

    <header class="project-header">
            <img src={project.image} alt={project.alt} />

        <div class="header-content">
            <div class="title-group">
                <h1 class="project-title">{project.title}</h1>
                <p class="project-year">Promotion {project.year}</p>
            </div>

            <div class="actions">
                <div class="tools-container">
                    {#each project.tools as tool}
                        <span class="tool-badge">{tool}</span>
                    {/each}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="btn-link">
                    Visiter le site
                    <span class="external-icon">↗</span>
                </a>
            </div>
        </div>
    </header>

    <div class="content-grid">
        <aside class="sidebar">
            <h2 class="section-subtitle">Détails</h2>
            <div class="metadata">
                <div class="meta-item">
                    <span class="label">Rôle</span>
                    <span class="value">Design & Développement</span>
                </div>
                <div class="meta-item">
                    <span class="label">Stack</span>
                    <span class="value">{project.tools.join(', ')}</span>
                </div>
            </div>
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
                {#each project.gallery as img, index}
                    <div class="gallery-item">
                        <img src={img} alt={`${project.title} - ${index + 1}`} loading="lazy" />
                    </div>
                {/each}
            </div>
        </section>
    {/if}
</section>

<style>
    :global(body) {
        background-color: #0a0a0a;
        color: #e5e5e5;
    }

    .project-detail-section {
        margin: 0 auto;
        padding: 2rem 1rem;
        max-width: 1100px;
        font-family: 'Inter', system-ui, sans-serif;
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
        padding: 0.5rem 1rem;
        border-radius: 6.25rem;
        font-size: 0.8rem;
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
    }

    .meta-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .meta-item .label { font-size: 0.8rem; }
    .meta-item .value { font-weight: 500; }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .gallery-item {
        border-radius: 16px;
        overflow: hidden;
        background: #171717;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    @media (min-width: 768px) {
        .header-content {
            grid-template-columns: 1fr auto;
            align-items: flex-end;
        }

        .content-grid {
            grid-template-columns: 250px 1fr;
        }

        .project-detail-section { padding: 4rem 2rem; }
    }
</style>
