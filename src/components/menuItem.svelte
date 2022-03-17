<script>
    import { link } from "svelte-navigator";
    export let route;
    export let name;
</script>
<a href="/{route}" class="bg-white flex flex-col gap-2 justify-center items-center w-56 h-56 drop-shadow-md h-fill max-h-screen rounded-xl" use:link>
    <div class="rounded-full bg-{route}-icon flex justify-center w-12 p-2">
        <img src="menu/{route}.svg" alt="handshake icon">
    </div>
    <h3 class="font-roboto font-bold text-xl">{name}</h3>
</a>