// Initialize AOS
AOS.init();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal functions
function openModal(type) {
    document.getElementById(type + '-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'none';
}

function switchForm(type) {
    closeModal();
    openModal(type);
}

// Password toggle
function togglePassword(id) {
    const input = document.getElementById(id);
    const icon = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Form validation
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');
    
    if (email && password) {
        // Simulate successful login (frontend only)
        message.textContent = 'Login successful!';
        message.className = 'message success';
        message.style.display = 'block';
        setTimeout(() => {
            closeModal();
            message.style.display = 'none';
        }, 2000);
    } else {
        message.textContent = 'Please fill in all fields.';
        message.className = 'message error';
        message.style.display = 'block';
    }
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const message = document.getElementById('signup-message');
    
    if (name && email && password && confirm) {
        if (password === confirm) {
            // Simulate successful signup (frontend only)
            message.textContent = 'Signup successful!';
            message.className = 'message success';
            message.style.display = 'block';
            setTimeout(() => {
                closeModal();
                message.style.display = 'none';
            }, 2000);
        } else {
            message.textContent = 'Passwords do not match.';
            message.className = 'message error';
            message.style.display = 'block';
        }
    } else {
        message.textContent = 'Please fill in all fields.';
        message.className = 'message error';
        message.style.display = 'block';
    }
});

// Testimonial slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Initial slide
showSlide(0);