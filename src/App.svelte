
<script>
	import Listing from './components/listing.svelte';
	import Profile from './components/profile.svelte';
	export let name;
</script>

<main>
	<h1 class="text-3xl">Welcome to {name}!</h1>
	<a href="." class="tag red">UI/UX Design</a>
	<a href="/" class="tag yellow">Enthusiasm</a>
	<a href="/" class="tag green">Ambition</a>
	<br />
	<a href="/" class="tag blue">User Experience research</a>
	<span class="inline-block w-20 border border-black"></span><span class="font-abeezee">PEOPLE FOR YOU</span>
	<div class="flex flex-row">
		<div>
			<Listing major="Information" name="Eric The Builder" redTag="UI/UX Design" yellowTag="Enthusiasm" greenTag="Ambition" blueTag="User experience research" profile="user06a.svg" />
			<Listing major="Computer Science & Data Science" name="Bob Fretz" redTag="Advertising" yellowTag="Fashion" greenTag="Social Psychology" blueTag="Teaching" profile="user02c.svg" />
		</div>
		<Profile />
	</div>
	
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@layer components {
		.tag {
			@apply mb-2 inline-block border-solid border rounded-xl px-2 text-xs text-center font-inter font-medium;
		}
		.red {
			@apply bg-redtag border-redborder text-redtext;
		}
		.yellow {
			@apply bg-yellowtag border-yellowborder text-yellowtext;
		}
		.green {
			@apply bg-greentag border-greenborder text-greentext;
		}
		.blue {
			@apply bg-bluetag border-blueborder text-bluetext;
		}
	}

	
</style>
