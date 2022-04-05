<script>
    import { apiUser } from "../stores/auth.js";
    import { getProfile } from "../stores/auth.js";
    // let promise = getProfile(3).then(profile => console.log(profile));
    const colors = ["red", "blue", "green", "yellow"];
</script>
  <div class="max-w-3xl font-abeezee p-14 bg-white mt-6 rounded-md text-white mx-4 hidden sm:block space-y-4">
    <!-- First Section -->
    {#await getProfile($apiUser.id)}
        <div>Loading this page...</div>
    {:then profile}
    {$apiUser.profile_pic}
    <div class="bg-navy rounded-md shadow pb-4 flex flex-row pr-4">
        <img class="absolute shadow-md rounded-full inline-block w-24 transform -translate-y-3.5 -translate-x-3.5" src={$apiUser.profile_picture} alt="profile pic">
        <!-- name -->
        <div class="ml-24 mt-8 space-y-4 text-sm lg:text-base">
            <div class="inline-block text-white text-4xl font-roboto">{ `${$apiUser.first_name} ${$apiUser.last_name}`}</div>
            <div class="flex flex-wrap">
                <div class="mr-2 lg:mr-6">
                    <a href="mailto:{$apiUser.email}"class="block text-white">{$apiUser.email}</a>
                    <a href="tel:{profile.phone}">{profile.phone}</a>
                </div>
                <a class="shrink-0 self-center inline-block text-center px-4 xl:px-8 py-1.5 xl:py-2 bg-yellowbutton rounded-md font-roboto italic font-bold" href="mailto:{$apiUser.email}">Send Email</a>
                
            </div>
            <div>
                <p><span class="">Major(s):</span>
                    {profile.majors.join(", ")}
                </p>
                <p>My Section: {profile.current_section} </p>
                <p>Availability: {profile.availability[0]}</p>
            </div>
            <div>
                {#each profile.skills as skill, index}
                    <a href="/." class="tag {colors[index % 4]} mr-1">{skill}</a>
                {/each}
            </div>
        </div>
    </div>
    <!-- Break -->

    <!-- Second Section -->
    <div class="bg-navy rounded-md shadow px-12 py-4 text-sm space-y-4">
        <p>What I am Looking For: {profile.looking_for}</p>
        <p>Anything Else: {profile.anything_else} </p>
    </div>
    {:catch error}
        Error
    {/await}
</div>