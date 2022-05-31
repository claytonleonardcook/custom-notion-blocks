<script lang="ts">
    import { page } from '$app/stores';
    const props: any = JSON.parse($page.url.searchParams.get('props') || "{}");
    const backgroundColor: string = props.backgroundColor || '#0000';
</script>

<h1 style:background-color={backgroundColor}>Other</h1>