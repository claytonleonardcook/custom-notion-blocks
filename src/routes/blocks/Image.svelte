<script lang="ts">
    import { page } from '$app/stores';
    
    const props: any = JSON.parse($page.url.searchParams.get('props') || "{}");
    const url: string = props.url || 'http://placekitten.com/200/300';
    const alt: string = props.alt || 'alt text';
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