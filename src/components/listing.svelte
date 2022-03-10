<script>
    export let name;
    export let major;
    export let redTag;
    export let yellowTag;
    export let greenTag;
    export let blueTag;
    export let profile;
</script>
<div class="max-w-xl flex flex-row gap-6 p-2 relative rounded-md shadow-xs mb-1 mx-1 sm:mb-2 sm:ml-2 bg-white cursor-pointer">
    <img src="/{profile}" class="shrink-0 ml-2 self-center rounded-full w-10 h-10 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-black" alt="">
    <div class="flex flex-col gap-2">
        <div class="flex-row flex gap-1 grow justify-between">
            <div class="flex flex-col gap-2">
                <span class="font-adamina font-normal  text-xs sm:text-sm text-navy">{major}</span>
                <span class="font-adamina font-normal  text-xl sm:text-2xl text-navy">{name}</span>
            </div>
        </div>
        <div class="flex flex-wrap gap-1">
            <a href="." class="tag red">{redTag}</a>
            <a href="/" class="tag yellow">{yellowTag}</a>
            <a href="/" class="tag green">{greenTag}</a>
            <a href="/" class="tag blue">{blueTag}</a>
        </div>
    </div>
    <!-- <div class="top-1/4 right-6 absolute text-3xl material-icons text-yellow-500 text-center self-center">
        bookmark_border
    </div> -->

    <img class="top-1/4 right-6 absolute text-3xl material-icons" src="/bookmark.svg" alt="">
    
</div>