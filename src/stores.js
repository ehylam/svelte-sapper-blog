import { readable } from 'svelte/store';

export const currentTime = readable(new Date().getHours(), function start(set) {
    const interval = setInterval(() => {
        set(new Date().getHours());
    },1000);

    return function stop() {
        clearInterval(interval);
    }
})
