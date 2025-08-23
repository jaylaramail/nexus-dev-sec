# Firebase Deployment Guide for Bootstrap Portfolio

## Prerequisites
- Node.js and npm installed
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase account

## Project Structure
```
portfolio/
├── bootstrap-index.html       # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Custom CSS
│   ├── js/
│   │   └── main.js           # Main JavaScript
│   └── images/
│       ├── jay-favicon.svg   # Favicon
│       ├── jay-avatar.jpg    # Profile image (add your own)
│       ├── project-*.jpg     # Project images (add your own)
│       └── ...
├── sw.js                     # Service Worker
├── firebase.json             # Firebase config
├── .firebaserc              # Firebase project config
└── README.md
```

## Setup Instructions

### 1. Initialize Firebase Project
```bash
# Login to Firebase
firebase login

# Initialize project
firebase init

# Select:
# - Hosting: Configure files for Firebase Hosting
# - Public directory: . (current directory)
# - Configure as single-page app: No
# - Set up automatic builds: No
# - File bootstrap-index.html already exists. Overwrite: No
```

### 2. Configure firebase.json
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "*.md",
      "firebase-bootstrap-deployment.md"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/bootstrap-index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|js|css|html)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "sw.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=0"
          }
        ]
      }
    ]
  }
}
```

### 3. Add Required Images
Add these image files to `assets/images/`:
- `jay-avatar.jpg` - Your profile photo (300x300px recommended)
- `project-ecommerce.jpg` - E-commerce project screenshot
- `project-security.jpg` - Security dashboard screenshot  
- `project-mobile.jpg` - Mobile app screenshot

### 4. Deploy to Firebase
```bash
# Test locally first
firebase serve

# Deploy to production
firebase deploy

# Deploy with custom message
firebase deploy -m "Bootstrap portfolio deployment"
```

## Features Included

### ✅ Technical Requirements
- ✅ Built with Bootstrap 5.3.2 framework
- ✅ 3 color theme options (Blue, Green, Purple)
- ✅ Fully downloadable for local development
- ✅ Firebase hosting ready
- ✅ Bilingual support (French/English) with language switcher
- ✅ Dark/light theme toggle functionality
- ✅ W3C compliant, SEO-optimized structure
- ✅ Mobile-responsive design

### ✅ Content & Design
- ✅ Professional minimalistic design
- ✅ All content sourced and structured
- ✅ 'Jay' branding throughout
- ✅ Animated background elements with developer/security icons
- ✅ Clean UI emphasizing development and cybersecurity
- ✅ Functional contact form with validation
- ✅ Fast loading optimization
- ✅ Accessibility standards compliance

### ✅ Sections
- ✅ Hero section with animations
- ✅ About section with stats
- ✅ Skills section with categorized skills
- ✅ Formation/Education timeline
- ✅ Experience timeline with relevant icons
- ✅ Projects showcase with live links
- ✅ Contact form with validation
- ✅ Footer with credits

## Custom Commands

### Local Development
```bash
# Start local server
python -m http.server 8000
# Or with Node.js
npx http-server .

# View at: http://localhost:8000/bootstrap-index.html
```

### Production Build
```bash
# Minify CSS (optional)
npx clean-css-cli -o assets/css/style.min.css assets/css/style.css

# Minify JavaScript (optional)
npx terser assets/js/main.js -o assets/js/main.min.js

# Update HTML to use minified files if created
```

## Performance Optimizations
- Bootstrap CDN for fast loading
- Service Worker for PWA capabilities
- Optimized images (use WebP format when possible)
- CSS and JS minification ready
- Proper caching headers configured

## SEO Features
- Semantic HTML structure
- Open Graph meta tags
- Twitter Card meta tags
- Structured data ready
- Mobile-first responsive design
- Fast loading scores
- Accessibility compliance

## Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License
This portfolio template is free to use and modify for personal and commercial projects.

## Support
For issues or questions, please refer to:
- Bootstrap Documentation: https://getbootstrap.com/docs/
- Firebase Hosting Guide: https://firebase.google.com/docs/hosting
- MDN Web Docs: https://developer.mozilla.org/