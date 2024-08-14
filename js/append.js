// INDEX APPEND
const popToons = document.querySelector('.pop__toon-slider');

toons.forEach(toon => {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider__container');

    const sliderToonLink = document.createElement('a');
    sliderToonLink.classList.add('slider__toon-link');
    sliderToonLink.setAttribute('data-title', toon.toonTitle);

    const sliderToonCover = document.createElement('img');
    sliderToonCover.classList.add('slider__toon-cover');
    sliderToonCover.src = toon.toonCover;
    sliderToonCover.alt = toon.toonTitle;
    
    const sliderToonTitle = document.createElement('p');
    sliderToonTitle.classList.add('slider__toon-title');
    sliderToonTitle.textContent = toon.toonTitle;

    sliderContainer.appendChild(sliderToonLink);
    sliderToonLink.appendChild(sliderToonCover);
    sliderContainer.appendChild(sliderToonTitle);
    popToons.appendChild(sliderContainer);
});




const recentToons = document.querySelector('.recent__toon-wrapper');

const elevenToons = toons.slice(0, 11);

elevenToons.forEach(toon => {
    const recentContainer = document.createElement('a');
    recentContainer.classList.add('recent__container');
    recentContainer.setAttribute('data-title', toon.toonTitle);

    const recentToonCover = document.createElement('img');
    recentToonCover.classList.add('recent__toon-cover');
    recentToonCover.src = toon.toonCover;
    recentToonCover.alt = toon.toonTitle;

    const recentToonInfo = document.createElement('div');
    recentToonInfo.classList.add('recent__toon-info');

    const infoTitle = document.createElement('p');
    infoTitle.classList.add('info-title');
    infoTitle.textContent = toon.toonTitle;

    const infoGenres = document.createElement('div');
    infoGenres.classList.add('info-genres');

    toon.toonGenres.forEach(genre => {
        const genreElement = document.createElement('p');
        genreElement.textContent = genre;
        infoGenres.appendChild(genreElement);
    });

    const latestChapters = document.createElement('div');
    latestChapters.classList.add('latest-chapters');

    const latestThreeChapters = toon.toonChapters.slice(-3).reverse();

    // Append the chapter titles to the latestChapters div
    latestThreeChapters.forEach(chapter => {
        const chapterElement = document.createElement('p');
        chapterElement.textContent = chapter.chapterTitle;
        latestChapters.appendChild(chapterElement);
    });

    recentContainer.appendChild(recentToonCover);
    recentContainer.appendChild(recentToonInfo);
    recentToonInfo.appendChild(infoTitle);
    recentToonInfo.appendChild(infoGenres);
    recentContainer.appendChild(latestChapters);

    recentToons.appendChild(recentContainer);

});




const newToons = document.querySelector('.new__toon-slider');

const reversedToons = toons.slice().reverse();

reversedToons.forEach(toon => {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider__container');

    const sliderToonLink = document.createElement('a');
    sliderToonLink.classList.add('slider__toon-link');
    sliderToonLink.setAttribute('data-title', toon.toonTitle);
    
    const sliderToonCover = document.createElement('img');
    sliderToonCover.classList.add('slider__toon-cover');
    sliderToonCover.src = toon.toonCover;
    sliderToonCover.alt = toon.toonTitle;
    
    const sliderToonTitle = document.createElement('p');
    sliderToonTitle.classList.add('slider__toon-title');
    sliderToonTitle.textContent = toon.toonTitle;
    
    sliderContainer.appendChild(sliderToonLink);
    sliderToonLink.appendChild(sliderToonCover);
    sliderContainer.appendChild(sliderToonTitle);
    newToons.appendChild(sliderContainer);
});




const rankToons = document.querySelector('.rank__toon-wrapper');

const firstEightToons = toons.slice(0, 10);

const rankedToons = firstEightToons.sort((a, b) => {
    return parseFloat(b.percentRating) - parseFloat(a.percentRating);
});

console.log(rankedToons);

rankedToons.forEach((toon, index) => {
    const rankToonContainer = document.createElement('div');
    rankToonContainer.classList.add('rank__toon-container');

    const rankToonLink = document.createElement('a');
    rankToonLink.classList.add('rank__toon-link');
    rankToonLink.setAttribute('data-title', toon.toonTitle);
    
    const rankToonCover = document.createElement('img');
    rankToonCover.classList.add('rank__toon-cover');
    rankToonCover.src = toon.toonCover;
    rankToonCover.alt = toon.toonTitle;
    
    const rankToonTitle = document.createElement('p');
    rankToonTitle.classList.add('rank__toon-title');
    rankToonTitle.textContent = toon.toonTitle;
    
    rankToonLink.appendChild(rankToonContainer);
    rankToonContainer.appendChild(rankToonCover);
    rankToonContainer.appendChild(rankToonTitle);

    if (index === 0) {
        rankToonLink.classList.add('featured');
    }
    
    rankToons.appendChild(rankToonLink);
});




document.querySelectorAll('.slider__toon-link').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});

document.querySelectorAll('.recent__container').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});

document.querySelectorAll('.rank__toon-link').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});


