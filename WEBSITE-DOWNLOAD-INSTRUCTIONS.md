# 📥 Complete Website Download Instructions

## Step 1: Download Files from Lovable

Since this is a Lovable project, you need to download these files:

### Required Files:
1. **bootstrap-index.html** (rename to `index.html`)
2. **assets/** folder with all contents:
   - assets/css/style.css
   - assets/js/main.js
   - assets/images/* (all images)
3. **sw.js** (Service Worker - optional)

---

## Step 2: Download via GitHub (Recommended)

If this project is connected to GitHub:

1. Go to your GitHub repository
2. Click the **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP file
5. Rename `bootstrap-index.html` to `index.html`

---

## Step 3: Manual File Creation

If you need to create files manually, here's the structure:

```
jay-portfolio/
├── index.html                    (from bootstrap-index.html)
├── sw.js
├── firebase.json                 (will be created by Firebase CLI)
├── .firebaserc                   (will be created by Firebase CLI)
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        ├── jay-favicon.svg
        ├── jay-avatar.jpg
        ├── abs-benq.png
        ├── ws-abs.png
        ├── ws-plantaor.png
        ├── js-game.png
        ├── wp-kod.jpg
        ├── ws-p2s-01.jpg
        └── project-placeholder.jpg
```

---

## Step 4: Download from Lovable Editor

1. **In Lovable Editor:**
   - Open the file you want to download
   - Click the file name in the editor
   - Look for a download/export option
   - Or copy the content and paste into a local file

2. **For Images:**
   - Right-click on images in the preview
   - Select "Save image as..."
   - Save to `assets/images/` folder

---

## Step 5: Using VS Code

### A. Opening the Project
1. Open Visual Studio Code
2. Click "File" → "Open Folder"
3. Select your `jay-portfolio` folder
4. You should see the file structure on the left

### B. File Explorer View
```
EXPLORER
└── jay-portfolio
    ├── index.html
    ├── sw.js
    └── assets
        ├── css
        │   └── style.css
        ├── js
        │   └── main.js
        └── images
            └── (all images)
```

---

## Step 6: Verify File Structure

Create a simple verification script:

**Create `verify.html` in your project root:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>File Structure Verification</title>
</head>
<body>
    <h1>Checking File Structure...</h1>
    <ul id="fileList"></ul>
    <script>
        const files = [
            'index.html',
            'assets/css/style.css',
            'assets/js/main.js',
            'assets/images/jay-favicon.svg',
            'assets/images/jay-avatar.jpg',
            'assets/images/abs-benq.png',
            'assets/images/ws-abs.png',
            'assets/images/ws-plantaor.png',
            'assets/images/js-game.png',
            'assets/images/wp-kod.jpg',
            'assets/images/ws-p2s-01.jpg'
        ];
        
        const fileList = document.getElementById('fileList');
        files.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file;
            fileList.appendChild(li);
        });
    </script>
</body>
</html>
```

Open this file in your browser to see the expected structure.

---

## Step 7: Test Locally

### Using VS Code Live Server:

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Click "Open with Live Server"
4. Your site opens at `http://localhost:5500`

### Or use Python:

```bash
# Python 3
cd jay-portfolio
python -m http.server 8000

# Visit: http://localhost:8000
```

---

## Step 8: Content Verification Checklist

Before deploying, verify:

### ✅ HTML Content:
- [ ] Title: "Jay - Développeur d'Application & Spécialiste Cybersécurité"
- [ ] Meta tags present
- [ ] All sections visible (Hero, About, Skills, Formation, Experience, Projects, Contact)

### ✅ CSS Styling:
- [ ] Bootstrap loads correctly
- [ ] Custom styles applied
- [ ] Three color themes work
- [ ] Dark/light mode works
- [ ] Animations visible

### ✅ JavaScript Functionality:
- [ ] Language switcher works (FR/EN)
- [ ] Theme switcher works
- [ ] Contact form validates
- [ ] Navigation highlights active section
- [ ] Security features active

### ✅ Images:
- [ ] Favicon displays
- [ ] Avatar image loads
- [ ] All project images load
- [ ] Image zoom modal works

---

## Step 9: Making Changes

### To Update Content:

1. **Skills:**
   - Open `assets/js/main.js`
   - Find the `skills` object
   - Update items array

2. **Experience:**
   - Open `assets/js/main.js`
   - Find the `experiences` array
   - Add/modify entries

3. **Projects:**
   - Open `assets/js/main.js`
   - Find the `projects` array
   - Add/modify projects

4. **Formation:**
   - Open `assets/js/main.js`
   - Find the `formation` array
   - Add new certifications

### To Update Styling:

1. **Colors:**
   - Open `assets/css/style.css`
   - Modify CSS variables at the top
   ```css
   :root {
     --bs-primary: #3b82f6;
     --primary-gradient: linear-gradient(135deg, #3b82f6, #1d4ed8);
   }
   ```

2. **Animations:**
   - Open `assets/css/style.css`
   - Find `@keyframes` sections
   - Modify or add new animations

---

## Step 10: Backup Strategy

### Before Each Major Update:

1. **Create a backup:**
   ```bash
   # Copy entire folder
   cp -r jay-portfolio jay-portfolio-backup-2025-01-08
   ```

2. **Use Git (Recommended):**
   ```bash
   cd jay-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create a backup branch
   git branch backup-2025-01-08
   ```

---

## Common Issues & Solutions

### Issue 1: Files won't download
**Solution:** Use browser's "Save Page As" → "Complete Webpage"

### Issue 2: Images not showing
**Solution:** 
- Check file paths are correct
- Ensure images are in `assets/images/`
- Verify file names match exactly (case-sensitive)

### Issue 3: CSS not loading
**Solution:**
- Check `<link>` tag in HTML points to correct path
- Clear browser cache (Ctrl+Shift+R)

### Issue 4: JavaScript not working
**Solution:**
- Open browser console (F12) to see errors
- Verify `<script>` tag at end of HTML body
- Check file path is correct

---

## VS Code Recommended Settings

Create `.vscode/settings.json` in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.autoSave": "onFocusChange",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

---

## Ready for Deployment?

Once all files are downloaded and verified:

1. ✅ All files present
2. ✅ Works locally
3. ✅ Content verified
4. ✅ Images load
5. ✅ No console errors

👉 **Next:** Follow `FIREBASE-DEPLOYMENT-COMPLETE-GUIDE.md`

---

*Created for Jay - Application Developer & Cybersecurity Specialist*
