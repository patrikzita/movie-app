<script>
	import { onMount } from 'svelte';
	import { isModalOpen } from '../utils/store';
	/**
	 * @type {HTMLDialogElement}
	 */
	let dialog;

	onMount(async () => {
		$isModalOpen ? dialog.showModal() : dialog.close();
	});

	$: {
		$isModalOpen ? dialog.showModal() : dialog.close();
	}
</script>

<!-- bind:this = useRef -->
<dialog bind:this={dialog}>
	<button on:click={() => isModalOpen.set(false)}>Close</button>
</dialog>
