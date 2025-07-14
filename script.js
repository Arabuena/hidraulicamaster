// Função para animação de entrada dos elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Função para navegação suave
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para destacar link ativo no menu
function highlightActiveMenu() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Função para adicionar efeito de parallax no hero
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Função para animar números (contadores)
function animateNumbers() {
    const numbers = document.querySelectorAll('.number-animation');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.getAttribute('data-target'));
                const duration = 2000;
                const increment = finalNumber / (duration / 16);
                let currentNumber = 0;
                
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        currentNumber = finalNumber;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(currentNumber);
                }, 16);
                
                observer.unobserve(target);
            }
        });
    });
    
    numbers.forEach(number => observer.observe(number));
}

// Função para adicionar efeito de hover nos cards de serviço
function addHoverEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Função para adicionar funcionalidade de WhatsApp
function addWhatsAppFunctionality() {
    const whatsappButtons = document.querySelectorAll('.btn-primary, .social-link[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href.includes('wa.me')) {
                // Se já tem link do WhatsApp, não faz nada
                return;
            }
            
            e.preventDefault();
            const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Hidráulica Master.');
            const phone = '5562992037519';
            const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Função para adicionar loading suave
function addLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// Função para adicionar efeito de digitação no título
function typewriterEffect() {
    const title = document.querySelector('.hero-logo h2');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        title.textContent += text.charAt(i);
        i++;
        
        if (i >= text.length) {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Função para adicionar scroll to top
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Função para adicionar efeito de partículas no hero
function addParticlesEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Criar partículas
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #f1c40f;
            border-radius: 50%;
            opacity: 0.6;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
    
    // Adicionar keyframes para animação das partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.6;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função para adicionar efeito de vibração nos ícones
function addIconVibration() {
    const icons = document.querySelectorAll('.service-icon i, .contact-item i');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'vibrate 0.3s ease-in-out';
        });
        
        icon.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Adicionar keyframes para vibração
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vibrate {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
    `;
    document.head.appendChild(style);
}

// Função para adicionar efeito de gradiente animado
function addGradientAnimation() {
    const gradientElements = document.querySelectorAll('.hero-logo-oval, .service-icon, .btn-primary');
    
    gradientElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        });
    });
}

// Função para adicionar efeito de spotlight
function addSpotlightEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        hero.style.background = `
            radial-gradient(circle at ${x}px ${y}px, rgba(241, 196, 15, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)
        `;
    });
    
    hero.addEventListener('mouseleave', () => {
        hero.style.background = 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)';
    });
}

// Função para adicionar efeito de texto 3D
function add3DTextEffect() {
    const titles = document.querySelectorAll('.section-title, .hero-logo h2');
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(241, 196, 15, 0.8)';
            this.style.transform = 'scale(1.05)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
            this.style.transform = 'scale(1)';
        });
    });
}

// Função para adicionar efeito de loading na página
function addPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <div class="loader-oval">
                    <span>HM</span>
                </div>
            </div>
            <p>Carregando...</p>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: white;
    `;
    
    const loaderLogo = loader.querySelector('.loader-logo');
    loaderLogo.style.cssText = `
        margin-bottom: 2rem;
    `;
    
    const loaderOval = loader.querySelector('.loader-oval');
    loaderOval.style.cssText = `
        width: 100px;
        height: 60px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        border: 3px solid #bdc3c7;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        animation: pulse 1.5s ease-in-out infinite;
    `;
    
    const loaderOvalSpan = loader.querySelector('.loader-oval span');
    loaderOvalSpan.style.cssText = `
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
    `;
    
    // Adicionar keyframes para pulse
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // Remover loader após carregamento
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Carrossel de Galeria
function initGalleryCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    let currentIndex = 0;

    function updateCarousel(index) {
        // Atualiza slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        // Move track
        track.style.transform = `translateX(-${index * 100}%)`;
        // Atualiza indicadores
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    nextButton.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateCarousel(nextIndex);
    });
    prevButton.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(prevIndex);
    });
    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => updateCarousel(i));
    });
    // Swipe para mobile
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (endX < startX - 30) nextButton.click();
        if (endX > startX + 30) prevButton.click();
    });
}

// Carrossel de Avaliações
function initReviewsCarousel() {
    const track = document.querySelector('.reviews-track');
    const slides = Array.from(document.querySelectorAll('.review-slide'));
    const nextButton = document.querySelector('.reviews-btn.next');
    const prevButton = document.querySelector('.reviews-btn.prev');
    const indicators = Array.from(document.querySelectorAll('.review-indicator'));
    let currentIndex = 0;

    function updateCarousel(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        track.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    nextButton.addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateCarousel(nextIndex);
    });
    prevButton.addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(prevIndex);
    });
    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => updateCarousel(i));
    });
    // Swipe para mobile
    let startX = 0;
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    track.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (endX < startX - 30) nextButton.click();
        if (endX > startX + 30) prevButton.click();
    });
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar loader
    addPageLoader();
    
    // Inicializar funcionalidades após um pequeno delay
    setTimeout(() => {
        animateOnScroll();
        smoothScroll();
        highlightActiveMenu();
        parallaxEffect();
        animateNumbers();
        addHoverEffects();
        addWhatsAppFunctionality();
        addLoadingAnimation();
        typewriterEffect();
        addScrollToTop();
        addParticlesEffect();
        addIconVibration();
        addGradientAnimation();
        addSpotlightEffect();
        add3DTextEffect();
        initGalleryCarousel();
        initReviewsCarousel();
    }, 100);
});

// Adicionar classe CSS para o estado carregado
const style = document.createElement('style');
style.textContent = `
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    .nav-links a.active {
        color: #e74c3c !important;
        font-weight: 700;
    }
`;
document.head.appendChild(style); 