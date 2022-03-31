<script>
    import { user } from "../stores/auth.js";
    fetch('https://speeddater-api.chrisx.xyz/rest-auth/logout/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $user
        }
    }).then(res => {
        $user = null;
    });
</script>