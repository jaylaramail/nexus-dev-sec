# Firebase Deployment Instructions

## Prerequisites
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`

## Build & Deploy Steps
1. Build the project: `npm run build`
2. Initialize Firebase hosting: `firebase init hosting`
   - Select your Firebase project
   - Set public directory to: `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No (optional)
3. Deploy: `firebase deploy`

## Project Structure
This portfolio website includes:
- React + TypeScript + Vite
- Tailwind CSS for styling
- Multi-language support (French/English)
- Dark/Light theme toggle
- Professional portfolio sections
- Contact form with validation
- Security features (right-click disabled, dev tools blocked)
- Responsive design
- SEO optimized

## Key Features
- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Animations**: Smooth transitions and hover effects
- **Bilingual**: French and English support with language switcher
- **Portfolio**: Complete project showcase with image zoom
- **Formation & Experience**: Academic background and work history
- **Skills**: Technical competencies with progress indicators
- **Contact**: Functional contact form with validation
- **Security**: Content protection and right-click disabled

## Environment
- Node.js 18+
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Firebase Hosting compatible
- Mobile responsive

All files are ready for deployment. The `dist` folder after build contains all necessary files for Firebase hosting.