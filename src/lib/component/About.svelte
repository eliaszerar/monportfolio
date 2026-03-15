<script>
	import svelte from '$lib/assets/aboutscreen/svelte.png';
	import react from '$lib/assets/aboutscreen/react.png';
	import html from '$lib/assets/aboutscreen/html.png';
	import css from '$lib/assets/aboutscreen/css.png';
	import github from '$lib/assets/aboutscreen/github.png';
	import gsap from '$lib/assets/aboutscreen/gsap.png';
	import rgaa from '$lib/assets/aboutscreen/rgaa.png';
	import php from '$lib/assets/aboutscreen/php.png';
	import node from '$lib/assets/aboutscreen/node.png';
	import sql from '$lib/assets/aboutscreen/sql.png';
	import figma from '$lib/assets/aboutscreen/figma.png';
	import webstorm from '$lib/assets/aboutscreen/webstorm.png';
	import docker from '$lib/assets/aboutscreen/docker.png';
	import Opquast from '$lib/assets/opquast.pdf';
</script>

<section id="about">
	<div class="presentation">
		<h2>A propos de moi</h2>
		<p>
			Actuellement en 3ème année de <span>BUT MMI</span> à Champs-sur-Marne, je suis un développeur
			web passionné avec <span>1 an d'expérience</span>.
		</p>
		<p>
			Mon parcours m'a appris l'importance de l'<span>investissement</span> et de la
			<span>communication</span>, des valeurs que j'applique au quotidien. Toujours curieux, j'aime
			transformer des idées en interfaces <span>dynamiques</span> et <span>accessibles</span>.
		</p>
	</div>

	<div class="activités">
		<h2>Activités</h2>
		<ul>
			<li>Jiu jitsu brésilien (durée: 2 ans)</li>
			<li>Cor d’harmonie (durée: 15 ans)</li>
			<li>Orchestre (durée: 10 ans)</li>
			<li>Tir à la carabine (durée: 1 an)</li>
		</ul>
	</div>

	<div class="competences">
		<h2>Compétences</h2>
	</div>

	<div class="frontEnd">
		<h3>Front end</h3>
		<ul>
			<li>Svelte <img alt="" src={svelte} /> / React <img alt="" src={react} /></li>
			<li>HTML <img src={html} alt="" /> / CSS <img src={css} alt="" /></li>
			<li>Animations <img src={gsap} alt="" /></li>
			<li>Accessibilité <img src={rgaa} alt="" /></li>
			<li>
				Certification Opquast <a href={Opquast} target="_blank">Lien de la certification opquast</a>
			</li>
		</ul>
	</div>

	<div class="backEnd">
		<h3>Back end</h3>
		<ul>
			<li>PHP <img src={php} alt="" /></li>
			<li>Node.js (Express / API REST) <img src={node} alt="" /></li>
			<li>Bases de données (MySQL) <img src={sql} alt="" /></li>
		</ul>
	</div>

	<div class="tools">
		<h2>Outils & environnement</h2>
		<ul>
			<li>Git / GitHub <img src={github} alt="" /></li>
			<li>Webstorm <img src={webstorm} alt="" /></li>
			<li>Figma <img src={figma} alt="" /></li>
			<li>Docker <img src={docker} alt="" /></li>
		</ul>
	</div>

	<div class="work">
		<h2>Méthode de travail</h2>
		<ul>
			<li>Prise de notes</li>
			<li>Organisation (méthode Agile scrum scrumban)</li>
			<li>Travail en équipe</li>
			<li>Veille technologique</li>
		</ul>
	</div>
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		padding: 4rem;
		div {
			box-shadow: 0 -0.7px 0 0.3px #ffffff;
			padding: 2rem;
			background: rgba(26, 26, 26, 0.6);
			color: white;
			border-radius: 0.875rem;
			justify-content: center;
			text-align: center;
			li {
				text-align: left;
				a {
					color: white;
				}
			}
			p {
				text-align: left;
			}
			span {
				color: orangered;
			}
			h2 {
				display: inline-block;
				background: linear-gradient(90deg, #ff8a00, #ff003c);
				background-clip: text;
				color: transparent;
				font-size: 1.4rem;
			}
			ul {
				list-style-type: none;
				padding: 0;
				li {
					margin-bottom: 1rem;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					gap: 0.5rem;
					img {
						height: 1.2em;
						vertical-align: middle;
						margin: 0 5px;
						object-fit: contain;
					}
				}
			}
		}
		.presentation {
			p {
				font-size: 1.1rem;
				line-height: 1.7;
				margin-bottom: 1.2rem;
				color: #e0e0e0;
				font-weight: 400;
			}

			p:last-child {
				margin-bottom: 0;
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
