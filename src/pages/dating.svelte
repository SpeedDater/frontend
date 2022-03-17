
<script>
	import Listing from '../components/listing.svelte';
	import Profile from '../components/profile.svelte';
</script>

<main>
	<h1 class="text-3xl">Welcome to SpeedDater.app!</h1>
	<a href="." class="tag red">UI/UX Design</a>
	<a href="/" class="tag yellow">Enthusiasm</a>
	<a href="/" class="tag green">Ambition</a>
	<br />
	<a href="/" class="tag blue">User Experience research</a>
	
	<div class="flex flex-row">
		<div>
			<div class="flex items-center gap-1 justify-center">
				<span class="inline-block w-20 border border-black"></span>
				<span class="font-abeezee">PEOPLE FOR YOU</span>
				<span class="inline-block w-20 border border-black"></span>
			</div>
			<Listing major="Information" name="Eric The Builder" redTag="UI/UX Design" yellowTag="Enthusiasm" greenTag="Ambition" blueTag="User experience research" profile="user06a.svg" />
			<Listing major="Computer Science & Data Science" name="Bob Fretz" redTag="Advertising" yellowTag="Fashion" greenTag="Social Psychology" blueTag="Teaching" profile="user02c.svg" />
		</div>
		<Profile />
	</div>
	
</main>
