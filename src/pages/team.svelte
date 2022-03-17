<script>
    import Member from "../components/member.svelte";
</script>
<main class="">
    <div class="px-4 py-6 sm:max-w-2xl font-poppins font-semibold text-lg text-gray-1 space-y-2 mx-4 sm:ml-10 drop-shadow rounded-md bg-white">
        <h3 class="focus:outline-none">Team Name: 407 Speed Daters</h3>  <!--Name of Team-->
        <h3>Preferred Section: 4</h3> <!--Preferred Section-->
        <h3>Availability: 12-1 PM</h3>
        <hr class="border-t border-solid border-black"/>
        <h3>Team Members</h3>
        <Member />
        <Member />
        <Member />
    </div>
</main>
