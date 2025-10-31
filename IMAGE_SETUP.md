# Setting Up Photos on the Interactive Map 🗺️📸

## Overview

Your interactive map now displays team member photos at different locations! When users click on the colored markers on the map, they see beautiful popups with your photos, names, roles, and descriptions.

---

## Step 1: Create Images Folder

Create a new folder named `images` in the `self_intro` directory:

```
self_intro/
├── images/          ← Create this folder
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   └── photo5.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## Step 2: Save Your Photos

Place your photos in the `images` folder with these names:
- `photo1.jpg` - First team member/location
- `photo2.jpg` - Second team member/location
- `photo3.jpg` - Third team member/location
- `photo4.jpg` - Fourth team member/location
- `photo5.jpg` - Fifth team member/location

**Photo Requirements:**
- Format: `.jpg`, `.png`, or `.webp`
- Size: At least 400x300px (but 600x400px or larger is better)
- Quality: High resolution for best display

---

## Step 3: Customize Location Data

Edit `script.js` to update the team member information and locations. Find the `teamLocations` array (around line 16):

```javascript
const teamLocations = [
    {
        name: 'Your Name',           // Change this
        role: 'Your Role',           // Change this
        lat: 37.7749,                // Change latitude
        lng: -122.4194,              // Change longitude
        photo: 'images/photo1.jpg',  // Keep as is or change name
        description: 'Your description here'  // Change this
    },
    // ... more locations ...
];
```

---

## How to Find Coordinates

### Using Google Maps:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Right-click on the location
4. Copy the coordinates shown
5. Paste into `lat` and `lng` fields

### Example:
```
San Francisco: 37.7749, -122.4194
New York City: 40.7128, -74.0060
Tokyo: 35.6762, 139.6503
```

---

## Marker Colors

Each marker gets a unique color:

| Marker # | Color |
|----------|-------|
| 1 | Blue (#2563eb) |
| 2 | Cyan (#06b6d4) |
| 3 | Purple (#7c3aed) |
| 4 | Pink (#ec4899) |
| 5 | Orange (#f59e0b) |

Want to change colors? Edit the `colors` array in `script.js`:

```javascript
const colors = ['#2563eb', '#06b6d4', '#7c3aed', '#ec4899', '#f59e0b'];
```

---

## Map Features

### Interactive Elements:
- **Colored Markers**: Click any marker to see the photo popup
- **Zoom Controls**: Scroll to zoom in/out
- **Pan Controls**: Click and drag to move around
- **First Marker Auto-Opens**: The first location's popup opens automatically
- **Main Office Marker**: Default marker showing your main office

### Popup Information:
Each popup displays:
- Team member name
- Role/Location title
- Photo
- Description

---

## Customization Examples

### Example 1: Team Member Locations
```javascript
{
    name: 'Alice Chen',
    role: 'Product Manager',
    lat: 37.7749,
    lng: -122.4194,
    photo: 'images/alice.jpg',
    description: 'Based in San Francisco'
}
```

### Example 2: Travel/Projects
```javascript
{
    name: 'Project Hawaii',
    role: 'Team Retreat 2024',
    lat: 20.7967,
    lng: -156.3319,
    photo: 'images/hawaii-trip.jpg',
    description: 'Summer team building'
}
```

### Example 3: Office Locations
```javascript
{
    name: 'New York Office',
    role: 'East Coast Hub',
    lat: 40.7128,
    lng: -74.0060,
    photo: 'images/ny-office.jpg',
    description: 'Opening soon!'
}
```

---

## Photo Optimization Tips

### For Best Results:
1. **Crop to Square/Landscape**: Works better in popups
2. **Clear Subject**: Make sure main subject is visible
3. **Good Lighting**: Well-lit photos look best
4. **Consistent Style**: Similar color tones help cohesion
5. **Compress for Web**: Reduce file size without losing quality

### Recommended Tools:
- **Compression**: TinyPNG, ImageOptim
- **Editing**: Canva, Pixlr, Photoshop
- **Format Conversion**: CloudConvert

---

## Troubleshooting

### Photos Not Showing?

**Problem**: Images appear as broken links
- ✅ Check file names match exactly (case-sensitive)
- ✅ Verify files are in `images/` folder
- ✅ Ensure format is .jpg, .png, or .webp

**Problem**: Map markers aren't clickable
- ✅ Make sure JavaScript file is loaded
- ✅ Check browser console for errors (F12)
- ✅ Clear browser cache and refresh

### Popup Issues?

**Problem**: Photos are too small/large
- Edit the `max-width` in `script.js` (currently 250px)
- Change this line: `max-width: 250px;`

**Problem**: Text overlapping image
- Add more line breaks (`<br>`) in the description
- Make description text shorter

---

## Advanced Customization

### Add More Markers (6+):

1. Add new location to `teamLocations` array
2. Add photo to `images/` folder
3. Update `colors` array if needed

```javascript
// Add this to teamLocations array
{
    name: 'Team Member 6',
    role: 'Location 6',
    lat: 35.6762,
    lng: 139.6503,
    photo: 'images/photo6.jpg',
    description: 'Tokyo Office'
}
```

### Custom Marker Icons:

Change from circle markers to custom images:
```javascript
const marker = L.marker([location.lat, location.lng], {
    icon: L.icon({
        iconUrl: location.photo,
        iconSize: [40, 40]
    })
}).addTo(map);
```

### Hide Main Office Marker:

Comment out or remove this section:
```javascript
// Add a primary office marker (main hub)
// const mainMarker = L.marker([officeLat, officeLng], {
//     ...
```

---

## Quick Checklist

- [ ] Created `images/` folder
- [ ] Saved 5 photos as photo1.jpg through photo5.jpg
- [ ] Updated team member names in script.js
- [ ] Updated coordinates for each location
- [ ] Updated role/description for each member
- [ ] Tested on localhost
- [ ] All photos display correctly
- [ ] Popups open when clicking markers
- [ ] Ready to deploy!

---

## Need Help?

Check these resources:
- **Google Maps**: https://maps.google.com
- **Leaflet Docs**: https://leafletjs.com/reference.html
- **File Size Tool**: https://www.tinypng.com/

---

**Your map is now photo-powered!** 🎉
