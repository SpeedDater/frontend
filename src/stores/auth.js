import { writable } from 'svelte/store';

export const user = writable(JSON.parse(localStorage.getItem('token')));
user.subscribe(value => {
    localStorage.setItem('token', value);
})