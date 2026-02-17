<script>
	import Button from '$lib/component/Button.svelte';
	import Avatar from '$lib/assets/avatar.png';
</script>

<section id="accueil" class="home">
	<div class="content">
		<h1>Bonjour je m'appelle <span>Elias</span></h1>
		<h2>Développeur <span>Web</span></h2>
		<p>
			Actuellement en Alterancce à Radiofrance en tant que developpeur web pour la platoforme ici.fr
		</p>
        <Button
                content="Lien de mon cv"
                link="Voir"
                href="/cv.pdf"
        />		<div class="introduction">
			<div class="intro-item">
				<h3>lorem+</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
					deleniti illo doloremque voluptatem, odio praesentium dolor.
				</p>
			</div>

			<div class="intro-item">
				<h3>lorem+</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
					deleniti illo doloremque voluptatem, odio praesentium dolor rem accusantium numquam ipsum
					vel quasi corrupti doloribus debitis voluptatibus.
				</p>
			</div>

			<div class="intro-item">
				<h3>lorem+</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
					deleniti illo doloremque voluptatem, odio praesentium dolor rem accusantium numquam ipsum
					vel quasi corrupti doloribus debitis voluptatibus.
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
	.home {
		font-family: 'Kameron', serif;
		display: flex;
        height: 100%;
        padding: 4rem;
		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 2.5rem;
			margin: 0;
		}
		h1,
		h2 {
			span {
				color: #ff530a;
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
		p {
			display: flex;
			flex-direction: column;
			max-width: 23.125rem;
		}
	}
	@media (min-width: 768px) {
		.introduction {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 3rem;
		}

		.intro-item {
			max-width: none;
		}
		.home {
			h1 {
				font-size: 1.8rem;
			}

			h2 {
				font-size: 3.5rem;
			}
			p {
				font-size: 1rem;
			}
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

			h2 {
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
