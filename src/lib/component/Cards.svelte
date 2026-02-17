<script lang="ts">
    import { projects } from '$lib/data/projet';

</script>

<section id="projets" class="projects-section">
    <h2 class="section-title">Mes projets</h2>

    <div class="cards-grid">
        {#each projects as project (project.id)}
                <div class="card">
                        <img src={project.image} alt={project.alt} width="600" height="350" loading="lazy" />

                    <div class="card-content">
                        <h3 class="card-title">{project.title}</h3>

                        <div class="card-description-wrapper">
                            <p class="card-description">
                                {project.shortdescription}
                            </p>
                        </div>
                            <a href="/project/{project.slug}" class="btn-discover">                                Découvrir le projet {project.title}
                            </a>
                    </div>
                </div>
        {/each}
    </div>
</section>

<style>
    .projects-section {
        margin: 0 auto;
        padding: 4rem;
        font-family: system-ui, sans-serif;
    }

    .section-title {
        text-align: center;
        color: #ffffff;
        font-size: 2.5rem;
        margin-bottom: 4rem;
        font-family: serif;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        padding: 0;
        list-style: none;
    }

    @media (min-width: 1024px) {
        .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: rgba(26, 26, 26, 0.6);
        border-radius: 1rem;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.05);
        img {
            width: 100%;
            height: 100%;
        }
    }

    .card-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a{
            text-decoration: none;
            padding: 10px 13px 10px 13px;
            background-color: white;
            width: fit-content;
            color: black;
            border-radius: 1rem;
            margin-top: 0.5rem;
        }
    }

    .card-title {
        margin: 0;
        font-size: 1.5rem;
    }

    .card-description {
        margin: 0;
        color: #a3a3a3;
        font-size: 1rem;
    }



</style>
