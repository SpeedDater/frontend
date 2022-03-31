<script>
    import { user, apiURL } from "../stores/auth.js";
    import { useNavigate, useLocation } from "svelte-navigator";
    const navigate = useNavigate();
    const location = useLocation();
    fetch($apiURL + '/rest-auth/logout/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + $user
        }
    }).then(res => {
        $user = null;
        navigate('/login',{
            state: { from: $location.pathname },
            replace: true
        });
    });
</script>