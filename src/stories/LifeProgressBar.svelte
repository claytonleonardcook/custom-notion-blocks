<script>
	export let birth;
	export let death;
	export let color = '#000';
	export let borderColor = '#000';
	export let borderRadius = 1;
	export let isPercentVisible = true;

	function calculatePercentageTimeLeft() {
		return (
			(Date.now() - birth.valueOf()) /
			(death.valueOf() - birth.valueOf())
		);
	}

	$: difference = calculatePercentageTimeLeft();
    setInterval(() => difference = calculatePercentageTimeLeft(), 1000);
</script>

<section style:--color={color} style:--border-color={borderColor} style:--border-radius={`${borderRadius}rem`}>
	<progress value={(difference * 100).toFixed(4)} max="100" />
	{#if isPercentVisible}
		<span>{(difference * 100).toFixed(2)}%</span>
	{/if}
</section>

<style>
	section {
		--color: #000;
		--border-color: #000;
		--border-radius: 1rem;
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
		border-radius: var(--border-radius);
		overflow: hidden;
		border: 3px solid var(--border-color);
		box-sizing: border-box;
		padding: 4px;
	}
	section > progress::-webkit-progress-bar {
		border-radius: var(--border-radius);
		background-color: transparent;
	}
	section > progress::-webkit-progress-value {
		background-color: var(--color);
		border: calc(1rem / 2) solid transparent;
		border-bottom-left-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}
	section > span {
		display: flex;
		align-items: center;
		justify-items: center;
		color: var(--dark);
		padding: calc(1rem / 2);
	}
</style>
