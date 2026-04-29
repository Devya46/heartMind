// main.js - Heart to Mind Integration | All Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px,6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px,-6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ========== HEADER SCROLL EFFECT ==========
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    });

    // ========== SEARCH OVERLAY ==========
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.focus();
        });
        if (closeSearch) {
            closeSearch.addEventListener('click', function() {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        const suggestionTags = document.querySelectorAll('.suggestion-tags span');
        suggestionTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = tag.textContent;
                    alert('Searching for: ' + tag.textContent);
                }
            });
        });
    }

    // ========== FAQ ACCORDION ==========
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-q');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });

    // ========== FORM SUBMISSIONS ==========
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will get back to you soon.');
            form.reset();
        });
    });

    // ========== COUNTER ANIMATION (STATS) ==========
    const statsSection = document.querySelector('.stats-premium');
    if (statsSection) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stat-number');
                    counters.forEach(function(counter) {
                        if (!counter.getAttribute('data-animated')) {
                            counter.setAttribute('data-animated', 'true');
                            const text = counter.textContent;
                            const target = parseInt(text.replace(/[^0-9]/g, ''));
                            if (target) {
                                let current = 0;
                                const increment = target / 50;
                                const timer = setInterval(function() {
                                    current += increment;
                                    if (current >= target) {
                                        counter.textContent = text;
                                        clearInterval(timer);
                                    } else {
                                        counter.textContent = Math.floor(current) + (text.includes('%') ? '%' : (text.includes('+') ? '+' : ''));
                                    }
                                }, 30);
                            }
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // ========== SWIPER SLIDERS (if Swiper is loaded) ==========
    if (typeof Swiper !== 'undefined') {
        // Hero Slider
        const heroSwiperEl = document.querySelector('.hero-swiper');
        if (heroSwiperEl) {
            new Swiper('.hero-swiper', {
                loop: true,
                autoplay: { delay: 5000, disableOnInteraction: false },
                effect: 'fade',
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                pagination: { el: '.swiper-pagination', clickable: true }
            });
        }
        // Testimonial Slider
        const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
        if (testimonialSwiperEl) {
            new Swiper('.testimonial-swiper', {
                loop: true,
                autoplay: { delay: 4000 },
                pagination: { el: '.swiper-pagination', clickable: true },
                slidesPerView: 1,
                spaceBetween: 20,
                breakpoints: {
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 }
                }
            });
        }
        // Logo Carousel
        const logoSwiperEl = document.querySelector('.logo-swiper');
        if (logoSwiperEl) {
            new Swiper('.logo-swiper', {
                loop: true,
                autoplay: { delay: 2000, disableOnInteraction: false },
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 }
                }
            });
        }
    }

    // ========== GALLERY & VIDEO CLICKS ==========
    const galleryItems = document.querySelectorAll('.gallery-item, .video-card, .masonry-item');
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = item.querySelector('img')?.src;
            if (img) alert('View full image: ' + img);
        });
    });

    // ========== MEGA MENU MOBILE ==========
    function initMegaMenuMobile() {
        if (window.innerWidth <= 768) {
            const megaMenus = document.querySelectorAll('.mega-menu');
            megaMenus.forEach(function(megaMenu) {
                const toggle = megaMenu.querySelector('.mega-toggle');
                if (toggle && !megaMenu.hasAttribute('data-mobile-bound')) {
                    megaMenu.setAttribute('data-mobile-bound', 'true');
                    toggle.addEventListener('click', function(e) {
                        e.preventDefault();
                        megaMenu.classList.toggle('active');
                    });
                }
            });
        }
    }
    initMegaMenuMobile();
    window.addEventListener('resize', initMegaMenuMobile);
});