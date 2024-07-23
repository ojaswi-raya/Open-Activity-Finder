document.addEventListener('DOMContentLoaded', () => {
    const preferencesForm = document.getElementById('preferencesForm');
    const recommendationsList = document.getElementById('recommendationsList');

    const activities = {
        // Your activity data
    };

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
