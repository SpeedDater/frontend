
<script>
    import { useLocation, Link, link } from 'svelte-navigator';
    const location = useLocation();
</script>
{#if $location.pathname != '/login'}
<Link to="/">
<header class="ml-10 mt-10 text-navy mb-10 block">
    <img class="inline-block w-32 mr-2" src="/umlogo.svg" alt="U of M Logo">
    <h1 class="text-2xl inline-block font-adamina">P/ALA 223</h1>
    <a class="inline-block text-right" use:link href="/logout">Logout</a>
</header>
</Link>
{/if}