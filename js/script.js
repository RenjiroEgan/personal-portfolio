function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Global smooth scrolling for anchor links
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

    // Secret modal for logo 'j'
    const secretSpans = document.querySelectorAll('.secret-trigger');
    let secretModal = null;

    secretSpans.forEach(span => {
        span.style.cursor = 'pointer';
        span.addEventListener('click', () => {
            if (!secretModal) {
                secretModal = document.createElement('div');
                secretModal.className = 'modal';
                secretModal.id = 'secret-modal';
                secretModal.innerHTML = `
                    <div class="modal-content">
                        <span class="close" onclick="closeModal('secret-modal')">&times;</span>
                        <h2>Congratulations!</h2>
                        <p>This is a hidden secret embedded to my personal website. I wanted to thank you for all the support that I received during my time of life.</p>
                        <p>A special dedication to my friends, family, and none other, <a href="https://www.linkedin.com/in/cintaadindasd/" target="_blank" class="cinta-link">Cinta 💖</a></p>
                    </div>
                `;
                document.body.appendChild(secretModal);
            }
            openModal('secret-modal');
        });
    });

    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    // Work page: Modal functionality for project cards
    if (document.getElementById('work')) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'work-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('work-modal')">&times;</span>
                <h2 id="modal-title"></h2>
                <p id="modal-description"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const viewBtns = document.querySelectorAll('.view-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');

        const projects = [
            { title: 'Project 1', desc: 'A web application built with React. Features include state management and responsive design.' },
            { title: 'Project 2', desc: 'A backend API using Node.js and Express. Includes authentication and database integration.' },
            { title: 'Project 3', desc: 'A mobile-responsive e-commerce site with cart functionality and payment integration.' },
            { title: 'Project 4', desc: 'A data visualization dashboard with D3.js, displaying interactive charts and graphs.' }
        ];

        viewBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                openModal('work-modal');
                modalTitle.textContent = projects[index].title;
                modalDesc.textContent = projects[index].desc;
            });
        });
    }

    // Contact page: Form handling and validation
    if (document.getElementById('contact-form')) {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message && /\S+@\S+\.\S+/.test(email)) {
                alert('Thank you for your message! It has been sent.');
                form.reset();
            } else {
                alert('Please fill in all fields correctly, including a valid email.');
            }
        });
    }
});

// Add a simple animation on page load for hero section (Home)
if (document.getElementById('hero')) {
    window.addEventListener('load', () => {
        const hero = document.getElementById('hero');
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    });
}
