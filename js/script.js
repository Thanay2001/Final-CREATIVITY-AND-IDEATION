// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (hamburger && navMenu) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form elements - using more specific selectors
        const formGroups = contactForm.querySelectorAll('.form-group');
        const nameInput = formGroups[0]?.querySelector('input');
        const emailInput = formGroups[1]?.querySelector('input');
        const messageInput = formGroups[2]?.querySelector('textarea');
        
        // Check if elements exist
        if (!nameInput || !emailInput || !messageInput) {
            return;
        }
        
        // Get form values
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        
        // Validate form - trim whitespace
        if (name.trim() && email.trim() && message.trim()) {
            // Create and show success message
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

// Helper function to show notifications
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation style if not exists
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// CTA Button Click Handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            const offset = 80;
            const targetPosition = aboutSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .method-card, .step, .project-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Combined scroll handler with throttling for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        return;
    }
    
    scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        
        const navbar = document.querySelector('.navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Update navbar shadow
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
        
        // Update active navigation link
        let current = '';
        sections.forEach(section => {
            const sectionId = section.getAttribute('id');
            if (sectionId) {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.slice(1) === current) {
                link.classList.add('active');
            }
        });
    }, 50);
});

// Console message
console.log('%c DMC2002 - Creativity & Ideation ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('Welcome to DMC2002! Empowering innovation through creative thinking.');
