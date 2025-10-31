// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
});

function initializeMap() {
    // San Francisco office coordinates
    const officeLat = 37.7749;
    const officeLng = -122.4194;
    
    // Initialize the map
    const map = L.map('team-map').setView([officeLat, officeLng], 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        className: 'leaflet-tile'
    }).addTo(map);
    
    // Define team member locations with photos
    const teamLocations = [
        {
            name: 'Team Member 1',
            role: 'Location 1',
            lat: 37.7749,
            lng: -122.4194,
            photo: 'images/photo1.jpg',
            description: 'Adventure & Exploration'
        },
        {
            name: 'Team Member 2',
            role: 'Location 2',
            lat: 37.3382,
            lng: -121.8863,
            photo: 'images/photo2.jpg',
            description: 'Wellness & Fitness'
        },
        {
            name: 'Team Member 3',
            role: 'Location 3',
            lat: 40.8075,
            lng: -73.9626,
            photo: 'images/photo3.jpg',
            description: 'Education & Learning'
        },
        {
            name: 'Team Member 4',
            role: 'Location 4',
            lat: 40.7128,
            lng: -74.0060,
            photo: 'images/photo4.jpg',
            description: 'City Life & Views'
        },
        {
            name: 'Team Member 5',
            role: 'Location 5',
            lat: 37.5485,
            lng: -122.2710,
            photo: 'images/photo5.jpg',
            description: 'Creativity & Craft'
        }
    ];
    
    // Add markers for each team member location
    teamLocations.forEach((location, index) => {
        // Create custom colored markers
        const colors = ['#2563eb', '#06b6d4', '#7c3aed', '#ec4899', '#f59e0b'];
        const color = colors[index % colors.length];
        
        const marker = L.circleMarker([location.lat, location.lng], {
            radius: 25,
            fillColor: color,
            color: '#fff',
            weight: 3,
            opacity: 1,
            fillOpacity: 0.8,
            title: location.name
        }).addTo(map);
        
        // Create popup with image and information
        const popupContent = `
            <div class="photo-marker-popup">
                <h4 style="margin: 0 0 10px 0; font-weight: 600; color: #1f2937;">${location.name}</h4>
                <p style="margin: 0 0 8px 0; font-size: 0.85rem; color: #2563eb; font-weight: 500;">${location.role}</p>
                <img src="${location.photo}" alt="${location.name}" style="width: 100%; max-width: 250px; height: auto; border-radius: 6px; margin-bottom: 8px; display: block;">
                <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #6b7280; font-style: italic;">${location.description}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 280,
            className: 'photo-marker-popup-container'
        });
        
        // Open popup on click
        marker.on('click', function() {
            marker.openPopup();
        });
        
        // Open first marker's popup by default
        if (index === 0) {
            marker.openPopup();
        }
    });
    
    // Add a primary office marker (main hub)
    const mainMarker = L.marker([officeLat, officeLng], {
        title: 'Main Office'
    }).addTo(map);
    
    mainMarker.bindPopup(`
        <div class="map-marker-popup">
            <h4 style="margin-bottom: 8px; font-weight: 600;">TeamPro Main Office</h4>
            <p style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Address:</strong><br>
                San Francisco, CA 94103, USA
            </p>
            <p style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Phone:</strong><br>
                +1 (415) 555-0123
            </p>
            <p style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Hours:</strong><br>
                Mon - Fri: 9AM - 6PM PT
            </p>
        </div>
    `, {
        maxWidth: 250,
        className: 'custom-popup'
    });
    
    // Add smooth scrolling for navigation
    addSmoothScroll();
}

function addSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') {
                return; // Let default behavior handle
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Resize map when window is resized
window.addEventListener('resize', function() {
    if (window.map) {
        setTimeout(function() {
            window.map.invalidateSize();
        }, 200);
    });
});
