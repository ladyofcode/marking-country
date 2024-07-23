import { writable } from "svelte/store";

// export const bodyOverflow = writable('');

// bodyOverflow.subscribe(value => {
//     if (typeof window !== 'undefined') {
//         document.body.style.overflow = value;
//     }
// });

export const canScroll = writable(true);