<template>
    <button class="button is-primary is-medium is-outlined" @click.prevent="handleClick">Copy</button>
</template>

<script>
    export default {
        name: 'CopyButton',
        methods: {
            handleClick() {
                window.getSelection().selectAllChildren( document.querySelector('#signature-table') );
                document.execCommand('copy');
                window.getSelection().empty();
            }
        }
    }
</script>

<style scoped>
    .button {
        padding: 0 3rem;
    }
</style>