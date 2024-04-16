import { writable } from 'svelte/store';

export const isScrollPaused = writable(false);

export const smootherStore = writable(null);