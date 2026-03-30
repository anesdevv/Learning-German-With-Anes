// js/home.js

document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories-container');
    if (!categoriesContainer) return;

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const filterLevel = urlParams.get('level');

    // Group stories by level
    const groupedStories = {
        'A1': [],
        'A2': [],
        'B1': []
    };

    const levelTitles = {
        'A1': 'A1 Beginner Stories',
        'A2': 'A2 Elementary Stories',
        'B1': 'B1 Intermediate Stories'
    };

    // Populate groups
    for (const [id, story] of Object.entries(STORIES)) {
        if (groupedStories[story.level]) {
            groupedStories[story.level].push({ id, ...story });
        }
    }

    let html = '';

    // Filter categories to render based on URL param
    const levelsToRender = filterLevel && groupedStories[filterLevel] ? [filterLevel] : ['A1', 'A2', 'B1'];

    // Render each category
    levelsToRender.forEach(level => {
        const allStories = groupedStories[level];
        if (allStories.length === 0) return;

        // If we are on the homepage (no filter), cap at 6 stories.
        const isHomepage = !filterLevel;
        const displayStories = isHomepage ? allStories.slice(0, 6) : allStories;
        const needsSeeMore = isHomepage && allStories.length > 6;

        // Make the header a link if we are on the homepage
        const headerHtml = isHomepage
            ? `<a href="index.html?level=${level}" style="text-decoration: none; color: inherit;"><h2>${levelTitles[level]}</h2></a>`
            : `<h2>${levelTitles[level]}</h2>`;

        html += `
            <section class="story-category fade-in" style="margin-bottom: 4rem;">
                ${headerHtml}
                <div class="story-grid">
        `;

        displayStories.forEach(story => {
            if (story.isComingSoon) {
                html += `
                    <a href="javascript:void(0)" class="story-card disabled">
                        <div class="story-image" style="background-image: url('${story.image}');"></div>
                        <div class="story-info">
                            <span class="badge">${story.level}</span>
                            <h3>${story.title}</h3>
                            <p>${story.description}</p>
                        </div>
                    </a>
                `;
            } else {
                html += `
                    <a href="story.html?id=${story.id}" class="story-card">
                        <div class="story-image" style="background-image: url('${story.image}');"></div>
                        <div class="story-info">
                            <span class="badge">${story.level}</span>
                            <h3>${story.title}</h3>
                            <p>${story.description}</p>
                        </div>
                    </a>
                `;
            }
        });

        html += `
                </div>
        `;

        if (needsSeeMore) {
            html += `
                <div class="see-more-container" style="text-align: center; margin-top: 2rem;">
                    <a href="index.html?level=${level}" class="btn">See More</a>
                </div>
            `;
        }

        html += `
            </section>
        `;
    });

    categoriesContainer.innerHTML = html;
});
