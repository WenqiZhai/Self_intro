# How to Run Your Team Introduction Website 🚀

## Quick Start (5 minutes)

### Option 1: Run Locally on Your Computer

#### Step 1: Open the Website
1. Navigate to `/Users/wenqi.zhai/Documents/GitHub/self_intro/`
2. Right-click on `index.html`
3. Select "Open With" → "Your Browser" (Chrome, Safari, Firefox, etc.)
4. **Done!** Your website opens in the browser

**Alternative - Drag & Drop:**
- Drag `index.html` directly into your browser window

---

### Option 2: Run with Terminal (Recommended)

#### Step 1: Navigate to Folder
```bash
cd /Users/wenqi.zhai/Documents/GitHub/self_intro
```

#### Step 2: Start Local Server
```bash
# Using Python 3 (macOS comes with Python)
python3 -m http.server 8000

# OR using Python 2
python -m SimpleHTTPServer 8000
```

#### Step 3: Open in Browser
- Visit: `http://localhost:8000`
- Your website appears instantly!

**To Stop Server:**
- Press `Ctrl+C` in Terminal

---

## Setup with Photos (10 minutes)

### Step 1: Create Images Folder
```bash
# In Terminal, navigate to project folder
cd /Users/wenqi.zhai/Documents/GitHub/self_intro

# Create images folder
mkdir images
```

**Or Manually:**
1. Open Finder
2. Go to `/Users/wenqi.zhai/Documents/GitHub/self_intro/`
3. Right-click → "New Folder"
4. Name it `images`

### Step 2: Copy Your Photos
1. Open the `images` folder you just created
2. Copy your 5 photos into it
3. Rename them:
   - `photo1.jpg` (or .png)
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`

### Step 3: Open Website in Browser
- Simply open `index.html` in your browser
- You should see the map with 5 colored markers
- Click any marker to see a photo popup!

---

## Customize Your Content

### Edit Team Info
1. Open `script.js` in a text editor (VS Code, Sublime, etc.)
2. Find the `teamLocations` array around line 16
3. Update each location:

```javascript
{
    name: 'Your Name',           // Your name here
    role: 'Your Job Title',      // Your role here
    lat: 37.7749,                // Your latitude
    lng: -122.4194,              // Your longitude
    photo: 'images/photo1.jpg',  // Photo file name
    description: 'Your description'  // Short description
}
```

### Find Coordinates
1. Open [Google Maps](https://maps.google.com)
2. Search for a location
3. Right-click on it
4. Copy the latitude, longitude
5. Paste into the `lat` and `lng` fields

### Save and Refresh
1. Save the file (Ctrl+S or Cmd+S)
2. Go back to browser
3. Refresh the page (F5 or Cmd+R)
4. See your changes!

---

## Website Sections to Customize

### 1. Hero Section (Main Banner)
**File:** `index.html` (around line 25)
```html
<h1>Welcome to Our Team</h1>
<p>Building amazing things together</p>
```

### 2. Team Members
**File:** `index.html` (around line 60)
- Change names, roles, descriptions
- Update social media links

### 3. Contact Information
**File:** `index.html` (around line 145)
- Email, phone, location, website

### 4. Company Name/Logo
**File:** `index.html` (line 14)
```html
<div class="logo">TeamPro</div>  ← Change this to your company name
```

### 5. Colors
**File:** `styles.css` (line 8-15)
```css
--primary-color: #2563eb;      /* Main color */
--secondary-color: #1e40af;    /* Dark color */
--accent-color: #06b6d4;       /* Highlight color */
```

---

## Testing Checklist

### Local Testing
- [ ] Website opens in browser
- [ ] All sections display correctly
- [ ] Map loads with markers
- [ ] Markers are clickable
- [ ] Photos appear in popups
- [ ] Smooth scrolling works
- [ ] Mobile view looks good (test in browser dev tools)

### Before Deploying
- [ ] All team info is updated
- [ ] Photos are in the correct locations
- [ ] Links work (social media, email, etc.)
- [ ] Colors look good
- [ ] No broken images
- [ ] Tested on mobile

---

## Deploy to GitHub Pages (Free Hosting) 🌐

### Prerequisites
- GitHub account (free at github.com)
- Git installed on your computer

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account
3. Click **"+"** → **"New repository"**
4. Name it: `yourusername.github.io` (replace `yourusername`)
   - Example: `wenqi-zhai.github.io`
5. Select **Public**
6. Click **"Create repository"**

### Step 2: Clone Repository

```bash
# Copy the repository URL from GitHub
# Then run:

git clone https://github.com/yourusername/yourusername.github.io.git

# Navigate into the folder
cd yourusername.github.io
```

### Step 3: Copy Your Website Files

**Option A: Terminal**
```bash
# Copy all files from self_intro
cp -r /Users/wenqi.zhai/Documents/GitHub/self_intro/* .

# Verify files are there
ls -la
```

**Option B: Manual**
1. Open Finder
2. Go to `/Users/wenqi.zhai/Documents/GitHub/self_intro/`
3. Select all files (Cmd+A)
4. Copy them (Cmd+C)
5. Go to your repository folder
6. Paste them (Cmd+V)

### Step 4: Commit and Push

```bash
# Navigate to repository folder
cd yourusername.github.io

# Add all files
git add .

# Commit with message
git commit -m "Add team introduction website"

# Push to GitHub
git push origin main
```

### Step 5: Visit Your Website

After pushing, your website will be live at:
```
https://yourusername.github.io
```

Wait 1-2 minutes for GitHub to build the site, then visit!

---

## Using a Custom Domain (Optional)

If you have your own domain (e.g., `myteam.com`):

### Step 1: Configure DNS
1. Go to your domain registrar
2. Add a CNAME record pointing to `yourusername.github.io`

### Step 2: Update GitHub Settings
1. Go to your GitHub repository
2. Settings → Pages
3. Under "Custom domain", enter your domain
4. GitHub handles SSL certificate automatically

### Step 3: Wait & Verify
- Wait 5-10 minutes for DNS to propagate
- Visit your custom domain!

---

## Troubleshooting

### Photos Not Showing?
```
✓ Check images folder exists
✓ Verify photo names match (case-sensitive)
✓ Use .jpg or .png format
✓ Clear browser cache (Cmd+Shift+Delete)
✓ Hard refresh (Cmd+Shift+R)
```

### Map Not Working?
```
✓ Check internet connection (needs online tiles)
✓ Ensure script.js is in same folder as index.html
✓ Check browser console (F12) for errors
✓ Try different browser
```

### Website Not Publishing on GitHub Pages?
```
✓ Repository name must be yourusername.github.io
✓ Files must be in root folder (not in subfolder)
✓ index.html must be in root
✓ Wait 2-3 minutes after push
✓ Check GitHub Pages is enabled in Settings
```

---

## File Checklist

Your `self_intro` folder should contain:

```
self_intro/
├── index.html         ✓ Main website file
├── styles.css         ✓ Styling
├── script.js          ✓ Interactivity & map
├── images/            ✓ Folder with photos
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   └── photo5.jpg
├── README.md          ✓ Documentation
├── QUICK_START.md     ✓ Quick guide
├── IMAGE_SETUP.md     ✓ Photo guide
├── FEATURES.md        ✓ Features list
└── RUN_GUIDE.md       ✓ This file!
```

---

## Common Tasks

### How to Update Content Later?

1. Open the file you want to edit (HTML, CSS, or JS)
2. Make changes
3. Save (Cmd+S)
4. Refresh browser (Cmd+R)
5. See changes immediately!

### How to Update on GitHub?

```bash
# After making changes locally:

cd yourusername.github.io

git add .
git commit -m "Update team information"
git push origin main

# Changes appear on your website in 1-2 minutes!
```

### How to Add More Team Members?

1. Edit `script.js`
2. Add new object to `teamLocations` array
3. Add photo to `images/` folder
4. Save and refresh browser

---

## Quick Command Reference

```bash
# Navigate to folder
cd /Users/wenqi.zhai/Documents/GitHub/self_intro

# Start local server (Python)
python3 -m http.server 8000

# Stop server
Ctrl+C

# View files
ls -la

# Create images folder
mkdir images

# Copy files
cp source_file destination_file

# Git commands
git clone <url>
git add .
git commit -m "message"
git push origin main
```

---

## Need More Help?

| Issue | Solution |
|-------|----------|
| Website looks broken | Refresh browser (Cmd+R) or clear cache |
| Photos not showing | Check `images/` folder and file names |
| Map not interactive | Check internet connection |
| Changes not updating | Hard refresh (Cmd+Shift+R) |
| GitHub Pages not working | Wait 2 minutes and check repo settings |

---

## Success! 🎉

Your website is now:
- ✅ Running locally
- ✅ Ready to customize
- ✅ Ready to deploy
- ✅ Live on GitHub Pages!

**Next Steps:**
1. Add your photos to `images/` folder
2. Customize team info in `script.js`
3. Test locally
4. Push to GitHub
5. Share your website!

---

**Happy coding!** 🚀
