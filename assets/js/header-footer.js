// header-footer.js - Heart to Mind Integration | Shared Header & Footer Loader
class HeaderFooterLoader {
    constructor() {
        this.headerHTML = `
            <header id="main-header">
                <div class="container">
                    <nav class="navbar">
                        <a href="index.html" class="logo">
                            <div class="logo-icon"><i class="fas fa-heartbeat"></i></div>
                            <div class="logo-text"><h2>Heart to Mind</h2><p>INTEGRATION</p></div>
                        </a>
                        <div class="nav-links" id="navLinks">
                            <a href="index.html" class="nav-link" data-page="home">Home</a>
                            <div class="mega-menu">
                                <a href="javascript:void(0)" class="mega-toggle nav-link">Programs <i class="fas fa-chevron-down"></i></a>
                                <div class="mega-dropdown">
                                    <div class="mega-container">
                                        <div class="mega-grid">
                                            <div class="mega-col">
                                                <div class="mega-header"><i class="fas fa-gift"></i><h4>Free Resources</h4></div>
                                                <a href="free-session.html" class="mega-item"><i class="fas fa-chalkboard-user"></i><div><strong>Free Session</strong><span>With Nileema Kirkire</span></div></a>
                                                <a href="#" class="mega-item"><i class="fas fa-book-open"></i><div><strong>Free E-Book</strong><span>The Heart-Mind Guide</span></div></a>
                                                <a href="#" class="mega-item"><i class="fas fa-question-circle"></i><div><strong>Alignment Quiz</strong><span>Discover your score</span></div></a>
                                            </div>
                                            <div class="mega-col">
                                                <div class="mega-header"><i class="fas fa-crown"></i><h4>Premium Programs</h4></div>
                                                <a href="programs.html" class="mega-item"><i class="fas fa-star"></i><div><strong>Gold - ₹499</strong><span>Life Audit & Clarity</span></div></a>
                                                <a href="programs.html" class="mega-item"><i class="fas fa-gem"></i><div><strong>Platinum - ₹24,997</strong><span>20 Sessions / 3 Months</span></div></a>
                                                <a href="programs.html" class="mega-item"><i class="fas fa-diamond"></i><div><strong>Diamond - ₹98,997</strong><span>~45 Sessions / Year</span></div></a>
                                            </div>
                                            <div class="mega-col">
                                                <div class="mega-header"><i class="fas fa-users"></i><h4>Community</h4></div>
                                                <a href="insights.html#stories" class="mega-item"><i class="fas fa-heart"></i><div><strong>Success Stories</strong><span>Real transformations</span></div></a>
                                                <a href="insights.html" class="mega-item"><i class="fas fa-newspaper"></i><div><strong>Wisdom Library</strong><span>Articles & insights</span></div></a>
                                                <a href="#" class="mega-item"><i class="fab fa-instagram"></i><div><strong>Instagram Community</strong><span>@HeartToMind</span></div></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="about.html" class="nav-link" data-page="about">About</a>
                            <a href="mentors.html" class="nav-link" data-page="mentors">Mentors</a>
                            <a href="insights.html" class="nav-link" data-page="insights">Insights</a>
                            <a href="contact.html" class="nav-link" data-page="contact">Connect</a>
                            <a href="free-session.html" class="btn-premium"><i class="fas fa-calendar-alt"></i> Free Session</a>
                        </div>
                        <div class="header-actions">
                            <button class="search-btn" id="searchBtn"><i class="fas fa-search"></i></button>
                            <div class="menu-toggle" id="menuToggle"><span></span><span></span><span></span></div>
                        </div>
                    </nav>
                </div>
                <div class="search-overlay" id="searchOverlay">
                    <div class="search-container">
                        <button class="close-search" id="closeSearch"><i class="fas fa-times"></i></button>
                        <div class="search-header"><i class="fas fa-search"></i><h3>What are you seeking?</h3></div>
                        <form onsubmit="return false;"><input type="text" placeholder="Search programs, articles, or topics..." id="searchInput"><button type="submit"><i class="fas fa-arrow-right"></i></button></form>
                        <div class="search-suggestions"><p>Popular:</p><div class="suggestion-tags"><span>Free Session</span><span>Gold Program</span><span>Platinum</span><span>Diamond</span><span>Emotional Healing</span><span>Leadership</span></div></div>
                    </div>
                </div>
            </header>
        `;
        this.footerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-col">
                            <div class="footer-logo"><i class="fas fa-heartbeat"></i><div><h3>Heart to Mind</h3><p style="font-size:9px; letter-spacing:2px;">INTEGRATION</p></div></div>
                            <p class="footer-desc">Align Your Heart. Reprogram Your Mind. Transform Your Life. We help you create lasting change through emotional and logical alignment.</p>
                            <div class="social-links"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-linkedin-in"></i></a><a href="#"><i class="fab fa-youtube"></i></a></div>
                        </div>
                        <div class="footer-col"><h4>Explore</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Dr. Nitin</a></li><li><a href="mentors.html">Our Mentors</a></li><li><a href="insights.html#stories">Success Stories</a></li><li><a href="contact.html">Contact</a></li></ul></div>
                        <div class="footer-col"><h4>Programs</h4><ul><li><a href="free-session.html">Free Session</a></li><li><a href="programs.html">Gold - ₹499</a></li><li><a href="programs.html">Platinum - ₹24,997</a></li><li><a href="programs.html">Diamond - ₹98,997</a></li><li><a href="services.html">All Services</a></li></ul></div>
                        <div class="footer-col"><h4>Resources</h4><ul><li><a href="#">Free E-Book</a></li><li><a href="#">Video Series</a></li><li><a href="#">Inner Alignment Quiz</a></li><li><a href="#">Meditation Guides</a></li></ul></div>
                        <div class="footer-col"><h4>Contact</h4><ul class="contact-info"><li><i class="fas fa-envelope"></i> hello@hearttomind.com</li><li><i class="fas fa-phone"></i> +91 85888 62861 / +91 72762 17902</li><li><i class="fas fa-globe"></i> hearttomindintegration.com</li><li><i class="fas fa-clock"></i> Mon-Fri: 9AM - 7PM IST</li></ul></div>
                    </div>
                    <div class="footer-newsletter"><h4>Join 2,800+ Souls on the Path to Integration</h4><form id="newsletterForm"><input type="email" placeholder="Your email address" required><button type="submit">Subscribe →</button></form></div>
                    <div class="footer-bottom"><p>&copy; 2025 Heart to Mind Integration. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p><p class="credits">Dr. Nitin Sharma & Nileema Kirkire — Transforming lives since 2017</p></div>
                </div>
            </footer>
        `;
        this.floatingButtons = `
            <div class="floating-buttons">
                <a href="https://wa.me/918588862861" class="floating-btn floating-btn-wa" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <a href="tel:+918588862861" class="floating-btn floating-btn-call"><i class="fas fa-phone-alt"></i></a>
            </div>
        `;
    }
    loadHeader() {
        document.body.insertAdjacentHTML('afterbegin', this.headerHTML);
        document.body.insertAdjacentHTML('beforeend', this.floatingButtons);
        this.setActiveNavLink();
    }
    loadFooter() {
        document.body.insertAdjacentHTML('beforeend', this.footerHTML);
        this.initFooterScripts();
    }
    setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        navLinks.forEach(link => {
            const pageAttr = link.getAttribute('data-page');
            if ((currentPage === 'index.html' && pageAttr === 'home') || (currentPage === pageAttr + '.html')) {
                link.classList.add('active');
            }
        });
    }
    initFooterScripts() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = e.target.querySelector('input').value;
                if (email) alert(`Thank you! We'll send insights to ${email}`);
                e.target.reset();
            });
        }
    }
}