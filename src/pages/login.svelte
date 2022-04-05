<script>
    import { clientID } from '../stores/auth.js';
</script>
<div class="font-roboto text-lg text-navy absolute transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
    <img class="w-36 mx-auto mb-4" src="/umlogo.svg" alt="University of Michigan Logo">
    <h1 class="text-center text-xl font-semibold focus:outline-none">SpeedDaters</h1>
    <h2 class="text-center mb-12">Entrepreneurial Creativity (P/ALA 223)</h2>
    <a class="mx-auto block w-44 bg-navy px-4 py-4 text-white text-center rounded-md"
       href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&response_type=code&include_granted_scope=true&redirect_uri={window.location.origin}/login/complete/&client_id={$clientID}">
       <span>Login with </span> 
       <img class="inline w-8" src="/google logo.png" alt="Google Logo">
       
    </a>
</div>