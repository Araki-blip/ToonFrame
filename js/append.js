// INDEX APPEND
const popToons = document.querySelector('.pop__toon-slider');

toons.forEach(toon => {
    const sliderToonContainer = document.createElement('div');
    sliderToonContainer.classList.add('slider__toon-container');

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

    sliderToonContainer.appendChild(sliderToonLink);
    sliderToonLink.appendChild(sliderToonCover);
    sliderToonContainer.appendChild(sliderToonTitle);
    popToons.appendChild(sliderToonContainer);
});




const recentToons = document.querySelector('.recent-toon-wrapper');

const elevenToons = toons.slice(0, 11);

elevenToons.forEach(toon => {
    const recentToonContainer = document.createElement('a');
    recentToonContainer.classList.add('recent__toon-container');
    recentToonContainer.setAttribute('data-title', toon.toonTitle);

    const recentToonDetails = document.createElement('div');
    recentToonDetails.classList.add('recent__toon-details');

    const recentToonCover = document.createElement('img');
    recentToonCover.classList.add('recent__toon-cover');
    recentToonCover.src = toon.toonCover;
    recentToonCover.alt = toon.toonTitle;

    const recentTitleGenre = document.createElement('div');
    recentTitleGenre.classList.add('recent__title-genre');

    const recentToonTitle = document.createElement('p');
    recentToonTitle.classList.add('recent__toon-title');
    recentToonTitle.textContent = toon.toonTitle;

    const recentToonGenres = document.createElement('div');
    recentToonGenres.classList.add('recent__toon-genres');

    toon.toonGenres.forEach(genre => {
        const genreElement = document.createElement('p');
        genreElement.textContent = genre;
        recentToonGenres.appendChild(genreElement);
    });

    const latestChapters = document.createElement('div');
    latestChapters.classList.add('latest-chapters');

    const latestThreeChapters = toon.toonChapters.slice(-3).reverse();

    // Append the chapter titles to the latestChapters div
    latestThreeChapters.forEach(chapter => {
        const chapterElement = document.createElement('p');
        chapterElement.classList.add('button')
        chapterElement.textContent = chapter.chapterTitle;
        latestChapters.appendChild(chapterElement);
    });

    recentToonDetails.appendChild(recentToonCover);
    recentTitleGenre.appendChild(recentToonTitle);
    recentTitleGenre.appendChild(recentToonGenres);
    recentToonDetails.appendChild(recentTitleGenre);

    recentToonContainer.appendChild(recentToonDetails);
    recentToonContainer.appendChild(latestChapters);

    recentToons.appendChild(recentToonContainer);

});



const newToons = document.querySelector('.new__toon-slider');

const reversedToons = toons.slice().reverse();

reversedToons.forEach(toon => {
    const sliderToonContainer = document.createElement('div');
    sliderToonContainer.classList.add('slider__toon-container');

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
    
    sliderToonContainer.appendChild(sliderToonLink);
    sliderToonLink.appendChild(sliderToonCover);
    sliderToonContainer.appendChild(sliderToonTitle);
    newToons.appendChild(sliderToonContainer);
});

const rankToons = document.querySelector('.rank__toon-wrapper');



const firstEightToons = toons.slice(0, 10);

const rankedToons = firstEightToons.sort((a, b) => {
    return parseFloat(b.percentRating) - parseFloat(a.percentRating);
});

console.log(rankedToons);

rankedToons.forEach((toon, index) => {
    const wrapperToonContainer = document.createElement('div');
    wrapperToonContainer.classList.add('wrapper__toon-container');

    const wrapperToonLink = document.createElement('a');
    wrapperToonLink.classList.add('wrapper__toon-link');
    wrapperToonLink.setAttribute('data-title', toon.toonTitle);
    
    const wrapperToonCover = document.createElement('img');
    wrapperToonCover.classList.add('wrapper__toon-cover');
    wrapperToonCover.src = toon.toonCover;
    wrapperToonCover.alt = toon.toonTitle;
    
    const wrapperToonTitle = document.createElement('p');
    wrapperToonTitle.classList.add('wrapper__toon-title');
    wrapperToonTitle.textContent = toon.toonTitle;
    
    wrapperToonLink.appendChild(wrapperToonContainer);
    wrapperToonContainer.appendChild(wrapperToonCover);
    wrapperToonContainer.appendChild(wrapperToonTitle);

    if (index === 0) {
        wrapperToonLink.classList.add('featured');
    }
    
    rankToons.appendChild(wrapperToonLink);
});




document.querySelectorAll('.slider__toon-link').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});

document.querySelectorAll('.recent__toon-container').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});

document.querySelectorAll('.wrapper__toon-link').forEach(link => {
    const toonTitle = link.dataset.title; // Get the title from the data attribute
    const encodedTitle = encodeURIComponent(toonTitle); // Encode the title to safely pass it in URL
    link.href = `read.html?title=${encodedTitle}`; // Set the href attribute dynamically
});


