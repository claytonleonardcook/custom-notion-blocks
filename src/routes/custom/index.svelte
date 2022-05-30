<script lang="ts">
    let title: string = "";
</script>

<section>
    <form>
        <input type="text" placeholder="Hello World" bind:value={title}/>
    </form>
    <div>
        <iframe title="block preview" src="http://localhost:3000/blocks/Image?url=https://64.media.tumblr.com/e1d31f60d8703fbfa06144d1cbfb90e4/82376f39f9370e2e-4a/s1280x1920/508f43283d37fc370e41ae26d31355db39ece8d8.jpg" />
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 100vw;
        height: 100vh;
    }
    section > form {
        background-color: var(--primary);
    }
    section > div {
        background-color: var(--secondary);
    }
</style>