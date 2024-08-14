const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
})

// MOBILE CHANGE
const mobileChange = document.querySelector('.mobile-change');
const navToggle = document.getElementById('nav__toggle');
const navToggleLabel = document.querySelector('.nav__toggle-label');
const navToggleLabelSpan = document.querySelector('.nav__toggle-label span');
const mobileBackdrop = document.querySelector('.mobile__change-backdrop');

function openNav() {
    navToggleLabel.classList.toggle('rotated');
    navToggle.checked = true;
    mobileChange.style.display = 'flex';
    mobileBackdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    navToggleLabel.classList.remove('rotated');
    navToggle.checked = false;
    mobileChange.style.display = 'none';
    mobileBackdrop.style.display = 'none';
    document.body.style.overflow = '';
}

navToggleLabel.addEventListener('click', () => {
    if (navToggle.checked === true) {
        closeNav();
    } else {
        openNav();
    }
});

// SEARCH FORM
const searchOpen = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

function openSearch() {
    searchForm.style.display = 'block';
}

function closeSearch() {
    searchForm.style.display = 'none';
}

searchOpen.addEventListener('click', (openSearch));
searchClose.addEventListener('click', (closeSearch));

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

// LIGHT-DARK MODE
const ldToggle = document.querySelectorAll('.ld-mode__toggle');
const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const modeToggle = document.querySelector('.mode__toggle');

const applyMode = (isDarkMode) => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark_mode');
        modeToggle.checked = true;
        darkMode.style.display = 'none';
        lightMode.style.display = 'block';
    } else {
        document.documentElement.classList.remove('dark_mode');
        modeToggle.checked = false;
        darkMode.style.display = 'block';
        lightMode.style.display = 'none';
    }
};

modeToggle.addEventListener('change', () => {
    const isDarkMode = modeToggle.checked;
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    applyMode(isDarkMode);
});

ldToggle.forEach(svg => {
    svg.addEventListener('click', () => {
        modeToggle.checked = !modeToggle.checked;
        modeToggle.dispatchEvent(new Event('change'));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    applyMode(savedMode === 'dark');
});

// GENRES AND FILTERS
const genreButton = document.querySelector('.genres-button');
const filterButton = document.querySelector('.filters-button');
const genFilt = document.querySelector('.gen-filt');
const genres = document.querySelector('.genres');
const filters = document.querySelector('.filters');

let hoverState = {
    isHoveringGenFilt: false,
    isHoveringGenreButton: false,
    isHoveringFilterButton: false,
};

function genFiltChildrenDisplay() {
    if (hoverState.isHoveringGenreButton || hoverState.isHoveringFilterButton) {
        genFilt.style.display = 'block';
        genres.style.display = hoverState.isHoveringGenreButton ? 'grid' : 'none';
        filters.style.display = hoverState.isHoveringFilterButton ? 'grid' : 'none';
    } else {
        setTimeout(() => {
            if (!hoverState.isHoveringGenFilt && !hoverState.isHoveringGenreButton && !hoverState.isHoveringFilterButton) {
                genFilt.style.display = 'none';
                genres.style.display = 'none';
                filters.style.display = 'none';
            }
        }, 200);
    }
}

function genFiltEventListeners() {
    genreButton.addEventListener('mouseover', () => {
        hoverState.isHoveringGenreButton = true;
        genFiltChildrenDisplay();
    });

    genreButton.addEventListener('mouseout', () => {
        hoverState.isHoveringGenreButton = false;
        genFiltChildrenDisplay();
    });

    filterButton.addEventListener('mouseover', () => {
        hoverState.isHoveringFilterButton = true;
        genFiltChildrenDisplay();
    });

    filterButton.addEventListener('mouseout', () => {
        hoverState.isHoveringFilterButton = false;
        genFiltChildrenDisplay();
    });

    genFilt.addEventListener('mouseover', () => {
        hoverState.isHoveringGenFilt = true;
        genFiltChildrenDisplay();
    });

    genFilt.addEventListener('mouseout', () => {
        hoverState.isHoveringGenFilt = false;
        genFiltChildrenDisplay();
    });
}

genFiltEventListeners();

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
