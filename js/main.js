// Main JavaScript for Bijay Khanal Portfolio
(function() {
    'use strict';

    // DOM Elements
    const navigation = document.getElementById('navigation');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.getElementById('scroll-indicator');
    const sections = document.querySelectorAll('section[id]');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Navigation State
    let isNavVisible = false;

    // Initialize the application
    init();

    function init() {
        setupEventListeners();
        setupIntersectionObserver();
        updateActiveSection();
        initDarkMode();
        
        // Add fade-in classes to sections
        sections.forEach(section => {
            section.classList.add('fade-in-up');
        });
    }

    function setupEventListeners() {
        // Mobile navigation toggle
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }

        // Dark mode toggle
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }

        // Navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        // Smooth scroll for anchor links in hero
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        // Scroll events
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Resize events
        window.addEventListener('resize', debounce(handleResize, 250));

        // Intersection Observer for fade-in animations
        setupIntersectionObserver();
    }

    function toggleMobileNav() {
        isNavVisible = !isNavVisible;
        
        if (navMenu) {
            navMenu.style.display = isNavVisible ? 'block' : 'none';
        }
        
        // Update hamburger icon animation
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (isNavVisible) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    }

    function handleNavClick(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        if (isNavVisible) {
            toggleMobileNav();
        }

        // Update active section
        updateActiveSection();
    }

    function handleAnchorClick(event) {
        const href = event.currentTarget.getAttribute('href');
        
        if (href.startsWith('#') && href !== '#') {
            event.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    function handleScroll() {
        // Update active section on scroll
        updateActiveSection();
        
        // Fade out scroll indicator
        if (scrollIndicator) {
            const scrollY = window.pageYOffset;
            const fadeThreshold = 100;
            
            if (scrollY > fadeThreshold) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }

        // Add shadow to navigation on scroll
        if (navigation) {
            if (window.pageYOffset > 0) {
                navigation.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            } else {
                navigation.style.boxShadow = 'none';
            }
        }
    }

    function handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && isNavVisible) {
            toggleMobileNav();
        }
        
        // Ensure mobile menu is hidden by default on mobile
        if (window.innerWidth < 768 && navMenu) {
            navMenu.style.display = 'none';
        }
    }

    function updateActiveSection() {
        const scrollPosition = window.pageYOffset + 150; // Offset for navigation
        
        let currentActiveSection = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentActiveSection = section.id;
            }
        });

        // Update navigation active states
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentActiveSection}`) {
                link.classList.add('active');
            }
        });
    }

    function setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observe all sections for fade-in animations
        const animatedElements = document.querySelectorAll('.fade-in-up, .project-card, .education-item, .highlight-card, .timeline-item');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Dark Mode Functions
    function initDarkMode() {
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        } else {
            setTheme('light');
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    function toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button aria-label for accessibility
        if (darkModeToggle) {
            darkModeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
        }
    }

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Contact form handling (if email link is clicked)
    function handleEmailClick() {
        // Track email clicks for analytics (optional)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                event_category: 'engagement',
                event_label: 'contact_email'
            });
        }
    }

    // Social link click tracking (optional)
    function trackSocialClick(platform) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'social_click', {
                event_category: 'engagement',
                event_label: platform
            });
        }
    }

    // Add tracking to social links
    document.addEventListener('DOMContentLoaded', function() {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                const platform = this.getAttribute('href').includes('github') ? 'github' : 'linkedin';
                trackSocialClick(platform);
            });
        });

        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', handleEmailClick);
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(event) {
        // Escape key closes mobile menu
        if (event.key === 'Escape' && isNavVisible) {
            toggleMobileNav();
        }
        
        // Arrow key navigation for sections
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const currentIndex = sections.findIndex(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom > 100;
            });
            
            let nextIndex;
            if (event.key === 'ArrowDown') {
                nextIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                nextIndex = Math.max(currentIndex - 1, 0);
            }
            
            const targetSection = sections[nextIndex];
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Performance optimization: Reduce animations for users who prefer reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        // Disable animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize mobile menu state
    if (window.innerWidth < 768 && navMenu) {
        navMenu.style.display = 'none';
    }

    // Preload critical images
    function preloadImages() {
        const imageUrls = [
            'imgs/professional-male-data-scientist-engineer-headshot-server-room.jpg'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Call preload on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', preloadImages);
    } else {
        preloadImages();
    }

})();