import { writable } from 'svelte/store';

function getInitialDarkMode() {
    const darkModeFromStorage = localStorage.getItem('darkMode');
    if (darkModeFromStorage !== null) {
        return darkModeFromStorage === 'true';
    }
    // If localStorage is not set, fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const darkMode = writable(getInitialDarkMode());

darkMode.subscribe((value) => {
    localStorage.setItem('darkMode', value);
});
