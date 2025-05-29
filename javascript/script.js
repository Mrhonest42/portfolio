const roles = ['Web Designer', 'MERN StackDeveloper', 'ML Developer', 'Data Analyst', 'Designer'];
    const typingSpan = document.querySelector('.typing');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingSpan.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500); // Pause before typing the next role
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        typeEffect(); // Ensure this runs after DOM is loaded: Consolas, 'Courier New', monospace
    });
