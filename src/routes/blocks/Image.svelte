<script lang="ts">
    import { page } from '$app/stores';
    
    const props: any = JSON.parse($page.url.searchParams.get('props') || "{}");
    const imageUrl: string = props.imageUrl || 'http://placekitten.com/200/300';
    const altText: string = props.altText || 'alt text';
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