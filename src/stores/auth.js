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
        },
    });
    const user = await res.json();
    apiUser.set(user);
})
export const clientID = readable("370562730007-nsmbvtmu29a0nuutont40b1g9jvgr2m6.apps.googleusercontent.com");
export const apiURL = readable('https://speeddater-api.chrisx.xyz');
export const apiUser = writable({});
// apiUser.subscribe(async value => {
//     const res = await fetch('https://speeddater-api.chris.xyz/profiles/user/', {
//         headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Bearer ' + storage.getItem('token') 
//         }
//     });
//     const profile = await res.json();
//     apiProfile.set(profile);
// })
// export const apiProfile = writable({});

export const getProfile = async (userId) => {
    const resProf = await fetch(`https://speeddater-api.chrisx.xyz/profiles/${userId}/`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') 
        }
    });
    if(!resProf.ok) throw new Error(profile);
    const profile = await resProf.json();
    let majors = [];
    console.log(profile.majors);
    for(const major of profile.majors) {
        const resMajor = await fetch(`https://speeddater-api.chrisx.xyz/majors/${major}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            }
        });
        if(!resMajor.ok) throw new Error(profile); //fix this, should not be profile
        majors.push((await resMajor.json()).major);
    }
   
    profile.majors = majors;
    let skills = [];
    for(const skill of profile.skills) {
        const resSkill = await fetch(`https://speeddater-api.chrisx.xyz/skills/${skill}/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            }
        });
        if(!resSkill.ok) throw new Error(profile); //fix this should not be profile
        skills.push((await resSkill.json()).skill);
    }
    profile.skills = skills;
    return profile;
}