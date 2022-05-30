<script lang="ts">
    import { page } from '$app/stores';
    
    export let url: string = $page.url.searchParams.get('url') || 'url';
    export let alt: string = $page.url.searchParams.get('alt') || 'alt text';
</script>

<section>
    <img srcset={url} alt={alt}/>
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