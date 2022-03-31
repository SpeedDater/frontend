<script>
    import { user } from '../stores/auth.js';
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const gibCode = async () => {
        const data = {
			code: code
		};
       const res = await fetch('https://speeddater-api.chrisx.xyz/rest-auth/google/login/', {
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
            return [token, res.status];
        }
        else return [null, res.status];
    }
    let token = null;
    let status = null;
    code ? gibCode().then(resToken => [ token, status ] = resToken) : null;
</script>

{#if token}
    code: {code} 
    <br />
    token: {token}
{:else if code}
    An Error has occured. Please Try Again.
    <br />
     Error code: {status}
{:else}
    You're not supposed to be here. Please go away.
{/if}