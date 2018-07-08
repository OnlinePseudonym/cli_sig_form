<template>
    <button class="button is-medium" @click.prevent="handleClick">Copy</button>
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
        background-color: #F57C4B;
        color: #FFFFFF;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    .button:hover {
        background-color: #DA6B3F;
    }
</style>