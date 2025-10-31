# Team Introduction Website

A beautiful, modern, and fully responsive team introduction website built with HTML, CSS, and JavaScript, featuring an interactive map powered by Leaflet.js.

## Features

✨ **Modern Design**
- Clean and professional UI with a modern color scheme
- Smooth animations and transitions
- Fully responsive design (works on desktop, tablet, and mobile)

🗺️ **Interactive Map**
- Integrated Leaflet.js map showing team office location
- Custom markers with detailed information
- Circle overlay for area visualization
- Smooth zoom and pan controls

👥 **Team Showcase**
- Dedicated team member cards with bios
- Social media links (GitHub, LinkedIn, Email)
- Hover effects and animations

📱 **Responsive Layout**
- Mobile-first design approach
- Adaptive grid layouts
- Touch-friendly navigation

🔗 **Easy Navigation**
- Sticky navigation bar
- Smooth scrolling between sections
- Quick access to all sections

## Sections

1. **Hero** - Welcome section with call-to-action
2. **About** - Team values and mission (Innovation, Collaboration, Excellence)
3. **Team** - Team members showcase with details
4. **Map** - Interactive map of team office location
5. **Contact** - Contact information and details

## File Structure

```
self_intro/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript for interactivity and map
└── README.md       # This file
```

## Getting Started

### 1. Basic Setup

Simply clone or download this repository and open `index.html` in your web browser.

```bash
cd self_intro
open index.html
```

### 2. Customize Team Members

Edit `index.html` and update the team member information:

```html
<div class="team-card">
    <div class="member-image">
        <i class="fas fa-user-circle"></i>
    </div>
    <h3>Your Name</h3>
    <p class="role">Your Role</p>
    <p class="bio">Your biography here</p>
    <div class="member-links">
        <a href="https://github.com/yourprofile" title="GitHub">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourprofile" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your.email@example.com" title="Email">
            <i class="fas fa-envelope"></i>
        </a>
    </div>
</div>
```

### 3. Update Map Location

Edit `script.js` to change the office location:

```javascript
function initializeMap() {
    // Update these coordinates to your office location
    const officeLat = 37.7749;
    const officeLng = -122.4194;
    // ...
}
```

To find coordinates for your location:
- Go to [Google Maps](https://maps.google.com)
- Right-click on your location
- Copy the coordinates (latitude, longitude)

### 4. Update Contact Information

Edit `index.html` in the Contact section:

```html
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
    </div>
</div>
```

### 5. Customize Colors

Edit `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Dark blue */
    --accent-color: #06b6d4;       /* Cyan accent */
    /* ... other colors ... */
}
```

Color suggestions:
- Professional: Blues, grays, and whites
- Creative: Purples, pinks, and vibrant colors
- Tech: Dark themes with neon accents

### 6. Update Team Description

Edit the "About Our Team" section:

```html
<section id="about" class="about">
    <div class="container">
        <h2>About Our Team</h2>
        <p>Your team description here...</p>
```

## Deploying to GitHub Pages

### Step 1: Create a Repository

1. Go to [GitHub](https://github.com)
2. Create a new repository named `your-username.github.io`
3. Clone it locally

### Step 2: Add Files

1. Copy all files from `self_intro/` to your repository
2. Commit and push:

```bash
git add .
git commit -m "Initial commit: Team introduction website"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select "main" branch as source
4. Your site will be live at `https://your-username.github.io`

### Alternative: Use a Custom Domain

1. In repository settings, add your custom domain
2. Update DNS records with your domain provider
3. GitHub Pages will handle HTTPS automatically

## Customization Tips

### Add Team Photos

Replace the user circle icon with actual photos:

```html
<div class="member-image">
    <img src="path/to/photo.jpg" alt="Member Name">
</div>
```

Add to CSS:

```css
.member-image img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}
```

### Add Multiple Office Locations

In `script.js`, add more markers:

```javascript
// Add another marker
L.marker([37.3382, -121.8863], {
    title: 'Branch Office'
}).addTo(map).bindPopup('Branch Office Location');
```

### Change Company Logo/Name

Edit `index.html`:

```html
<div class="logo">Your Company Name</div>
```

Update the title:

```html
<title>Your Company - Team Introduction</title>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- **Leaflet.js** - Interactive map library
- **Font Awesome** - Icons library
- **OpenStreetMap** - Map tiles (free)

All dependencies are loaded from CDN, so no installation required!

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues:
1. Check the code comments
2. Review the Leaflet.js [documentation](https://leafletjs.com/)
3. Check Font Awesome [icon library](https://fontawesome.com/icons)

## Tips for Best Results

1. **Keep it Updated** - Update team members and contact info regularly
2. **Use High-Quality Images** - If adding photos, use high-resolution images
3. **Test Responsiveness** - Test on mobile devices before publishing
4. **SEO Optimization** - Update meta tags for better search visibility
5. **Analytics** - Add Google Analytics to track visitors

## Next Steps

1. Customize the content with your team information
2. Update the map location to your office
3. Deploy to GitHub Pages
4. Share with your team!

Happy customizing! 🚀
