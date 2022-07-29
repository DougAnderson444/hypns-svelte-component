<script>
	import { onMount } from 'svelte';
	import HypnsComponent from '@douganderson444/hypns-svelte-component';

	export let name = 'Douglas';
	export let hypnsNode;
	export let wallet = null; // possible the user has their own wallet?

	// You can configure the node to meet your networking needs
	let wsProxy = [
		// 'wss://super.peerpiper.io:49777',
		'wss://hyperswarm.mauve.moe'
	];
	let opts = {
		persist: true,
		swarmOpts: { announceLocalAddress: true, wsProxy }
	};

	let recent = '';
	let publicKey = '';
	let contacts = [];
	let newFaveColor = '';
	let lastEntry = '';
	let myInstance;

	//props
	let Web3WalletMenu;

	onMount(async () => {
		if (!wallet) {
			// @ts-ignore
			({ Web3WalletMenu } = await import('@peerpiper/web3-wallet-connector'));
		}
	});

	$: !!hypnsNode && wallet ? init() : null;

	const init = async () => {
		const instance = await hypnsNode.open({ wallet }); // makes a new keypair for you if no wallet
		await instance.ready();
		myInstance = instance;
		setupInstance(myInstance);
	};

	const getInstance = async (publicKey) => {
		try {
			const inst = await hypnsNode.open({ keypair: { publicKey } }); // works with or without a PublicKey
			await inst.ready();
			return inst;
		} catch (error) {
			console.error(error);
		}
	};

	function setupInstance(nameInstance) {
		console.log('Setting up', nameInstance.publicKey.toString('hex'));
		const showLatest = (val) => {
			if (nameInstance.latest && nameInstance.latest.text) {
				lastEntry = nameInstance.latest.text;
				console.log('showLatest ', nameInstance.latest.text);
				recent += `<br/>${nameInstance.publicKey.toString('hex')}: ${nameInstance.latest.text}`;
			}
		};

		contacts = [...contacts, nameInstance];
		console.log('Showing latest ', nameInstance.latest);
		showLatest(nameInstance.latest);
		nameInstance.on('update', showLatest);
	}

	const addPublicKey = async () => {
		console.log('addPublicKey', publicKey);
		try {
			const newFriend = await getInstance(publicKey);
			setupInstance(newFriend);
			publicKey = '';
		} catch (error) {
			console.error(error);
		}
	};

	function handleUpdate() {
		myInstance.publish({ text: newFaveColor });
		lastEntry = newFaveColor;
		newFaveColor = '';
	}
</script>

<!-- Use a wallet to manage our Keypair -->
{#if Web3WalletMenu}
	<svelte:component this={Web3WalletMenu} bind:wallet />
{/if}

<main>
	<h1>Hello {name}!</h1>

	<div>
		<HypnsComponent bind:hypnsNode {opts} />
		<p>
			{#if hypnsNode}
				hypnsNode is loaded!
			{/if}
		</p>
		<div>
			<form class="form" on:submit|preventDefault={handleUpdate}>
				Enter anything here to share with your connections:
				<br />
				<input type="text" bind:value={newFaveColor} />
			</form>
		</div>
		<div>
			<form class="form" on:submit|preventDefault={addPublicKey}>
				Paste you're friend's publicKey below to follow updates:
				<br />
				<input type="text" bind:value={publicKey} />
				<br />
				{publicKey}
				<br />
			</form>
		</div>
		<br />
		<p>List of your contacts:</p>
		<p>
			{#if contacts && contacts.length > 0}
				<ul>
					{#each contacts as contact}
						<li style="text-transform:uppercase; list-style: none;">
							{contact.publicKey.toString('hex')}
						</li>
					{/each}
				</ul>
			{/if}
		</p>
		Recent Updates:<br />
		{@html recent}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
