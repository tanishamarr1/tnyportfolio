 // Menu Toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Header Scroll Effect
        let lastScroll = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.style.boxShadow = '0 2px 20px rgba(255, 159, 184, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 30px rgba(255, 159, 184, 0.15)';
            }

            lastScroll = currentScroll;
        });

        // Download CV Function
        function downloadCV() {
            // Aquí puedes poner la URL de tu CV
            alert('¡Función de descarga de CV! Reemplaza esta alerta con la URL de tu CV real.');
            // window.open('ruta-a-tu-cv.pdf', '_blank');
        }

        // Form Submit Handler
        function handleSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            
            // Mostrar mensaje de éxito
            const name = formData.get('name');
            alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaré pronto. 💌`);
            
            // Limpiar formulario
            form.reset();
            
            // Aquí podrías integrar con un servicio de email como EmailJS, Formspree, etc.
            // Ejemplo con EmailJS:
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
            //   .then(() => alert('Mensaje enviado!'))
            //   .catch((error) => alert('Error al enviar'));
        }

        // Parallax Effect for Background Decorations
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const decorations = document.querySelectorAll('.bg-decoration');
            
            decorations.forEach((decoration, index) => {
                const speed = 0.5 + (index * 0.2);
                decoration.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Typing Effect for Hero Title (opcional)
        function typeEffect() {
            const text = "Hola, Soy [Tu Nombre] 👋";
            const element = document.querySelector('.hero-text h1');
            let index = 0;
            
            element.textContent = '';
            
            const timer = setInterval(() => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
        }

        // Puedes descomentar esta línea si quieres el efecto de escritura
        // window.addEventListener('load', typeEffect);

        // Project Cards Hover Effect
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Skill Cards Animation on Scroll
        const skillCards = document.querySelectorAll('.skill-card');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
                    }, index * 100);
                }
            });
        }, { threshold: 0.2 });

        skillCards.forEach(card => skillObserver.observe(card));

        // Active Navigation Link
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        function highlightNavigation() {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.style.color = '';
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.style.color = 'var(--accent-dark)';
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', highlightNavigation);

        // Social Links Animation
        const socialLinks = document.querySelectorAll('.social-icon');
        
        socialLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
        });

        // Cursor Trail Effect (opcional - efecto avanzado)
        let cursorTrail = [];
        const trailLength = 10;

        document.addEventListener('mousemove', (e) => {
            cursorTrail.push({ x: e.clientX, y: e.clientY });
            
            if (cursorTrail.length > trailLength) {
                cursorTrail.shift();
            }
        });

        // Initialize
        window.addEventListener('load', () => {
            // Activar animaciones iniciales
            document.body.style.opacity = '1';
            
            // Añadir clase visible a elementos del hero
            const heroElements = document.querySelectorAll('.hero-text > *');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });

        // Easter Egg - Konami Code (opcional - por diversión)
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            konamiCode = konamiCode.slice(-10);

            if (konamiCode.join(',') === konamiSequence.join(',')) {
                document.body.style.animation = 'rainbow 2s linear infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                    alert('🎉 ¡Encontraste el Easter Egg! ¡Eres genial!');
                }, 2000);
            }
        });

        // Performance Optimization: Lazy Loading for Images (si agregas imágenes reales)
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Console Message (mensaje divertido en la consola)
        console.log('%c¡Hola Developer! 👋', 'color: #ff9fb8; font-size: 20px; font-weight: bold;');
        console.log('%c¿Te gusta explorar el código? ¡A mí también! 💖', 'color: #718096; font-size: 14px;');
        console.log('%cSi tienes alguna sugerencia o quieres trabajar juntos, ¡contáctame!', 'color: #2d3748; font-size: 12px;');