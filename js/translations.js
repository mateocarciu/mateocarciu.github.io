// Translation system
const translations = {
	fr: {
		meta: {
			description: 'Mateo Carciu - Ingénieur Logiciel & Développeur Web'
		},
		nav: {
			work: 'EXPÉRIENCES',
			skills: 'COMPÉTENCES',
			projects: 'PROJETS',
			contact: 'CONTACT'
		},
		hero: {
			title: 'INGÉNIEUR<br />LOGICIEL',
			description: "Je m'appelle Mateo Carciu et je suis ingénieur logiciel avec une expertise en développement web et une passion pour créer des solutions technologiques innovantes.",
			contact: 'CONTACTEZ-MOI',
			portfolio: 'PORTFOLIO'
		},
		work: {
			title: 'EXPÉRIENCES',
			edics: {
				period: '2023 - 2025 (Alternance 2 ans)',
				title: 'Développeur Full Stack - EDiCS',
				tasks: [
					"<strong>Migration et développement d'une plateforme SaaS :</strong> Création et modernisation d'une application en utilisant Laravel pour le backend et Nuxt pour le frontend, améliorant la vitesse de chargement de 20 %.",
					'<strong>Maintenance continue :</strong> Gestion des mises à jour, ajout de nouvelles fonctionnalités, et résolution proactive de bugs.',
					'<strong>Assurance qualité :</strong> Mise en place de tests unitaires et revue de code.',
					"<strong>Amélioration de l'interface et de la robustesse :</strong> Intégration de Tailwind CSS afin de rendre la plateforme responsive et intuitive. Utilisation de TypeScript pour renforcer la fiabilité et la maintenabilité du code."
				]
			},
			education1: {
				period: '2023-2025',
				title: 'Master Ingénierie du Web',
				school: 'ESGI - Lyon'
			},
			education2: {
				period: '2022-2023',
				title: 'Licence Pro - Commercialisation des produits en ligne',
				school: 'Iut de Dijon - Dijon'
			},
			torsions: {
				period: '2022 - 2023 (Alternance 1 an)',
				title: 'Développeur Full stack - 10Torsions',
				tasks: [
					"<strong>Développement d'une solution de suivi client :</strong> Création d'un outil en PHP pour centraliser les données clients importées depuis des fichiers Excel grâce à des scripts, facilitant leur gestion par l'équipe marketing.",
					"<strong>Amélioration de la prospection :</strong> Mise en place d'un système de rappels automatisés pour un suivi régulier des prospects, réduisant de 30 % les oublis et augmentant les taux de conversion de 15 %.",
					'<strong>Optimisation des bases de données :</strong> Restructuration des tables volumineuses pour améliorer les temps de réponse et la fluidité des opérations.',
					"<strong>Modernisation de l'interface intranet :</strong> Refonte ergonomique et graphique pour accroître l'adoption de l'outil et améliorer la productivité des utilisateurs."
				]
			},
			eco: {
				period: '2022 (Stage 1 mois)',
				title: 'Développeur Full stack - Eco Cartouches',
				tasks: [
					"<strong>Développement d'une plateforme complète en PHP sans framework :</strong> Gestion centralisée des documents des salariés.",
					'<strong>Fonctionnalités principales :</strong> Ajout, modification, suppression, visualisation, et recherche de documents via une interface utilisateur intuitive.',
					'<strong>Virtualisation des archives :</strong> Remplacement des archives physiques par une plateforme en ligne accessible pour une meilleure organisation et accessibilité.',
					'<strong>Hébergement et déploiement :</strong> Configuration du serveur, création de la base de données, et mise en ligne du projet.',
					"<strong>Refonte du site vitrine :</strong> Restylisation complète et modernisation du site de l'entreprise, repensé et recréé de A à Z."
				]
			},
			education3: {
				period: '2020-2022',
				title: 'BTS SIO spécialité SLAM (Solutions Logicielles et Applications Métiers)',
				school: 'Lycée Mathias - Chalon-sur-Saône'
			}
		},
		skills: {
			title: 'COMPÉTENCES',
			backend: 'Back-end',
			frontend: 'Front-end',
			other: 'Autres compétences',
			visualComm: 'Communication Visuelle',
			agileMethod: 'Méthodologie Agile',
			backendDesc: 'PHP, Laravel, Symfony, SQL, MongoDB, Node.js',
			frontendDesc: 'Vue.js, Nuxt, TypeScript, Tailwind CSS, HTML , CSS',
			otherDesc: 'Git, GitLab, Jira, Tests unitaires, Revue de code'
		},
		projects: {
			title: 'PROJETS',
			zapit: {
				title: 'Zap It',
				description:
					'<a href="https://chromewebstore.google.com/detail/zap-it-web-page-editor/jdcgeigmekmfaakbjaafhhedfgaofmpd?hl=en-US&utm_source=ext_sidebar" target="_blank" class="text-pink-500">Zap It</a> est une extension Chrome permettant de modifier l\'apparence et le contenu des sites web. Elle offre la suppression d\'éléments (publicités, popups), la personnalisation des styles (couleurs, polices, opacité), et le stockage local des changements.<br /><br />Les modifications sont enregistrées par domaine et persistent entre les sessions. L\'extension utilise des sélecteurs CSS, y compris ceux de Tailwind CSS, et propose un aperçu en temps réel. L\'installation se fait en mode développeur Chrome, sans envoi de données vers des serveurs externes.'
			},
			kphotos: {
				title: 'kPhotos',
				description:
					'<a href="https://k-photos.nuxt.dev/" target="_blank" class="text-pink-500">kPhotos</a> est une application web réalisée avec Nuxt 4 et Vue.js, qui propose une alternative à Google Photos. Elle permet de parcourir et gérer les fichiers, photos et vidéos présents sur le drive Infomaniak via son API.<br /><br />L\'application affiche les fichiers avec leurs détails (taille, type, date de modification), regroupe les médias par date, propose le téléchargement des images et vidéos, des filtres par type et date, et un mode sombre.'
			},
			daywords: {
				title: 'Application mobile DayWords',
				description: '<a href="https://github.com/mateocarciu/DayWords" target="_blank" class="text-pink-500"> DayWords </a> est une application mobile développée en React Native. L\'idée est que l\'utilisateur puisse écrire une phrase, un texte ou un mot pour résumer sa journée. Il peut également démarrer un fil de discussion, ajouter des amis, voir les publications de ses amis et commenter celles-ci.'
			},
			justeprix: {
				title: 'Le Juste Prix',
				description:
					'<a href="https://github.com/mateocarciu/Juste-prix" target="_blank" class="text-pink-500"> Le Juste Prix </a> est une application web de jeu où les utilisateurs doivent deviner le prix exact d\'un objet affiché. Le projet est divisé en deux parties : une API backend développée avec Fastify et Sequelize, et une interface frontend développée avec Preact et Vite. Les fonctionnalités incluent l\'inscription et la connexion des utilisateurs, le mode sombre, la création et participation à des jeux, la devinette du prix, et les notifications en temps réel via Socket.IO.'
			},
			taxi: {
				title: 'Site vitrine de taxi',
				description: 'Création du site vitrine <a href="https://www.taxiroox71.fr/" target="_blank" class="text-pink-500"> TAXIROOX71 </a> lors du lancement de l\'entreprise afin d\'affirmer sa présence sur le web. Ce projet inclut la conception et le développement du site, ainsi que l\'optimisation du référencement pour améliorer la visibilité de l\'entreprise.'
			},
			ecoapp: {
				title: 'Plateforme de gestion centralisée de documents',
				description: "Développement d'une plateforme en PHP sans framework pour la gestion centralisée des documents des salariés et stagiaires de l'entreprise Eco Cartouches. Ce projet permet de créer, lire, mettre à jour et supprimer des documents via une interface utilisateur simple et intuitive. Les fonctionnalités incluent la gestion des utilisateurs et la recherche de documents."
			}
		},
		contact: {
			title: 'CONTACT',
			subtitle: 'Travaillons ensemble !',
			description: "Intéressé par la création d'expériences web uniques ? Contactez-moi pour discuter de votre projet.",
			form: {
				name: 'Votre nom',
				subject: 'Objet',
				email: 'Votre email',
				message: 'Votre message',
				submit: 'Envoyer le message'
			},
			notifications: {
				success: 'Message envoyé avec succès !',
				error: 'Une erreur inattendue est survenue.'
			}
		},
		footer: {
			copyright: '© 2025 - Mateo CARCIU'
		}
	},
	en: {
		meta: {
			description: 'Mateo Carciu - Software Engineer & Web Developer'
		},
		nav: {
			work: 'EXPERIENCE',
			skills: 'SKILLS',
			projects: 'PROJECTS',
			contact: 'CONTACT'
		},
		hero: {
			title: 'SOFTWARE<br />ENGINEER',
			description: 'My name is Mateo Carciu and I am a software engineer with expertise in web development and a passion for creating innovative technological solutions.',
			contact: 'CONTACT ME',
			portfolio: 'PORTFOLIO'
		},
		work: {
			title: 'EXPERIENCE',
			edics: {
				period: '2023 - 2025 (2-year work-study program)',
				title: 'Full Stack Developer - EDiCS',
				tasks: [
					'<strong>SaaS platform migration and development:</strong> Creation and modernization of an application using Laravel for backend and Nuxt for frontend, improving loading speed by 20%.',
					'<strong>Continuous maintenance:</strong> Managing updates, adding new features, and proactive bug resolution.',
					'<strong>Quality assurance:</strong> Implementation of unit tests and code review.',
					'<strong>Interface and robustness improvement:</strong> Integration of Tailwind CSS to make the platform responsive and intuitive. Use of TypeScript to enhance code reliability and maintainability.'
				]
			},
			education1: {
				period: '2023-2025',
				title: "Master's in Web Engineering",
				school: 'ESGI - Lyon'
			},
			education2: {
				period: '2022-2023',
				title: "Professional Bachelor's - Online Product Marketing",
				school: 'IUT de Dijon - Dijon'
			},
			torsions: {
				period: '2022 - 2023 (1-year work-study program)',
				title: 'Full Stack Developer - 10Torsions',
				tasks: [
					'<strong>Customer tracking solution development:</strong> Creation of a PHP tool to centralize customer data imported from Excel files through scripts, facilitating management by the marketing team.',
					'<strong>Prospecting improvement:</strong> Implementation of automated reminder system for regular prospect follow-up, reducing oversights by 30% and increasing conversion rates by 15%.',
					'<strong>Database optimization:</strong> Restructuring of large tables to improve response times and operation fluidity.',
					'<strong>Intranet interface modernization:</strong> Ergonomic and graphical redesign to increase tool adoption and improve user productivity.'
				]
			},
			eco: {
				period: '2022 (1-month internship)',
				title: 'Full Stack Developer - Eco Cartouches',
				tasks: [
					'<strong>Complete PHP platform development without framework:</strong> Centralized management of employee documents.',
					'<strong>Main features:</strong> Adding, modifying, deleting, viewing, and searching documents through an intuitive user interface.',
					'<strong>Archive virtualization:</strong> Replacement of physical archives with an accessible online platform for better organization and accessibility.',
					'<strong>Hosting and deployment:</strong> Server configuration, database creation, and project deployment.',
					'<strong>Showcase website redesign:</strong> Complete restyling and modernization of the company website, redesigned and recreated from scratch.'
				]
			},
			education3: {
				period: '2020-2022',
				title: 'BTS SIO specializing in SLAM (Software Solutions and Business Applications)',
				school: 'Lycée Mathias - Chalon-sur-Saône'
			}
		},
		skills: {
			title: 'SKILLS',
			backend: 'Back-end',
			frontend: 'Front-end',
			other: 'Other skills',
			visualComm: 'Visual Communication',
			agileMethod: 'Agile Methodology',
			backendDesc: 'PHP, Laravel, Symfony, SQL, MongoDB, Node.js',
			frontendDesc: 'Vue.js, Nuxt, TypeScript, Tailwind CSS, HTML, CSS',
			otherDesc: 'Git, GitLab, Jira, Unit testing, Code review'
		},
		projects: {
			title: 'PROJECTS',
			zapit: {
				title: 'Zap It',
				description:
					'<a href="https://chromewebstore.google.com/detail/zap-it-web-page-editor/jdcgeigmekmfaakbjaafhhedfgaofmpd?hl=en-US&utm_source=ext_sidebar" target="_blank" class="text-pink-500">Zap It</a> is a Chrome extension that allows you to modify the appearance and content of websites. It offers element removal (ads, popups), style customization (colors, fonts, opacity), and local storage of changes.<br /><br />Modifications are saved by domain and persist between sessions. The extension uses CSS selectors, including Tailwind CSS selectors, and provides real-time preview. Installation is done in Chrome developer mode, without sending data to external servers.'
			},
			kphotos: {
				title: 'kPhotos',
				description:
					'<a href="https://k-photos.nuxt.dev/" target="_blank" class="text-pink-500">kPhotos</a> is a web application built with Nuxt 4 and Vue.js, offering an alternative to Google Photos. It allows browsing and managing files, photos and videos from Infomaniak drive via its API.<br /><br />The application displays files with their details (size, type, modification date), groups media by date, offers downloading of images and videos, filters by type and date, and a dark mode.'
			},
			daywords: {
				title: 'DayWords Mobile Application',
				description: '<a href="https://github.com/mateocarciu/DayWords" target="_blank" class="text-pink-500"> DayWords </a> is a mobile application developed in React Native. The idea is that users can write a sentence, text or word to summarize their day. They can also start a discussion thread, add friends, view friends\' posts and comment on them.'
			},
			justeprix: {
				title: 'Le Juste Prix',
				description:
					'<a href="https://github.com/mateocarciu/Juste-prix" target="_blank" class="text-pink-500"> Le Juste Prix </a> is a web game application where users must guess the exact price of a displayed object. The project is divided into two parts: a backend API developed with Fastify and Sequelize, and a frontend interface developed with Preact and Vite. Features include user registration and login, dark mode, game creation and participation, price guessing, and real-time notifications via Socket.IO.'
			},
			taxi: {
				title: 'Taxi Showcase Website',
				description: 'Creation of the showcase website <a href="https://www.taxiroox71.fr/" target="_blank" class="text-pink-500"> TAXIROOX71 </a> during the company launch to establish its web presence. This project includes site design and development, as well as SEO optimization to improve the company\'s visibility.'
			},
			ecoapp: {
				title: 'Centralized Document Management Platform',
				description: 'Development of a PHP platform without framework for centralized management of employee and intern documents at Eco Cartouches company. This project allows creating, reading, updating and deleting documents through a simple and intuitive user interface. Features include user management and document search.'
			}
		},
		contact: {
			title: 'CONTACT',
			subtitle: "Let's work together!",
			description: 'Interested in creating unique web experiences? Contact me to discuss your project.',
			form: {
				name: 'Your name',
				subject: 'Subject',
				email: 'Your email',
				message: 'Your message',
				submit: 'Send message'
			},
			notifications: {
				success: 'Message sent successfully!',
				error: 'An unexpected error occurred.'
			}
		},
		footer: {
			copyright: '© 2025 - Mateo CARCIU'
		}
	}
}

// Language management
let currentLanguage = localStorage.getItem('language') || 'en'

function updateLanguage(lang) {
	currentLanguage = lang
	localStorage.setItem('language', lang)

	// Update all elements with data-translate attribute
	document.querySelectorAll('[data-translate]').forEach((element) => {
		const key = element.getAttribute('data-translate')
		const translation = getNestedTranslation(translations[lang], key)
		if (translation) {
			element.innerHTML = translation
		}
	})

	// Update all elements with data-translate-placeholder attribute
	document.querySelectorAll('[data-translate-placeholder]').forEach((element) => {
		const key = element.getAttribute('data-translate-placeholder')
		const translation = getNestedTranslation(translations[lang], key)
		if (translation) {
			element.placeholder = translation
		}
	})

	// Update meta elements with data-translate-content attribute
	document.querySelectorAll('[data-translate-content]').forEach((element) => {
		const key = element.getAttribute('data-translate-content')
		const translation = getNestedTranslation(translations[lang], key)
		if (translation) {
			element.content = translation
		}
	})

	// Update language toggle button
	const languageToggle = document.getElementById('languageToggle')
	if (languageToggle) {
		const currentText = lang === 'fr' ? 'FR | EN' : 'EN | FR'
		languageToggle.querySelector('span').textContent = currentText
	}

	// Update document language
	document.documentElement.lang = lang
}

function getNestedTranslation(obj, path) {
	return path.split('.').reduce((current, key) => {
		if (current && typeof current === 'object') {
			// Check if key is a number (array index)
			if (!isNaN(key)) {
				return current[parseInt(key)]
			}
			return current[key]
		}
		return current
	}, obj)
}

// Initialize language on page load
function initializeLanguage() {
	updateLanguage(currentLanguage)
}
