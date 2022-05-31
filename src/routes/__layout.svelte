<main>
	<slot />
</main>

<style>
	:root {
		--primary: #ff7d7d;
		--secondary: #8bb5ff;
		--spacing: 1rem;
		--radius: 1rem;
		--font-size: 1.5rem;
		--light-gray: #f5f5f5;
	}

	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
	}

	:global(iframe, fieldset) {
		all: unset;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}

	:global(input) {
		display: inline;
		border: none;
		font-size: var(--font-size);
		background-color: var(--secondary);
		border-radius: calc(var(--radius) / 2);
		padding: var(--spacing);
	}

	:global(input:focus) {
		outline: none;
	}
</style>
