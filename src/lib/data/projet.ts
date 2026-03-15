import aliceGuy from '$lib/assets/aliceGuy/aliceGuy.png';
import sportiz from '$lib/assets/sportiz/sportiz.png';
import miniblog from '$lib/assets/miniblog/miniblog.png';
import resaweb from '$lib/assets/resaweb/resaweb.png';
import truffaut from '$lib/assets/truffaut/truffaut.png';

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
	link?: string;
	year: string;
	tools: string[];
	gallery: { src: string; alt: string }[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Alice Guy',
		shortdescription: `Le site consacré à Alice Guy a été réalisé lors d'un projet collectif...`,
		description:
			"Alice Guy est un site créé dans le cadre d'un projet universitaire collectif lors de ma deuxième année à la BUT MMI. L'objectif était de concevoir un site dédié à cette pionnière du cinéma, en combinant storytelling visuel et interactivité. Le site a été développé en HTML, SASS et JavaScript, avec GSAP pour les animations, Phaser.js pour un jeu intégré et AJAX pour le chargement dynamique du contenu.\n\n" +
			"Nous avons également développé une API en PHP et un back-office complet en React pour la gestion du contenu. Ce projet collectif m'a permis d'explorer un large éventail de technologies, de mieux appréhender la collaboration en équipe et de renforcer mes compétences en développement web.",
		image: aliceGuy,
		alt: 'Aperçu principal du site dédié à Alice Guy',
		link: 'https://aliceguyeu.tahar.projetsmmichamps.fr/',
		year: '2024',
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
		shortdescription: `Projet de groupe en BUT MMI : création d'un site de visualisation...`,
		description:
			"Dans le cadre d'un projet de groupe en BUT MMI, nous avons développé un site web de visualisation de données sportives. L'ensemble des statistiques est présenté sous forme de graphiques interactifs, conçus principalement avec la bibliothèque D3.js, pour rendre la lecture des données claire et engageante.\n\n" +
			"Nous avons également rédigé des mentions légales détaillées encadrant l'utilisation des données sportives. Ce projet m'a permis de découvrir la dataviz et de comprendre les enjeux liés à la publication de données sur le web.",
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
		shortdescription: `Projet individuel en BUT MMI : conception d'un blog en PHP avec architecture MVC...`,
		description:
			"Dans le cadre d'un projet individuel réalisé au 3ᵉ semestre du BUT MMI, j'ai conçu un blog en PHP en m'appuyant sur l'architecture MVC. Le blog propose trois niveaux d'accès : un espace administrateur pour gérer articles, utilisateurs et commentaires ; un espace membre pour publier des commentaires ; et un accès visiteur limité à la lecture des articles.\n\n" +
			"Le site intègre également une page de profil personnalisée pour chaque utilisateur, avec photo, nom et informations personnelles. Ce projet m'a permis de renforcer mes compétences en PHP et en gestion de bases de données, tout en mettant en place différentes mesures de sécurité.",
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
		shortdescription: 'Premier site de réservation fonctionnel réalisé en PHP lors de ma première année...',
		description:
			"Dans le cadre de ma première année de BUT MMI, j'ai réalisé mon premier site web de réservation entièrement fonctionnel en PHP, avec une base de données gérée via phpMyAdmin. J'ai choisi de développer un service de location de motos permettant aux utilisateurs de consulter les catégories disponibles, de voir le détail de chaque moto et de réserver en ligne.\n\n" +
			"Le site regroupe toutes les fonctionnalités attendues : page d'accueil, catalogue avec tri et recherche, fiches détaillées, formulaire de réservation avec envoi automatique d'e-mail, slider et mentions légales. Ce projet m'a été particulièrement formateur pour concevoir un système complet en PHP et intégrer plusieurs langages web de manière cohérente.",
		image: resaweb,
		alt: "Page d'accueil du site de réservation de motos Resaweb",
		link: 'https://resaweb.zerar.butmmi.o2switch.site/',
		year: '2023',
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
		title: 'Refonte du site Truffaut',
		shortdescription: `Projet de groupe en BUT MMI : refonte UI/UX de la page d'accueil du site Truffaut sur Figma...`,
		description:
			"Dans le cadre d'un projet scolaire en UI/UX design réalisé en première année, nous avons travaillé en groupe de trois pour repenser l'interface de la page d'accueil du site Truffaut sur Figma. Nous avons commencé par un moodboard pour définir l'ambiance visuelle souhaitée, puis conçu un wireframe pour restructurer la page tout en conservant les éléments de navigation essentiels.\n\n" +
			"Notre objectif était de faire évoluer le design initial, sobre et minimaliste, vers une identité plus chaleureuse axée sur le bien-être. La maquette finale intègre des illustrations, des formes arrondies et une palette rose-orangée, tout en conservant le vert de la marque dans une teinte plus douce. Ce projet nous a permis d'explorer différentes approches créatives et de renforcer notre maîtrise de Figma.",
		image: truffaut,
		alt: 'Aperçu de la maquette de refonte du site Truffaut',
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
