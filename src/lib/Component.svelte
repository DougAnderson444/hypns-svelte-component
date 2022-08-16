<script>
	import { onMount, onDestroy } from 'svelte';

	export let opts = {}; // default to empty, overwritten if opts are passed in as svelte props
	export let hypnsNode = null;

	let HyPNS;

	onMount(async () => {
		HyPNS = await import('hypns'); // uses the browser field in package.json

		if (HyPNS.default) HyPNS = HyPNS.default; // so we can dev with vite dev

		if (!opts) {
			// add some friendly defaults
			let wsProxy = ['wss://hyperswarm.mauve.moe']; // put your websocket proxy server here if you're not running a local hyperswarm-web on :4977
			opts = {
				persist: true,
				swarmOpts: { announceLocalAddress: true, wsProxy }
			};
		}

		const node = new HyPNS(opts);
		await node.init();
		hypnsNode = node;
		// Close the HyPNS connection if the browser is closed
		// https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event
		const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';

		addEventListener(
			terminationEvent,
			async (event) => {
				await hypnsNode.close();
				// Note: if the browser is able to cache the page, `event.persisted`
				// is `true`, and the state is frozen rather than terminated.
			},
			{ capture: true }
		);

		try {
			const mod = await import('webrtc-adapter');
			const adapter = mod.default;
		} catch (error) {
			console.warn('WebRTC adapter not found.');
		}
	});

	// this function will be called automatically when mounted svelte component is destroyed
	onDestroy(async () => {
		try {
			await hypnsNode.close();
		} catch (error) {
			console.log('Closed undefined Hypns component. ');
		}
	});
</script>
