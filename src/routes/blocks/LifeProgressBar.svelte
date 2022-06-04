<script lang="ts">
	import { page } from '$app/stores';

	const birth: string = $page.url.searchParams.get('birth') || `${new Date().getFullYear()}`;
	const death: string = $page.url.searchParams.get('death') || `${new Date().getFullYear() + 1}`;
	const progressBarColor: string = $page.url.searchParams.get('progressBarColor') || 'var(--dark)';
	const isPercentVisible: boolean = Boolean($page.url.searchParams.get('isPercentVisible'));

	function calculatePercentageTimeLeft() {
		return (
			(Date.now() - new Date(birth).valueOf()) /
			(new Date(death).valueOf() - new Date(birth).valueOf())
		);
	}

	$: difference = calculatePercentageTimeLeft();
    setInterval(() => difference = calculatePercentageTimeLeft(), 1000);
	console.log($page.url.searchParams.get('isPercentVisible'), Boolean($page.url.searchParams.get('isPercentVisible')));
</script>

<section>
	<progress style:--progress-bar-color={progressBarColor} value={(difference * 100).toFixed(4)} max="100" />
	{#if isPercentVisible}
		<span>{(difference * 100).toFixed(2)}%</span>
	{/if}
</section>

<style>
	section {
		--progress-bar-color: var(--dark);
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
	section > progress {
		all: unset;
		height: 50vh;
		width: 100vw;
		border-radius: var(--radius);
		overflow: hidden;
		border: 3px solid var(--dark);
		box-sizing: border-box;
		padding: 4px;
	}
	section > progress::-webkit-progress-bar {
		border-radius: var(--radius);
		background-color: transparent;
	}
	section > progress::-webkit-progress-value {
		background-color: var(--progress-bar-color);
		border: calc(var(--spacing) / 2) solid transparent;
		border-bottom-left-radius: calc(var(--radius) / 2);
		border-top-left-radius: calc(var(--radius) / 2);
	}
	section > span {
		display: flex;
		align-items: center;
		justify-items: center;
		color: var(--dark);
		padding: calc(var(--spacing) / 2);
	}
</style>
