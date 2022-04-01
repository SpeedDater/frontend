<script>
    import { apiUser } from "../stores/auth.js";
    import { getProfile } from "../stores/auth.js";
    let promise = getProfile(3).then(profile => console.log(profile));
    const colors = ["red", "blue", "green", "yellow"];
</script>
  <div class="font-abeezee p-14 bg-white mt-6 rounded-md text-white mx-4 hidden sm:block">
    <!-- First Section -->
    {#await getProfile($apiUser.pk)}
    Loading...
    {:then profile}
    <div class="bg-navy rounded-md h-full shadow pb-4 flex flex-row pr-4">
        <img class="absolute shadow-md rounded-full inline-block w-24 transform -translate-y-3.5 -translate-x-3.5" src="/user02c.svg" alt="profile pic">
        <!-- name -->
        <div class="ml-24 mt-8 space-y-4">
            <div class="inline-block text-white text-4xl font-roboto">{ `${$apiUser.first_name} ${$apiUser.last_name}`}</div>
            <div class="flex flex-wrap">
                <div class="">
                    <div class="text-white">{$apiUser.email}</div>
                    <div>{profile.phone}</div>
                </div>
                <a class="shrink-0 self-center lg:ml-6 inline-block text-center px-4 xl:px-8 py-1.5 xl:py-2 bg-yellowbutton rounded-md font-roboto italic font-bold" href=".">Send Email</a>
                
            </div>
            <div>
                <p>Major:
                    {profile.majors.join(", ")}
                </p>
                <p>My Section: {profile.current_section} </p>
                <p>Availability: {profile.availability[0]}</p>
            </div>
            <div>
                {#each profile.skills as skill, index}
                    <a href="." class="tag {colors[index % 4]} mr-1">{skill}</a>
                {/each}
            </div>
        </div>
        
        
        
       
        

    </div>
    <!-- Break -->

    <!-- Second Section -->
    <div>

    </div>
    {:catch error}
        Error
    {/await}
</div>