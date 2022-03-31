import { writable, readable } from 'svelte/store';

// TODO: Change to token
export const user = writable(localStorage.getItem('token'));
user.subscribe(async value => {
    // const res = await fetch('https://speeddater-api.chrisx.xyz/rest-auth/user/', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': 'Bearer ' + value
    //     }
    // });
    localStorage.setItem('token', value);
    console.log(value);
    if(value == "null" || !value) return;
    const res = await fetch('https://speeddater-api.chrisx.xyz/rest-auth/user/', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + value
        }
    });
    const user = await res.json();
    apiUser.set(user);
})
export const clientID = readable("370562730007-nsmbvtmu29a0nuutont40b1g9jvgr2m6.apps.googleusercontent.com");
export const apiURL = readable('https://speeddater-api.chrisx.xyz');
export const apiUser = writable({});