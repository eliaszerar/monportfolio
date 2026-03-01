<script>
	import Button from '$lib/component/Button.svelte';
	import Avatar from '$lib/assets/avatar.png';
	import EliasZerar from '$lib/assets/cv.pdf';
</script>

<section id="accueil" class="home">
	<div class="content">
		<h1>
			Bonjour je m'appelle <span>Elias</span>
			<span class="second-part">Développeur <span class="web">Web</span></span>
		</h1>
		<p>
			Actuellement en Alternance à RadioFrance en tant que développeur web pour la plateforme ici.fr
		</p>
		<Button content="Lien vers mon cv" link="Voir" href={EliasZerar} target="_blank" />
		<div class="introduction">
			<div class="intro-item">
				<h3>Développement Moderne</h3>
				<p>
					Je crée des interfaces fluides et réactives en utilisant les frameworks les plus récents.
					Mon objectif est d'allier performance technique et esthétique visuelle.
				</p>
			</div>

			<div class="intro-item">
				<h3>Expérience Radio France</h3>
				<p>
					Actuellement en alternance sur la plateforme ici.fr, je travaille sur des problématiques
					de haut trafic, garantissant une accessibilité et une robustesse optimales pour des
					milliers d'utilisateurs.
				</p>
			</div>

			<div class="intro-item">
				<h3>Esprit d'Équipe</h3>
				<p>
					Adepte des méthodes Agiles et du travail collaboratif via Git, je m'intègre facilement
					dans une équipe pour transformer des concepts Figma en solutions web concrètes.
				</p>
			</div>
		</div>
	</div>
	<div class="avatar-wrapper">
		<img src={Avatar} alt="" class="avatar" />
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&display=swap');
	.content {
		p {
			margin-bottom: 2rem;
		}
	}
	.home {
		font-family: 'Kameron', serif;
		display: flex;
		height: 100%;
		padding: 2rem;
		h1 {
			font-size: 1.5rem;
		}

		.second-part {
			font-size: 2.5rem;
			margin: 0;
			display: block;
		}
		h1 {
			.web,
			span:first-child {
				background: linear-gradient(90deg, #d9764c, #ff0000);
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
			}
		}
		p:first-child {
			font-size: 0.563rem;
		}
	}
	.avatar {
		display: none;
	}

	.avatar-wrapper {
		position: relative;
		height: 532px;
		margin-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.avatar-wrapper::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 150px;
		border: 2px solid white;
		border-radius: 50%;
		left: -19px;
		bottom: 231px;
	}

	/* cercle 2 */
	.avatar-wrapper::after {
		content: '';
		position: absolute;
		width: 150px;
		height: 150px;
		border: 2px solid white;
		border-radius: 50%;
		left: -19px;
		bottom: 248px;
	}

	.introduction {
        padding-top: 2rem;
		p {
			display: flex;
			flex-direction: column;
			max-width: 23.125rem;
		}
        h3 {
            display: inline-block;
            background: linear-gradient(90deg, #ff8a00, #ff003c);
            background-clip: text;
            color: transparent;
        }
	}
	@media (min-width: 768px) {
		.introduction {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 3rem;
			margin-top: 3rem;
            padding: 0;
		}

		.intro-item {
			max-width: none;
		}
		.home {
			h1 {
				font-size: 1.8rem;
			}

			.second-part {
				font-size: 3.5rem;
			}
			p {
				font-size: 1rem;
			}
			padding: 4rem;
		}
		.avatar-wrapper {
			position: relative;
			width: 429px;
			height: 532px;
			margin-top: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.avatar {
			width: 300px;
			border-radius: 50%;
			position: relative;
			z-index: 2;
			left: 104px;
			bottom: 61px;
			rotate: -4deg;
			display: block;
		}

		.avatar-wrapper::before {
			width: 425px;
			height: 447px;
			left: 44px;
			bottom: 124px;
		}

		.avatar-wrapper::after {
			content: '';
			width: 428px;
			height: 483px;
			left: 28px;
			bottom: 134px;
		}
	}
	@media (min-width: 1280px) {
		.home {
			h1 {
				font-size: 2.3rem;
			}

			.second-part {
				font-size: 5rem;
			}

			p {
				font-size: 1.4rem;
			}
		}

		.introduction {
			p {
				font-size: 1rem;
			}
		}
		.avatar-wrapper {
			width: 429px;
			height: 532px;
			margin-top: 2rem;
		}

		.avatar {
			width: 496px;
			border-radius: 50%;
			left: 102px;
			bottom: 55px;
			rotate: -2deg;
		}

		.avatar-wrapper::before {
			width: 558px;
			height: 606px;
			left: -6px;
			bottom: 32px;
		}

		.avatar-wrapper::after {
			width: 587px;
			height: 600px;
			left: 14px;
			bottom: -4px;
		}
	}
</style>
