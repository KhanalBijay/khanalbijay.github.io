# Portfolio Website - Template-Based System

A modern, template-based portfolio website designed for easy content management and customization. Built with vanilla JavaScript, HTML, and CSS - perfect for GitHub Pages hosting.

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Edit your content** in `data/portfolio-data.js`
3. **Customize styles** in `css/styles.css` (optional)
4. **Deploy** to GitHub Pages or any static hosting

That's it! Your portfolio is ready to go.

## 📁 Project Structure

```
khanalbijay.github.io/
├── index.html              # Main HTML template (minimal - don't edit much)
├── CNAME                   # Custom domain configuration
├── data/
│   └── portfolio-data.js   # ⭐ YOUR CONTENT GOES HERE
├── css/
│   └── styles.css          # Styling (customizable)
├── js/
│   ├── main.js            # Main application logic
│   └── templates.js       # Template rendering system
├── imgs/                  # Your images and project screenshots
└── README.md             # This file

```

## 📝 How to Add/Edit Content

### 1. Personal Information

Edit the `personal` section in `data/portfolio-data.js`:

```javascript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  tagline: "Your Tagline",
  email: "your.email@example.com",
  profileImage: "imgs/your-photo.jpg",
  about: {
    paragraphs: [
      "First paragraph about yourself...",
      "Second paragraph..."
    ],
    highlights: [
      {
        title: "Current Focus",
        items: ["Item 1", "Item 2", "Item 3"]
      }
    ]
  }
}
```

### 2. Add a New Project

Add a new object to the `projects` array:

```javascript
projects: [
  {
    title: "Your Project Title",
    description: "Detailed description of your project...",
    image: "imgs/project-image.webp",
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "https://github.com/yourusername/project",
    featured: true  // or false for non-featured projects
  },
  // Add more projects...
]
```

**Tips:**
- Set `featured: true` for important projects (they'll appear first with larger cards)
- Add project images to the `imgs/` folder
- Use descriptive tags that highlight technologies used

### 3. Update Technical Skills

Edit the `skills` array:

```javascript
skills: [
  {
    category: "Your Skill Category",
    badges: [
      { name: "Skill Name", level: "primary" },  // primary = darker badge
      { name: "Another Skill", level: "secondary" }  // secondary = lighter badge
    ]
  },
  // Add more categories...
]
```

### 4. Add Education

Add to the `education` array:

```javascript
education: [
  {
    degree: "Degree Name",
    specialization: "Specialization (optional)",
    institution: "Institution Name",
    duration: "2020 - 2024",
    description: "Description of your studies..."
  }
]
```

### 5. Add Work Experience

Add to the `experience` array:

```javascript
experience: [
  {
    role: "Your Job Title",
    company: "Company Name",
    duration: "2020 - Present",
    description: "Description of your responsibilities..."
  }
]
```

### 6. Update Navigation

Edit the `navigation` array to add/remove menu items:

```javascript
navigation: [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  // Add custom sections...
]
```

## 🎨 Adding New Sections

### Add a Blog Section

1. **Uncomment and fill the `blogs` array** in `data/portfolio-data.js`:

```javascript
blogs: [
  {
    title: "Your Blog Post Title",
    date: "2024-01-15",
    excerpt: "Brief description of your blog post...",
    link: "/blog/post-url",
    tags: ["Tag1", "Tag2"]
  }
]
```

2. **Add to navigation** (optional):

```javascript
navigation: [
  // ... other items
  { label: "Blog", href: "#blogs" }
]
```

The blog section will automatically appear between Experience and Contact sections!

### Add a Research Papers Section

1. **Uncomment and fill the `research` array** in `data/portfolio-data.js`:

```javascript
research: [
  {
    title: "Paper Title",
    authors: ["Your Name", "Co-Author Name"],
    venue: "Conference/Journal Name",
    year: "2024",
    link: "https://arxiv.org/...",
    pdf: "/papers/paper.pdf",
    abstract: "Brief abstract of your paper..."
  }
]
```

2. **Add to navigation** (optional):

```javascript
navigation: [
  // ... other items
  { label: "Research", href: "#research" }
]
```

### Create a Completely Custom Section

If you want to add a unique section (e.g., "Awards", "Publications", "Talks"):

1. **Add data structure** in `data/portfolio-data.js`:

```javascript
// At the end of portfolioData object
awards: [
  {
    title: "Award Name",
    organization: "Organization",
    year: "2024",
    description: "Description..."
  }
]
```

2. **Create a rendering function** in `js/templates.js`:

```javascript
renderAwards(awards) {
  if (!awards || awards.length === 0) return '';
  
  return `
    <section id="awards" class="awards fade-in-up">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Awards & Recognition</h2>
        </div>
        <div class="awards-list">
          ${awards.map(award => `
            <div class="award-item">
              <h3>${award.title}</h3>
              <p>${award.organization} - ${award.year}</p>
              <p>${award.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
```

3. **Call it in the `renderAll` function** in `js/templates.js`:

```javascript
// At the end of renderAll function
const awardsSection = this.renderAwards(data.awards);
if (awardsSection) {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.insertAdjacentHTML('beforebegin', awardsSection);
  }
}
```

4. **Add CSS styles** in `css/styles.css`:

```css
/* Awards Section */
.awards {
  background-color: var(--color-bg-surface);
  padding: var(--space-24) 0;
}

.awards-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.award-item {
  background: var(--color-bg-page);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

5. **Add to navigation**:

```javascript
navigation: [
  // ... other items
  { label: "Awards", href: "#awards" }
]
```

## 🎨 Customization

### Change Colors

Edit CSS custom properties in `css/styles.css`:

```css
:root {
  --color-primary-500: #6366F1;  /* Primary color */
  --color-primary-600: #4F46E5;  /* Primary hover */
  /* Change other colors as needed */
}
```

### Change Fonts

1. **Import new fonts** in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

2. **Update font variables** in `css/styles.css`:

```css
:root {
  --font-family-primary: 'YourFont', sans-serif;
}
```

### Adjust Spacing

Edit spacing variables in `css/styles.css`:

```css
:root {
  --space-4: 16px;   /* Base spacing */
  --space-8: 32px;   /* Section spacing */
  /* Adjust as needed */
}
```

## 🖼️ Image Guidelines

### Profile Image
- **Recommended size:** 300x300px
- **Format:** JPG or WebP
- **Location:** `imgs/your-name.jpg`

### Project Images
- **Recommended size:** 800x600px or 16:9 aspect ratio
- **Format:** WebP (for best performance) or JPG
- **Location:** `imgs/project-name.webp`

### Optimization Tips
- Compress images before uploading (use tools like TinyPNG or Squoosh)
- Use WebP format for better performance
- Keep individual images under 500KB

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Click Save

3. **Custom Domain (optional):**
   - Update `CNAME` file with your domain
   - Configure DNS settings with your domain provider

### Other Hosting Options

- **Netlify:** Drag and drop the folder
- **Vercel:** Import from GitHub
- **Cloudflare Pages:** Connect repository

## 🔧 Development

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All sections automatically adapt to screen sizes.

