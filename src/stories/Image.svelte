<script>
    export let imageUrl;
    export let altText;
</script>

<section>
    <img srcset={imageUrl} alt={altText}/>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-self: center;
        width: 100vw;
        height: 100vh;
    }
    section > img {
        max-width: 100vw;
        max-height: 100vh;
        object-fit: contain;
    }
</style>