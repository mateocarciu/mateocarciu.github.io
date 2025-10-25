// Theme management
function setInitialTheme() {
	// If the user has set a theme, use it
	if ('theme' in localStorage) {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	} else {
		// If the user hasn't set a theme, use the browser default
		localStorage.theme = 'light'
		document.documentElement.classList.remove('dark')
	}
}

// Navigation functionality
function initializeNavigation() {
	const menuToggle = document.getElementById('menuToggle')
	const mainMenu = document.getElementById('mainMenu')
	const navbar = document.getElementById('navbar')

	if (!menuToggle || !mainMenu || !navbar) return

	menuToggle.addEventListener('click', () => {
		const spans = menuToggle.querySelectorAll('span')
		mainMenu.classList.toggle('hidden') // Affiche/Cache le menu
		menuToggle.classList.toggle('active')

		// Animation des barres du burger pour former un "X"
		if (menuToggle.classList.contains('active')) {
			spans[0].classList.add('transform', 'rotate-45', 'translate-y-2')
			spans[1].classList.add('opacity-0')
			spans[2].classList.add('transform', '-rotate-45', '-translate-y-2')
			navbar.classList.add('bg-white/95', 'dark:bg-black')
			navbar.classList.remove('backdrop-blur-sm')
		} else {
			spans[0].classList.remove('transform', 'rotate-45', 'translate-y-2')
			spans[1].classList.remove('opacity-0')
			spans[2].classList.remove('transform', '-rotate-45', '-translate-y-2')
			navbar.classList.remove('bg-white/95', 'dark:bg-black')
			navbar.classList.add('backdrop-blur-sm')
		}

		if (menuToggle.classList.contains('active')) {
			const closeMenu = () => {
				mainMenu.classList.add('hidden')
				menuToggle.classList.remove('active')
				spans[0].classList.remove('transform', 'rotate-45', 'translate-y-2')
				spans[1].classList.remove('opacity-0')
				spans[2].classList.remove('transform', '-rotate-45', '-translate-y-2')
				navbar.classList.remove('bg-white/95', 'dark:bg-black')
				navbar.classList.add('backdrop-blur-sm')
			}

			document.addEventListener('click', (event) => {
				if (!mainMenu.contains(event.target) && !menuToggle.contains(event.target)) {
					closeMenu()
				}
			})

			mainMenu.querySelectorAll('a').forEach((link) => {
				link.addEventListener('click', closeMenu)
			})
		}
	})
}

// Smooth scroll for navigation links
function initializeSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			const targetId = this.getAttribute('href')

			if (targetId === '#') return

			const targetElement = document.querySelector(targetId)

			if (targetElement) {
				const navHeight = document.querySelector('nav').offsetHeight
				const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight

				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				})
			}
		})
	})
}

// Intersection Observer for animations
function initializeObserver() {
	const observerOptions = {
		threshold: 0.05,
		rootMargin: '0px 0px -50px 0px'
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove('opacity-0', 'translate-y-10')
				entry.target.classList.add('opacity-100', 'translate-y-0')
			}
		})
	}, observerOptions)

	// Observer for the sections
	document.querySelectorAll('section > div, .group').forEach((element) => {
		element.classList.add('transform', 'transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
		observer.observe(element)
	})
}

// Contact form handling
function initializeContactForm() {
	const contactForm = document.getElementById('contactForm')
	if (!contactForm) return

	contactForm.addEventListener('submit', function (e) {
		e.preventDefault()

		const formData = new FormData(this)

		fetch('https://www.eco-cartouches71.fr/contactM.php', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				if (response.ok) {
					this.reset()
					const successMessage = getNestedTranslation(translations[currentLanguage], 'contact.notifications.success')
					showNotification(successMessage, 'success')
				} else {
					const errorMessage = getNestedTranslation(translations[currentLanguage], 'contact.notifications.error')
					showNotification(errorMessage, 'error')
				}
			})
			.catch((error) => {
				console.error('Erreur réseau:', error)
			})
	})
}

// Show notification function
function showNotification(message, type) {
	const notification = document.createElement('div')
	notification.className = `
        fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white text-sm font-medium
        ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
        transition-transform transform scale-0
    `
	notification.innerText = message

	document.body.appendChild(notification)
	setTimeout(() => {
		notification.classList.add('scale-100')
	}, 50)

	setTimeout(() => {
		notification.classList.remove('scale-100')
		setTimeout(() => notification.remove(), 300)
	}, 4000)
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
	// Initialize theme
	setInitialTheme()

	// Initialize language
	if (typeof initializeLanguage === 'function') {
		initializeLanguage()
	}

	// Get DOM elements
	const themeToggle = document.getElementById('themeToggle')
	const languageToggle = document.getElementById('languageToggle')

	// Language toggle
	if (languageToggle && typeof updateLanguage === 'function') {
		languageToggle.addEventListener('click', () => {
			const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr'
			updateLanguage(newLanguage)
		})
	}

	// Theme toggle
	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			document.documentElement.classList.toggle('dark')
			localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
		})
	}

	// Initialize all functionality
	initializeNavigation()
	initializeSmoothScroll()
	initializeObserver()
	initializeContactForm()
})
