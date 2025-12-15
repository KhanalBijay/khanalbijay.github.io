/**
 * EXAMPLE: How to Add Custom Sections
 * 
 * This file contains examples for adding different types of custom sections
 * to your portfolio. Copy the relevant parts to your portfolio-data.js file.
 */

// =============================================================================
// EXAMPLE 1: CERTIFICATIONS SECTION
// =============================================================================

// 1. Add to portfolio-data.js
const portfolioDataExample1 = {
  // ... other sections ...
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://aws.amazon.com/certification/",
      badge: "imgs/aws-cert.png"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      link: "https://www.tensorflow.org/certificate"
    }
  ]
};

// 2. Add rendering function to js/templates.js
// Add this function to the TemplateRenderer object:
/*
renderCertifications(certifications) {
  if (!certifications || certifications.length === 0) return '';
  
  return `
    <section id="certifications" class="certifications fade-in-up">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Certifications</h2>
        </div>
        <div class="certifications-grid">
          ${certifications.map(cert => `
            <div class="certification-card">
              ${cert.badge ? `<img src="${cert.badge}" alt="${cert.name}" class="cert-badge">` : ''}
              <h3 class="cert-name">${cert.name}</h3>
              <p class="cert-issuer">${cert.issuer}</p>
              <p class="cert-date">${cert.date}</p>
              ${cert.link ? `<a href="${cert.link}" class="cert-link" target="_blank" rel="noopener">View Certificate</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
*/

// 3. Call in renderAll() - add before contact section:
/*
const certificationsSection = this.renderCertifications(data.certifications);
if (certificationsSection) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.insertAdjacentHTML('beforebegin', certificationsSection);
  }
}
*/

// 4. Add CSS to styles.css:
/*
.certifications {
  background-color: var(--color-bg-page);
  padding: var(--space-24) 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}

.certification-card {
  background: var(--color-bg-surface);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--easing-default);
}

.certification-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.cert-badge {
  width: 80px;
  height: 80px;
  margin-bottom: var(--space-4);
}

.cert-name {
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-2);
}

.cert-issuer {
  color: var(--color-neutral-600);
  margin-bottom: var(--space-1);
}

.cert-date {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
  margin-bottom: var(--space-4);
}

.cert-link {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-primary-500);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  transition: background-color var(--duration-fast) var(--easing-default);
}

.cert-link:hover {
  background-color: var(--color-primary-600);
}
*/

// =============================================================================
// EXAMPLE 2: TESTIMONIALS SECTION
// =============================================================================

const portfolioDataExample2 = {
  testimonials: [
    {
      name: "John Doe",
      role: "CTO at Tech Company",
      company: "Tech Company Inc.",
      text: "Working with [Your Name] was an absolute pleasure. Their expertise in machine learning helped us achieve our goals.",
      avatar: "imgs/testimonial-1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      company: "Another Company",
      text: "Outstanding work quality and excellent communication throughout the project.",
      avatar: "imgs/testimonial-2.jpg"
    }
  ]
};

// Template function:
/*
renderTestimonials(testimonials) {
  if (!testimonials || testimonials.length === 0) return '';
  
  return `
    <section id="testimonials" class="testimonials fade-in-up">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials</h2>
          <p class="section-subtitle">What people say about working with me</p>
        </div>
        <div class="testimonials-grid">
          ${testimonials.map(testimonial => `
            <div class="testimonial-card">
              <p class="testimonial-text">"${testimonial.text}"</p>
              <div class="testimonial-author">
                ${testimonial.avatar ? `<img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">` : ''}
                <div class="testimonial-info">
                  <p class="testimonial-name">${testimonial.name}</p>
                  <p class="testimonial-role">${testimonial.role}</p>
                  <p class="testimonial-company">${testimonial.company}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
*/

// =============================================================================
// EXAMPLE 3: ACHIEVEMENTS/AWARDS SECTION
// =============================================================================

const portfolioDataExample3 = {
  achievements: [
    {
      title: "Best Paper Award",
      organization: "International Conference on AI",
      year: "2024",
      description: "Received for outstanding research in deep learning applications."
    },
    {
      title: "Hackathon Winner",
      organization: "AI Challenge 2023",
      year: "2023",
      description: "First place in ML challenge with 500+ participants."
    }
  ]
};

// Template function:
/*
renderAchievements(achievements) {
  if (!achievements || achievements.length === 0) return '';
  
  return `
    <section id="achievements" class="achievements fade-in-up">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Awards & Achievements</h2>
        </div>
        <div class="achievements-timeline">
          ${achievements.map(achievement => `
            <div class="achievement-item">
              <div class="achievement-year">${achievement.year}</div>
              <div class="achievement-content">
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-org">${achievement.organization}</p>
                <p class="achievement-desc">${achievement.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
*/

// =============================================================================
// EXAMPLE 4: TALKS/PRESENTATIONS SECTION
// =============================================================================

const portfolioDataExample4 = {
  talks: [
    {
      title: "Introduction to RAG Systems",
      event: "AI Summit 2024",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      slides: "https://slides.com/yourpresentation",
      video: "https://youtube.com/watch?v=...",
      description: "Overview of Retrieval-Augmented Generation systems and their applications."
    }
  ]
};

// Template function:
/*
renderTalks(talks) {
  if (!talks || talks.length === 0) return '';
  
  return `
    <section id="talks" class="talks fade-in-up">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Talks & Presentations</h2>
        </div>
        <div class="talks-list">
          ${talks.map(talk => `
            <div class="talk-item">
              <h3 class="talk-title">${talk.title}</h3>
              <div class="talk-meta">
                <span class="talk-event">${talk.event}</span>
                <span class="talk-date">${talk.date}</span>
                ${talk.location ? `<span class="talk-location">${talk.location}</span>` : ''}
              </div>
              <p class="talk-description">${talk.description}</p>
              <div class="talk-links">
                ${talk.slides ? `<a href="${talk.slides}" class="talk-link" target="_blank" rel="noopener">View Slides</a>` : ''}
                ${talk.video ? `<a href="${talk.video}" class="talk-link" target="_blank" rel="noopener">Watch Video</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
*/

// =============================================================================
// EXAMPLE 5: OPEN SOURCE CONTRIBUTIONS
// =============================================================================

const portfolioDataExample5 = {
  openSource: [
    {
      project: "TensorFlow",
      description: "Contributed to core ML framework",
      contributions: [
        "Fixed memory leak in data pipeline",
        "Added support for new optimizer"
      ],
      link: "https://github.com/tensorflow/tensorflow/pulls?q=author:yourusername"
    },
    {
      project: "scikit-learn",
      description: "Machine learning library contributions",
      contributions: [
        "Improved documentation",
        "Added new feature to RandomForest"
      ],
      link: "https://github.com/scikit-learn/scikit-learn/pulls?q=author:yourusername"
    }
  ]
};

// =============================================================================
// NAVIGATION UPDATE
// =============================================================================

// Don't forget to add your new sections to the navigation array!
const navigationExample = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },  // NEW
    { label: "Achievements", href: "#achievements" },      // NEW
    { label: "Talks", href: "#talks" },                    // NEW
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ]
};

// =============================================================================
// TIPS FOR CUSTOM SECTIONS
// =============================================================================

/**
 * GENERAL PATTERN:
 * 
 * 1. Add data structure to data/portfolio-data.js
 * 2. Create render function in js/templates.js
 * 3. Call render function in renderAll() method
 * 4. Add CSS styles in css/styles.css
 * 5. Add navigation link (optional)
 * 
 * BEST PRACTICES:
 * 
 * - Keep data structure consistent
 * - Use semantic HTML in templates
 * - Follow existing CSS naming conventions
 * - Test on mobile devices
 * - Use meaningful class names
 * - Add fade-in-up class to sections for animations
 */

// =============================================================================
// SECTION PLACEMENT
// =============================================================================

/**
 * To insert a section at specific location:
 * 
 * BEFORE a section:
 *   targetSection.insertAdjacentHTML('beforebegin', yourSection);
 * 
 * AFTER a section:
 *   targetSection.insertAdjacentHTML('afterend', yourSection);
 * 
 * Common placements:
 * - After Skills: Good for Certifications, Tools
 * - After Projects: Good for Open Source, Blog
 * - Before Contact: Good for Testimonials, Achievements
 * - After Experience: Good for Talks, Publications
 */
