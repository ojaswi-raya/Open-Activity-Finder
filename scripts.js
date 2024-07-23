document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('location');
    const activityList = document.getElementById('activityList');

    const activities = {
        beaches: [
            { name: 'Swimming', img: 'images/swimming.jpeg', description: 'Enjoy the refreshing waters of the ocean or sea, ideal for relaxation and exercise.', difficulty: 'Easy', duration: '1-3 hours', equipment: 'Swimsuit, towel, sunscreen' },
            { name: 'Making sand castles', img: 'images/sand_castle.jpeg', description: 'Build and sculpt creative sandcastles and other sand structures on the beach.', difficulty: 'Easy', duration: '1-2 hours', equipment: 'Sand toys, buckets, shovels' },
            { name: 'Volleyball', img: 'images/volleyball.jpeg', description: 'Play a fun and energetic game of beach volleyball with friends or family.', difficulty: 'Easy to Moderate', duration: '1-2 hours', equipment: 'Volleyball, net' },
            { name: 'Sunbathing', img: 'images/sunbathing.jpeg', description: 'Relax and soak up the sun on the beach, enjoying the warmth and tranquility.', difficulty: 'Easy', duration: '1-3 hours', equipment: 'Beach towel or lounge chair, sunscreen' }
        ],
        lakes: [
            { name: 'Boating', img: 'images/boating.jpeg', description: 'Navigate the tranquil waters of a lake on a boat, perfect for leisurely exploration.', difficulty: 'Easy to Moderate', duration: '1-3 hours', equipment: 'Boat, life jackets' },
            { name: 'Fishing', img: 'images/fishing.jpeg', description: 'Try your luck catching fish in a peaceful lake setting, suitable for both beginners and experienced anglers.', difficulty: 'Easy to Moderate', duration: '2-4 hours', equipment: 'Fishing rod, bait, tackle box' },
            { name: 'Camping', img: 'images/camping.jpeg', description: 'Set up a campsite near the lake for a night under the stars, enjoying nature and outdoor cooking.', difficulty: 'Moderate', duration: 'Overnight', equipment: 'Tent, sleeping bag, cooking gear' }
        ],
        mountains: [
            { name: 'Rock climbing', img: 'images/rock_climbing.jpeg', description: 'Scale steep rock faces or rugged peaks, requiring strength, skill, and proper equipment.', difficulty: 'Difficult', duration: 'Several hours to multiple days', equipment: 'Climbing gear, harness, helmet' },
            { name: 'Mountain biking', img: 'images/mountain_biking.jpeg', description: 'Ride through rugged mountain trails, navigating challenging terrain and enjoying scenic views.', difficulty: 'Moderate to Difficult', duration: '1-3 hours', equipment: 'Mountain bike, helmet, protective gear' },
            { name: 'Skiing/Snowboarding', img: 'images/skiing.jpeg', description: 'Glide down snow-covered slopes, enjoying speed and winter scenery.', difficulty: 'Easy to Difficult', duration: '2-4 hours per session', equipment: 'Skis, poles, winter clothing' },
            { name: 'Mountaineering', img: 'images/mountain_climbing.jpeg', description: 'Engage in advanced climbing and hiking to reach high-altitude peaks, often involving technical skills.', difficulty: 'Difficult', duration: 'Several days', equipment: 'Specialized climbing gear, ropes, crampons' }
        ],
        hills: [
            { name: 'Hiking', img: 'images/hiking.jpeg', description: 'Walk along scenic hill trails, taking in natural beauty and fresh air.', difficulty: 'Easy to Moderate', duration: '2-4 hours', equipment: 'Hiking boots, backpack, water' },
            { name: 'Trekking', img: 'images/trekking.jpeg', description: 'Embark on longer, more challenging hikes, often involving multi-day trips and varied terrain.', difficulty: 'Moderate to Difficult', duration: 'Several hours to multiple days', equipment: 'Trekking poles, durable clothing, camping gear' },
            { name: 'Camping', img: 'images/campinghill.jpeg', description: 'Set up camp in the hills for a rustic outdoor experience, with opportunities for campfires and stargazing.', difficulty: 'Moderate', duration: 'Overnight', equipment: 'Tent, sleeping bag, cooking gear' }
        ],
        city: [
            { name: 'Sightseeing', img: 'images/sightseeing.jpeg', description: 'Explore urban landmarks, historic sites, and popular attractions within the city.', difficulty: 'Easy', duration: 'Flexible, typically 2-4 hours', equipment: 'Comfortable shoes, camera, guidebook' },
            { name: 'Theater shows', img: 'images/theater.jpeg', description: 'Attend live performances, including plays, musicals, or other stage shows in a city theater.', difficulty: 'Easy', duration: '2-3 hours', equipment: 'Ticket, formal attire (optional)' },
            { name: 'Nightlife', img: 'images/nightlife.jpeg', description: 'Experience the city’s vibrant nightlife, including bars, clubs, and entertainment venues.', difficulty: 'Easy', duration: '2-5 hours', equipment: 'N/A' }
        ]
    };

    function updateActivities() {
        const selectedLocation = locationSelect.value;
        const suggestedActivities = activities[selectedLocation] || [];

        activityList.innerHTML = '';
        suggestedActivities.forEach(activity => {
            const li = document.createElement('li');
            li.classList.add('activity-item', 'animate__animated', 'animate__fadeIn');
            const img = document.createElement('img');
            img.src = activity.img;
            img.alt = activity.name;
            img.onerror = () => {
                img.src = 'images/default.jpg'; // Fallback image
            };
            const span = document.createElement('span');
            span.textContent = activity.name;
            li.appendChild(img);
            li.appendChild(span);

            const desc = document.createElement('p');
            desc.textContent = activity.description;
            li.appendChild(desc);

            const details = document.createElement('ul');
            details.innerHTML = `
                <li>Difficulty Level: ${activity.difficulty}</li>
                <li>Duration: ${activity.duration}</li>
                <li>Necessary Equipment: ${activity.equipment}</li>
            `;
            li.appendChild(details);

            activityList.appendChild(li);
        });
    }

    locationSelect.addEventListener('change', updateActivities);

    // Initialize with default location
    updateActivities();

    const preferencesForm = document.getElementById('preferences-form');
    const recommendationsList = document.getElementById('recommendations-list');

    preferencesForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const preferredLocation = document.getElementById('preferred-location').value;
        const activityType = document.getElementById('activity-type').value;

        const recommendedActivities = activities[preferredLocation].filter(activity => activity.type === activityType);

        displayRecommendations(recommendedActivities);
    });

    function displayRecommendations(recommendations) {
        recommendationsList.innerHTML = '';
        recommendations.forEach(activity => {
            const li = document.createElement('li');
            li.classList.add('activity-item', 'animate__animated', 'animate__fadeIn');
            const img = document.createElement('img');
            img.src = activity.img;
            img.alt = activity.name;
            img.onerror = () => {
                img.src = 'images/default.jpg'; // Fallback image
            };
            const span = document.createElement('span');
            span.textContent = activity.name;
            li.appendChild(img);
            li.appendChild(span);

            const desc = document.createElement('p');
            desc.textContent = activity.description;
            li.appendChild(desc);

            const details = document.createElement('ul');
            details.innerHTML = `
                <li>Difficulty Level: ${activity.difficulty}</li>
                <li>Duration: ${activity.duration}</li>
                <li>Necessary Equipment: ${activity.equipment}</li>
            `;
            li.appendChild(details);

            recommendationsList.appendChild(li);
        });
    }
});
