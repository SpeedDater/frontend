

<script>
	export let name;

	import { Router, Route } from 'svelte-navigator';
	import PrivateRoute from './components/privateRoute.svelte';
	import Dating from './pages/dating.svelte';
	import Home from './pages/home.svelte';
	import Team from './pages/team.svelte';
	import Login from './pages/login.svelte';
	import Header from './components/header.svelte';
	import LoginComplete from './pages/logincomplete.svelte';
	import Logout from './pages/logout.svelte';
</script>

<Router>
	<Header />
	<!-- <Route path="/" component={Home} />
	<Route path="/dating" component={Dating} />
	<Route path="/team" component={Team} /> -->
	<Route path="/logout" component={Logout}/>
	<Route path="/login" component={Login} />
	<Route path="/login/complete/" component={LoginComplete} />
	<PrivateRoute path="/"> <Home /> </PrivateRoute>
	<PrivateRoute path="/dating"> <Dating /> </PrivateRoute>
	<PrivateRoute path="/team"> <Team /> </PrivateRoute>
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