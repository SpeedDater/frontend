<script>
    import Member from "../components/member.svelte";
</script>
<main class="flex flex-wrap justify-start gap-x-4">
    <div class="px-4 py-6 grow max-w-2xl font-poppins font-semibold text-base sm:text-lg text-gray-1 space-y-2 mx-4 sm:ml-10 drop-shadow rounded-md bg-white">
        <h3 class="focus:outline-none">Team Name: 407 Speed Daters</h3>  <!--Name of Team-->
        <h3>Preferred Section: 4</h3> <!--Preferred Section-->
        <h3>Availability: 12-1 PM</h3>
        <hr class="border-t border-solid border-black"/>
        <h3>Team Members</h3>
        <Member />
        <Member />
        <Member />
    </div>
    <div class="shrink max-w-xl mx-4 sm:mr-10 space-y-4">
        <div class="px-8 py-8 font-poppins space-y-4 drop-shadow bg-white rounded-md text-base">
            <h2 class="text-lg font-semibold text-gray-1 mb-2">Invite people to Team</h2>
            <input class="w-full text-sm py-1 block px-2 border border-blue-500 shadow-md rounded-md placeholder:text-gray-4" placeholder="Email" type="email">
            <textarea class="w-full text-sm py-1 px-2 border border-blue-500 shadow-md resize-none rounded-md placeholder:text-gray-4" placeholder="Message..." name="message" id="message" cols="30" rows="5"></textarea>
            <p class="text-gray-3 text-sm">Your teammates will get an email that gives them access to your team.</p>
        </div>
        <div class="px-8 py-8 bg-white drop-shadow">
            <h2 class="text-lg font-semibold text-gray-1 mb-2">Requests</h2>
        </div>

    </div>
</main>
