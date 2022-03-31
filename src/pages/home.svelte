<script>
    import MenuItem from "../components/menuItem.svelte";
    import { apiUser } from "../stores/auth.js";
    $: console.log($apiUser);
</script>
<main class="flex flex-col items-center gap-2 justify-center">
    <img class="w-24" src="/user06a.svg" alt="profile pic">
    <h2 class="italic font-abeezee text-lg mb-4 focus:outline-none">👋 Welcome, {$apiUser.first_name}!</h2>
    <div class="flex flex-wrap w-full p-4 gap-x-16 gap-y-4 justify-center">
        <MenuItem route="dating" name="Speed Dating" />
        <MenuItem route="team" name="Manage Your Team" />
        <MenuItem route="profile" name="Edit Your Profile" />
    </div>
  
</main>
