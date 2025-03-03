// script.js
// Day/Night Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    modeToggle.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    modeToggle.textContent = '☀️';
}

// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Load JSON Data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Helper function to create gallery
        function createGallery(container, items) {
            const gallery = container.querySelector('.gallery');
            const hasMedia = items.images.length > 0 || items.videos.length > 0;
            if (!hasMedia) {
                gallery.style.display = 'none';
                return;
            }
            gallery.innerHTML = `
                <button class="gallery-btn left">◄</button>
                ${items.images.map(img => `<img src="${img}" alt="${items.title}" onerror="this.style.display='none';">`).join('')}
                ${items.videos.map(vid => `<video src="${vid}" controls onerror="this.style.display='none';"></video>`).join('')}
                <button class="gallery-btn right">►</button>
            `;
            const leftBtn = gallery.querySelector('.left');
            const rightBtn = gallery.querySelector('.right');
            leftBtn.addEventListener('click', () => gallery.scrollBy({ left: -300, behavior: 'smooth' }));
            rightBtn.addEventListener('click', () => gallery.scrollBy({ left: 300, behavior: 'smooth' }));

            gallery.addEventListener('click', (e) => {
                if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
                    const modal = document.createElement('div');
                    modal.className = 'modal';
                    modal.innerHTML = `
                        <div class="modal-content">
                            <div class="modal-gallery">
                                ${items.images.map(img => `<img src="${img}" alt="${items.title}">`).join('')}
                                ${items.videos.map(vid => `<video src="${vid}" controls></video>`).join('')}
                            </div>
                            <button class="modal-btn">Close</button>
                        </div>
                    `;
                    document.body.appendChild(modal);
                    modal.style.display = 'block';
                    modal.querySelector('.modal-btn').addEventListener('click', () => modal.remove());
                }
            });
        }

        // Home Page - Highlights
        if (document.getElementById('highlights-container')) {
            const container = document.getElementById('highlights-container');
            data.highlights.forEach(highlight => {
                const card = document.createElement('div');
                card.className = 'highlight-card';
                card.innerHTML = `
                    <h3>${highlight.title}</h3>
                    ${highlight.date ? `<span class="date">${highlight.date}</span>` : ''}
                    <p>${highlight.description}</p>
                    <div class="gallery"></div>
                    <div class="links">${highlight.links.map(link => {
                        const [name, url] = link.split('|');
                        return `<a href="${url}" target="_blank" class="link-btn">${name}</a>`;
                    }).join('')}</div>
                `;
                container.appendChild(card);
                createGallery(card, highlight);
            });
        }

        // About Page
        if (document.getElementById('about-content')) {
            document.getElementById('about-content').textContent = data.about.description;
            const skillsGrid = document.getElementById('about-skills');
            data.about.skills.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'skill-tag';
                tag.textContent = skill;
                skillsGrid.appendChild(tag);
            });
            const languagesGrid = document.getElementById('about-languages');
            data.about.languages.forEach(lang => {
                const tag = document.createElement('span');
                tag.className = 'language-tag';
                tag.textContent = lang;
                languagesGrid.appendChild(tag);
            });
        }

        // Education Page
        if (document.getElementById('education-container')) {
            const container = document.getElementById('education-container');
            data.education.forEach(edu => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${edu.title}</h3>
                    <span class="date">${edu.date}</span>
                    <p>GPA: ${edu.gpa}</p>
                    <ul>${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                `;
                container.appendChild(card);
            });
        }

        // Experience Page
        if (document.getElementById('experience-container')) {
            const container = document.getElementById('experience-container');
            data.experience.forEach(exp => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${exp.title}</h3>
                    <span class="date">${exp.date}</span>
                    ${exp.location ? `<p>${exp.location}</p>` : ''}
                    <ul>${exp.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                `;
                container.appendChild(card);
            });
        }

        // Projects Page
        if (document.getElementById('projects-container')) {
            const container = document.getElementById('projects-container');
            data.projects.forEach(proj => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${proj.title}</h3>
                    ${proj.date ? `<span class="date">${proj.date}</span>` : ''}
                    <p>${proj.description}</p>
                    <div class="gallery"></div>
                    <div class="links">${proj.links.map(link => {
                        const [name, url] = link.split('|');
                        return `<a href="${url}" target="_blank" class="link-btn">${name}</a>`;
                    }).join('')}</div>
                `;
                container.appendChild(card);
                createGallery(card, proj);
            });
        }

        // Certificates Page
        if (document.getElementById('certificates-container')) {
            const container = document.getElementById('certificates-container');
            data.certificates.forEach(cert => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${cert.title}</h3>
                    ${cert.date ? `<span class="date">${cert.date}</span>` : ''}
                    <p>${cert.description}</p>
                    <div class="gallery"></div>
                    <div class="links">${cert.links.map(link => {
                        const [name, url] = link.split('|');
                        return `<a href="${url}" target="_blank" class="link-btn">${name}</a>`;
                    }).join('')}</div>
                `;
                container.appendChild(card);
                createGallery(card, cert);
            });
        }

        // Volunteering Page
        if (document.getElementById('volunteering-container')) {
            const container = document.getElementById('volunteering-container');
            data.volunteering.forEach(vol => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${vol.title}</h3>
                    ${vol.date ? `<span class="date">${vol.date}</span>` : ''}
                    <p>${vol.description}</p>
                    <div class="gallery"></div>
                    <div class="links">${vol.links.map(link => {
                        const [name, url] = link.split('|');
                        return `<a href="${url}" target="_blank" class="link-btn">${name}</a>`;
                    }).join('')}</div>
                `;
                container.appendChild(card);
                createGallery(card, vol);
            });
        }
    });