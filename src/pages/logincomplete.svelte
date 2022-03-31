<script>
import { onMount } from 'svelte';

    import { useNavigate, useLocation } from 'svelte-navigator';
    import { user, apiURL } from '../stores/auth.js';
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const navigate = useNavigate();
    const location = useLocation();
    let div;
    const gibCode = async () => {
        const data = {
			code: code
		};
       const res = await fetch($apiURL + '/rest-auth/google/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(data)
        });
        if(res.ok) {
            console.log('Hello explorer. Welcome to my world of JS errors.')
            const json = await res.json();
            const token = json['key'];
            // document.cookie = 'token=' + token + ";path=/";
            $user = token;
            navigate('/', {
                state: { from: $location.pathname },
                replace: true
            });
            return [token, res.status];
        }
        else {
            div.classList.toggle('hidden');
            return  [null, res.status];
        }
    }
    let token = null;
    let status = null;
    code ? gibCode().then(resToken => [ token, status ] = resToken) : null;
</script>
<div bind:this={div} class="hidden">
    {#if token}
        code: {code} 
        <br />
        token: {token}
    {:else if code}
        An Error has occured. Please Try Again.
        <br />
        Error code: {status}
    {/if}
</div>
    {#if !code }
        You're not supposed to be here. Please go away.
    {/if}
