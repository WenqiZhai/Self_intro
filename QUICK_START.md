# Quick Start Guide 🚀

## Open and View Locally

1. Navigate to the `self_intro` folder
2. Open `index.html` in your web browser
3. You'll see the complete team introduction website!

## Key Features Included

✅ **Interactive Map**
- Located in the "Map" section
- Shows your office location in San Francisco
- Click the marker to see office details
- Fully interactive - zoom and pan as needed

✅ **Team Showcase**
- Professional team member cards
- Social media links for each member
- Beautiful hover animations

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Beautiful UI with modern styling
- Smooth navigation and animations

## Quick Customizations

### 1. Change Team Members (Edit `index.html`)

Find the team section around line 60-125 and update:
- Names and titles
- Roles and descriptions
- Social media links

### 2. Change Map Location (Edit `script.js`)

Find line 7-8 and update coordinates:
```javascript
const officeLat = 37.7749;  // Your latitude
const officeLng = -122.4194; // Your longitude
```

Get coordinates from [Google Maps](https://maps.google.com) - right-click on location to copy!

### 3. Update Contact Info (Edit `index.html`)

Find line 145-160 and update:
- Email address
- Phone number
- Location
- Website

### 4. Change Colors (Edit `styles.css`)

Find line 8-15 and update the color variables:
```css
--primary-color: #2563eb;    /* Main color */
--secondary-color: #1e40af;  /* Dark variant */
--accent-color: #06b6d4;     /* Highlight color */
```

### 5. Update Company Name

Search for "TeamPro" and replace with your company name in:
- `index.html` (line 14)
- `styles.css` (if needed)
- `README.md` (if needed)

## Deploy to GitHub Pages

### Option 1: Using your username repository

1. Create a new GitHub repository named: `yourusername.github.io`
2. Clone it: `git clone https://github.com/yourusername/yourusername.github.io`
3. Copy all files from `self_intro/` to the repository
4. Push: `git add . && git commit -m "Add team site" && git push`
5. Visit: `https://yourusername.github.io`

### Option 2: Using a project repository

1. Create any GitHub repository (e.g., "team-intro")
2. Create a `docs/` folder or use `gh-pages` branch
3. Push files there
4. Enable GitHub Pages in repository settings
5. Visit: `https://yourusername.github.io/team-intro`

## File Overview

| File | Purpose |
|------|---------|
| `index.html` | Main website structure |
| `styles.css` | All styling and animations |
| `script.js` | Interactive map and smooth scrolling |
| `README.md` | Detailed documentation |

## Troubleshooting

**Q: Map not showing?**
- A: Check your internet connection (map needs online tiles)
- A: Verify map container has an ID of "team-map"

**Q: Colors not changing?**
- A: Make sure you're editing `:root` variables in `styles.css`
- A: Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

**Q: Website not working on GitHub Pages?**
- A: Verify all files are in correct location
- A: Check repository settings → Pages section
- A: Wait 1-2 minutes for GitHub to build the site

## Next Steps

1. ✅ Customize team member information
2. ✅ Update map coordinates to your office
3. ✅ Update contact details
4. ✅ Test on mobile devices
5. ✅ Deploy to GitHub Pages
6. ✅ Share with your team!

## Need More Help?

- See `README.md` for detailed documentation
- Check code comments in each file
- Visit [Leaflet.js docs](https://leafletjs.com/) for map help
- Visit [Font Awesome](https://fontawesome.com/icons) for icon options

---

**You're all set! Enjoy your team introduction website!** 🎉
