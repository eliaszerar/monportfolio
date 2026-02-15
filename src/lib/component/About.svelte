<script>
</script>

<section>
	<div>
		<h2>A propos de moi</h2>
		<ul>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias</li>
		</ul>
	</div>

	<div class="activités">
		<h2>Activités</h2>
		<ul>
			<li>Jiu jitsu brésilien(2ans)</li>
			<li>Cor d’harmonie (pendant 15 ans)</li>
			<li>Orchestre (pendant 10 ans)</li>
			<li>Tir à la carabine (1ans )</li>
		</ul>
	</div>
	<div class="competences">
		<h2>Compétences</h2>
	</div>
	<div class="frontEnd">
		<h2>Front end</h2>
		<ul>
			<li>Svelte / React</li>
			<li>HTML / CSS / JavaScript</li>
			<li>Animations</li>
			<li>Accessibilité</li>
		</ul>
	</div>

	<div class="backEnd">
		<h2>Back end</h2>
		<ul>
			<li>PHP</li>
			<li>Node.js</li>
			<li>API REST</li>
			<li>Bases de données (MySQL)</li>
		</ul>
	</div>

	<div class="tools">
		<h2>Outils & environnement</h2>
		<ul>
			<li>Git / GitHub</li>
			<li>VS Code / Webstorm</li>
			<li>Figma</li>
			<li>Docker</li>
		</ul>
	</div>
	<div class="work">
		<h2>Méthode de travail</h2>
		<ul>
			<li>Autonomie</li>
			<li>Organisation</li>
			<li>Travail en équipe</li>
			<li>Veille technologique</li>
		</ul>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	section {
		display: grid;
		gap: 1rem;
		font-family: 'Montserrat', sans-serif;
		padding: 4rem;
		div {
			box-shadow: 0 -0.7px 0 0.3px #ffffff;
			padding: 2rem;
			background: rgba(26, 26, 26, 0.6);
			color: white;
			border-radius: 0.875rem;
			h2 {
				text-align: center;
				font-size: 1.375rem;
			}
			ul {
				list-style-type: none;
				padding: 0;
				li {
					margin-bottom: 1rem;
				}
			}
		}
	}
	@media (min-width: 650px) {
		section {
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			div:first-child {
				grid-column: 1 / 7;
				grid-row: 1/3;
			}
			.activités {
				grid-column: 7/11;
			}
			.work {
				grid-column: 7/11;
				grid-row: 1;
			}
			.competences {
				grid-column: 1/ -1;
			}
			.frontEnd {
				grid-column: 1/ 6;
			}
			.backEnd {
				grid-column: 6/11;
			}
			.tools {
				grid-column: 1/ -1;
			}
		}
	}
	@media (min-width: 1280px) {
		section {
			grid-template-columns: repeat(12, 1fr);
			div:first-child {
				grid-column: 1 / 7;
				grid-row: 1/3;
			}
			.competences {
				grid-column: 7/-1;
				grid-row: 1;
				padding: 1.25rem;
			}
			.frontEnd {
				grid-column: 7/10;
				grid-row: 2;
			}
			.backEnd {
				grid-column: 10/13;
				grid-row: 2;
			}

			.work {
				grid-column: 10/13;
				grid-row: 3;
			}
			.activités {
				grid-column: 1/7;
				grid-row: 3;
			}
			.tools {
				grid-column: 7/10;
				grid-row: 3;
			}
		}
	}
</style>
