document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false
    });

    sr.reveal('.hero-content', {
        delay: 200,
        opacity: 0
    });

    sr.reveal('.skill-item', {
        interval: 200,
        opacity: 0
    });

    sr.reveal('.portfolio-item', {
        interval: 200,
        opacity: 0
    });

    sr.reveal('#aboutPhotoContainer', {
        delay: 400,
        opacity: 0
    });

    sr.reveal('#contact', {
        delay: 600,
        opacity: 0,
        distance: '50px'
    });

    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.gradient-text',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
    }, '-=10000')
    .add({
        targets: '#typewriter',
        width: [0, '100%'],
        duration: 2000,
        delay: 1000,
        easing: 'linear',
    }, '-=1500');

    const typewriterElement = document.getElementById('typewriter');
    const texts = ['Web Developer', 'AI Engineer', 'UI/UX Designer', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }

    typeWriter();

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width;
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-item').forEach(item => {
        skillObserver.observe(item);
    });

    const magneticButtons = document.querySelectorAll('.magnetic-button');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // Dark Mode Toggle - Simple and Direct Approach
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeIcon = darkModeToggle.querySelector('i');

        // Check saved preference or system preference
        const savedDarkMode = localStorage.getItem('darkMode');
        const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDarkMode = savedDarkMode === 'true' || (!savedDarkMode && systemDarkMode);

        // Apply initial theme
        if (shouldUseDarkMode) {
            htmlElement.classList.add('dark');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        }

        console.log('Initial dark mode state:', shouldUseDarkMode);
        console.log('HTML classes:', htmlElement.className);

        // Toggle dark mode
        darkModeToggle.addEventListener('click', function() {
            console.log('Toggle clicked!');
            const isDark = htmlElement.classList.toggle('dark');
            localStorage.setItem('darkMode', isDark);

            // Update icon
            if (isDark) {
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }

            console.log('Dark mode toggled to:', isDark);
            console.log('HTML classes now:', htmlElement.className);

            // Simple animation
            anime({
                targets: darkModeIcon,
                rotate: [0, 360],
                duration: 500,
                easing: 'easeInOutQuad'
            });
        });
    });

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        anime({
            targets: mobileMenu,
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'dark:text-blue-400');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600', 'dark:text-blue-400');
            }
        });
    });

    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach((item, index) => {
        anime({
            targets: item,
            scale: [0.9, 1],
            opacity: [0, 1],
            translateY: [50, 0],
            delay: index * 100,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });

    const contactForm = document.getElementById('contactForm');

    const downloadButton = document.querySelector('button:has(.fa-download)');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const originalHTML = downloadButton.innerHTML;
            showLoadingState(downloadButton);

            anime({
                targets: downloadButton,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeInOutQuad'
            });

            // Simulate download process
            setTimeout(() => {
                hideLoadingState(downloadButton, originalHTML);
                console.log('CV download initiated');

                // Create download link
                const link = document.createElement('a');
                link.href = '#'; // Replace with actual CV file
                link.download = 'Albert_Assidiq_CV.pdf';
                link.click();
            }, 1500);
        });
    }

    // Add loading state to contact form submission
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalSubmitHTML = submitButton.innerHTML;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            showLoadingState(submitButton);

            anime({
                targets: contactForm,
                scale: [1, 0.98, 1],
                duration: 200,
                easing: 'easeInOutQuad',
                complete: () => {
                    const formData = new FormData(contactForm);
                    const data = Object.fromEntries(formData);

                    console.log('Form submitted:', data);

                    contactForm.reset();

                    const successMessage = document.createElement('div');
                    successMessage.className = 'mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg';
                    successMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                    contactForm.appendChild(successMessage);

                    anime({
                        targets: successMessage,
                        opacity: [0, 1],
                        translateY: [-20, 0],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });

                    hideLoadingState(submitButton, originalSubmitHTML);

                    setTimeout(() => {
                        anime({
                            targets: successMessage,
                            opacity: [1, 0],
                            translateY: [0, -20],
                            duration: 500,
                            easing: 'easeInQuad',
                            complete: () => {
                                successMessage.remove();
                            }
                        });
                    }, 5000);
                }
            });
        });
    }

    const techStackIcons = document.querySelectorAll('.tech-stack-icon');

    techStackIcons.forEach((icon, index) => {
        anime({
            targets: icon,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: index * 100,
            duration: 800,
            easing: 'easeOutExpo'
        });
    });

    window.addEventListener('load', () => {
        anime({
            targets: 'body',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
        });

        // Initialize network particles
        initParticleCanvas();
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    const statsNumbers = document.querySelectorAll('.text-3xl.font-bold.gradient-text');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const finalNumber = parseInt(entry.target.textContent);
                let currentNumber = 0;
                const increment = finalNumber / 50;

                const updateNumber = () => {
                    if (currentNumber < finalNumber) {
                        currentNumber += increment;
                        entry.target.textContent = Math.ceil(currentNumber) + (entry.target.textContent.includes('+') ? '+' : '');
                        requestAnimationFrame(updateNumber);
                    } else {
                        entry.target.textContent = finalNumber + (entry.target.textContent.includes('+') ? '+' : '');
                    }
                };

                updateNumber();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            darkModeToggle.click();
        }

        // Ctrl/Cmd + K to focus search (if implemented in future)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Future search functionality
        }

        // ESC to close mobile menu
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Add loading states for better UX
    function showLoadingState(element) {
        element.disabled = true;
        element.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Loading...';
    }

    function hideLoadingState(element, originalHTML) {
        element.disabled = false;
        element.innerHTML = originalHTML;
    }

    // Add smooth reveal animation for elements when they come into viewport
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Add micro-interactions for better user experience
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            anime({
                targets: element,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        element.addEventListener('mouseleave', () => {
            anime({
                targets: element,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });

    
    // Alternative dark mode toggle setup
    function setupDarkMode() {
        const toggle = document.getElementById('darkModeToggle');
        const html = document.documentElement;
        const body = document.getElementById('app-body');

        if (!toggle) return;

        // Check initial state
        const isDark = html.classList.contains('dark');
        const icon = toggle.querySelector('i');
        if (isDark && icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        // Force apply dark mode styles
        function applyDarkModeStyles(isDark) {
            if (isDark) {
                body.style.backgroundColor = '#0f172a';
                body.style.color = '#e2e8f0';

                // Force home section background
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.style.backgroundColor = '#0f172a';
                    const absoluteBg = homeSection.querySelector('.absolute');
                    if (absoluteBg) {
                        absoluteBg.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
                    }
                }

                // Force skill tags dark mode (Skills section + Portfolio section)
                const skillTags = document.querySelectorAll('.bg-blue-100, .bg-green-100, .bg-yellow-100, .bg-red-100, .bg-purple-100, .bg-indigo-100, .bg-pink-100, [class*="dark:bg-blue-900"]');
                skillTags.forEach(tag => {
                    tag.style.backgroundColor = '#1e3a8a';
                    tag.style.color = '#93c5fd';
                });

                // Force skill text dark mode
                const skillTexts = document.querySelectorAll('.text-blue-800, .text-green-800, .text-yellow-800, .text-red-800, .text-purple-800, .text-indigo-800, .text-pink-800, [class*="dark:text-blue-200"]');
                skillTexts.forEach(text => {
                    text.style.color = '#93c5fd';
                });

                // Force general skill text
                const generalSkillTexts = document.querySelectorAll('.text-gray-700');
                generalSkillTexts.forEach(text => {
                    text.style.color = '#e2e8f0';
                });

                // Force portfolio section skill text
                const portfolioSkillTexts = document.querySelectorAll('.text-gray-600');
                portfolioSkillTexts.forEach(text => {
                    text.style.color = '#cbd5e1';
                });
            } else {
                body.style.backgroundColor = '';
                body.style.color = '';

                // Reset home section
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.style.backgroundColor = '';
                    const absoluteBg = homeSection.querySelector('.absolute');
                    if (absoluteBg) {
                        absoluteBg.style.background = '';
                    }
                }

                // Reset skill tags
                const skillTags = document.querySelectorAll('.bg-blue-100, .bg-green-100, .bg-yellow-100, .bg-red-100, .bg-purple-100, .bg-indigo-100, .bg-pink-100, [class*="dark:bg-blue-900"]');
                skillTags.forEach(tag => {
                    tag.style.backgroundColor = '';
                    tag.style.color = '';
                });

                // Reset skill text
                const skillTexts = document.querySelectorAll('.text-blue-800, .text-green-800, .text-yellow-800, .text-red-800, .text-purple-800, .text-indigo-800, .text-pink-800, [class*="dark:text-blue-200"]');
                skillTexts.forEach(text => {
                    text.style.color = '';
                });

                // Reset general skill text
                const generalSkillTexts = document.querySelectorAll('.text-gray-700');
                generalSkillTexts.forEach(text => {
                    text.style.color = '';
                });

                // Reset portfolio section skill text
                const portfolioSkillTexts = document.querySelectorAll('.text-gray-600');
                portfolioSkillTexts.forEach(text => {
                    text.style.color = '';
                });
            }
        }

        // Apply initial dark mode styles
        applyDarkModeStyles(isDark);

        // Setup click handler
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const wasDark = html.classList.toggle('dark');
            localStorage.setItem('darkMode', wasDark);

            // Apply styles immediately
            applyDarkModeStyles(wasDark);

            // Update icon
            const iconEl = this.querySelector('i');
            if (wasDark) {
                iconEl.classList.remove('fa-moon');
                iconEl.classList.add('fa-sun');
            } else {
                iconEl.classList.remove('fa-sun');
                iconEl.classList.add('fa-moon');
            }

            // Animate
            anime({
                targets: iconEl,
                rotate: [0, 360],
                duration: 500,
                easing: 'easeInOutQuad'
            });
        });
    }

    // Setup when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDarkMode);
    } else {
        setupDarkMode();
    }

    // Load portfolio from JSON
    async function loadPortfolio() {
        try {
            const response = await fetch('portfolio.json');
            const data = await response.json();
            renderPortfolio(data.projects);
        } catch (error) {
            console.error('Error loading portfolio:', error);
            // Fallback to empty state or error message
            document.getElementById('portfolio-grid').innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500 dark:text-gray-400">Portfolio data unavailable</p>
                </div>
            `;
        }
    }

    // Load about photo dynamically
    async function loadAboutPhoto() {
        const aboutPhotoImage = document.getElementById('aboutPhotoImage');
        const aboutPhotoIcon = document.getElementById('aboutPhotoIcon');
        const aboutPhoto = document.getElementById('aboutPhoto');
        const aboutPhotoContainer = document.getElementById('aboutPhotoContainer');

        try {
            // Try to load the photo from foto/foto.png
            const img = new Image();
            img.onload = function() {
                // Get the natural dimensions of the image
                const aspectRatio = img.naturalWidth / img.naturalHeight;

                aboutPhotoImage.src = 'foto/foto.png';
                aboutPhotoImage.classList.remove('hidden');
                aboutPhotoIcon.classList.add('hidden');
                aboutPhoto.classList.remove('bg-gradient-to-br', 'from-purple-400', 'to-pink-400');

                // Reset any height classes and let JavaScript control the height
                aboutPhoto.classList.remove('h-80', 'h-96', 'h-112');

                // Always use object-cover to fill the container properly
                aboutPhotoImage.classList.remove('object-contain');
                aboutPhotoImage.classList.add('object-cover');

                // Add dynamic background based on image colors
                setTimeout(() => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    ctx.drawImage(img, 0, 0);

                    // Sample colors from the image edges
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const pixels = imageData.data;

                    // Find dominant colors for gradient background
                    let r = 0, g = 0, b = 0, count = 0;

                    // Sample edge pixels to avoid transparent areas
                    for (let i = 0; i < pixels.length; i += 4) {
                        const x = (i / 4) % canvas.width;
                        const y = Math.floor((i / 4) / canvas.width);

                        // Sample from edges
                        if (x < 50 || x > canvas.width - 50 || y < 50 || y > canvas.height - 50) {
                            if (pixels[i + 3] > 0) { // Only sample non-transparent pixels
                                r += pixels[i];
                                g += pixels[i + 1];
                                b += pixels[i + 2];
                                count++;
                            }
                        }
                    }

                    if (count > 0) {
                        r = Math.floor(r / count);
                        g = Math.floor(g / count);
                        b = Math.floor(b / count);

                        // Create complementary gradient background
                        aboutPhoto.style.background = `linear-gradient(135deg,
                            rgba(${r}, ${g}, ${b}, 0.1) 0%,
                            rgba(${255-r}, ${255-g}, ${255-b}, 0.1) 100%)`;
                    }
                }, 100);

                // Set initial state
                anime.set('#aboutPhotoContainer', {
                    opacity: 0
                });

                // Set up Intersection Observer for scroll-based fade in
                const photoObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Fade in when scrolled into view
                            anime({
                                targets: '#aboutPhotoContainer',
                                opacity: [0, 1],
                                duration: 800,
                                easing: 'easeOutQuad',
                                complete: function() {
                                    // Set final state for image
                                    anime.set('#aboutPhotoImage', {
                                        opacity: 1
                                    });
                                }
                            });
                        }
                    });
                }, {
                    threshold: 0.2,
                    rootMargin: '0px 0px -50px 0px' // Trigger a bit earlier
                });

                photoObserver.observe(aboutPhotoContainer);

                // Call height matching after photo loads
                setTimeout(matchPhotoHeightWithContent, 200);
            };

            img.onerror = function() {
                console.log('Photo not found, keeping default icon');
                // Keep the default icon and gradient background
                // Still match height with content
                setTimeout(matchPhotoHeightWithContent, 200);
            };

            img.src = 'foto/foto.png';

        } catch (error) {
            console.error('Error loading about photo:', error);
            // Keep the default icon and gradient background
        }
    }

    // Render portfolio items
    function renderPortfolio(projects) {
        const portfolioGrid = document.getElementById('portfolio-grid');
        portfolioGrid.innerHTML = '';

        projects.forEach((project, index) => {
            const portfolioItem = createPortfolioItem(project, index);
            portfolioGrid.appendChild(portfolioItem);
        });

        // Apply simple fade-in animations to new items
        const newItems = portfolioGrid.querySelectorAll('.portfolio-item');
        newItems.forEach((item, index) => {
            // Simple fade-in only
            anime({
                targets: item,
                opacity: [0, 1],
                delay: index * 100,
                duration: 600,
                easing: 'easeOutQuad'
            });
        });
    }

    // Create individual portfolio item HTML
    function createPortfolioItem(project, index) {
        const item = document.createElement('div');
        item.className = 'portfolio-item card-hover bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg';

        // Build tech stack badges
        const techStackHtml = project.techStack.map(tech =>
            `<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">${tech}</span>`
        ).join('');

        // Build action buttons with conditional display
        let actionButtons = '<div class="flex flex-wrap gap-4">';

        if (project.liveDemo) {
            actionButtons += `
                <a href="${project.liveDemo}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline portfolio-demo">
                    <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
            `;
        }

        if (project.github) {
            actionButtons += `
                <a href="${project.github}" target="_blank" class="text-gray-600 dark:text-gray-400 hover:underline portfolio-github">
                    <i class="fab fa-github mr-1"></i> Code
                </a>
            `;
        }

        if (!project.liveDemo && !project.github) {
            actionButtons = '<div class="text-gray-500 dark:text-gray-400 text-sm">Coming Soon</div>';
        }

        actionButtons += '</div>';

        // Get current title and description based on language
        const currentTitle = project.title[currentLanguage] || project.title.en;
        const currentDesc = project.description[currentLanguage] || project.description.en;

        item.innerHTML = `
            <div class="h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden">
                ${project.image ?
                    `<img src="${project.image}" alt="${currentTitle}" class="w-full h-full object-cover object-top">` :
                    `<i class="fas ${project.icon} text-white text-6xl"></i>`
                }
            </div>
            <div class="p-6">
                <h3 class="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white portfolio-title" data-project-id="${project.id}">${currentTitle}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 portfolio-desc">${currentDesc}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${techStackHtml}
                </div>
                ${actionButtons}
            </div>
        `;

        return item;
    }

    // Initialize portfolio and about photo when page loads
    loadPortfolio();
    loadAboutPhoto();

    // Language system
    let currentLanguage = 'en'; // Default language
    let translations = {};

    // Load translations
    async function loadTranslations() {
        try {
            const response = await fetch('translations.json');
            const data = await response.json();
            translations = data.translations;

            // Check for saved language preference
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && translations[savedLang]) {
                currentLanguage = savedLang;
            }

            updateLanguage();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    // Update all text content based on current language
    function updateLanguage() {
        if (!translations[currentLanguage]) return;

        const t = translations[currentLanguage];

        // Update navigation
        document.querySelectorAll('[data-translate="nav.home"]').forEach(el => el.textContent = t.nav.home);
        document.querySelectorAll('[data-translate="nav.about"]').forEach(el => el.textContent = t.nav.about);
        document.querySelectorAll('[data-translate="nav.skills"]').forEach(el => el.textContent = t.nav.skills);
        document.querySelectorAll('[data-translate="nav.portfolio"]').forEach(el => el.textContent = t.nav.portfolio);
        document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => el.textContent = t.nav.contact);

        // Update hero section
        const heroGreeting = document.querySelector('[data-translate="hero.greeting"]');
        if (heroGreeting) heroGreeting.textContent = t.hero.greeting;

        const heroDescription = document.querySelector('[data-translate="hero.description"]');
        if (heroDescription) heroDescription.textContent = t.hero.description;

        // Update page titles
        const aboutTitle = document.querySelector('#about h2 span');
        if (aboutTitle) aboutTitle.textContent = t.about.title;

        const aboutSubtitle = document.querySelector('#about h3');
        if (aboutSubtitle) aboutSubtitle.textContent = t.about.subtitle;

        const aboutDesc1 = document.querySelector('#about p:nth-of-type(1)');
        if (aboutDesc1) aboutDesc1.textContent = t.about.description1;

        const aboutDesc2 = document.querySelector('#about p:nth-of-type(2)');
        if (aboutDesc2) aboutDesc2.textContent = t.about.description2;

        // Update traits
        const traits = document.querySelectorAll('#about .grid.grid-cols-2 .flex span:last-child');
        if (traits[0]) traits[0].textContent = t.about.traits.problemSolver;
        if (traits[1]) traits[1].textContent = t.about.traits.teamPlayer;
        if (traits[2]) traits[2].textContent = t.about.traits.fastLearner;
        if (traits[3]) traits[3].textContent = t.about.traits.detailOriented;

        // Update stats
        const stats = document.querySelectorAll('#about .text-center div:last-child');
        if (stats[0]) stats[0].textContent = t.about.stats.projects;
        if (stats[1]) stats[1].textContent = t.about.stats.years;
        if (stats[2]) stats[2].textContent = t.about.stats.clients;

        // Update skills section
        const skillsTitle = document.querySelector('#skills h2 span');
        if (skillsTitle) skillsTitle.textContent = t.skills.title;

        // Update project categories
        const frontendProjects = document.querySelector('[data-translate="skills.frontend"]');
        if (frontendProjects) frontendProjects.textContent = t.skills.frontend;

        const backendProjects = document.querySelector('[data-translate="skills.backend"]');
        if (backendProjects) backendProjects.textContent = t.skills.backend;

        const aiProjects = document.querySelector('[data-translate="skills.ai"]');
        if (aiProjects) aiProjects.textContent = t.skills.ai;

        // Update portfolio section
        const portfolioTitle = document.querySelector('#portfolio h2 span');
        if (portfolioTitle) portfolioTitle.textContent = t.portfolio.title;

        // Update contact section
        document.querySelectorAll('[data-translate="contact.title"]').forEach(el => el.textContent = t.contact.title);

        document.querySelectorAll('[data-translate="contact.subtitle"]').forEach(el => el.textContent = t.contact.subtitle);

        document.querySelectorAll('[data-translate="contact.description"]').forEach(el => el.textContent = t.contact.description);

        document.querySelectorAll('[data-translate="contact.whatsappChat"]').forEach(el => el.textContent = t.contact.whatsappChat);

        document.querySelectorAll('[data-translate="contact.sendEmail"]').forEach(el => el.textContent = t.contact.sendEmail);

        document.querySelectorAll('[data-translate="contact.otherWays"]').forEach(el => el.textContent = t.contact.otherWays);

        document.querySelectorAll('[data-translate="contact.githubDesc"]').forEach(el => el.textContent = t.contact.githubDesc);

        document.querySelectorAll('[data-translate="contact.linkedinDesc"]').forEach(el => el.textContent = t.contact.linkedinDesc);

        document.querySelectorAll('[data-translate="contact.mediumDesc"]').forEach(el => el.textContent = t.contact.mediumDesc);

        // Update copyright
        const copyright = document.querySelector('.text-center .inline-flex span:nth-child(2)');
        if (copyright) copyright.textContent = t.copyright;

        // Update portfolio items
        updatePortfolioItems();
    }

    // Update portfolio items text
    function updatePortfolioItems() {
        if (!translations[currentLanguage]) return;

        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const titleEl = item.querySelector('.portfolio-title');
            const descEl = item.querySelector('.portfolio-desc');
            const demoBtn = item.querySelector('.portfolio-demo');
            const githubBtn = item.querySelector('.portfolio-github');

            if (titleEl && titleEl.dataset.projectId) {
                const projectId = parseInt(titleEl.dataset.projectId);
                loadPortfolioTexts(projectId, titleEl, descEl, demoBtn, githubBtn);
            }
        });
    }

    // Load portfolio texts for specific project
    async function loadPortfolioTexts(projectId, titleEl, descEl, demoBtn, githubBtn) {
        try {
            const response = await fetch('portfolio.json');
            const data = await response.json();
            const project = data.projects.find(p => p.id === projectId);

            if (project) {
                if (titleEl) titleEl.textContent = project.title[currentLanguage] || project.title.en;
                if (descEl) descEl.textContent = project.description[currentLanguage] || project.description.en;

                if (demoBtn) {
                    const viewDemoText = translations[currentLanguage]?.portfolio?.viewDemo || 'View Live Demo';
                    demoBtn.innerHTML = `<i class="fas fa-external-link-alt mr-1"></i> ${viewDemoText}`;
                }

                if (githubBtn) {
                    const viewGithubText = translations[currentLanguage]?.portfolio?.viewGithub || 'View on GitHub';
                    githubBtn.innerHTML = `<i class="fab fa-github mr-1"></i> ${viewGithubText}`;
                }
            }
        } catch (error) {
            console.error('Error loading portfolio texts:', error);
        }
    }

    // Language toggle functionality
    document.getElementById('langToggle').addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
        localStorage.setItem('preferredLanguage', currentLanguage);
        updateLanguage();

        // Update button text
        this.innerHTML = `<i class="fas fa-language"></i> ${currentLanguage.toUpperCase()}`;
    });

    // Initialize language system
    loadTranslations();

    // Match photo height with text content height
    function matchPhotoHeightWithContent() {
        const aboutPhotoContainer = document.getElementById('aboutPhotoContainer');
        const aboutPhoto = document.getElementById('aboutPhoto');
        const aboutTextContent = document.querySelector('#about .grid.md\\:grid-cols-2 > div:last-child');

        if (aboutPhotoContainer && aboutPhoto && aboutTextContent) {
            // Check if mobile view
            const isMobile = window.innerWidth < 768; // md breakpoint

            if (isMobile) {
                // Mobile: Make it 1:1 square, but not too big
                const mobileSize = Math.min(aboutTextContent.offsetWidth, 300); // Max 300px width
                aboutPhotoContainer.style.height = mobileSize + 'px';
                aboutPhotoContainer.style.width = mobileSize + 'px';
                aboutPhotoContainer.style.margin = '0 auto'; // Center it
                aboutPhoto.style.height = '100%';
                aboutPhoto.style.width = '100%';
            } else {
                // Desktop: Match text content height
                const textHeight = aboutTextContent.offsetHeight;
                aboutPhotoContainer.style.height = textHeight + 'px';
                aboutPhotoContainer.style.width = '';
                aboutPhotoContainer.style.margin = '';
                aboutPhoto.style.height = '100%';
                aboutPhoto.style.width = '100%';
            }

            // Add a subtle transition for smooth height changes
            aboutPhotoContainer.style.transition = 'height 0.3s ease-in-out, width 0.3s ease-in-out';
            aboutPhoto.style.transition = 'height 0.3s ease-in-out, width 0.3s ease-in-out';
        }
    }

    // Call this function when content loads and on window resize
    window.addEventListener('load', matchPhotoHeightWithContent);
    window.addEventListener('resize', matchPhotoHeightWithContent);

    // Also call after language changes
    const originalUpdateLanguage = updateLanguage;
    updateLanguage = function() {
        originalUpdateLanguage.call(this);
        setTimeout(matchPhotoHeightWithContent, 100); // Small delay to ensure DOM updates
    };

    // Call initially
    setTimeout(matchPhotoHeightWithContent, 500);

    // Setup scroll-based animations for portfolio items
    function setupScrollAnimations(element) {
        let animationFrame;
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;
        let currentScrollY = 0;
        let targetScrollY = 0;
        let scrollVelocity = 0;

        // Animation loop
        function animate() {
            // Smooth mouse following
            targetMouseX += (mouseX - targetMouseX) * 0.1;
            targetMouseY += (mouseY - targetMouseY) * 0.1;

            // Smooth scroll following
            targetScrollY = window.pageYOffset;
            scrollVelocity += (targetScrollY - currentScrollY) * 0.05;
            scrollVelocity *= 0.92; // Damping
            currentScrollY += scrollVelocity;

            // Calculate element position relative to viewport
            const rect = element.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.top + rect.height / 2;
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            // Calculate mouse offset from element center
            const mouseOffsetX = targetMouseX - elementCenterX;
            const mouseOffsetY = targetMouseY - elementCenterY;

            // Calculate intensity based on scroll position (how close to center)
            const maxDistanceY = windowHeight / 2;
            const scrollIntensity = Math.max(0, 1 - Math.abs((elementCenterY - windowHeight / 2)) / maxDistanceY);

            // Calculate mouse influence
            const mouseInfluence = Math.max(0, 1 - Math.abs(mouseOffsetY) / (windowHeight / 2));
            const mouseInfluenceX = Math.max(0, 1 - Math.abs(mouseOffsetX) / (windowWidth / 2));

            // Combine scroll and mouse influences
            const totalIntensity = Math.max(scrollIntensity, mouseInfluence);

            // Apply dynamic animations
            if (totalIntensity > 0.1) {
                // 3D rotation based on mouse and scroll position
                const rotateY = (mouseInfluenceX * 25) + (currentScrollY / windowHeight - 0.5) * 15;
                const rotateX = -(mouseInfluence * 15) + Math.sin(currentScrollY * 0.0005) * 10;

                // Parallax translation
                const translateX = mouseOffsetX * 0.1;
                const translateY = (targetMouseY * 0.05) + (scrollVelocity * 0.2);

                // Scale effect
                const scale = 1 + totalIntensity * 0.08;

                // Apply transformations
                element.style.transform = `
                    perspective(1200px)
                    rotateY(${rotateY}deg)
                    rotateX(${rotateX}deg)
                    scale(${scale})
                    translateX(${translateX}px)
                    translateY(${translateY}px)
                `;

                // Dynamic shadow based on intensity
                const shadowIntensity = totalIntensity * 0.25;
                element.style.boxShadow = `
                    ${-translateX * 0.5}px ${totalIntensity * 15}px ${totalIntensity * 30}px rgba(37, 99, 235, ${shadowIntensity}),
                    ${translateX * 0.5}px ${totalIntensity * 10}px ${totalIntensity * 25}px rgba(8, 145, 234, ${shadowIntensity * 0.8})
                `;

                // Brightness effect
                element.style.filter = `brightness(${1 + totalIntensity * 0.3}) contrast(${1 + totalIntensity * 0.1})`;
            } else {
                // Reset to default when not in view
                element.style.transform = '';
                element.style.boxShadow = '';
                element.style.filter = '';
            }

            animationFrame = requestAnimationFrame(animate);
        }

        // Mouse move handler
        function handleMouseMove(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        // Start animation immediately (don't wait for mouse enter)
        animate();

        // Global event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            // Recalculate on resize
            currentScrollY = window.pageYOffset;
        });

        // Cleanup function to stop animation when needed
        function stopAnimation() {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
                element.style.transform = '';
                element.style.boxShadow = '';
                element.style.filter = '';
            }
        }

        // Add stop method to element for cleanup
        element.stopAnimation = stopAnimation;

        // Stop animation when page is hidden (performance optimization)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAnimation();
            } else {
                animate();
            }
        });
    }

    // Initialize portfolio when page loads
    loadPortfolio();

    // Dynamic background parallax
    function setupBackgroundParallax() {
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        function animateBackground() {
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            // Apply to background elements
            const blobs = document.querySelectorAll('.blob');
            blobs.forEach((blob, index) => {
                const offsetX = Math.sin(Date.now() * 0.001 + index) * 50;
                const offsetY = Math.cos(Date.now() * 0.001 + index) * 30;

                anime.set(blob, {
                    translateX: offsetX + targetX * 20,
                    translateY: offsetY + targetY * 20,
                    scale: 1 + Math.sin(Date.now() * 0.002 + index) * 0.2
                });
            });

            requestAnimationFrame(animateBackground);
        }

        animateBackground();
    }

    // Initialize background parallax
    setupBackgroundParallax();

    
    // Initialize particle canvas animation
    function initParticleCanvas() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections between nearby particles
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const distance = Math.hypot(
                        particle.x - otherParticle.x,
                        particle.y - otherParticle.y
                    );

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        }

        animate();

        // Cleanup
        window.addEventListener('beforeunload', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
    }

    console.log('Portfolio website loaded successfully!');
});