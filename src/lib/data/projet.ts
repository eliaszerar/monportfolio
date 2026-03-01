import aliceGuy from '$lib/assets/aliceGuy/aliceGuy.png';
import sportiz from '$lib/assets/sportiz/sportiz.png';
import miniblog from '$lib/assets/miniblog/miniblog.png';
import resaweb from '$lib/assets/resaweb/resaweb.png';
import truffaut from '$lib/assets/truffaut/truffaut.png';

// Imports des images de galeries
import aliceFirst from '$lib/assets/aliceGuy/firstAlice.png';
import aliceSecond from '$lib/assets/aliceGuy/second.png';
import aliceLast from '$lib/assets/aliceGuy/last.png';

import sportizImg1 from '$lib/assets/sportiz/img1.png';
import sportizImg2 from '$lib/assets/sportiz/img2.png';
import sportizImg3 from '$lib/assets/sportiz/img3.png';

import miniblogImg1 from '$lib/assets/miniblog/img1.png';
import miniblogImg2 from '$lib/assets/miniblog/img2.png';
import miniblogImg3 from '$lib/assets/miniblog/img3.png';

import resawebImg1 from '$lib/assets/resaweb/img1.png';
import resawebImg2 from '$lib/assets/resaweb/img2.png';
import resawebImg3 from '$lib/assets/resaweb/img3.png';

import truffautImg1 from '$lib/assets/truffaut/img1.png';
import truffautImg2 from '$lib/assets/truffaut/img2.png';
import truffautImg3 from '$lib/assets/truffaut/img3.png';

export interface Project {
	slug?: string;
	id: number;
	title: string;
	shortdescription?: string;
	description?: string;
	image: string;
	alt: string;
	link: string;
	year: string;
	tools: string[];
	// Mise à jour ici pour inclure l'attribut alt avec chaque image
	gallery: { src: string; alt: string }[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Alice Guy',
		shortdescription: 'Le site consacré à Alice Guy a été réalisé lors d’un projet collectif...',
		description:
			"Alice Guy est un site créé dans le cadre d'un projet universitaire collectif lors de ma deuxième année à la BUT MMI. L'objectif était de créer un site dédié à un personnage historique, en l'occurrence Alice Guy. Le site a été développé à l'aide de HTML, SASS, Javascript, GSAP pour les animations, Phaser.js pour le jeu et AJAX pour le chargement dynamique du contenu. Nous avons également utilisé PHP pour créer l'API et React pour créer le back-office. Ce projet m'a permis d'explorer différentes technologies et d'améliorer mes compétences en développement web.",
		image: aliceGuy,
		alt: 'Aperçu principal du site dédié à Alice Guy',
		link: 'https://aliceguyeu.tahar.projetsmmichamps.fr/',
		year: '2023',
		tools: ['HTML', 'SASS', 'JavaScript', 'GSAP', 'Phaser.js', 'PHP', 'React'],
		gallery: [
			{ src: aliceFirst, alt: "Interface d'accueil et animations du site Alice Guy" },
			{ src: aliceSecond, alt: 'Aperçu du jeu interactif développé avec Phaser.js' },
			{ src: aliceLast, alt: 'Vue du back-office réalisé en React pour la gestion du contenu' }
		],
		slug: 'aliceGuy'
	},
	{
		id: 2,
		title: 'Sportiz',
		shortdescription: 'Projet de groupe en BUT MMI : création d’un site de visualisation...',
		description:
			'Nous avons développé un site web qui présente des données sportives sous forme de visualisations graphiques interactives, principalement en utilisant la bibliothèque D3.js. Nous avons également dû créer des mentions légales détaillées pour assurer la crédibilité et la légalité de notre utilisation des données.',
		image: sportiz,
		alt: 'Maquette de présentation du projet Sportiz',
		link: 'https://eliaszerar.github.io/Sportiz/',
		year: '2024',
		tools: ['D3.js', 'HTML', 'CSS', 'JavaScript'],
		gallery: [
			{
				src: sportizImg1,
				alt: 'Visualisation graphique interactive de données sportives avec D3.js'
			},
			{ src: sportizImg2, alt: 'Interface utilisateur affichant des statistiques détaillées' },
			{ src: sportizImg3, alt: 'Aperçu du tableau de bord et des filtres de données' }
		],
		slug: 'sportiz'
	},
	{
		id: 3,
		title: 'Miniblog',
		shortdescription: 'Projet de groupe en BUT MMI : création d’un site de visualisation...',
		description:
			'Dans le cadre d’un projet individuel réalisé au 3ᵉ semestre du BUT MMI, j’ai conçu un blog en PHP en m’appuyant sur l’architecture MVC, ce qui m’a permis de mieux comprendre et maîtriser cette organisation de développement.\n' +
			'\n' +
			'Le blog propose plusieurs niveaux d’accès : un espace administrateur dédié à la gestion des articles, des utilisateurs et des commentaires ; un espace membre permettant aux utilisateurs connectés de publier des commentaires ; ainsi qu’un accès limité pour les visiteurs non connectés, qui peuvent uniquement consulter les articles.\n' +
			'Le site comprend aussi une page de profil personnalisée pour chaque utilisateur, présentant sa photo, son nom et diverses informations personnelles.\n' +
			'\n' +
			'Ce projet m’a permis de renforcer mes compétences en PHP et en gestion de bases de données, tout en mettant en place différentes mesures de sécurité.',
		image: miniblog,
		alt: "Aperçu de la page d'accueil du Miniblog",
		link: 'https://miniblog.zerar.butmmi.o2switch.site/index.php?action=home',
		year: '2024',
		tools: ['HTML', 'CSS', 'PHP', 'SQL', 'JAVASCRIPT'],
		gallery: [
			{ src: miniblogImg1, alt: "Liste des articles sur la page d'accueil du blog" },
			{ src: miniblogImg2, alt: "Espace d'administration sécurisé pour la gestion du contenu" },
			{
				src: miniblogImg3,
				alt: 'Page de profil utilisateur personnalisée avec informations de compte'
			}
		],
		slug: 'miniblog'
	},
	{
		id: 4,
		title: 'Resaweb',
		shortdescription: 'Projet de groupe en BUT MMI : création d’un site de visualisation...',
		description:
			'Dans le cadre de ma première année de BUT MMI, j’ai réalisé mon premier site web de réservation complètement fonctionnel en PHP, avec une base de données créée et gérée dans phpMyAdmin. Pour ce projet j’ai choisi de développer un site de location de motos : un service permettant aux utilisateurs de consulter différentes catégories de motos, de voir les détails et de réserver en ligne. Le site comprend toutes les pages et fonctionnalités demandées : • une page d’accueil présentant l’agence et ses services, • une page listant les motos disponibles, • une page avec les détails de chaque moto, • une barre de navigation, • un formulaire de réservation, • des mentions légales, un slider, • une barre de tri et une barre de recherche, • et l’envoi automatique d’un email après soumission du formulaire. Le site est entièrement fonctionnel et adapté à la navigation sur ordinateur et tablette. Ce projet a été particulièrement formateur car il m’a permis de concevoir un système de réservation complet en PHP, d’utiliser une base de données, et d’intégrer plusieurs langages web pour enrichir mes compétences en développement web.',
		image: resaweb,
		alt: "Page d'accueil du site de réservation de motos Resaweb",
		link: 'https://resaweb.zerar.butmmi.o2switch.site/',
		year: '2024',
		tools: ['HTML', 'CSS', 'PHP', 'SQL', 'JAVASCRIPT'],
		gallery: [
			{ src: resawebImg1, alt: 'Catalogue des motos disponibles avec barre de tri' },
			{ src: resawebImg2, alt: "Fiche détaillée d'une moto avec ses caractéristiques" },
			{ src: resawebImg3, alt: 'Formulaire de réservation en ligne interactif' }
		],
		slug: 'resaweb'
	},
	{
		id: 5,
		title: 'Refonte du site Truffaud',
		shortdescription: 'Projet de groupe en BUT MMI : création d’un site de visualisation...',
		description:
			'Dans le cadre d’un projet scolaire en UI/UX design réalisé en première année, nous avons travaillé en groupe de trois pour repenser l’interface de la page d’accueil du site de Truffaut, en utilisant l’outil Figma. Nous avons commencé par créer un moodboard afin de définir l’ambiance visuelle et l’univers graphique que nous souhaitions donner au site. Ensuite, nous avons conçu un wireframe pour reconstruire la structure principale tout en conservant les éléments essentiels de navigation. Notre objectif était de faire évoluer le design initial, plutôt minimaliste et sobre, vers une identité plus axée sur le bien-être et la détente. Pour finir, nous avons réalisé la maquette finale en intégrant des illustrations, des formes plus arrondies et une palette de couleurs plus chaleureuse, avec des tons rose-orangés. Nous avons conservé la présence du vert, mais dans une teinte moins froide. Ce projet nous a permis d’explorer différentes approches créatives, tout en renforçant nos compétences en UI/UX design et notre maîtrise de Figma.',
		image: truffaut,
		alt: 'Aperçu de la maquette de refonte du site Truffaut',
		link: 'https://miniblog.zerar.butmmi.o2switch.site/index.php?action=home',
		year: '2024',
		tools: ['Figma'],
		gallery: [
			{
				src: truffautImg1,
				alt: "Moodboard définissant l'ambiance visuelle et l'univers graphique"
			},
			{ src: truffautImg2, alt: "Wireframes de la nouvelle structure de la page d'accueil" },
			{ src: truffautImg3, alt: 'Maquette UI finale avec palette de couleurs chaleureuses' }
		],
		slug: 'truffaut'
	}
];
