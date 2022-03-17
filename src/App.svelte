

<script>
	import { Router, Link, Route } from 'svelte-navigator';
	import Dating from './pages/dating.svelte';
	import Home from './pages/home.svelte';
	import Team from './pages/team.svelte';
</script>

<Router>
	<header class="ml-10 mt-10 text-navy mb-10">
		<img class="inline-block w-32 mr-2" src="/umlogo.svg" alt="U of M Logo">
		<h1 class="text-2xl inline-block font-adamina">P/ALA 223</h1>
	</header>
	<Route path="/" component={Home} />
	<Route path="/dating" component={Dating} />
	<Route path="/team" component={Team} />
</Router>

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