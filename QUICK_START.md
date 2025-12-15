# 🚀 Quick Start Guide

This guide will help you quickly customize your portfolio in 5 minutes!

## Step 1: Update Your Personal Information (2 minutes)

Open `data/portfolio-data.js` and update:

```javascript
personal: {
  name: "YOUR NAME HERE",           // Change this
  title: "YOUR JOB TITLE",          // Change this
  tagline: "YOUR TAGLINE",          // Change this
  email: "your.email@example.com",  // Change this
  profileImage: "imgs/your-photo.jpg", // Add your photo to imgs/ folder
```

## Step 2: Update About Section (1 minute)

In the same file, scroll to the `about` section:

```javascript
about: {
  paragraphs: [
    "Write about yourself here...",
    "Add more paragraphs as needed..."
  ]
}
```

## Step 3: Add Your Projects (2 minutes)

Find the `projects` array and add your projects:

```javascript
projects: [
  {
    title: "My Awesome Project",
    description: "What your project does...",
    image: "imgs/project-screenshot.webp",  // Add image to imgs/ folder
    tags: ["Python", "Machine Learning", "API"],
    link: "https://github.com/yourusername/project",
    featured: true
  },
  // Add more projects...
]
```

## Step 4: Update Skills

Scroll to the `skills` array:

```javascript
skills: [
  {
    category: "Programming Languages",
    badges: [
      { name: "Python", level: "primary" },
      { name: "JavaScript", level: "primary" },
      { name: "SQL", level: "secondary" }
    ]
  }
  // Add more categories...
]
```

## Step 5: Save and View

1. Save `data/portfolio-data.js`
2. Open `index.html` in your browser
3. Your changes are live! 🎉

## Next Steps

- Add your education in the `education` array
- Add work experience in the `experience` array
- Customize colors in `css/styles.css`
- Add more projects
- Update social links

