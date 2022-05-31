<script lang="ts">
	import { page } from '$app/stores';

	const props: any = JSON.parse($page.url.searchParams.get('props') || '{}');
	const birthday: string = props.birthday || `${new Date().getFullYear()}`;
	const deathYear: string = props.deathYear || `${new Date().getFullYear() + 1}`;
	const progressBarColor: string = props.progressBarColor || 'var(--dark)';

	function calculatePercentageTimeLeft() {
		return (
			(Date.now() - new Date(birthday).valueOf()) /
			(new Date(deathYear).valueOf() - new Date(birthday).valueOf())
		);
	}

	$: difference = calculatePercentageTimeLeft();
    setInterval(() => difference = calculatePercentageTimeLeft(), 1000);
</script>

<section>
	<progress style:--progress-bar-color={progressBarColor} value={(difference * 100).toFixed(4)} max="100" />
	<span>{(difference * 100).toFixed(2)}%</span>
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
