import { writable, readable } from 'svelte/store';

const api = 'https://speeddater-api.chrisx.xyz/';
let majors = [];
const getMajorsAPI = async () => { 
    const bruh = await fetch(api + 'majors/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    const bruhObj = await bruh.json();
    let bruhArr = [];
    for(const maj in bruhObj) {
        bruhArr.push(bruhObj[maj].major)
    }
    return bruhArr;
}
const getMajorInit =  async () => {
    majors = localStorage.getItem('token') != "null" ? await getMajorsAPI() : [];
    console.log(majors);
}
getMajorInit();

let skills = [];

const getSkillsAPI = async () => {
    const bruh = await fetch(api + 'skills/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    const bruhObj = await bruh.json();
    let bruhArr = [];
    for(const skil in bruhObj) {
        bruhArr.push(bruhObj[skil].skill);
    }
    return bruhArr;
}
const getSkillsInit =  async () => {
    skills = localStorage.getItem('token') != "null" ? await getSkillsAPI() : [];
    console.log(skills);
}
getSkillsInit();

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
    // if(!res.ok) new Error(res);
    let user = await res.json();
    if(!res.ok) return new Error(user);
    const picRes = await fetch(`https://speeddater-api.chrisx.xyz/users/${user.pk}/`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + value
        },
    });
    user = await picRes.json();
    apiUser.set(user);
    console.log(user);
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
   
    console.log(profile.majors);
    profile.majors = getProfileMajors(profile);
   
    profile.skills = getProfileSkills(profile);
    
    return profile;
}

const getProfileMajors = (prof) => {
    let strMajors = [];

    console.log(prof);
    for(let major of prof.majors) {
        console.log(majors[major]);
        try {
            strMajors.push(majors[major - 1]);
        }
        catch(error) {
            console.log(new Error(error));
            return new Error(error);
        }
    }
    return strMajors;
}

const getProfileSkills = prof => {
    let strSkills = [];
    
    for(let skill of prof.skills) {
        console.log(skills[skill]);
        try {
            strSkills.push(skills[skill - 1]);
        }
        catch(error) {
            console.log(new Error(error));
            return new Error(error);
        }
    }
    return strSkills;
}