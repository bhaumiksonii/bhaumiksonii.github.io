# Data Engineer Portfolio

A fully static portfolio website built with pure HTML, CSS, and JavaScript. No build process, no server required - just open `index.html` or deploy to GitHub Pages.

## Features

- Pure HTML, CSS, and JavaScript (no frameworks)
- All content controlled via `data/site-config.json`
- Working contact form with Web3Forms integration
- Responsive design with dark theme
- Downloadable resume
- Tech stack and certifications showcase
- Direct deployment to GitHub Pages

## Quick Start

1. Edit `data/site-config.json` with your information
2. Replace `public/resume.pdf` with your resume
3. Open `index.html` in your browser to preview
4. Deploy to GitHub Pages (see below)

## Configuration

### Edit Content

All website content is managed in `data/site-config.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "skills": "Your Skills",
    "profileImage": "/path/to/image.jpg",
    "resumeUrl": "/resume.pdf"
  },
  "contact": {
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "web3formsKey": "",
    "status": {
      "openToWork": true,
      "availability": "immediate",
      "location": "remote"
    }
  },
  "home": {
    "heading": "Your Name",
    "subheading": "Your Title",
    "description": "Your description",
    "stats": {...},
    "cards": [...]
  },
  "techStack": {...},
  "certifications": {...}
}
```

### Setup Contact Form (Optional)

The contact form works in two modes:

1. **With Web3Forms** (Recommended): 
   - Sign up for free at [web3forms.com](https://web3forms.com)
   - Add your access key to `data/site-config.json`:
     ```json
     "contact": {
       "email": "your.email@example.com",
       "web3formsKey": "your-access-key-here"
     }
     ```

2. **Mailto Fallback**: If no Web3Forms key is configured, the form will open the user's email client

### Add Your Resume

Replace `public/resume.pdf` with your resume file, or update the path in `site-config.json`

## Deploy to GitHub Pages

### Method 1: Direct Upload (Simplest)

1. Create a new repository on GitHub
2. Push all files to the `main` branch
3. Go to Settings → Pages
4. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
5. Your site will be live at `https://yourusername.github.io/repo-name/`

### Method 2: Using Git

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

## Local Development

Simply open `index.html` in your browser. No build process or server needed!

For a local server (optional):

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

## File Structure

```
├── data/
│   └── site-config.json      # All website content (EDIT THIS)
├── public/
│   └── resume.pdf            # Your resume file
├── index.html                # Home page
├── tech-stack.html           # Tech stack page
├── certifications.html       # Certifications page
├── contact.html              # Contact page
├── styles.css                # All styles
└── app.js                    # JavaScript utilities
```

## Updating Content

1. Edit `data/site-config.json`
2. Commit and push to GitHub
3. GitHub Pages will automatically update (usually within 1-2 minutes)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary: #135bec;
  --background: #0a0e1a;
  --surface: #141824;
  /* ... more colors */
}
```

### Fonts

Change fonts in HTML `<head>` sections and update `styles.css`:

```css
body {
  font-family: "Your Font", sans-serif;
}
```

## Troubleshooting

**Issue**: JSON not loading / images not showing
- Solution: Make sure you're viewing via a server (http://), not file:// protocol. Use Python/Node server or deploy to GitHub Pages.

**Issue**: Contact form not working
- Solution: Add Web3Forms key to `data/site-config.json` or the form will fallback to mailto

**Issue**: GitHub Pages shows 404
- Solution: Make sure GitHub Pages is enabled in Settings → Pages and deployment is complete

## License

Free to use and modify for your own portfolio.
