<script lang="ts">
	import { page } from '$app/stores';
    import schema from "../../schema";
	import Input from "../../components/Input.svelte";
    
    const block: string = $page.url.searchParams.get('block') || 'Image';

	$: properties = {};

    $: url = () => {
        const props = encodeURIComponent(JSON.stringify(properties));
        return `${$page.url.origin}/blocks/${block}?props=${props}`;
    };

	function copyToClipboard() {
		navigator.clipboard.writeText(url());
	}
</script>

<section>
	<form>
		<h1>{block}</h1>
		<fieldset>
			{#each Object.entries(schema[block]) as [prop, {label, type, placeholder}]}
				<Input label={label} type={type} placeholder={placeholder} on:change={({target: {value}}) => properties[prop] = value} />
			{/each}
		</fieldset>
		<output>
			<button on:click|preventDefault={copyToClipboard}>Copy To Clipboard</button>
			<input type="url" value={url()} disabled/>
		</output>
	</form>
	<div>
		<iframe
			title="block preview"
			src={url()}
		/>
		<div>Drag the bottom right to preview the widget in different sizes</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		width: 100vw;
		height: 100vh;
	}
	section > form {
		display: flex;
		flex-grow: 4;
		flex-direction: column;
		background-color: var(--primary);
		padding: var(--spacing);
	}
	section > form > fieldset {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		overflow-x: hidden !important;
		overflow-y: auto !important;
	}
	section > form > output {
		display: flex;
		flex-direction: row;
		gap: var(--spacing);
	}
	section > form > output > input {
		flex-grow: 1;
	}
	section > div {
		display: flex;
		flex-grow: 10;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--secondary);
	}
	section > div > iframe {
		max-width: 80%;
		max-height: 80%;
		width: 50%;
		height: 50%;
		border: dashed black 3px;
		resize: both;
		margin: 10px;
		border-radius: var(--radius);
		border-bottom-right-radius: 0;
	}
	section > div > div {
		background-color: var(--primary);
		padding: var(--spacing);
		border-radius: var(--radius);
	}
</style>
