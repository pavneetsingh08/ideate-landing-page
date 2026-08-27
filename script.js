// Canvas Particle Background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];
    
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random()
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        
        // Twinkle effect
        p.opacity += (Math.random() - 0.5) * 0.05;
        if (p.opacity < 0.1) p.opacity = 0.1;
        if (p.opacity > 1) p.opacity = 1;
    });
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
