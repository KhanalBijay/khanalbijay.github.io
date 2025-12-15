// Template Rendering System
// This file contains functions to generate HTML from portfolio data

const TemplateRenderer = {
  /**
   * Render navigation menu from data
   */
  renderNavigation(navItems) {
    return navItems.map(item => 
      `<li><a href="${item.href}" class="nav-link">${item.label}</a></li>`
    ).join('');
  },

  /**
   * Render hero section
   */
  renderHero(personal) {
    return `
      <div class="hero-content">
        <div class="hero-image">
          <img src="${personal.profileImage}" alt="${personal.name} - ${personal.title}" class="profile-img">
        </div>
        <h1 class="hero-title">
          <span class="gradient-text">${personal.name}</span>
        </h1>
        <p class="hero-tagline">${personal.title}</p>
        <p class="hero-subtitle">${personal.tagline}</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    `;
  },

  /**
   * Render about section
   */
  renderAbout(about) {
    const paragraphs = about.paragraphs.map(p => 
      `<p class="about-description">${p}</p>`
    ).join('');

    const highlights = about.highlights.map(highlight => `
      <div class="highlight-card">
        <h3>${highlight.title}</h3>
        <ul>
          ${highlight.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <div class="about-content">
        <div class="about-text">
          ${paragraphs}
        </div>
        <div class="about-highlights">
          ${highlights}
        </div>
      </div>
    `;
  },

  /**
   * Render education section
   */
  renderEducation(educationList) {
    return educationList.map(edu => `
      <div class="education-item">
        <div class="education-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c0 0.6 0.4 1 1 1h11c0.6 0 1-0.4 1-1v-5"/>
          </svg>
        </div>
        <div class="education-content">
          <h3 class="education-degree">${edu.degree}</h3>
          ${edu.specialization ? `<p class="education-specialization">${edu.specialization}</p>` : ''}
          <p class="education-institution">${edu.institution}</p>
          <p class="education-duration">${edu.duration}</p>
          <p class="education-description">${edu.description}</p>
        </div>
      </div>
    `).join('');
  },

  /**
   * Render skills section
   */
  renderSkills(skillCategories) {
    return skillCategories.map(category => `
      <div class="skill-category">
        <h3 class="skill-category-title">${category.category}</h3>
        <div class="skill-badges">
          ${category.badges.map(badge => 
            `<span class="badge badge-${badge.level}">${badge.name}</span>`
          ).join('')}
        </div>
      </div>
    `).join('');
  },

  /**
   * Render projects section
   */
  renderProjects(projects) {
    return projects.map(project => `
      <article class="project-card ${project.featured ? 'featured' : ''}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" class="project-img">
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener">View Project</a>
          </div>
        </div>
      </article>
    `).join('');
  },

  /**
   * Render experience timeline
   */
  renderExperience(experiences) {
    return experiences.map(exp => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="experience-role">${exp.role}</h3>
          <p class="experience-company">${exp.company}</p>
          <p class="experience-duration">${exp.duration}</p>
          <p class="experience-description">${exp.description}</p>
        </div>
      </div>
    `).join('');
  },

  /**
   * Render social links
   */
  renderSocialLinks(social) {
    const links = [];
    
    if (social.github) {
      links.push(`
        <a href="${social.github}" class="social-link" target="_blank" rel="noopener" aria-label="GitHub Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>GitHub</span>
        </a>
      `);
    }
    
    if (social.linkedin) {
      links.push(`
        <a href="${social.linkedin}" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
      `);
    }
    
    if (social.huggingface) {
      links.push(`
        <a href="${social.huggingface}" class="social-link" target="_blank" rel="noopener" aria-label="Hugging Face Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span>Hugging Face</span>
        </a>
      `);
    }
    
    return links.join('');
  },

  /**
   * Render contact section
   */
  renderContact(contact, email, social) {
    return `
      <div class="contact-card">
        <div class="section-header">
          <h2 class="section-title">${contact.title}</h2>
          <p class="section-subtitle">${contact.subtitle}</p>
        </div>
        
        <div class="contact-content">
          <p class="contact-description">${contact.description}</p>
          
          <div class="contact-actions">
            <a href="mailto:${email}" class="btn btn-primary">Email Me</a>
          </div>
          
          <div class="social-links">
            ${this.renderSocialLinks(social)}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render blog posts section (optional)
   */
  renderBlogs(blogs) {
    if (!blogs || blogs.length === 0) return '';
    
    return `
      <section id="blogs" class="blogs fade-in-up">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Blog Posts</h2>
            <p class="section-subtitle">Sharing insights and learnings</p>
          </div>
          <div class="blog-grid">
            ${blogs.map(blog => `
              <article class="blog-card">
                <div class="blog-content">
                  <p class="blog-date">${blog.date}</p>
                  <h3 class="blog-title">${blog.title}</h3>
                  <p class="blog-excerpt">${blog.excerpt}</p>
                  <div class="blog-tags">
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                  </div>
                  <a href="${blog.link}" class="blog-link">Read More →</a>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  /**
   * Render research papers section (optional)
   */
  renderResearch(papers) {
    if (!papers || papers.length === 0) return '';
    
    return `
      <section id="research" class="research fade-in-up">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Research Papers</h2>
            <p class="section-subtitle">Academic contributions and publications</p>
          </div>
          <div class="research-list">
            ${papers.map(paper => `
              <article class="research-item">
                <h3 class="research-title">${paper.title}</h3>
                <p class="research-authors">${paper.authors.join(', ')}</p>
                <p class="research-venue">${paper.venue}, ${paper.year}</p>
                <p class="research-abstract">${paper.abstract}</p>
                <div class="research-links">
                  ${paper.link ? `<a href="${paper.link}" class="research-link" target="_blank" rel="noopener">View Paper</a>` : ''}
                  ${paper.pdf ? `<a href="${paper.pdf}" class="research-link" target="_blank" rel="noopener">Download PDF</a>` : ''}
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },

  /**
   * Initialize and render all sections
   */
  renderAll(data) {
    // Navigation
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && data.navigation) {
      navMenu.innerHTML = this.renderNavigation(data.navigation);
    }

    // Hero
    const heroContainer = document.querySelector('#hero .container');
    if (heroContainer && data.personal) {
      heroContainer.innerHTML = this.renderHero(data.personal);
    }

    // About
    const aboutContainer = document.querySelector('#about .container');
    if (aboutContainer && data.personal.about) {
      aboutContainer.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
        </div>
        ${this.renderAbout(data.personal.about)}
      `;
    }

    // Education
    const educationContainer = document.querySelector('#education .container');
    if (educationContainer && data.education) {
      educationContainer.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">Education</h2>
        </div>
        <div class="education-list">
          ${this.renderEducation(data.education)}
        </div>
      `;
    }

    // Skills
    const skillsContainer = document.querySelector('#skills .container');
    if (skillsContainer && data.skills) {
      skillsContainer.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">Technical Skills</h2>
        </div>
        <div class="skills-grid">
          ${this.renderSkills(data.skills)}
        </div>
      `;
    }

    // Projects
    const projectsContainer = document.querySelector('#projects .container');
    if (projectsContainer && data.projects) {
      projectsContainer.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Showcasing my expertise in Machine Learning and Data Science</p>
        </div>
        <div class="projects-grid">
          ${this.renderProjects(data.projects)}
        </div>
      `;
    }

    // Experience
    const experienceContainer = document.querySelector('#experience .container');
    if (experienceContainer && data.experience) {
      experienceContainer.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="experience-content">
          <div class="experience-timeline">
            ${this.renderExperience(data.experience)}
          </div>
        </div>
      `;
    }

    // Contact
    const contactContainer = document.querySelector('#contact .container');
    if (contactContainer && data.contact) {
      contactContainer.innerHTML = this.renderContact(
        data.contact,
        data.personal.email,
        data.social
      );
    }

    // Optional: Blogs
    const blogsSection = this.renderBlogs(data.blogs);
    if (blogsSection) {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        experienceSection.insertAdjacentHTML('afterend', blogsSection);
      }
    }

    // Optional: Research
    const researchSection = this.renderResearch(data.research);
    if (researchSection) {
      const blogsOrExperience = document.getElementById('blogs') || document.getElementById('experience');
      if (blogsOrExperience) {
        blogsOrExperience.insertAdjacentHTML('afterend', researchSection);
      }
    }

    // Update page title
    if (data.personal) {
      document.title = `${data.personal.name} - ${data.personal.title}`;
    }
  }
};

// Make template renderer available globally
if (typeof window !== 'undefined') {
  window.TemplateRenderer = TemplateRenderer;
}
