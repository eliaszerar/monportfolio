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
					<h3 class="card-title">
						<a href="/project/{project.slug}">{project.title}</a>
					</h3>

					<div class="card-description-wrapper">
						<p class="card-description">
							{project.shortdescription}
						</p>
					</div>
					<p class="btn-discover">
						Découvrir le projet {project.title}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.projects-section {
		margin: 0 auto;
		padding: 4rem;
	}

	.section-title {
		text-align: center;
		color: #ffffff;
		font-size: 2.5rem;
		margin-bottom: 4rem;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		padding: 0;
		list-style: none;
	}

	.btn-discover {
		background: #d9764c;
		background: linear-gradient(90deg, rgba(217, 118, 76, 1) 0%, rgba(255, 0, 0, 1) 100%);
	}

	@media (min-width: 1024px) {
		.cards-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 3rem;
		}
	}

	.card {
		position: relative;
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

		.btn-discover {
			text-decoration: none;
			padding: 12px 15px 12px 15px;
			background-color: white;
			width: fit-content;
			color: white;
			border-radius: 1rem;
			margin-top: 0.5rem;
			margin-bottom: 0;
		}
	}

	.card-title {
		margin: 0;
		font-size: 1.5rem;

		a {
			text-decoration: none;
			color: inherit;
		}

		a::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.card-description {
		margin: 0;
		color: #a3a3a3;
		font-size: 1rem;
	}
</style>
