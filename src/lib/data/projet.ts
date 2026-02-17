import aliceGuy from '$lib/assets/aliceGuy.png';
import sportiz from '$lib/assets/sportiz.png';

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
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Alice Guy",
        shortdescription: "Le site consacré à Alice Guy a été réalisé lors d’un projet collectif...",
        description: "Alice Guy est un site créé dans le cadre d'un projet universitaire collectif lors de ma deuxième année à la BUT MMI. L'objectif était de créer un site dédié à un personnage historique, en l'occurrence Alice Guy. Le site a été développé à l'aide de HTML, SASS, Javascript, GSAP pour les animations, Phaser.js pour le jeu et AJAX pour le chargement dynamique du contenu. Nous avons également utilisé PHP pour créer l'API et React pour créer le back-office. Ce projet m'a permis d'explorer différentes technologies et d'améliorer mes compétences en développement web.",
        image: aliceGuy,
        alt: "Aperçu du site sur aliceGuy",
        link: "https://aliceguy.eu/",
        year: "2023",
        tools: ["HTML", "SASS", "JavaScript", "GSAP", "Phaser.js", "PHP", "React"],
        gallery: [aliceGuy, aliceGuy],
        slug: "aliseGuy"
    },
    {
        id: 2,
        title: "Sportiz",
        shortdescription: 'Projet de groupe en BUT MMI : création d’un site de visualisation...',
        description: "Nous avons développé un site web qui présente des données sportives sous forme de visualisations graphiques interactives, principalement en utilisant la bibliothèque D3.js. Nous avons également dû créer des mentions légales détaillées pour assurer la crédibilité et la légalité de notre utilisation des données.",
        image: sportiz,
        alt: "Aperçu du site Sportiz",
        link: "https://eliaszerar.github.io/Sportiz/",
        year: "2024",
        tools: ["D3.js", "HTML", "CSS", "JavaScript"],
        gallery: [sportiz, sportiz, sportiz],
        slug: "sportiz"
    }
];
