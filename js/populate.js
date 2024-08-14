// READ APPEND
const detailsCover = document.querySelector('.details__cover');

const detailsTitle = document.querySelector('.details__title');
const detailsAlt = document.querySelector('.titles__alt');
const detailsRating = document.querySelector('.details__rating');

const summary = document.querySelector('.summary__summary');

const infoTableAuthor = document.querySelector('.info__table-author');
const infoTableArtist = document.querySelector('.info__table-artist');
const infoTableGenres = document.querySelector('.info__table-genres');
const infoTableStatus = document.querySelector('.info__table-status');

const chaptersTable = document.querySelector('.chapters__table');


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(param);
    return value;
}

const toonTitle = decodeURIComponent(getQueryParam('title'));

const toon = toons.find(t => t.toonTitle === toonTitle);

if (toon) {
    detailsCover.src = toon.toonCover;
    detailsCover.alt = toon.toonTitle;

    detailsTitle.textContent = toon.toonTitle;

    const altText = toon.toonAlt.join(', ');
    detailsAlt.textContent = altText;

    detailsRating.innerHTML = `${toon.toonRating} <span class="fa fa-star"></span>`;

    summary.textContent = toon.toonSummary;

    const authorText = toon.toonAuthor.join(', ');
    infoTableAuthor.textContent = authorText;

    const artistText = toon.toonArtist.join(', ');
    infoTableArtist.textContent = artistText;

    const genresText = toon.toonGenres.join(', ');
    infoTableGenres.textContent = genresText;

    infoTableStatus.textContent = toon.toonStatus;

    const summaryModalP = document.querySelector('.summary-modal p');
    summaryModalP.textContent = toon.toonSummary;

    toon.toonChapters.forEach((chapter, index) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = chapter.chapterTitle;
        row.appendChild(cell);
        chaptersTable.appendChild(row);
    });
    } else {
        console.error('Toon not found!');
}




// SUMMARY
function isTextClipped(element) {
    return element.scrollHeight > element.clientHeight;
}

function toggleReadMoreButton() {
    const readMoreButton = document.querySelector('.summary__more');

    if (isTextClipped(summary)) {
        readMoreButton.style.display = 'block';
    } else {
        readMoreButton.style.display = 'none';
    }
}

// Run the function on page load
window.addEventListener('load', toggleReadMoreButton);


const summaryMore = document.querySelector('.summary__more');

const summaryModal = document.querySelector('.summary-modal');

const summaryClose = document.querySelector('.summary__close');

summaryMore.addEventListener('click', () => {
    summaryModal.showModal();
    logRegInputs.forEach(input => {
        input.blur();
    });
});

summaryClose.addEventListener('click', () => {
    summaryModal.close();
});