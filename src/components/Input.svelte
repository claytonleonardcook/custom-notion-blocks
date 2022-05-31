<script lang="ts">
    export let label: string, type: string, placeholder: string;

    function typeAction(node: any) {
        node.type = type;
    }
</script>

<label>
    {label}
    <br />
    <input use:typeAction on:change placeholder={placeholder} />
</label>

<style>
    label {
        margin-top: var(--spacing);
    }
    label > input {
        margin-top: calc(var(--spacing)/2);
    }
</style>