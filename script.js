// SHOW GENRES AND FILTERS
const genresButton = document.querySelector('.cta-genres');
const filtersButton = document.querySelector('.cta-filters');
const genFilt = document.querySelector('.gen-filt');
const genres = document.querySelector('.genres');
const filters = document.querySelector('.filters');

let hoverState = {
    isHoveringGenFilt: false,
    isHoveringGenresButton: false,
    isHoveringFiltersButton: false
};

function showGenOrFilt() {
    if (hoverState.isHoveringGenresButton || hoverState.isHoveringFiltersButton) {
        genFilt.style.display = 'block';
        genres.style.display = hoverState.isHoveringGenresButton ? 'grid' : 'none';
        filters.style.display = hoverState.isHoveringFiltersButton ? 'grid' : 'none';
    } else {
        setTimeout(() => {
            if (!hoverState.isHoveringGenFilt && !hoverState.isHoveringGenresButton && !hoverState.isHoveringFiltersButton) {
                genFilt.style.display = 'none';
                genres.style.display = 'none';
                filters.style.display = 'none';
            }
        }, 100);
    }
}

function genFiltEventListeners() {
    genresButton.addEventListener('mouseover', () => {
        hoverState.isHoveringGenresButton = true;
        showGenOrFilt();
    });

    genresButton.addEventListener('mouseout', () => {
        hoverState.isHoveringGenresButton = false;
        showGenOrFilt();
    });

    filtersButton.addEventListener('mouseover', () => {
        hoverState.isHoveringFiltersButton = true;
        showGenOrFilt();
    });

    filtersButton.addEventListener('mouseout', () => {
        hoverState.isHoveringFiltersButton = false;
        showGenOrFilt();
    });

    genFilt.addEventListener('mouseover', () => {
        hoverState.isHoveringGenFilt = true;
        showGenOrFilt();
    });

    genFilt.addEventListener('mouseout', () => {
        hoverState.isHoveringGenFilt = false;
        showGenOrFilt();
    });
}

genFiltEventListeners();




// SEARCH FORM
const searchOpen = document.querySelectorAll('.search-icon');
const searchForm = document.querySelectorAll('.search');
const searchClose = document.querySelectorAll('.search__close');

function openSearch() {
    searchForm.forEach(form => {
        form.style.display = 'block';
    });
}

function closeSearch() {
    searchForm.forEach(form => {
        form.style.display = 'none';
    });
}

searchOpen.forEach(button => {
    button.addEventListener('click', (openSearch));
});
searchClose.forEach(button => {
    button.addEventListener('click', (closeSearch));
});




// LOGREG FORM
const openLogReg = document.querySelector('.cta-login');
const logReg = document.querySelector('.logreg-modal');
const loginForm = document.querySelector('.login-form');
const registerLink = document.querySelector('.register-link');
const registerForm = document.querySelector('.register-form');
const loginLink = document.querySelector('.login-link');
const logRegInputs = logReg.querySelectorAll('input');
const closeLogReg = document.querySelector('.logreg__close');

openLogReg.addEventListener('click', () => {
    logReg.showModal();
    logRegInputs.forEach(input => {
        input.blur();
    });
});

closeLogReg.addEventListener('click', () => {
    logReg.close();
});

registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'grid';
});

loginLink.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'grid';
});




// DESKTOP TOON SLIDER
const sliders = document.querySelectorAll('.toon-slider');

sliders.forEach(slider => {
    slider.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            // Scroll horizontally
            slider.scrollBy({
                left: event.deltaY,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
    });
});